import React, { useRef } from 'react'


export default function Modal({ score, score2 }) {
    const ref = useRef()

    function closeModal() {
        ref.current.style = 'display:none'
    }
    return (
        <div className='modal' ref={ref}>
            <div className='modalinside'>
                <div className='closeModal'>
                    <span>Congrats !</span>
                    <img src='/delete.svg' onClick={closeModal} />
                </div>
                <p>Your score : </p>
                <b>{score}</b>
                <p>word/min</p>
                <b>{score2}</b>
                <p>char/min</p>
            </div>
        </div>
    )
}
