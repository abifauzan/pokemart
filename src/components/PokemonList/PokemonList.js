import React from 'react';
import { Heading, List, Wrapper } from './PokemonListStyle';
import { BiRefresh } from 'react-icons/bi'
import PokemonItem from './PokemonItem';

function PokemonList(props) {
    return (
        <Wrapper>
            <Heading>
                <h2>All Pokemon</h2>
                <BiRefresh />
            </Heading>

            <List>
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
                <PokemonItem />
            </List>
        </Wrapper>
    );
}

export default PokemonList;