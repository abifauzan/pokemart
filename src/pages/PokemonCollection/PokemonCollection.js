import React, { useState, useEffect } from 'react';
import { Heading, Item, ItemList, Wrapper } from './PokemonCollectionStyle';
import useIsMobile from '../../hooks/useIsMobile';
import useGlobalContext from '../../hooks/useGlobalContext';
import useGetHistory from '../../hooks/useGetHistory';
import WarningBox from '../../components/WarningBox';

function PokemonCollection(props) {

    const [mounted, setMounted] = useState(false)

    const { pokemonDeck, removePokemonFromDeck } = useGlobalContext()
    const { history } = useGetHistory()

    const variants = {
        open: { opacity: 1, y: 0 },
        close: { opacity: 0, y: '100px' }
    }

    const item = () => 
        pokemonDeck.length && pokemonDeck.map((el, index) => {

            return (
                <Item
                    key={el.id}
                    animate={mounted ? 'open' : 'close' }
                    initial='close'
                    variants={variants}
                >
                    <img src={el.image} alt={`${el.name}-${el.nickname}`} />
                    <span className='title'>{el.nickname.replaceAll('-', ' ')}</span>
                    <span className='subtitle'>{el.name.replaceAll('-', ' ')}</span>

                    <div className='type'>
                        <span onClick={() => removePokemonFromDeck(el.nickname)}>Delete</span>
                        <span onClick={() => history.push('/pokemon/'+el.name)}>Detail</span>
                    </div>
                </Item>
            )
        })

    useEffect(() => {
        // setTimeout(() => {
        //     setMounted(true)
        // }, 2000);
        setMounted(true)
    }, [])
    return (
        <Wrapper>
            <Heading>
                <h2>My Pokemons</h2>
            </Heading>
            <ItemList>
                {pokemonDeck.length > 0 ? item() : <WarningBox>You don't have any pokemon.</WarningBox>}
            </ItemList>
        </Wrapper>
    );
}

export default PokemonCollection;