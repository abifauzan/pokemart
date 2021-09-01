import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from '../../configs/Media';
import Color from '../../configs/Color'
import {
    SetFont, TextSize, TextWeight,
} from '../../configs/Mixin'

export const MainHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
    align-items: center;
    background: ${Color.white};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    ${Media.tab`
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 30px;
        height: 100%;
        margin: 30px 30px 0;
        border-radius: 20px;
    `}
`

export const HeaderTop = styled.nav`
    width: 100%;
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        width: 120px;

        ${Media.tab`
            justify-content: flex-start;
        `}
    }

    svg {
        width: 25px;
        height: 25px;

        ${Media.tab`
            display: none;
        `}
    }

    div {
        width: 25px;
        height: 25px;

        ${Media.tab`
            display: none;
        `}
    }
`

export const NavDesktop = styled.nav`
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Item = styled(Link)`
    height: 100%;
    /* background: yellow; */
    padding: 20px 0;
    margin: 0 20px;
    position: relative;

    ${SetFont({
        size: TextSize.bodySm,
        color: ({ isactive }) => isactive ? Color.primary : Color.normal.primary,
        weight: TextWeight.bold,
    })}

    &::after {
        content: '';
        width: 50%;
        height: 3px;
        position: absolute;
        bottom: 10px;
        left: 0;
        border-radius: 10px;
        background: ${({ isactive }) => isactive ? Color.primary : 'transparent'};
    }

    &:first-child {
        /* margin-left: unset; */
    }

    /* &:last-child {
        padding: unset;
        margin: unset;

        &::after {
            display: none;
        }
    } */
`

export const SearchBoxMobile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0 10px;

    input {
        flex: 3;
        height: 40px;
        background: ${Color.greyBox};
        padding: 0 15px;
        border-radius: 30px;
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.dark.primary,
        })}

        &::-webkit-input-placeholder {
            color: #bbb;
        }
    }
`

export const ButtonSearch = styled.button`
    flex: 1;
    background: ${Color.primary};
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 30px;
    ${SetFont({
        size: TextSize.body,
        color: Color.white,
    })}
`