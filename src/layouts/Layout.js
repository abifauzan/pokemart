import React from 'react'
import styled from 'styled-components'
import Media, { sizes } from '../configs/Media';
import Header from './Header/Header';
import MenuMobile from './MenuMobile/MenuMobile';
import useIsMobile from '../hooks/useIsMobile'
import Color from '../configs/Color';

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

    `}
`

const ContentBlur = styled.div`
    div.blurTop {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -140px;
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        background: ${Color.grass.light};
        filter: blur(30px);
    }

    div.blurBottom {
        position: absolute;
        bottom: -20px;
        right: -100px;
        width: 250px;
        height: 250px;
        border-radius: 9999px;
        background: ${Color.grass.primary};
        filter: blur(100px);
    }
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
            <ContentBlur>
                <div className='blurTop' />
                <div className='blurBottom' />
            </ContentBlur>
        </MainLayout>
    );
}

export default Layout;