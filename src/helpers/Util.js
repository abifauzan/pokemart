import { TYPE_POKEMON } from './Constant'
import {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
} from './AssetsTypePokemon'

export const getThemePokemon = type => {
    switch(type) {
        case 'normal':
            return TYPE_POKEMON.NORMAL
        case 'fire':
            return TYPE_POKEMON.FIRE
        case 'water':
            return TYPE_POKEMON.WATER
        case 'grass':
            return TYPE_POKEMON.GRASS
        case 'electric':
            return TYPE_POKEMON.ELECTRIC
        case 'ice':
            return TYPE_POKEMON.ICE
        case 'fighting':
            return TYPE_POKEMON.FIGHTING
        case 'poison':
            return TYPE_POKEMON.POISON
        case 'ground':
            return TYPE_POKEMON.GROUND
        case 'flying':
            return TYPE_POKEMON.FLYING
        case 'psychic':
            return TYPE_POKEMON.PSYCHIC
        case 'bug':
            return TYPE_POKEMON.BUG
        case 'rock':
            return TYPE_POKEMON.ROCK
        case 'ghost':
            return TYPE_POKEMON.GHOST
        case 'dark':
            return TYPE_POKEMON.DARK
        case 'dragon':
            return TYPE_POKEMON.DRAGON
        case 'steel':
            return TYPE_POKEMON.STEEL
        case 'fairy':
            return TYPE_POKEMON.FAIRY
        default:
            return TYPE_POKEMON.NORMAL
    }
}

export const getThemePokemonImage = (type) => {
    switch(type) {
        case 'normal':
            return normal
        case 'fire':
            return fire
        case 'water':
            return water
        case 'grass':
            return grass
        case 'electric':
            return electric
        case 'ice':
            return ice
        case 'fighting':
            return fighting
        case 'poison':
            return poison
        case 'ground':
            return ground
        case 'flying':
            return flying
        case 'psychic':
            return psychic
        case 'bug':
            return bug
        case 'rock':
            return rock
        case 'ghost':
            return ghost
        case 'dark':
            return dark
        case 'dragon':
            return dragon
        case 'steel':
            return steel
        case 'fairy':
            return fairy
        default:
            return normal
    }
}

export const getImgTypePokemon = type => getThemePokemonImage(type)

export const checkObjectLength = object => Object.keys(object).length > 0

export const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };