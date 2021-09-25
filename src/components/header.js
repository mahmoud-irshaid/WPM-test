import Nav from "./Nav";
import { Link } from 'react-router-dom'


function Header ({forwardRef}){
        return (
            <header>
                <Link to='/Home'>
                <h1>WPM TEST</h1>
                </Link>
                <div className='menu'>
                    <div className='hamButton'>
                        <input type='checkbox' ref={forwardRef}/>
                        <div className='menuCover'></div>

                        <div className='links'>
                            <Nav />
                        </div>
                    </div>

                </div>
            </header>
        );
    
}

export default Header;