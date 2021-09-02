import styled, { css, keyframes } from "styled-components";
import Color from '../../configs/Color';
import Media from "../../configs/Media";
import { SetFont, SetGradient, TextSize, TextWeight, GetColor } from '../../configs/Mixin';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blink = keyframes`
    from { background: #eee;}
    to { background: #e74c3c; }
`

const shake = keyframes`
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
`

export const Ball = styled(motion.div)`
    position: relative;
    width: 80px;
    height: 80px;
    background: #fff;
    border: 6px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;

    ${Media.tab`
        width: 100px;
        height: 100px;
        background: #fff;
        border: 8px solid #000;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset -10px 10px 0 10px #ccc;
    `}

    &.animate {
        animation: ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) 3;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
    }

    &::before {
        background: red;
        width: 100%;
        height: 50%;
        left: 0;
    }

    &::after {
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 10px;
        background: #000;
        left: 0;

        ${Media.tab`
            height: 15px;
        `}
    }
`

export const Button = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: ${({ success }) => success ? 'red' : '#7f8c8d'};
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 8px black;

    ${Media.tab`
        width: 25px;
        height: 25px;
        border: 7px solid #fff;
        box-shadow: 0 0 0 8px black;
    `}

    &.animate {
        animation: ${blink} .5s alternate 10;
    }
`