import React from 'react';
import PokemonFeature from '../components/PokemonFeature/PokemonFeature';
import PokemonList from '../components/PokemonList/PokemonList';

function Home(props) {
    return (
        <>
            <PokemonFeature />
            <PokemonList />
        </>
    );
}

export default Home;