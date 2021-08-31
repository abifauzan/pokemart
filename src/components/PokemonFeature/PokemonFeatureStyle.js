import styled from "styled-components";
import Color from '../../configs/Color';
import Media from "../../configs/Media";
import { SetFont, SetGradient, TextSize, TextWeight } from '../../configs/Mixin';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

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

export const MobileView = styled(Swiper)`
    width: 100%;
    padding: 0 0 60px 16px;

    .swiper-wrapper {
        .swiper-slide {
            width: auto;
        }
    }

    .swiper-pagination {
        top: 90%;
        border-radius: 10px;
        width: calc(100% - 64px);
        left: 50%;
        transform: translateX(-50%);

        .swiper-pagination-progressbar-fill {
            background: ${Color.primary};
            border-radius: 10px;
        }
    }
`

export const Item = styled.div`
    width: 150px;
    /* height: 200px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    background: ${Color.fire.light};

    img {
        width: 80%;
        flex-shrink: 0;
        margin: 10px 0;
        align-self: center;
    }
`

export const ItemDesc = styled.div`
    padding: 15px 10px;
    background: ${Color.fire.primary};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        ${SetFont({ 
            size: TextSize.bodySm,
            weight: TextWeight.medium,
            color: Color.white
        })}

        ${Media.tab`
            ${SetFont({ 
                size: TextSize.body,
                weight: TextWeight.medium,
                color: Color.white
            })}
        `}
    }

    span {
        ${SetFont({ 
            size: TextSize.bodySm, 
            weight: TextWeight.bold,
            color: Color.white
        })}

        ${Media.tab`
            ${SetFont({ 
                size: TextSize.body,
                weight: TextWeight.bold,
                color: Color.white
            })}
        `}
    }

`

export const DesktopView = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px;

    div:nth-child(1) {
        grid-column: span 2;
    }
`

export const ItemDesktopFirst = styled.div`
    padding: 20px;
    background: ${SetGradient('fire', 270).background};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 20px; 

    h2 {
        ${SetFont({
            size: TextSize.headingLg,
            color: Color.white,
            weight: TextWeight.bold
        })}
        margin: 15px 15px 10px;
    }

    span.subheading {
        ${SetFont({
            size: TextSize.body,
            color: Color.white,
            weight: TextWeight.bold
        })}
        margin: 0 15px 20px;
    }

    div.type {
        display: flex;
        margin: 0 0 0 15px;
        /* align-items: flex-start; */
        /* flex-direction: column; */

        span {
            /* align-self: flex-start; */
            padding: 5px 15px;
            margin-right: 8px;
            border-radius: 20px;
            background: ${Color.white};
            ${SetFont({
                size: TextSize.bodySm,
                color: Color.fire.primary,
                weight: TextWeight.bold
            })}

            &:last-child {
                ${SetFont({
                    size: TextSize.bodySm,
                    color: Color.grass.primary,
                    weight: TextWeight.bold
                })}
                margin-right: unset;
            }
        }
    }

    span.id {
        ${SetFont({
            size: TextSize.body,
            color: Color.white,
            weight: TextWeight.bold
        })}
        margin: 15px;
    }

    img {
        width: 320px;
        position: absolute;
        right: -40px;
        bottom: -50px;
    }
`

export const ItemDesktop = styled.div`
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