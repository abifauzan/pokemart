import styled from "styled-components";
import Color from '../../configs/Color';
import { SetFont, SetGradient, TextSize, TextWeight } from '../../configs/Mixin';
import { Swiper } from 'swiper/react';
import Media from '../../configs/Media';
import { motion } from 'framer-motion';

export const Container = styled.section`
    padding: 16px 0 0;

    ${Media.tab`
        padding: 30px;
    `}
`

// Mobile Style

export const Menu = styled(Swiper)`
    width: 100%;
    padding: 0 0 10px;

    ${Media.tab`
        padding-bottom: 50px;
    `}

    .swiper-wrapper {
        .swiper-slide {
            width: auto;
        }
    }
`

export const Item = styled.button`
    /* width: 100%; */
    padding: 10px 20px;
    border-radius: 20px;
    background: ${({ isactive }) => isactive ? Color.primary : Color.white};
    box-shadow: 5px 5px 10px #e0e0e0,
        -5px -5px 10px #ffffff;
    ${SetFont({
        size: TextSize.bodyXs,
        color: ({ isactive }) => isactive ? Color.white : Color.dark.primary,
        weight: TextWeight.bold,
    })}
    white-space: nowrap;
`

export const Body = styled(motion.div)`
    margin: 16px;
    border-radius: 20px;
    min-height: 50vh;
    display: ${({ isactive }) => isactive ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    /* backdrop-filter: blur(100px) saturate(10%); */
    background-color: rgba(255, 255, 255, 0.5);
    /* box-shadow: 5px 5px 10px #e0e0e0,
        -5px -5px 10px #ffffff; */
        box-shadow: 6px -1px 30px -26px rgba(0,0,0,0.4);
`

export const PokemonImage = styled.img`
    width: 180px;
`

export const PokemonTitle = styled.h2`
    margin: 20px 0 10px;
    ${SetFont({
        size: TextSize.headingLg,
        color: Color.dark.primary,
        weight: TextWeight.bold,
    })}
`

export const PokemonType = styled.div`
    /* width: 150px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.item {
        display: flex;
        margin-bottom: 5px;

        &:last-child {
            margin-bottom: unset;
        }
        
        img {
            flex-shrink: 0;
            margin-right: 5px;
            width: 20px;
        }

        span {
            ${SetFont({
                size: TextSize.bodySm,
                color: Color.dark.primary,
                weight: TextWeight.bold,
            })}
            text-transform: capitalize;
        }
    }
`

export const ButtonCatch = styled.button`
    width: 60px;
    height: 60px;
    background: ${Color.primary};
    border-radius: 9999px;
    margin: 20px 0;

`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ListItem = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${Color.greyBox};
    position: relative;

    &:last-child {
        border-bottom: unset;
    }

    ${Media.tab`
        padding: 0 20px 20px;
    `}
`

export const ItemPokemon = styled.div`
    /* width: 40%; */
    width: 100px;
    /* height: 30vw; */
    display: flex;
    flex-direction: column;
    align-items: center;

    div.image {
        width: 100%;
        height: auto;
        position: relative;

        img {
            width: 100%;
        }
    }

    span.name {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.bold,
        })}
        padding-top: 10px;
    }
` 

export const ItemArrow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    svg {
        width: 20px;
        height: 20px;
    }

    span {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.dark,
            weight: TextWeight.medium,
        })}
    }
`

export const StatsWrapper = styled.div`
    width: calc(100% - 32px);
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    grid-column-gap: 0;
    grid-row-gap: 15px;
    margin: 20px;

    ${Media.tab`
        grid-template-columns: 3fr 1fr 4fr;
    `}
`

export const StatsText = styled.span`
    ${SetFont({
        size: TextSize.bodySm,
        color: Color.dark.primary,
        weight: TextWeight.regular,
    })}

    &.bold {
        font-weight: ${TextWeight.bold};
    }
`

export const ProgressBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    progress {
        width: 100%;
        height: 6px;
        border-radius: 5px;
        appearance: none;

        &[value]::-webkit-progress-value {
            /* width: 100%;
            height: 100%; */
            background: ${SetGradient('grass')};
            border-radius: 5px;
        }

        &[value]::-webkit-progress-bar {
            background-color: ${Color.greyBox};
            border-radius: 5px;
        }
    }
`

export const MovesItem = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${Color.greyBox};

    &:last-child {
        border-bottom: unset;
    }
`

