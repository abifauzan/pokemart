import React from 'react';
import LoadingBar from '../LoadingBar';
import { BoxDefault, BoxFeature, BoxAll, BoxCollection, BoxPokemon } from './SkeletonBoxStyle';

function SkeletonBox({ mode }) {

    const setSkeletonBox = mode => {
        switch(mode) {

            case 'feature':
                return <BoxFeature><LoadingBar /></BoxFeature>
            case 'collection':
                return <BoxCollection><LoadingBar /></BoxCollection>
            case 'pokemon':
                return <BoxPokemon><LoadingBar /></BoxPokemon>
            default:
                return <BoxAll><LoadingBar /></BoxAll>
        }
    }

    return setSkeletonBox(mode)
}

export default SkeletonBox;