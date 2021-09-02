import React from 'react';
import styled, { keyframes } from 'styled-components';
import Color from '../configs/Color';

const orbit = keyframes`
    0%  { 
        transform:rotate(225deg); 
        opacity: 1;
        animation-timing-function: ease-out; 
    } 
    7%  { 
        transform:rotate(345deg);
        animation-timing-function: linear; 
    }
    30% { 
        transform:rotate(455deg);
        animation-timing-function: ease-in-out;
    }
    39% { 
        transform:rotate(690deg);
        animation-timing-function: linear; 
    }
    70% { 
        transform:rotate(815deg); opacity: 1;
        animation-timing-function: ease-out; 
    }
    75% { 
        transform:rotate(945deg); 
        animation-timing-function: ease-out;
    }
    76% { 
        transform:rotate(945deg); 
        opacity: 0; 
    }
    100% { 
        transform:rotate(945deg); 
        opacity: 0; 
    } 
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
`

const Loader = styled.div`
    position: relative;
    width: 100px;
    height: 100px;


    .circle {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: rotate(225deg);
        animation-iteration-count: infinite;
        animation-name: ${orbit};
        animation-duration: 4.5s;

        &:after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            background: ${Color.primary};
        }

        &:nth-child(2) {  animation-delay: 240ms; }
        &:nth-child(3) {  animation-delay: 480ms; }
        &:nth-child(4) {  animation-delay: 720ms; }
        &:nth-child(5) {  animation-delay: 960ms; }
    }
`



function LoadingPage(props) {
    return (
        <Container>
            <Loader>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </Loader>
        </Container>
    );
}

export default LoadingPage;