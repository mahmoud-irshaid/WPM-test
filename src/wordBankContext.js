import React, { useState, useLayoutEffect, createContext } from 'react'
import wordsFile from './words.json'
export const WordContext = createContext()

export const WordProvider = (props) => {
    const [words, setwords] = useState(wordsFile.words)
    return (
        <>
        {   words.length &&
            <WordContext.Provider value={{words}}>
                {props.children}
            </WordContext.Provider>
        }
        </>
    );
}