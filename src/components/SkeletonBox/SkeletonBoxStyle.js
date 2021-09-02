import styled from "styled-components";
import Media from "../../configs/Media";

export const BoxDefault = styled.div`
    width: 150px;
    height: 188px;
    border-radius: 20px;
    background: #b2bec3;
    display: flex;
    flex-direction: column;
`

export const BoxFeature = styled.div`
    width: 150px;
    height: 188px;
    border-radius: 20px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Media.tab`
        width: auto;
        height: 271px;
    `}
`

export const BoxCollection = styled.div`
    width: auto;
    height: 253px;
    border-radius: 20px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Media.tab`
        width: 200px;
        height: auto;
    `}
`

export const BoxPokemon = styled.div`
    width: auto;
    height: 105px;
    border-radius: 20px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Media.tab`
        height: 150px;
    `}
`

export const BoxAll = styled.div`
    width: auto;
    height: auto;
    border-radius: 20px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`