import React, { useState } from 'react';
import { Ball, Button } from './PokeBallStyle';
import { useEffect } from 'react';

function PokeBall({ onclick, success }) {
    const [ animate, setAnimate ] = useState(false)

    useEffect(() => {
        if (animate) {
            setTimeout(() => {
                setAnimate(false)
            }, 5000);
        }
    }, [animate])

    return (
        <Ball
            onClick={() => setAnimate(true)}
            className={animate ? 'animate' : ''}
        >

            <Button 
                success={success}
                className={animate ? 'animate' : ''}
            />
        </Ball>
    );
}

export default PokeBall;