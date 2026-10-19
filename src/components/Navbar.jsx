import React from 'react'
import './Navbar.css'
import wayne_enterprises_logo from '../assets/wayne_enterprises_logo.jpg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <img className="nav__img" src={wayne_enterprises_logo} alt="Wayne Enterprises Logo" />
      <ul className="nav__links">
        <li><Link className="nav__link" to='/pages/Movies'><span>About</span></Link></li>
        <li><Link className="nav__link" to='/pages/Movies'><span>Movies</span></Link></li>
        <li><Link className="nav__link" to=''><span>Contact</span></Link></li>        
      </ul>
  </nav>
  )
}

export default Navbar
