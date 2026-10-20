import React from 'react'
import './Footer.css'
import batman_symbol_2 from '../assets/batman_symbol_2.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="row footer__row">
      <div className="container">
        <div className="footer__sub-container">
          <ul className="footer__links">
            <li><Link className="footer__link" to='/'>Home</Link></li>
            <li><Link className="footer__link" to="/pages/Movies">Movies</Link></li>
            <li><Link className="footer__link" to="/">Contact</Link></li>
          </ul>
          <figure className="footer__img--wrapper">
            <img className="footer__img" src={batman_symbol_2} alt="Batman Logo" />
          </figure>
        </div>
        <p>&copy; 2026 Whipple Designs.  All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
