import styled from "styled-components";
import Color from '../../configs/Color';
import Media from "../../configs/Media";
import { SetFont, SetGradient, TextSize, TextWeight } from '../../configs/Mixin';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 30px 0 50px;

    ${Media.tab`
        padding: 0 30px;
        margin: 0 0 70px;
    `}
`

export const Heading = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px 20px;

    ${Media.tab`
        margin: 30px 0 20px;
    `}

    h2 {
        ${SetFont({
            size: TextSize.headingBox,
            color: Color.dark.primary,
            weight: TextWeight.bold
        })}
    }

    svg {
        width: 30px;
        height: 30px;
        color: ${Color.dark.primary};
    }
`

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    gap: 20px;


    ${Media.tab`
        /* width: 40%; */
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    `}
`

export const Item = styled(motion.div)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    border-radius: 20px; 
    background: ${Color.white};
    box-shadow: 12px 12px 24px #d9d9d9,
        -12px -12px 24px #ffffff;

    img {
        width: 120px;
        flex-shrink: 0;
        margin-bottom: 10px;
    }

    span.title {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.bold
        })}
        margin-bottom: 5px;
    }
    span.subtitle {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.dark.primary,
            weight: TextWeight.medium
        })}
        margin-bottom: 10px;
    }

    div.type {
        display: flex;
        margin-bottom: 10px;
        align-items: center;

        span {
            ${SetFont({
                size: TextSize.bodySm,
                color: Color.fire.primary,
                weight: TextWeight.bold
            })}
            text-transform: uppercase;
            margin-left: unset;
            margin-right: 10px;
            position: relative;

            &:last-child {
                ${SetFont({
                    size: TextSize.bodySm,
                    color: Color.grass.primary,
                    weight: TextWeight.bold
                })}
                margin-right: unset;
                margin-left: 10px;
            }
        }

        div.dot {
            width: 6px;
            height: 6px;
            background: #333;
            border-radius: 9999px;
        }
    }

    span.id {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.dark.primary,
            weight: TextWeight.bold
        })}
    }
`