import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';
import {
    Nav,
    Item,
} from './MenuDesktopStyle'

function MenuDesktop(props) {
    return (
        <Nav>
            <Item to='/'>
                <FaBeer />
            </Item>
            <Item to='/'>
                <FaBeer />
            </Item>
            <Item to='/'>
                <FaBeer />
            </Item>
        </Nav>
    );
}

export default MenuDesktop;