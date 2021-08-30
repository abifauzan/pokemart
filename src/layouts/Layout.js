import React from 'react'
import styled from 'styled-components'
import Media, { sizes } from '../configs/Media';
import Header from './Header/Header';
import MenuMobile from './MenuMobile/MenuMobile';
import useIsMobile from '../hooks/useIsMobile'

const MainLayout = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

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

    ${Media.tab`

    `}
`

function Layout({ children }) {

    const isMobile = useIsMobile()

    return (
        <MainLayout>
            <MainContainer>
                <Header />
                {isMobile && <MenuMobile />}
                {children}
            </MainContainer>
        </MainLayout>
    );
}

export default Layout;