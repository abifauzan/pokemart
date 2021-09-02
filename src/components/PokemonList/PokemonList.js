import React, { useState, useEffect } from 'react';
import { Heading, List, LoadingArea, Wrapper } from './PokemonListStyle';
import PokemonItem from './PokemonItem';
import LoadingBar from '../LoadingBar';
import useFetch from '../../hooks/useFetch';

function PokemonList(props) {
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