export const MovesItemText = styled.span`
    ${SetFont({
        size: TextSize.body,
        color: Color.dark,
        weight: TextWeight.bold,
    })}

    &.level {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.primary,
            weight: TextWeight.bold,
        })}
    }
`

// Desktop Style

export const DesktopView = styled(motion.section)`
    width: 100%;
    /* height: calc(100vh - 210px); */
    max-height: 700px;
    background: ${SetGradient('electric', 33).background};
    border-radius: 20px;
    margin-top: 30px;
    position: relative;
    display: flex;
    box-shadow: 5px 5px 19px #eaeaea,
        -5px -5px 19px #f0f8ff;
`

export const DesktopViewPokemon = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    img {
        width: 300px;
        flex-shrink: 0;
        margin: 150px 0 20px;
        position: relative;
        z-index: 1;
    }

    span.id {
        ${SetFont({
            size: '180px',
            color: 'rgba(255,255,255, .5)',
            weight: TextWeight.bold,
        })}
        letter-spacing: 7px;
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const DesktopButtonCatch = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 9999px;
    background: ${Color.primary};
    margin: 20px 0 0;
`

export const DesktopViewDetail = styled.div`
    /* flex: 1; */
    width: calc(50% - 40px);
    max-height: calc(700px - 60px);
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    background: ${Color.white};
    position: relative;
    border-top-left-radius: 30px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: calc(105% - 40px);
    bottom: 5%;
    padding: 20px 0 20px;
    overflow: hidden;
`

export const DesktopViewCopy = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        ${SetFont({
            size: '40px',
            color: Color.dark.primary,
            weight: TextWeight.bold
        })}
        margin: 20px 0 20px;
    }
`

export const TypeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div.type {
        display: flex;
        align-items: center;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }

        img {
            flex-shrink: 0;
            width: 20px;
            margin-right: 5px;
        }

        span {
            ${SetFont({
                size: TextSize.bodySm,
                color: Color.dark,
                weight: TextWeight.bold,
            })}
            text-transform: capitalize;

            ${Media.tab`
                ${SetFont({
                    size: TextSize.body,
                    color: Color.dark,
                    weight: TextWeight.bold,
                })}
            `}
        }
    }
`

export const BodyDesktop = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: ${({ isactive }) => isactive ? 'flex' : 'none'};
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`

export const TextColumnThree = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 80%;

    ${Media.tab`
        width: unset;
        justify-content: space-evenly;
    `}

    div {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
    }
`

export const TextColumnThreeSpan = styled.span`
    &:first-child {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.medium,
        })}
        padding-bottom: 5px;
    }
    &:last-child {
        ${SetFont({
            size: TextSize.body,
            color: Color.primary,
            weight: TextWeight.bold,
        })}
    }
`

export const GridTwoColumn = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    padding: 20px;
    width: 90%;

    ${Media.tab`
        grid-template-columns: 2fr 3fr;
        grid-column-gap: 10px;
        grid-row-gap: 5px;
        padding: 20px;
        width: unset;
    `}
`

export const GridThreeColumn = styled(GridTwoColumn)`
    grid-template-columns: 1fr 40px 1fr;
    padding: 20px 20px 0;
    width: 90%;

    ${Media.tab`
        width: unset;
        grid-template-columns: 150px 40px 40px;
        padding: 20px 20px 0;
    `}

    svg {
        width: 25px;
        height: 25px;
        stroke-width: 10px;
    }
`

export const GridColumnText = styled.span`
    ${SetFont({
        size: TextSize.body,
        color: Color.greyText,
        weight: TextWeight.regular,
    })}
    &.bold {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.bold,
        })}

    }
    &.medium {
        ${SetFont({
            size: TextSize.body,
            color: Color.dark.primary,
            weight: TextWeight.medium,
        })}

    }
    &.primary {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.primary,
            weight: TextWeight.medium,
        })}
    }
`

export const DescHeading = styled.h2`
    ${SetFont({
        size: TextSize.body,
        color: Color.dark.primary,
        weight: TextWeight.bold,
    })}
    margin: ${({ nomargin }) => nomargin ? '0 20px' : '10px 20px'};
`

export const DescBody = styled(DescHeading)`
    font-weight: ${TextWeight.medium};
    
`

export const Hr = styled.hr`
    margin: 20px;
`