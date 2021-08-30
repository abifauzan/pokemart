import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from '../../configs/Media';
import Color from '../../configs/Color'
import {
    SetFont, TextSize,
} from '../../configs/Mixin'

export const MainHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
    align-items: center;

    ${Media.tab`
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 30px;
    `}

    img {
        width: 120px;

        ${Media.tab`
            width: 150px;
        `}
    }
`

export const NavDesktop = styled.nav`
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Item = styled(Link)`
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;

    &:first-child {
        margin-left: unset;
    }
`

export const SearchBoxMobile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0;

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