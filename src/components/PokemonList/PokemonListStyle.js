import styled from "styled-components";
import Color from '../../configs/Color';
import Media from "../../configs/Media";
import { SetFont, TextSize, TextWeight } from '../../configs/Mixin';

export const Wrapper = styled.section`
    padding: 0 16px;
    display: flex;
    flex-direction: column;

    ${Media.tab`
        padding: 0 30px;
    `}
`

export const Heading = styled.div`
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
    }
`

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    grid-auto-flow: dense;

    ${Media.tab`
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 30px;
        row-gap: 60px;
    `}
`