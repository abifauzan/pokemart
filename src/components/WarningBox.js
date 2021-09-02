import React from 'react';
import styled from 'styled-components'
import Color from '../configs/Color';
import { SetFont, TextSize, TextWeight } from '../configs/Mixin';

const Box = styled.div`
    width: 100%;
    height: 40px;
    background: ${Color.electric.primary};
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        ${SetFont({
            size: TextSize.bodySm,
            color: Color.white,
            weight: TextWeight.bold
        })}
    }
`
function WarningBox({ children }) {
    return (
        <Box>
            <span>{children}</span>
        </Box>
    );
}

export default WarningBox;