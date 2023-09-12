import React from 'react'
import { NavLink } from "react-router-dom"
// import {HiOutlineMenuAlt4} from 'react-icons/hi'

function NavBar() {

  return (
    <div>
    <nav className='nav-container'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {/* <NavLink to="/dashboardLanding">Dashboard</NavLink>
        <NavLink to="/preferredView">PreferredView</NavLink> */}
        <NavLink to="/comment">Comment</NavLink>
        <NavLink to="/about">About</NavLink>
        {/* <button className='btn'>Sign In</button> */}
        {/* <div className='hamburger'><HiOutlineMenuAlt4 /></div> */}
        {/* <button className='btn'>Create Sign In</button> */}
        {/* <div className='hamburger'><HiOutlineMenuAlt4 /></div> */}
    </nav>
    </div>
    );
}

export default NavBar;