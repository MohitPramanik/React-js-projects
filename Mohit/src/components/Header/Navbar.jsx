import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <NavLink to=''>Home</NavLink>
            </li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
            <li><NavLink to='services'>Services</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
