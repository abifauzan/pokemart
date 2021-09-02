import { css } from 'styled-components'
import { TYPE_POKEMON } from '../helpers/Constant'
import {
    getThemePokemon
} from '../helpers/Util'
import Color from './Color'

export const TextSize = {
    headingLg: '32px',
    headingNav: '20px',
    headingBox: '26px',
    headingTitle: '22px',
    body: '18px',
    bodySm: '14px',
    bodyXs: '12px',
}

export const TextWeight = {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '600',
}

export const GetColor = type => {
    const getTheme = getThemePokemon(type)

    switch(getTheme) {
        case TYPE_POKEMON.NORMAL:
            return {
                primary: Color.normal.primary,
                light: Color.normal.light,
            }
        case TYPE_POKEMON.FIRE:
            return {
                primary: Color.fire.primary,
                light: Color.fire.light,
            }
        case TYPE_POKEMON.WATER:
            return {
                primary: Color.water.primary,
                light: Color.water.light,
            }
        case TYPE_POKEMON.GRASS:
            return {
                primary: Color.grass.primary,
                light: Color.grass.light,
            }
        case TYPE_POKEMON.ELECTRIC:
            return {
                primary: Color.electric.primary,
                light: Color.electric.light,
            }
        case TYPE_POKEMON.ICE:
            return {
                primary: Color.ice.primary,
                light: Color.ice.light,
            }
        case TYPE_POKEMON.FIGHTING:
            return {
                primary: Color.fighting.primary,
                light: Color.fighting.light,
            }
        case TYPE_POKEMON.POISON:
            return {
                primary: Color.poison.primary,
                light: Color.poison.light,
            }
        case TYPE_POKEMON.GROUND:
            return {
                primary: Color.ground.primary,
                light: Color.ground.light,
            }
        case TYPE_POKEMON.FLYING:
            return {
                primary: Color.flying.primary,
                light: Color.flying.light,
            }
        case TYPE_POKEMON.PSYCHIC:
            return {
                primary: Color.psychic.primary,
                light: Color.psychic.light,
            }
        case TYPE_POKEMON.BUG:
            return {
                primary: Color.bug.primary,
                light: Color.bug.light,
            }
        case TYPE_POKEMON.ROCK:
            return {
                primary: Color.rock.primary,
                light: Color.rock.light,
            }
        case TYPE_POKEMON.GHOST:
            return {
                primary: Color.ghost.primary,
                light: Color.ghost.light,
            }
        case TYPE_POKEMON.DARK:
            return {
                primary: Color.dark.primary,
                light: Color.dark.light,
            }
        case TYPE_POKEMON.DRAGON:
            return {
                primary: Color.dragon.primary,
                light: Color.dragon.light,
            }
        case TYPE_POKEMON.STEEL:
            return {
                primary: Color.steel.primary,
                light: Color.steel.light,
            }
        case TYPE_POKEMON.FAIRY:
            return {
                primary: Color.fairy.primary,
                light: Color.fairy.light,
            }
        default:
            return {
                primary: Color.primary,
                light: Color.light,
            }
    }
}

export const SetGradient = (type, angle = 0) => {
    const color = GetColor(type)

    return {
        background: `linear-gradient(${angle}deg, ${color.light} 0%, ${color.primary} 70%)`,
    }
}

export const SetFont = ({
    size,
    color,
    weight = TextWeight.regular,
    lineHeight = 'normal',
    letterSpacing = 'normal'
}) => css`
    font-family: 'Montserrat', 'sans-serif';
    font-size: ${size};
    color: ${color};
    font-weight: ${weight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
`