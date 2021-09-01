import React from 'react';
import { Heading, List, LoadingArea, Wrapper } from './PokemonListStyle';
import { BiRefresh } from 'react-icons/bi'
import PokemonItem from './PokemonItem';
import SkeletonBox from '../SkeletonBox/SkeletonBox';
import LoadingBar from '../LoadingBar';

function PokemonList(props) {
    return (
        <Wrapper>
            <Heading>
                <h2>All Pokemon</h2>
                <BiRefresh />
            </Heading>

            <List>
                <SkeletonBox mode='all' />
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
        
            <LoadingArea>
                <LoadingBar />
            </LoadingArea>
        </Wrapper>
    );
}

export default PokemonList;