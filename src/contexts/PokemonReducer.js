import { 
    ADD_POKEMON_TO_DECK,
    REMOVE_POKEMON_FROM_DECK,
} from "../helpers/Constant"

export default (state, action) => {
    switch (action.type) {
        case ADD_POKEMON_TO_DECK:
            return {
                ...state,
                pokemonDeck: [action.payload, ...state.pokemonDeck]
            }
        case REMOVE_POKEMON_FROM_DECK:
            return {
                ...state,
                pokemonDeck: state.pokemonDeck.filter(
                    (pokemon) => pokemon.nickname !== action.payload
                )
            }
        default: 
            return state
    }
}