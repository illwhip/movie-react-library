import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Movies.css'
import wayne_tower from '../assets/wayne_tower.jpg'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

const Movies = () => {

  const navigate = useNavigate()
  
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [movieSearch, setMovieSearch] = useState('batman')

  

  async function fetchMovies(movieSearch, filter) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=6aff4282&s=${movieSearch}`)
    setMoviesData(data.Search)
        
    if (filter === false) {
    }
    else if (filter === 'FIRST_TO_LAST') {
    setMoviesData(moviesData.sort((a, b) => a.Year - b.Year));
    }
    else if (filter === 'LAST_TO_FIRST') {
    setMoviesData(moviesData.sort((a, b) => b.Year - a.Year));
    }     
    setLoading(true)
  }

  function createMovieCards () {
    setLoading(false)
    let inputField = document.getElementById("userInput");
    let value = inputField.value;    
    setMovieSearch(value)
    fetchMovies(movieSearch)
  }

  function searchMovies (key) {    
    if (key === 'Enter') {
      createMovieCards()
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      fetchMovies()
    }, 1000);
    // eslint-disable-next-line
  }, [])



  

  
  return (
    <>
    <header>
    <div className="movies__row">
      <div className="movies__container">
        <div className="movies__sub-container">
          <h1 className="header__title"><span className="text--color">Batman</span> Filmology</h1>
          <p>Discover all the <span className="text--color">Batman</span> movies from each generation, the actors that made them great and the various styles with which the Dark Knight has been portayed.</p>
        </div>
        <figure className="movie__header__img--wrapper">
          <img className="movie__header__img" src={wayne_tower} alt="" />
        </figure>
      </div> 
      <div className="search__bar">
        <input id="userInput" type="text" placeholder="Search other movies" onKeyDown={(event) => searchMovies(event.key)}></input>
        <div data-v-390ceb07="" className="search-wrapper"><svg data-v-390ceb07="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16" onClick={(e) => createMovieCards(e)}><path data-v-390ceb07="" fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" className=""></path></svg>
        </div>
      </div>
      <div className="search">        
        <button className="back__btn" onClick={() => navigate('/')}>← Back</button>        
        <select id="filter" defaultValue="DEFAULT" onChange={(event) => fetchMovies(event.target.value)}>
          <option value="DEFAULT" disabled>Sort</option>
          <option value="FIRST_TO_LAST">Oldest</option>
          <option value="LAST_TO_FIRST">Newest</option>
        </select>
      </div>      
    </div>
  </header>
  
  <section id="movie-collection">
    <div className="row movies__row">
      <div className="divider"></div>
      <div className="container">
        <div className="movie__list">
          
          <MovieCard moviesData={moviesData} loading={loading}/>
          
        </div>    
      </div>
      <div className="divider"></div>      
    </div>
  </section>
  </>
  )
}

export default Movies
