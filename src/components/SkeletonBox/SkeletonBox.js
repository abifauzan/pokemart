import React from 'react';
import LoadingBar from '../LoadingBar';
import { BoxDefault, BoxFeature, BoxAll } from './SkeletonBoxStyle';

function SkeletonBox({ mode }) {

    const setSkeletonBox = mode => {
        switch(mode) {

            case 'feature':
                return <BoxFeature><LoadingBar /></BoxFeature>
            case 'all':
                return <BoxAll><LoadingBar /></BoxAll>
            default:
                return <BoxDefault />
        }
    }

    return setSkeletonBox(mode)
}

export default SkeletonBox;