import React, { useEffect, useState } from 'react'
import Header from './header'


export default function Scores() {
    // get from local storage best scores
    const [bestScores, setbestScores] = useState([])

    useEffect(() => {
        let scores = localStorage.getItem('scores') || null
        setbestScores(JSON.parse(scores))
    }, [])

    return (
        <>
            <Header />
            <div className='scores'>
                <h2>Your Best Scores</h2>
                <img src='/assets/ranking.svg'/>
                <ul>
                    {bestScores ? bestScores.map(score => (
                        <li>- {score} word/min</li>
                    ))
                        : "No scores Found"
                    }
                </ul>
            </div>
            <a id='copy' href='https://github.com/mahmoud-irshaid'><img src='/assets/github.png' /> @2021 CopyRight By Mahmoud Irshaid</a>
        </>
    )
}
