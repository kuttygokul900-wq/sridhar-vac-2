import React from 'react'
import './Navbar.css'
import { Link, link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul Classname ='Navbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar