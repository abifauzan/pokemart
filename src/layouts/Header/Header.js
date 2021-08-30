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
import { useHistory, useLocation } from "react-router-dom";

function Header({ isHome, text }) {

    const { pathname } = useLocation()
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
            <Item 
                to='/'
                isactive={pathname === '/' ? 1 : undefined}
            >
                Home
            </Item>
            <Item 
                to='/my-pokemon'
                isactive={pathname === '/my-pokemon' ? 1 : undefined}
            >
                My Pokemon
            </Item>
            <Item 
                to='/'
                isactive={pathname === '/catch' ? 1 : undefined}
            >
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