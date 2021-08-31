import React from 'react';
import { 
    Body, 
    ButtonCatch, 
    Container, 
    Item, 
    Main, 
    Menu, 
    PokemonImage, 
    PokemonTitle, 
    PokemonType,
    List,
    ListItem,
    ItemPokemon,
    ItemArrow,
    StatsWrapper,
    StatsText,
    ProgressBar,
    MovesItem,
    MovesItemText,
    DesktopView,
    DesktopViewPokemon,
    DesktopViewDetail,
    DesktopViewCopy,
    BodyDesktop,
    DesktopButtonCatch,
    TextColumnThree,
    TextColumnThreeSpan,
    GridTwoColumn,
    GridColumnText,
    GridThreeColumn,
    DescHeading,
    DescBody,
    Hr,
    TypeContainer,
} from './PokemonDetailStyle';
import { SwiperSlide } from 'swiper/react';
import useGetHistory from '../../hooks/useGetHistory';
import { useState } from 'react';
import { getThemePokemonImage } from '../../helpers/Util';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import useIsMobile from '../../hooks/useIsMobile';
import { IoMdMale, IoMdFemale } from 'react-icons/io';

function PokemonDetail(props) {
    const [page, setPage] = useState('general')

    const { pathname } = useGetHistory()
    const isMobile = useIsMobile()
    
    const mobileView = (
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
                    > General </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        onClick={() => setPage('evolutions')}
                        isactive={page === 'evolutions' ? 1 : undefined}
                    > Evolutions </Item>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Menu>

            <Body isactive={page==='general'}>
                <PokemonTitle>Bulbasaur</PokemonTitle>
                <TypeContainer>
                    <div className='type'>
                        <img src={getThemePokemonImage('fire')} alt='pokemon' />
                        <span>fire</span>
                    </div>
                    <div className='type'>
                        <img src={getThemePokemonImage('water')} alt='pokemon' />
                        <span>water</span>
                    </div>
                </TypeContainer>
                <PokemonImage src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='pokemon' />
                <ButtonCatch />

                <TextColumnThree>
                    <div>
                        <TextColumnThreeSpan >Weight</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            2.44
                        </TextColumnThreeSpan>
                    </div>
                    <div>
                        <TextColumnThreeSpan >Height</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            2.44
                        </TextColumnThreeSpan>
                    </div>
                    <div>
                        <TextColumnThreeSpan >Base Exp</TextColumnThreeSpan>
                        <TextColumnThreeSpan >
                            2.44
                        </TextColumnThreeSpan>
                    </div>
                </TextColumnThree>
            
                <GridThreeColumn>
                    <GridColumnText>Gender</GridColumnText>
                    <GridColumnText><IoMdMale /></GridColumnText>
                    <GridColumnText><IoMdFemale /></GridColumnText>
                </GridThreeColumn>

                <GridTwoColumn>
                    <GridColumnText>Base Happiness</GridColumnText>
                    <GridColumnText className='bold'>70</GridColumnText>
                    <GridColumnText>Capture Rate</GridColumnText>
                    <GridColumnText className='bold'>45</GridColumnText>
                    <GridColumnText>Habitat</GridColumnText>
                    <GridColumnText className='bold'>Grassland</GridColumnText>
                </GridTwoColumn>

                <StatsWrapper>
                    <StatsText>
                        HP
                    </StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                    <StatsText>Attack</StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                    <StatsText>Defense</StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                    <StatsText>Special Attack</StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                    <StatsText>Special Defense</StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                </StatsWrapper>
            
            </Body>

            <Body isactive={page==='evolutions'}>
                <List>
                    <ListItem>
                        <ItemPokemon 
                        >
                            <div className='image'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>

                        <ItemArrow>
                            <HiOutlineArrowNarrowRight />
                            <span>Lvl. 16</span>
                        </ItemArrow>

                        <ItemPokemon 
                        >
                            <div className='image'>
                                <div className='circleBg' />
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>
                    </ListItem>

                    <ListItem>
                        <ItemPokemon 
                        >
                            <div className='image'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>

                        <ItemArrow>
                            <HiOutlineArrowNarrowRight />
                            <span>Lvl. 16</span>
                        </ItemArrow>

                        <ItemPokemon 
                        >
                            <div className='image'>
                                <div className='circleBg' />
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>
                    </ListItem>

                    <ListItem>
                        <ItemPokemon 
                        >
                            <div className='image'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>

                        <ItemArrow>
                            <HiOutlineArrowNarrowRight />
                            <span>Lvl. 16</span>
                        </ItemArrow>

                        <ItemPokemon 
                        >
                            <div className='image'>
                                <div className='circleBg' />
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                            </div>
                            <span className='name'>
                                Bulbasaur
                            </span>
                        </ItemPokemon>
                    </ListItem>
                </List>
            
            </Body>
        
        </Container>
    )

    const desktopView = (
        <Container>
            <DesktopView>
                <DesktopViewPokemon>
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='pokemon' />
                    <span className='id'>#111</span>

                    <DesktopButtonCatch>

                    </DesktopButtonCatch>
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
                            > General </Item>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Item
                                onClick={() => setPage('evolutions')}
                                isactive={page === 'evolutions' ? 1 : undefined}
                            > Evolutions </Item>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Menu>

                    <BodyDesktop isactive={page === 'general'}>
                        <DesktopViewCopy>
                            <h2>Bulbasaur</h2>
                            <TypeContainer>
                                <div className='type'>
                                    <img src={getThemePokemonImage('fire')} alt='pokemon' />
                                    <span>fire</span>
                                </div>
                                <div className='type'>
                                    <img src={getThemePokemonImage('water')} alt='pokemon' />
                                    <span>water</span>
                                </div>
                            </TypeContainer>
                        </DesktopViewCopy>

                        <TextColumnThree>
                            <div>
                                <TextColumnThreeSpan >Weight</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    2.44
                                </TextColumnThreeSpan>
                            </div>
                            <div>
                                <TextColumnThreeSpan >Height</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    2.44
                                </TextColumnThreeSpan>
                            </div>
                            <div>
                                <TextColumnThreeSpan >Base Exp</TextColumnThreeSpan>
                                <TextColumnThreeSpan >
                                    2.44
                                </TextColumnThreeSpan>
                            </div>
                        </TextColumnThree>

                        <GridThreeColumn>
                            <GridColumnText>Gender</GridColumnText>
                            <GridColumnText><IoMdMale /></GridColumnText>
                            <GridColumnText><IoMdFemale /></GridColumnText>
                        </GridThreeColumn>

                        <GridTwoColumn>
                            <GridColumnText>Base Happiness</GridColumnText>
                            <GridColumnText className='bold'>70</GridColumnText>
                            <GridColumnText>Capture Rate</GridColumnText>
                            <GridColumnText className='bold'>45</GridColumnText>
                            <GridColumnText>Habitat</GridColumnText>
                            <GridColumnText className='bold'>Grassland</GridColumnText>
                        </GridTwoColumn>

                        <DescHeading nomargin> Abilities </DescHeading>
                        <Hr />
                        <DescHeading nomargin> Overgrow </DescHeading>
                        <DescBody> 
                            Anim officia culpa consectetur ea ipsum nulla esse ut aute aute Lorem sunt minim.
                        </DescBody>
                        <DescHeading nomargin> Overgrow </DescHeading>
                        <DescBody> 
                            Anim officia culpa consectetur ea ipsum nulla esse ut aute aute Lorem sunt minim.
                        </DescBody>

                        <StatsWrapper>
                            <StatsText>
                                HP
                            </StatsText>
                            <StatsText className='bold'>214</StatsText>
                            <ProgressBar>
                                <progress max='100' value='50' />
                            </ProgressBar>

                            <StatsText>Attack</StatsText>
                            <StatsText className='bold'>214</StatsText>
                            <ProgressBar>
                                <progress max='100' value='50' />
                            </ProgressBar>

                            <StatsText>Defense</StatsText>
                            <StatsText className='bold'>214</StatsText>
                            <ProgressBar>
                                <progress max='100' value='50' />
                            </ProgressBar>

                            <StatsText>Special Attack</StatsText>
                            <StatsText className='bold'>214</StatsText>
                            <ProgressBar>
                                <progress max='100' value='50' />
                            </ProgressBar>

                            <StatsText>Special Defense</StatsText>
                            <StatsText className='bold'>214</StatsText>
                            <ProgressBar>
                                <progress max='100' value='50' />
                            </ProgressBar>

                        </StatsWrapper>

                    </BodyDesktop>

                    <BodyDesktop isactive={page === 'evolutions'}>
                        <List>
                            <ListItem>
                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. 16</span>
                                </ItemArrow>

                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <div className='circleBg' />
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>
                            </ListItem>

                            <ListItem>
                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. 16</span>
                                </ItemArrow>

                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <div className='circleBg' />
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>
                            </ListItem>

                            <ListItem>
                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. 16</span>
                                </ItemArrow>

                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <div className='circleBg' />
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>
                            </ListItem>
                            <ListItem>
                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. 16</span>
                                </ItemArrow>

                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <div className='circleBg' />
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>
                            </ListItem>
                            <ListItem>
                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>

                                <ItemArrow>
                                    <HiOutlineArrowNarrowRight />
                                    <span>Lvl. 16</span>
                                </ItemArrow>

                                <ItemPokemon 
                                >
                                    <div className='image'>
                                        <div className='circleBg' />
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`} />
                                    </div>
                                    <span className='name'>
                                        Bulbasaur
                                    </span>
                                </ItemPokemon>
                            </ListItem>
                        </List>
                    
                    </BodyDesktop>
                    
                    
                </DesktopViewDetail>
            </DesktopView>
        </Container>
    )
    return isMobile ? mobileView : desktopView
}

export default PokemonDetail;