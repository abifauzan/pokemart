import React, { useState, useEffect } from 'react';
import { Heading, Item, ItemList, Wrapper } from './PokemonCollectionStyle';
import useIsMobile from '../../hooks/useIsMobile';
import SkeletonBox from '../../components/SkeletonBox/SkeletonBox';

function PokemonCollection(props) {

    const [mounted, setMounted] = useState(false)

    const isMobile = useIsMobile()

    const variants = {
        open: { opacity: 1, y: 0 },
        close: { opacity: 0, y: '100px' }
    }

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 2000);
        // setMounted(true)
    }, [])
    return (
        <Wrapper>
            <Heading>
                <h2>My Pokemons</h2>
            </Heading>
            <ItemList>
                <SkeletonBox mode='collection' />
                <Item
                    animate={mounted ? 'open' : 'close' }
                    initial='close'
                    variants={variants}
                >
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                    <span className='title'>Mega Mewtwo X</span>
                    <span className='subtitle'>Genetic Pokemon</span>

                    <div className='type'>
                        <span>Delete</span>
                        <span>Detail</span>
                    </div>
                </Item>
                <Item>
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                    <span className='title'>Mega Mewtwo X</span>
                    <span className='subtitle'>Genetic Pokemon</span>

                    <div className='type'>
                        <span>Delete</span>
                        <span>Detail</span>
                    </div>
                </Item>
                <Item>
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'} alt='image' />
                    <span className='title'>Mega Mewtwo X</span>
                    <span className='subtitle'>Genetic Pokemon</span>

                    <div className='type'>
                        <span>Delete</span>
                        <span>Detail</span>
                    </div>
                </Item>
            </ItemList>
        </Wrapper>
    );
}

export default PokemonCollection;