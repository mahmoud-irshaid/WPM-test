import React from 'react'
import Header from './header'


export default function about() {
    return (
        <>
            <Header />
            <div className='about'>
                <p>
                    This WPM test is designed to find out
                    how fast can you type, do your best in one minute 
                    with huge collection of easy, med and hard words.<br/>
                    Press the space bar after each word.<br/>
                    After finishing your test you will get your score
                    in WPM {'('}word per minute{')'} and CPM {'('}charecter per minute{')'}.
                    Your best three scores will be saved in the scores page. Good Luck ! 
                </p>
            </div>
            <a id='copy' href='https://github.com/mahmoud-irshaid'><img src='/github.png' /> @2021 CopyRight By Mahmoud Irshaid</a>
        </>
    )
}
