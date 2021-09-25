import React, { useContext, useEffect, useState, useRef,lazy,Suspense } from 'react'
import correctFx from '../correct.wav'
import wrongFx from '../wrong.wav'
import Typer from './typer';
import { WordContext } from '../wordBankContext';

const Timer = lazy(() => import('./timer'))
const Word = lazy(() => import('./word'))
const Modal = lazy(() => import('./modal'))
const Header = lazy(() => import('./header'))

export default function Home() {
    let [score, setscore] = useState(0)
    let [score2, setscore2] = useState(0)
    let [time, settime] = useState(60)
    let [isPlaying, setisPlaying] = useState(false)
    let [currentWord, setcurrentWord] = useState('')
    let [newWord, setnewWord] = useState('')
    const [gameover, setgameover] = useState(false)
    let [cutter, setcutter] = useState(0)
    const [Started, setStarted] = useState(false)
    const [wordsList, setwordsList] = useState([])

    const ref = useRef();
    const ref2 = useRef();

    const { words  } = useContext(WordContext)

    const correctSound = new Audio(correctFx);
    const wrongSound = new Audio(wrongFx);


    // timer count 60 seconds
    useEffect(() => {

        // decrease the time 
        const interval = setInterval(() => {
            time >= 0 && Started ? settime(time--) : setisPlaying(false)
        }, 1000);

        //!Started && setWord()
        if (!Started ) {
            for (let i = 0; i < 1000; i++) {
                const index = Math.floor(Math.random() * words.length);
                wordsList[i] = words[index]
            }
            setWord()
        }


        // check if the game is over
        const interval2 = setInterval(() => {
            if (!isPlaying && time === 0) {
                setTimeout(() => {
                    setgameover(true)
                }, 1000);
            }
        }, 100);


        return () => {
            clearInterval(interval, interval2)
        }
    }, [Started])



    // set new word every time 
    const setWord = () => {
        setcurrentWord(wordsList[0] + ' ')
        setnewWord(wordsList.join(' '))
        ref.current.placeholder = wordsList[0]
    }



    // check the word from user 
    const chkWord = () => {
        let cuttedWord = ref.current.value.slice(cutter)
        if (currentWord[0] === cuttedWord) {
            if (currentWord.length > 0)
                setcurrentWord(currentWord.slice(cuttedWord.length))
            setcutter(++cutter)
            ref.current.className = 'correct'
        }
        else {
            ref.current.className = 'incorrect'
            wrongSound.play()
        }


        if (cuttedWord === currentWord && time > 0) {
            setisPlaying(true)
            setscore(score + 1)
            setscore2(score2 + wordsList[0].length)
            ref.current.value = ''
            setcutter(0)

            let correct = document.createElement('span')
            correct.innerHTML = wordsList[0] + ' '
            document.getElementById('correct').appendChild(correct)

            wordsList.splice(0, 1)
            setnewWord(wordsList.join(' '))
            setWord()
            correctSound.play()


        }
    }





    function getStarted() {
        setStarted(true)
    }




    useEffect(() => {
        if (score > 0) {
            let scores = localStorage.getItem('scores') || null
            if (scores === null) {
                scores = []
                localStorage.setItem('scores', scores)
            }
            else
                scores = JSON.parse(scores)

            scores.push(score)
            scores = scores.sort((a, b) => (b - a))
            scores.length > 3 && scores.splice(3)
            localStorage.setItem('scores', JSON.stringify(scores))
        }
    }, [gameover])



    function closeNav(params) {
        ref2.current.checked = false
    }

    {gameover && (ref.current.style='color:black;filter:contrast(.1)')}
    return (
        <>
            <Suspense><Header forwardRef={ref2} /></Suspense>
            <div className="container" onMouseDown={closeNav}>
                <div className="countersContainer">

                    <div className="counters scoreDiv">
                        <span className="score" >{score}</span>
                        <p>word/min</p>
                    </div>

                    <div className="counters" id="timerDiv">
                        <Suspense fallback={<div>Loading...</div>}><Timer time={time} /></Suspense>
                        <p>seconds</p>
                    </div>

                    <div className="counters scoreDiv">
                        <span className="score" >{score2}</span>
                        <p>chars/min</p>
                    </div>
                </div>
                <div className='wordsAndTyperDiv'>
                    <div className="wordsContainer">
                        <div>
                        <Suspense><Word word={newWord} /></Suspense>
                        </div>
                    </div>

                    <div className="typerContainer">
                    <Typer chkWord={chkWord} getStarted={getStarted} forwardedRef={ref}/>
                    </div>
                    {gameover && <p className='gameover'>Game Over !!!</p>}
                    <button id='restart' onClick={()=>window.location.reload()}>Restart <img src='/assets/restart.svg'/></button>

                    <div id='correct'></div>
                </div>
                {gameover && (ref.current.disabled = true)}
            </div>
            {gameover && <Suspense><Modal score={score} score2={score2}></Modal></Suspense>}

           <a id='copy' href='https://github.com/mahmoud-irshaid'><img src='/assets/github.png' /> @2021 CopyRight By Mahmoud Irshaid</a>
        </>
    )
}
