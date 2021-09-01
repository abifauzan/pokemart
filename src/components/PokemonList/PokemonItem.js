import React, { useState, useEffect } from 'react';
import { getThemePokemonImage } from '../../helpers/Util';
import {
    Item,
    ItemImg,
    ItemDesc,
    ItemType,
    Container,
} from './PokemonItemStyle'
import useIsMobile from '../../hooks/useIsMobile';

function PokemonItem(props) {

    const [mounted, setMounted] = useState(false)

    const isMobile = useIsMobile()

    const variants = {
        desktop: {
            open: { opacity: 1, y: 0 },
            close: { opacity: 0, y: '100px' }
        },
        mobile: {
            open: { opacity: 1, y: 0 },
            close: { opacity: 0, y: '100px' }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 2000);
        // setMounted(true)
    }, [])

    return (
        <Container
            animate={mounted ? 'open' : 'close' }
            initial='close'
            variants={isMobile ? variants.mobile : variants.desktop}
        >
            <Item to='/pokemon/ditto'>
                {/* <ItemImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} /> */}
                <ItemImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} />
                
                <ItemType>
                    <div>
                        <img src={getThemePokemonImage('grass')} />
                        <span>Grass</span>
                    </div>
                    <div>
                        <img src={getThemePokemonImage('dark')} />
                        <span>Dark</span>
                    </div>
                </ItemType>
                
                <ItemDesc>
                    <p>Bulbasaur</p>
                    <span>#111</span>
                </ItemDesc>
            </Item>
        </Container>
        
    );
}

export default PokemonItem;