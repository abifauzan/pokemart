import React from 'react';
import { 
    Wrapper, 
    Heading, 
    Item, 
    ItemDesc, 
    MobileView, 
    ItemDesktop, 
    DesktopView,
    ItemDesktopFirst,
} from './PokemonFeatureStyle';
import { BiRefresh } from 'react-icons/bi'
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import useIsMobile from '../../hooks/useIsMobile';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function PokemonFeature(props) {

    const isMobile = useIsMobile()

    const mobileView = (
        <MobileView
            slidesPerView='auto'
            spaceBetween={20}
            pagination={{
                'type': 'progressbar'
            }}
            centeredSlides={false}
            className='mySwiper'
        >
            <SwiperSlide>
                <Item>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} alt='image' />

                    <ItemDesc>
                        <p>Charmander</p>
                        <span>#12</span>
                    </ItemDesc>
                </Item>
            </SwiperSlide>
            <SwiperSlide>
                <Item>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} alt='image' />

                    <ItemDesc>
                        <p>Charmander</p>
                        <span>#12</span>
                    </ItemDesc>
                </Item>
            </SwiperSlide>
            <SwiperSlide>
                <Item>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />

                    <ItemDesc>
                        <p>Charmander</p>
                        <span>#12</span>
                    </ItemDesc>
                </Item>
            </SwiperSlide>
            <SwiperSlide>
                <Item>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />

                    <ItemDesc>
                        <p>Charmander</p>
                        <span>#12</span>
                    </ItemDesc>
                </Item>
            </SwiperSlide>
            <SwiperSlide>
                <Item>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />

                    <ItemDesc>
                        <p>Charmander</p>
                        <span>#12</span>
                    </ItemDesc>
                </Item>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            
        </MobileView>
    )

    const desktopView = (
        <DesktopView>
            <ItemDesktopFirst>
                <h2>Mega Heracross</h2>
                <span className='subheading'>Genetic Pokemon</span>
                <div className='type'>
                    <span>Fire</span>
                    <span>Grass</span>
                </div>
                <span className='id'>#11</span>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'} alt='' />
            </ItemDesktopFirst>
            <ItemDesktop>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                <span className='title'>Mega Mewtwo X</span>
                <span className='subtitle'>Genetic Pokemon</span>

                <div className='type'>
                    <span>Fighting</span>
                    <div className='dot' />
                    <span>Psychic</span>
                </div>
                <span className='id'>#11</span>
            </ItemDesktop>
            <ItemDesktop>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                <span className='title'>Mega Mewtwo X</span>
                <span className='subtitle'>Genetic Pokemon</span>

                <div className='type'>
                    <span>Fighting</span>
                    <div className='dot' />
                    <span>Psychic</span>
                </div>
                <span className='id'>#11</span>
            </ItemDesktop>
            <ItemDesktop>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                <span className='title'>Mega Mewtwo X</span>
                <span className='subtitle'>Genetic Pokemon</span>

                <div className='type'>
                    <span>Fighting</span>
                    <div className='dot' />
                    <span>Psychic</span>
                </div>
                <span className='id'>#11</span>
            </ItemDesktop>
            <ItemDesktop>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                <span className='title'>Mega Mewtwo X</span>
                <span className='subtitle'>Genetic Pokemon</span>

                <div className='type'>
                    <span>Fighting</span>
                    <div className='dot' />
                    <span>Psychic</span>
                </div>
                <span className='id'>#11</span>
            </ItemDesktop>
        </DesktopView>
        
    )
    return (
        <Wrapper>
            <Heading>
                <h2>Wild Pokemon</h2>
                <BiRefresh />
            </Heading>

            {isMobile ? mobileView : desktopView}
                
        </Wrapper>
    );
}

export default PokemonFeature;