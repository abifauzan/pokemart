import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    padding: 8px;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  30px 30px 60px #bebebe,
             -30px -30px 60px #ffffff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Item = styled(Link)`
    padding: 20px;
    background: lightgreen;
    margin-left: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;

    &:first-child {
        margin-left: unset;
    }
`