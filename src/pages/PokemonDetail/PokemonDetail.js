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
} from './PokemonDetailStyle';
import { SwiperSlide } from 'swiper/react';
import useGetHistory from '../../hooks/useGetHistory';
import { useState } from 'react';
import { getThemePokemonImage } from '../../helpers/Util';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function PokemonDetail(props) {
    const [page, setPage] = useState('general')

    const { pathname } = useGetHistory()

    return (
        <Container>
            <Menu
                slidesPerView='auto'
                spaceBetween={15}
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
                <SwiperSlide>
                    <Item
                        onClick={() => setPage('statistics')}
                        isactive={page === 'statistics' ? 1 : undefined}
                    > Statistics </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        onClick={() => setPage('moves')}
                        isactive={page === 'moves' ? 1 : undefined}
                    > Moves </Item>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Menu>

            <Body isactive={page==='general'}>
                <PokemonTitle>Bulbasaur</PokemonTitle>
                <PokemonType>
                    <div className='item'>
                        <img src={getThemePokemonImage('grass')} />
                        <span>grass</span>
                    </div>
                    <div className='item'>
                        <img src={getThemePokemonImage('water')} />
                        <span>water</span>
                    </div>
                </PokemonType>
                <PokemonImage src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='pokemon' />
                <ButtonCatch />
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
        
            <Body isactive={page==='statistics'}>
                <StatsWrapper>
                    <StatsText>
                        HP
                    </StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>

                    <StatsText>HP</StatsText>
                    <StatsText className='bold'>214</StatsText>
                    <ProgressBar>
                        <progress max='100' value='50' />
                    </ProgressBar>
                </StatsWrapper>
            </Body>
        
            <Body isactive={page==='moves'}>
                <MovesItem>
                    <MovesItemText>
                        Tackle
                    </MovesItemText>
                    <MovesItemText 
                        className='level' 
                        isactive={page==='moves'}
                    >
                        Level 1
                    </MovesItemText>
                </MovesItem>
                <MovesItem>
                    <MovesItemText>
                        Tackle
                    </MovesItemText>
                    <MovesItemText 
                        className='level' 
                        isactive={page==='moves'}
                    >
                        Level 1
                    </MovesItemText>
                </MovesItem>
                <MovesItem>
                    <MovesItemText>
                        Tackle
                    </MovesItemText>
                    <MovesItemText 
                        className='level' 
                        isactive={page==='moves'}
                    >
                        Level 1
                    </MovesItemText>
                </MovesItem>
            </Body>
        </Container>
    );
}

export default PokemonDetail;