import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li> <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>home</NavLink> </li>

                <li> <NavLink to="/about">about</NavLink> </li>

                <li> <NavLink to="/contact">contact</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar