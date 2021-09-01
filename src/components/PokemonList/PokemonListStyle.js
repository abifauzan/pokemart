import styled, { keyframes} from "styled-components";
import Color from '../../configs/Color';
import Media from "../../configs/Media";
import { SetFont, TextSize, TextWeight } from '../../configs/Mixin';
import { motion } from 'framer-motion';
import InfiniteScroll from "react-infinite-scroll-component";

export const Wrapper = styled.section`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Media.tab`
        padding: 0 30px 60px;
    `}

    .infinite-scroll-component__outerdiv {
        width: 100%;
    }
`

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`

export const Heading = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 50px;

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

        &.rotate {
            animation: 1s ${spin} linear infinite;
        }
    }
`

export const List = styled(InfiniteScroll)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    padding: 0 0 80px;
    position: relative;

    ${Media.tab`
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 30px;
        row-gap: 60px;
    `}
`

export const LoadingArea = styled.div`
    /* margin: 40px 0 0; */
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`