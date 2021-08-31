import React from 'react';
import { Heading, Item, ItemList, Wrapper } from './PokemonCollectionStyle';

function PokemonCollection(props) {
    return (
        <Wrapper>
            <Heading>
                <h2>My Pokemons</h2>
            </Heading>
            <ItemList>
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