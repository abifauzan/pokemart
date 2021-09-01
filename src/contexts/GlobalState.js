import React, { createContext, useReducer, useEffect } from 'react'
import PokemonReducer from './PokemonReducer'
import { 
    ADD_POKEMON_TO_DECK,
    REMOVE_POKEMON_FROM_DECK,
} from "../helpers/Constant"

// Initial State
const initialState = {
    pokemonDeck: localStorage.getItem('pokemonDeck')
        ? JSON.parse(localStorage.getItem('pokemonDeck'))
        : []
}

// create context instance
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PokemonReducer, initialState)

    useEffect(() => (
        localStorage.setItem('pokemonDeck', JSON.stringify(state.pokemonDeck))
    ), [state])

    // actions
    const addPokemonToDeck = (pokemon, nickname, image) => {
        dispatch({
            type: ADD_POKEMON_TO_DECK,
            payload: {
                ...pokemon,
                nickname,
                image
            }
        })
    }

    const removePokemonFromDeck = id => {
        dispatch({
            type: REMOVE_POKEMON_FROM_DECK,
            payload: id
        })
    }


    return (
        <GlobalContext.Provider value={{
            pokemonDeck: state.pokemonDeck,
            addPokemonToDeck,
            removePokemonFromDeck
        }}>
            {children}
        </GlobalContext.Provider>
    )
}