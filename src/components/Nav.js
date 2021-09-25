import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
            <nav>
                <ul>
                    <Link to='/WPM-test/Home'>
                        <li style={{animationDelay: '.25s'}}>Home</li>
                    </Link>

                    <Link to='/WPM-test/scores'>
                        <li style={{animationDelay: '.5s'}}>Scores</li>
                    </Link>

                    <Link to='/WPM-test/about'>
                        <li style={{animationDelay: '.75s'}}>About</li>
                    </Link>
                </ul>
            </nav>
    )
}
