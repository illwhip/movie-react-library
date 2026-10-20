import React from 'react'
import './Home.css'
import batman_symbol_1 from '../assets/batman_symbol_1.jpg'
import all_batman_actors from '../assets/all_batman_actors.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <>
   <header>
    <div className="row">
      <div className="container">
        <h1 className="header__title">The Legacy of <span className="text--color">Batman</span></h1>
        <h2 className="header__sub-title">Films through the decades</h2>
        <figure className="header__img--wrapper">
          <img className="header__img" src={all_batman_actors} alt="Faces of Batman" />
        </figure>
        <div className="header__sub-container">
          <p className="header--para">All your <span className='text--color'>Batman</span>  movies a click away.</p>
          <Link className="special__link" to="/pages/Movies">
            <button className="header__btn">
              <img className="header__btn--img" src={batman_symbol_1} alt='' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </header>
   </> 
  )
}

export default Home
