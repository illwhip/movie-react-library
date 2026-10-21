import React from 'react'
import './MovieCard.css'

const MovieCard = ({ moviesData, loading }) => {


  return (

    <div className="movie">
      {loading ?  
      moviesData.slice(0, 6).map((movies) => (
        <div key={movies.imdbID} className="movie__card">
          <figure className="movie__cover--wrapper">
            <img className="movie__cover" src={movies.Poster} alt="Movie Cover" />
          </figure>
          <h4 className="movie__title">{movies.Title}</h4>
          <p>Release Date: <b>{movies.Year}</b></p>
        </div> 
      ))
       :  <div className="loading__state">
            <i className="fa-solid fa-spinner"></i>
          </div>
      }
    </div>  
  )
}

export default MovieCard
 