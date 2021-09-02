import React, { useState } from 'react';
import { Content, Input, Overlay, Button, TextError } from './PopupCaptureStyle';
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from 'react-icons/cg'
import useGlobalContext from '../../hooks/useGlobalContext';
import useGetHistory from '../../hooks/useGetHistory';

const overlayVariant = {
    init: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0},
}

const contentVariant = {
    init: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 },
    close: { y: 200, opacity: 0 }
}

function PopupCapture({ data, isActive, toggleFunction, children }) {
    const [textError, setTextError] = useState('')
    const [nickname, setNickname] = useState('')

    const {
        addPokemonToDeck,
        pokemonDeck
    } = useGlobalContext()

    const { history } = useGetHistory()

    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`

    const checkNickname = nickname => {
        return pokemonDeck.some((pokemon) => pokemon.nickname === nickname)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const checkNicknameAvail = checkNickname(nickname)

        if (nickname === '') {
            setTextError('Nickname cannot be empty!')
            return;
        }
        
        
        if (checkNicknameAvail) {
            setTextError('Nickname already taken!')
        } else {
            addPokemonToDeck(data, nickname, pokemonImage)
            toggleFunction()
            setTimeout(() => {
                history.push('/my-pokemon')
            }, 1000);
        }
    }

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial='init'
                    animate='open'
                    exit='close'
                >
                    <Overlay
                        variants={overlayVariant}
                    >
                        <Content
                            variants={contentVariant}

                        >
                            <CgClose 
                                onClick={() => toggleFunction()}
                            />

                            <h2> Congratulations! </h2>
                            <p>You just captured <strong>{data.name.replaceAll('-', ' ')}</strong></p>

                            <Input 
                                type='text'
                                name='nickname'
                                onChange={e => setNickname(e.target.value)}
                                placeholder='Enter Nickname...'
                                isError={textError !== ''}
                            />

                            <TextError isError={textError !== ''}>
                                {textError}
                            </TextError>

                            <Button 
                                onClick={handleSubmit} 
                                disabled={nickname === ''}
                            >
                                Save
                            </Button>
                        </Content>
                    </Overlay>
                </motion.div>

            )}
        </AnimatePresence>
    );
}

export default PopupCapture;