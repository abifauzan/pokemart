import React, { useState, useEffect } from 'react';
import { 
    Body, 
    ButtonCatch, 
    Container, 
    Item, 
    Menu, 
    PokemonImage, 
    PokemonTitle, 
    List,
    ListItem,
    ItemPokemon,
    ItemArrow,
    StatsWrapper,
    StatsText,
    ProgressBar,
    DesktopView,
    DesktopViewPokemon,
    DesktopViewDetail,
    DesktopViewCopy,
    BodyDesktop,
    TextColumnThree,
    TextColumnThreeSpan,
    GridTwoColumn,
    GridColumnText,
    GridThreeColumn,
    TypeContainer,
    LoadingArea,
} from './PokemonDetailStyle';
import { SwiperSlide } from 'swiper/react';
import useGetHistory from '../../hooks/useGetHistory';
import { checkObjectLength, getThemePokemonImage, scrollToTop } from '../../helpers/Util';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import useIsMobile from '../../hooks/useIsMobile';
import { IoMdMale, IoMdFemale } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import usePokemonTheme from '../../hooks/usePokemonTheme';
import useFetchDetail from '../../hooks/useFetchDetail';
import useFetchEvolution from '../../hooks/useFetchEvolution';
import useGlobalContext from '../../hooks/useGlobalContext';
import LoadingPage from '../../components/LoadingPage';
import axios from 'axios';
import PokeBall from '../../components/PokeBall/PokeBall';
import PopupCapture from '../../components/PopupCapture/PopupCapture';
import WarningBox from '../../components/WarningBox';

