import styled from 'styled-components'
import Color from '../../configs/Color';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: white;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${Color.greyBox};
    z-index: 2;
`

export const Item = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: ${({ isactive }) => isactive ? Color.dark.light : Color.greyText};

    svg {
        width: 27px;
        height: 27px;
        background: ${({ isactive }) => isactive ? Color.grass.light : 'transparent'};
        padding: 7px;
        border-radius: 9999px;
    }
`

export const ItemPokemon = styled.button`
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: ${Color.primary};

    svg {
        width: 60px;
        height: 60px;
    }
`