import React, { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { CgPokemon } from 'react-icons/cg'
import {
    ItemPokemon,
    Item,
    Nav,
} from './MenuMobileStyle'

function MenuMobile(props) {
    const { pathname } = useLocation()

    return (
        <Nav>
            <Item 
                to='/'
                isactive={pathname === '/' ? 1 : undefined}
            >
                <BiHomeAlt />
            </Item>
            <Item 
                to='/my-pokemon'
                isactive={pathname === '/my-pokemon' ? 1 : undefined}
            >
                <AiOutlineUser />
            </Item>
            <ItemPokemon>
                <CgPokemon />
            </ItemPokemon>
        </Nav>
    );
}

export default MenuMobile;