function PokemonDetail(props) {
    const [page, setPage] = useState('general')
    const [mounted, setMounted] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [pokemons, setPokemons] = useState([])

    const { history } = useGetHistory()
    const { name: pokemonName } = useParams()

    const { theme, setTheme } = useGlobalContext()

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    const isMobile = useIsMobile()

    const {
        data, 
    } = useFetchDetail(endpoint)

    const {
        pokemonLevel,
        pokemonSpecies,
    } = useFetchEvolution(data.id)

    const pokemonTheme = usePokemonTheme(data)

    useEffect(() => {
        // setTimeout(() => {
        //     setMounted(true)
        // }, 2000);
        setMounted(true)
        scrollToTop()
    }, [])

    useEffect(() => {
        if (checkObjectLength(data)) {
            setTheme(pokemonTheme.pokemonType)
            setMounted(true)
        }
    }, [data])

    useEffect(async () => {
        if (pokemonLevel.length > 0) {

            const getPokemon = await Promise.all(pokemonLevel.map(async (el) => {
                const endpoint = `https://pokeapi.co/api/v2/pokemon/${el.name}`
                const {data: datas} = await axios.get(endpoint)

                return datas
            }))

            setPokemons(getPokemon)
        }
    }, [pokemonLevel])

    const goToPokemon = index => {
        if (pokemonName !== pokemons[index].name) {
            setMounted(false)
            setPage('general')
            history.push(`/pokemon/${pokemons[index].name}`)
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const handleCapture = () => {

        // We can edit based on base capture stats
        const chance = Math.random() < 0.5

        setTimeout(() => {
            // console.log('chance', chance);
            setShowPopup(chance ? true : false)

        }, 5000);
    }

    // Animation

    const variants = {
        left: {
            open: { opacity: 1, x: 0 },
            close: { opacity: 0, x: '-100%' }
        },
        right: {
            open: { opacity: 1, x: 0 },
            close: { opacity: 0, x: '100%' }
        }
    }

    const mobileView = checkObjectLength(data) && (
        <Container>
            <Menu
                slidesPerView='auto'
                spaceBetween={20}
                centeredSlides={false}
                style={{ paddingLeft: '16px'}}
            >
                <SwiperSlide>
                    <Item
                        onClick={() => setPage('general')}
                        isactive={page === 'general' ? 1 : undefined}
                        theme={theme}
                    > General </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        onClick={() => setPage('evolutions')}
                        isactive={page === 'evolutions' ? 1 : undefined}
                        theme={theme}
                    > Evolutions </Item>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Menu>

            <Body 
                isactive={page==='general'}
                animate={page==='general' && mounted ? 'open' : 'close'}
                variants={variants.left}
            >
                <PokemonTitle>{data.name.replaceAll('-', ' ')}</PokemonTitle>
                <TypeContainer>
                    {data.types.map((el) => 
                        <div key={el.type.name} className='type'>
                            <img src={getThemePokemonImage(el.type.name)} alt={`${data.name}-${el.type.name}`} />
                            <span>{el.type.name}</span>
                        </div>
                    )}
                </TypeContainer>
                <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={data.name} />
                <ButtonCatch
                    onClick={handleCapture}
                >
                    <PokeBall success={showPopup} />
                </ButtonCatch>

                <TextColumnThree>
                    <div>
                        <TextColumnThreeSpan >Weight</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            {data.weight}
                        </TextColumnThreeSpan>
                    </div>
                    <div>
                        <TextColumnThreeSpan >Height</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            {data.height}
                        </TextColumnThreeSpan>
                    </div>
                    <div>
                        <TextColumnThreeSpan >Base Exp</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            {data.base_experience}
                        </TextColumnThreeSpan>
                    </div>
                </TextColumnThree>
            
                <GridThreeColumn>
                    <GridColumnText>Gender</GridColumnText>
                    {pokemonSpecies.gender === 1 
                        ? <GridColumnText><IoMdFemale /></GridColumnText>
                        : pokemonSpecies.gender === 2 
                        ? <GridColumnText><IoMdMale /></GridColumnText>
                        : '-'
                    }
                </GridThreeColumn>

                {checkObjectLength(pokemonSpecies) && (
                    <GridTwoColumn>
                        <GridColumnText>Base Happiness</GridColumnText>
                        <GridColumnText className='bold'>{pokemonSpecies.base_happiness}</GridColumnText>
                        <GridColumnText>Capture Rate</GridColumnText>
                        <GridColumnText className='bold'>{pokemonSpecies.capture_rate}</GridColumnText>
                        <GridColumnText>Habitat</GridColumnText>
                        <GridColumnText className='bold'>{pokemonSpecies.habitat !== null ? pokemonSpecies.habitat.name.replaceAll('-', '') : '-'}</GridColumnText>
                    </GridTwoColumn>
                )}
                

                <StatsWrapper>
                    {data.stats.map((el, idx) => (
                        <React.Fragment key={el.stat.name}>
                            <StatsText>
                                {el.stat.name.replaceAll('-', ' ')}
                            </StatsText>
                            <StatsText className='bold'>{el.base_stat}</StatsText>
                            <ProgressBar
                                pokemontheme={theme}
                            >
                                <progress max='150' value={el.base_stat} />
                            </ProgressBar>
                        </React.Fragment>
                    ))}
                    


                </StatsWrapper>
            
            </Body>

            <Body 
                isactive={page==='evolutions'}
                animate={page==='evolutions' ? 'open' : 'close'}
                variants={variants.right}
            >
                {pokemons.length > 0 ? (
                    <List>
                        {pokemons.length > 0 && pokemonLevel.length === 2 && (
                            <ListItem>
                                <ItemPokemon 
                                    onClick={() => goToPokemon(0)}
                                >
                                    <div className='image'>
                                        <img 
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].id}.png`}
                                            alt={pokemons[0].name}
                                        />
                                    </div>
                                    <span className='name'>
                                        {pokemons[0].name}
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. {pokemonLevel[1].level || '-'}</span>
                                </ItemArrow>

                                <ItemPokemon 
                                    onClick={() => goToPokemon(1)}
                                >
                                    <div className='image'>
                                        <img 
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                            alt={pokemons[1].name}
                                        />
                                    </div>
                                    <span className='name'>
                                        {pokemons[1].name}
                                    </span>
                                </ItemPokemon>
                            </ListItem>
                        )}
                        
                        {pokemons.length > 0 && pokemonLevel.length === 3 && (
                            <>
                                <ListItem>
                                    <ItemPokemon 
                                        onClick={() => goToPokemon(0)}

                                    >
                                        <div className='image'>
                                            <img 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].id}.png`}
                                                alt={pokemons[0].name}
                                            />
                                        </div>
                                        <span className='name'>
                                            {pokemons[0].name}
                                        </span>
                                    </ItemPokemon>

                                    <ItemArrow>
                                        <HiOutlineArrowNarrowRight />
                                        <span>Lvl. {pokemonLevel[1].level || '-'}</span>
                                    </ItemArrow>

                                    <ItemPokemon 
                                        onClick={() => goToPokemon(1)}

                                    >
                                        <div className='image'>
                                            <img 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                                alt={pokemons[1].name}
                                            />
                                        </div>
                                        <span className='name'>
                                            {pokemons[1].name}
                                        </span>
                                    </ItemPokemon>
                                </ListItem>

                                <ListItem>
                                    <ItemPokemon 
                                        onClick={() => goToPokemon(1)}
                                    >
                                        <div className='image'>
                                            <img 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                                alt={pokemons[1].name}
                                            />
                                        </div>
                                        <span className='name'>
                                            {pokemons[1].name}
                                        </span>
                                    </ItemPokemon>

                                    <ItemArrow>
                                        <HiOutlineArrowNarrowRight />
                                        <span>Lvl. {pokemonLevel[2].level || '-'}</span>
                                    </ItemArrow>

                                    <ItemPokemon 
                                        onClick={() => goToPokemon(2)}
                                    >
                                        <div className='image'>
                                            <img 
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[2].id}.png`}
                                                alt={pokemons[2].name}
                                            />
                                        </div>
                                        <span className='name'>
                                            {pokemons[2].name}
                                        </span>
                                    </ItemPokemon>
                                </ListItem>
                            </>
                        )}
                        

                    </List>
            
                ) : (
                    <LoadingArea>
                        <WarningBox>No Pokemon Evolutions</WarningBox>
                    </LoadingArea>
                )}
                
                
            </Body>
        
        </Container>
    )

    const desktopView = checkObjectLength(data) && (
        <Container>
            <DesktopView
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                pokemontheme={theme}
            >
                <DesktopViewPokemon>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={data.name} />
                    <span className='id'>#{data.id}</span>

                    <ButtonCatch onClick={handleCapture}>
                        <PokeBall success={showPopup} />
                    </ButtonCatch>

                </DesktopViewPokemon>
                <DesktopViewDetail>
                    <Menu
                        slidesPerView='auto'
                        spaceBetween={20}
                        centeredSlides={false}
                        style={{ padding: '10px 0 20px 20px'}}
                    >
                        <SwiperSlide>
                            <Item
                                onClick={() => setPage('general')}
                                isactive={page === 'general' ? 1 : undefined}
                                theme={theme}
                            > General </Item>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Item
                                theme={theme}
                                onClick={() => setPage('evolutions')}
                                isactive={page === 'evolutions' ? 1 : undefined}
                            > Evolutions </Item>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Menu>

                    <BodyDesktop 
                        isactive={page === 'general'}
                        animate={page === 'general' ? 'open': 'close'}
                        variants={variants.left}
                    >
                        <DesktopViewCopy>
                            <h2>{data.name.replaceAll('-', ' ')}</h2>
                            <TypeContainer>
                                {data.types.map((el) => 
                                    <div key={el.type.name} className='type'>
                                        <img src={getThemePokemonImage(el.type.name)} alt={`${data.name}-${el.type.name}`} />
                                        <span>{el.type.name}</span>
                                    </div>
                                )}
                            </TypeContainer>
                        </DesktopViewCopy>

                        <TextColumnThree>
                            <div>
                                <TextColumnThreeSpan >Weight</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    {data.weight}
                                </TextColumnThreeSpan>
                            </div>
                            <div>
                                <TextColumnThreeSpan >Height</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    {data.height}
                                </TextColumnThreeSpan>
                            </div>
                            <div>
                                <TextColumnThreeSpan >Base Exp</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    {data.base_experience}
                                </TextColumnThreeSpan>
                            </div>
                        </TextColumnThree>

                        <GridThreeColumn>
                            <GridColumnText>Gender</GridColumnText>
                            {pokemonSpecies.gender === 1 
                                ? <GridColumnText><IoMdFemale /></GridColumnText>
                                : pokemonSpecies.gender === 2 
                                ? <GridColumnText><IoMdMale /></GridColumnText>
                                : '-'
                            }
                        </GridThreeColumn>

                        {checkObjectLength(pokemonSpecies) && (
                            <GridTwoColumn>
                                <GridColumnText>Base Happiness</GridColumnText>
                                <GridColumnText className='bold'>{pokemonSpecies.base_happiness}</GridColumnText>
                                <GridColumnText>Capture Rate</GridColumnText>
                                <GridColumnText className='bold'>{pokemonSpecies.capture_rate}</GridColumnText>
                                <GridColumnText>Habitat</GridColumnText>
                                <GridColumnText className='bold'>{pokemonSpecies.habitat !== null ? pokemonSpecies.habitat.name.replaceAll('-', '') : '-'}</GridColumnText>
                            </GridTwoColumn>
                        )}

                        <StatsWrapper>
                            {data.stats.map((el, idx) => (
                                <React.Fragment key={el.stat.name}>
                                    <StatsText>
                                        {el.stat.name.replaceAll('-', ' ')}
                                    </StatsText>
                                    <StatsText className='bold'>{el.base_stat}</StatsText>
                                    <ProgressBar
                                        pokemontheme={theme}
                                    >
                                        <progress max='150' value={el.base_stat} />
                                    </ProgressBar>
                                </React.Fragment>
                            ))}
                        </StatsWrapper>

                    </BodyDesktop>

                    <BodyDesktop 
                        isactive={page === 'evolutions'}
                        animate={page === 'evolutions' ? 'open': 'close'}
                        variants={variants.right}
                    >
                        {pokemons.length > 0 ? (
                            <List>
                                {pokemons.length > 0 && pokemonLevel.length === 2 && (
                                    <ListItem>
                                        <ItemPokemon 
                                            onClick={() => goToPokemon(0)}
                                        >
                                            <div className='image'>
                                                <img 
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].id}.png`}
                                                    alt={pokemons[0].name}
                                                />
                                            </div>
                                            <span className='name'>
                                                {pokemons[0].name}
                                            </span>
                                        </ItemPokemon>

                                        <ItemArrow>
                                            <HiOutlineArrowNarrowRight />
                                            <span>Lvl. {pokemonLevel[1].level || '-'}</span>
                                        </ItemArrow>

                                        <ItemPokemon 
                                            onClick={() => goToPokemon(1)}
                                        >
                                            <div className='image'>
                                                <img 
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                                    alt={pokemons[1].name}
                                                />
                                            </div>
                                            <span className='name'>
                                                {pokemons[1].name}
                                            </span>
                                        </ItemPokemon>
                                    </ListItem>
                                )}
                                
                                {pokemons.length > 0 && pokemonLevel.length === 3 && (
                                    <>
                                        <ListItem>
                                            <ItemPokemon 
                                                onClick={() => goToPokemon(0)}

                                            >
                                                <div className='image'>
                                                    <img 
                                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].id}.png`}
                                                        alt={pokemons[0].name}
                                                    />
                                                </div>
                                                <span className='name'>
                                                    {pokemons[0].name}
                                                </span>
                                            </ItemPokemon>

                                            <ItemArrow>
                                                <HiOutlineArrowNarrowRight />
                                                <span>Lvl. {pokemonLevel[1].level || '-'}</span>
                                            </ItemArrow>

                                            <ItemPokemon 
                                                onClick={() => goToPokemon(1)}

                                            >
                                                <div className='image'>
                                                    <img 
                                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                                        alt={pokemons[1].name}
                                                    />
                                                </div>
                                                <span className='name'>
                                                    {pokemons[1].name}
                                                </span>
                                            </ItemPokemon>
                                        </ListItem>

                                        <ListItem>
                                            <ItemPokemon 
                                                onClick={() => goToPokemon(1)}
                                            >
                                                <div className='image'>
                                                    <img 
                                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png`}
                                                        alt={pokemons[1].name}
                                                    />
                                                </div>
                                                <span className='name'>
                                                    {pokemons[1].name}
                                                </span>
                                            </ItemPokemon>

                                            <ItemArrow>
                                                <HiOutlineArrowNarrowRight />
                                                <span>Lvl. {pokemonLevel[2].level || '-'}</span>
                                            </ItemArrow>

                                            <ItemPokemon 
                                                onClick={() => goToPokemon(2)}
                                            >
                                                <div className='image'>
                                                    <img 
                                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[2].id}.png`}
                                                        alt={pokemons[2].name}
                                                    />
                                                </div>
                                                <span className='name'>
                                                    {pokemons[2].name}
                                                </span>
                                            </ItemPokemon>
                                        </ListItem>
                                    </>
                                )}
                                

                            </List>
                    
                        ) : (
                            <LoadingArea>
                                <WarningBox>No Pokemon Evolutions</WarningBox>
                            </LoadingArea>
                        )}
                    </BodyDesktop>
                </DesktopViewDetail>
            </DesktopView>
        </Container>
    )

    return checkObjectLength(data) && mounted
        ? (
            <>
                {isMobile ? mobileView : desktopView}
                <PopupCapture 
                    isActive={showPopup}
                    toggleFunction={setShowPopup}
                    data={data}
                />
            </>
        )
        : <LoadingPage />
    
}

export default PokemonDetail;