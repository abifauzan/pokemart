import React from 'react';
import pokemon_logo from '../../assets/Images/pokemon-logo.png'
import { IoChevronBackOutline } from 'react-icons/io5';
import useIsMobile from '../../hooks/useIsMobile'
import {
    MainHeader,
    NavDesktop,
    Item,
    HeaderTop,
} from './HeaderStyle'
import useGetHistory from '../../hooks/useGetHistory';

function Header(props) {

    const { pathname, history } = useGetHistory()
    const isMobile = useIsMobile()

    const logo = (
        <img 
            src={pokemon_logo} 
            alt='Pokemon Logo' 
            onClick={() => history.push('/')} 
            style={{ cursor: 'pointer'}}
        />
    )

    // const searchBox = (
    //     <SearchBoxMobile>
    //         <input type='text' name='search' placeholder='Search Pokemon' />
    //         <ButtonSearch>
    //             <FaSearch />
    //         </ButtonSearch>
    //     </SearchBoxMobile>
    // )

    const header = pathname === '/' ? (
        <>
            <HeaderTop>
                <div />
                    {logo}
                <div />
            </HeaderTop>
            {/* {isMobile && searchBox} */}
        </>
    ) : (
        <HeaderTop>
            <IoChevronBackOutline onClick={() => history.push('/')} />
            {logo}
            <div />
        </HeaderTop>
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
        </NavDesktop>
    )
    return (
        <MainHeader>
            {header}
            {!isMobile && navDesktop}
        </MainHeader>
    );
}

export default Header;