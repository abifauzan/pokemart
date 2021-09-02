import React, { useEffect, useState } from 'react';
import { 
    Wrapper, 
    Heading, 
    Item, 
    ItemDesc, 
    MobileView, 
    ItemDesktop, 
    DesktopView,
    ItemDesktopFirst,
    SpanDesktopOne,
    SpanDesktopTwo,
} from './PokemonFeatureStyle';
import { BiRefresh } from 'react-icons/bi'
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import useIsMobile from '../../hooks/useIsMobile';
import SkeletonBox from '../SkeletonBox/SkeletonBox';
import useFetchWild from '../../hooks/useFetchWild';
import usePokemonTheme from '../../hooks/usePokemonTheme';
import {
    getThemePokemon
} from '../../helpers/Util'
import useGetHistory from '../../hooks/useGetHistory';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function PokemonFeature(props) {
    const [mounted, setMounted] = useState(false)
    const [spin, setSpin] = useState(false)

    const { history } = useGetHistory()

    const {
        data,
        setRefetch,
    } = useFetchWild()

    // const pokemonTheme = usePokemonTheme(data)

    // console.log(pokemonTheme);
    const isMobile = useIsMobile()

    const variants = {
        desktop: {
            open: { opacity: 1, y: 0 },
            close: { opacity: 0, y: '100px' }
        },
        mobile: {
            open: { opacity: 1, x: 0 },
            close: { opacity: 0, x: '-100px' }
        }
    }

    useEffect(() => {
        data.length === 5 && setMounted(true)
    }, [data])

    const mobileView = () => {
        const pokemonType = Object.keys(data).length > 0 && getThemePokemon(data[0].types[0].type.name)

        
        return (
        <MobileView
            slidesPerView='auto'
            spaceBetween={20}
            pagination={{
                'type': 'progressbar'
            }}
            centeredSlides={false}
            className='mySwiper'
        >
            { mounted ? data.map((el, idx) => {
                const pokemonType = getThemePokemon(el.types[0].type.name)

                return (
                    <SwiperSlide key={el.id}>
                        <Item
                            animate={mounted ? 'open' : 'close' }
                            initial='close'
                            variants={variants.mobile}
                            pokemontype={pokemonType}
                            onClick={() => history.push(`/pokemon/${el.name}`)}
                        >
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`} alt={el.name} />

                            <ItemDesc
                                pokemontype={pokemonType}
                            >
                                <p>{el.name.replaceAll('-', ' ')}</p>
                                <span>#{el.id}</span>
                            </ItemDesc>
                        </Item>
                    </SwiperSlide>
                )
            }) : (
                <SwiperSlide>
                    <SkeletonBox mode='feature' />
                </SwiperSlide>
            )}
            
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            
        </MobileView>
    ) }

    const desktopView = () => {
        const pokemonType0 = Object.keys(data).length > 0 && getThemePokemon(data[0].types[0].type.name)

        return (
            <DesktopView>
                {mounted ? (
                    <ItemDesktopFirst
                        animate={mounted ? 'open' : 'close' }
                        initial='close'
                        variants={variants.desktop}
                        pokemontype={pokemonType0}
                        onClick={() => history.push(`/pokemon/${data[0].name}`)}
                    >
                        <h2>{data[0].name.replaceAll('-', ' ')}</h2>
                        <span className='subheading'>Genetic Pokemon</span>
                        <div className='type'>
                            {data[0].types.map(el => (
                                <SpanDesktopOne 
                                    key={el.type.name}
                                    type={getThemePokemon(el.type.name)}
                                >{el.type.name}</SpanDesktopOne>
                            ))}
                        </div>
                        <span className='id'>#{data[0].id}</span>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data[0].id}.png`} alt={data[0].name} />
                    </ItemDesktopFirst>
                ) : (
                    <SkeletonBox mode='feature' />
                )}

                {mounted ? Array(4).fill(1).map((el, idx) => {
                    let index = el + idx

                    return (
                        <ItemDesktop
                            key={data[index].id}
                            animate={mounted ? 'open' : 'close' }
                            initial='close'
                            variants={variants.desktop}
                            onClick={() => history.push(`/pokemon/${data[index].name}`)}
                        >
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data[index].id}.png`} alt={data[index].name} />
                            
                            <span className='title'>{data[index].name.replaceAll('-', ' ')}</span>
                            <span className='subtitle'>Genetic Pokemon</span>
            
                            <div className='type'>
                                <SpanDesktopTwo
                                    type={getThemePokemon(data[index].types[0].type.name)}
                                >
                                    {data[index].types[0].type.name}
                                </SpanDesktopTwo>
                                {data[index].types.length > 1 && (
                                    <>
                                    <div className='dot' />
                                    <SpanDesktopTwo
                                        type={getThemePokemon(data[index].types[1].type.name)}
                                    >{data[index].types[1].type.name}</SpanDesktopTwo>    
                                    </>
                                )}
                                
                            </div>
                            <span className='id'>#{data[index].id}</span>
                        </ItemDesktop>
                    )
                }) : <SkeletonBox mode='feature' /> }
                
            </DesktopView>
            
        )
    }

    return (
        <Wrapper>
            <Heading>
                <h2>Legendary Pokemon</h2>
                <BiRefresh 
                    onClick={() => {
                        setSpin(true)
                        setRefetch(true)
                        setMounted(false)
                        setTimeout(() => {
                            setSpin(false)
                        }, 3000);
                    }}
                    className={spin ? 'icon rotate' : 'icon'}
                />
            </Heading>

            {isMobile ? mobileView() : desktopView()}
                
        </Wrapper>
    );
}

export default PokemonFeature;