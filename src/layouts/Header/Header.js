import React from 'react';
import pokemon_logo from '../../assets/Images/pokemon-logo.png'
import { FaBeer, FaSearch } from 'react-icons/fa';
import useIsMobile from '../../hooks/useIsMobile'
import {
    MainHeader,
    NavDesktop,
    Item,
    SearchBoxMobile,
    ButtonSearch,
} from './HeaderStyle'

function Header({ isHome, text }) {

    const isMobile = useIsMobile()

    const logo = (
        <img src={pokemon_logo} alt='Pokemon Logo' />
    )

    const searchBox = (
        <SearchBoxMobile>
            <input type='text' name='search' placeholder='Search Pokemon' />
            <ButtonSearch>
                <FaSearch />
            </ButtonSearch>
        </SearchBoxMobile>
    )

    const navDesktop = (
        <NavDesktop>
            <Item to='/'>
                Home
            </Item>
            <Item to='/'>
                My Pokemon
            </Item>
            <Item to='/'>
                Capture
            </Item>
        </NavDesktop>
    )
    return (
        <MainHeader>
            {logo}
            {isMobile && searchBox}

            {!isMobile && navDesktop}
        </MainHeader>
    );
}

export default Header;