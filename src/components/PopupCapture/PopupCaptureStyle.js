import styled from "styled-components";
import { motion } from "framer-motion";
import { SetFont, TextSize, TextWeight } from '../../configs/Mixin';
import Color from '../../configs/Color';
import Media from "../../configs/Media";

export const Overlay = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 10;
`

export const Content = styled(motion.div)`
    width: 70%;
    max-width: 650px;
    margin: 0 16px;
    height: auto;
    /* height: 100px; */
    padding: 20px 40px;
    border-radius: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Media.tab`
        padding: 30px 70px;
    `};

    svg {
        margin-left: auto;
        width: 20px;
        height: 20px;
    }

    h2 {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.bold,
        })}
        margin: 5px 0 10px;

        ${Media.tab`
            ${SetFont({
                size: TextSize.headingBox,
                color: Color.dark.primary,
                weight: TextWeight.bold,
            })}
            margin: 15px 0 20px;
        `};
    }

    p {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.dark.primary,
            weight: TextWeight.medium,
        })}

        ${Media.tab`
            ${SetFont({
                size: TextSize.body,
                color: Color.dark.primary,
                weight: TextWeight.medium,
            })}
        `};

        strong {
            font-weight: bold;
            text-transform: capitalize;
        }
    }
`

export const Input = styled.input`
    width: 80%;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid ${props => props.isError ? '#ffcccc' : '#eaeaea'};
    margin: 15px 0px;

    ${SetFont({
        size: TextSize.bodySm,
        color: Color.dark.primary,
        weight: TextWeight.medium,
    })}

    ${Media.tab`
        width: 60%;
        padding: 20px 25px;
        margin: 30px 0px;
    `};

    &::-webkit-input-placeholder {
        color: #bbb;
    }

    &:focus,
    &:active {
        border: 1px solid ${Color.primary};
        outline: none;
    }
`

export const Button = styled.button`
    padding: 10px 50px;
    border-radius: 10px;
    background: ${props => props.isError ? '#ffcccc' : Color.primary};
    margin: 0 0 10px;    
    ${SetFont({
        size: TextSize.bodySm,
        color: Color.white,
        weight: TextWeight.bold,
    })}

    ${Media.tab`
        padding: 15px 60px;
        ${SetFont({
            size: TextSize.body,
            color: Color.white,
            weight: TextWeight.bold,
        })} 
    `};

    &:disabled {
        background: #ffcccc;
    }
`

export const TextError = styled.span`
    ${SetFont({
        size: TextSize.bodySm,
        color: Color.fire.primary,
        weight: TextWeight.medium
    })}
    font-style: italic;
    padding-bottom: 15px;
    display: ${props => props.isError ? 'flex' : 'none'};

    ${Media.tab`
        ${SetFont({
            size: TextSize.body,
            color: Color.fire.primary,
            weight: TextWeight.medium
        })}
    `};
`