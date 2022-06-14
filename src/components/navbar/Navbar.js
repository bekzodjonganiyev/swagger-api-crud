import React from 'react'
import { NavLink } from 'react-router-dom'
import AlphaLogo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>

            <div  className='navbar-left'>
                <img className="logo" src={AlphaLogo} alt="logo" width="51px" height="auto" />
                <h1>AlphaSoft</h1>
            </div>

            <div className='btns'>
                <NavLink className="link" to="/">Log In</NavLink>
                <NavLink className="link" to="/register">Register</NavLink>
            </div>
        </nav>
    )
}

export default Navbar