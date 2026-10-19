import React from 'react'
import './Footer.css'
import batman_symbol_2 from '../assets/batman_symbol_2.jpg'

const Footer = () => {
  return (
    <footer>
    <div class="row footer__row">
      <div class="container">
        <div class="footer__sub-container">
          <ul class="footer__links">
            <li><Link class="footer__link" href="index.html">Home</Link></li>
            <li><Link class="footer__link" href="movies.html">Movies</Link></li>
            <li><Link class="footer__link" href="">Contact</Link></li>
          </ul>
          <figure class="footer__img--wrapper">
            <img class="footer__img" src={batman_symbol_2} alt="Batman Logo" />
          </figure>
        </div>
        <p>&copy; 2026 Whipple Designs.  All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
