import React from 'react';
import { getThemePokemonImage } from '../../helpers/Util';
import {
    Item,
    ItemImg,
    ItemDesc,
    ItemType,
} from './PokemonItemStyle'

function PokemonItem(props) {
    return (
        <Item to='/'>
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
    );
}

export default PokemonItem;