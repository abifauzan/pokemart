import React, { useState, useEffect } from 'react';
import { Heading, List, LoadingArea, Wrapper } from './PokemonListStyle';
import { BiRefresh } from 'react-icons/bi'
import PokemonItem from './PokemonItem';
import SkeletonBox from '../SkeletonBox/SkeletonBox';
import LoadingBar from '../LoadingBar';
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from '../../hooks/useFetch';
import { checkObjectLength } from '../../helpers/Util';

function PokemonList(props) {
    const [spin, setSpin] = useState(false)
    const [isFetch, setIsFetch] = useState(true)

    const loadingArea = (
        <LoadingArea>
            <LoadingBar />
        </LoadingArea>
    )

    useEffect(() => {

        return () => setIsFetch(false)
    }, [])

    const {
        data, 
        nextUrl, 
        fetchMoreData
    } = useFetch()

    const infiniteScroll = (
        <List
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={nextUrl && isFetch ? true : false}
            loader={loadingArea}
            scrollThreshold='10px'
            style={{ overflow: 'unset'}}
        >
            {data.map(el => <PokemonItem key={el.name} data={el} /> )}
        </List>
    )



    return (
        <Wrapper>
            <Heading>
                <h2>All Pokemon</h2>
                {/* <BiRefresh 
                    onClick={() => {
                        setSpin(true)
                        setTimeout(() => {
                            setSpin(false)
                        }, 5000);
                    }}
                    className={spin ? 'icon rotate' : 'icon'}
                /> */}
            </Heading>

            {infiniteScroll}
            
        </Wrapper>
    );
}

export default PokemonList;