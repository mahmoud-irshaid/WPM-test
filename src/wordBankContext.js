import React, { useState, useLayoutEffect, createContext } from 'react'

export const WordContext = createContext()

export const WordProvider = (props) => {
    const [words, setwords] = useState([])

    useLayoutEffect(() => {
        fetch('/words.json')
            .then(res => res.json())
            .then(data => {
                setwords(data.words)
            }).catch(err => console.log(err))
    }, [])

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