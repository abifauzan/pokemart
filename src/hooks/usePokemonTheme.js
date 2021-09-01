import {
    GetColor,
} from '../configs/Mixin'
import {
    getThemePokemon
} from '../helpers/Util'

function usePokemonTheme(data) {

    const pokemonType = Object.keys(data).length > 0 && getThemePokemon(data.types[0].type.name)
    const color = GetColor(pokemonType)

    return {
        pokemonType,
        color
    }
}

export default usePokemonTheme;