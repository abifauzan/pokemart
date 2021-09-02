import React, { useEffect } from 'react'
import styled from 'styled-components'
import Media, { sizes } from '../configs/Media';
import Header from './Header/Header';
import MenuMobile from './MenuMobile/MenuMobile';
import useIsMobile from '../hooks/useIsMobile'
import Color from '../configs/Color';
import useGetHistory from '../hooks/useGetHistory';
import LoadingPage from '../components/LoadingPage';
import { useState } from 'react';
import useGlobalContext from '../hooks/useGlobalContext';
import { GetColor } from '../configs/Mixin';

const MainLayout = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: #f4f7fb;

    ${Media.tab`

    `}
`

const MainContainer = styled.div`
    width: 100%;
    max-width: ${sizes.laptop}px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding-bottom: 100px;
    z-index: 3;

    ${Media.tab`
        padding-bottom: 0;
    `}
`

export const BlurTop = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -140px;
    width: 300px;
    height: 300px;
    border-radius: 9999px;
    background: ${props => GetColor(props.theme).light};
    filter: blur(30px);
`

export const BlurBottom = styled.div`
    position: absolute;
    bottom: -20px;
    right: -100px;
    width: 250px;
    height: 250px;
    border-radius: 9999px;
    background: ${props => GetColor(props.theme).primary};
    filter: blur(100px);
`

function Layout({ children }) {
    const [mounted, setMounted] = useState(false)

    const isMobile = useIsMobile()
    const { pathname } = useGetHistory()
    const pokemonDetailPage = pathname.split('/')[1] === 'pokemon'
    const { theme } = useGlobalContext()

    useEffect(() => {
        // setTimeout(() => {
        //     setMounted(true)
        // }, 1000);
        setMounted(true)
    }, [])

    return mounted ? (
        <MainLayout>
            <MainContainer>
                <Header />
                {isMobile && <MenuMobile />}
                {children}
            </MainContainer>
            {pokemonDetailPage && isMobile && theme !== '' && (
                <div>
                    <BlurTop theme={theme} />
                    <BlurBottom theme={theme} />
                </div>
            )}
            
        </MainLayout>
    ) : <LoadingPage />
}

export default Layout;