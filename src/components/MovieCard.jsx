import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieCard = () => {


  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)


  async function fetchMovies() {
    const { data } = await axios.get('https://www.omdbapi.com/?apikey=6aff4282&s=batman')
    setMoviesData(data.Search)
    setLoading(true)
  }

  useEffect(()=>{
    fetchMovies()
  }, [])

  
  return (
    <div className="movie">
      {loading ?  
      moviesData.map((movies) => (
        <div key={movies.imdbID} className="movie__card">
          <figure className="movie__cover--wrapper">
            <img className="movie__cover" src={movies.Poster} alt="Movie Cover" />
          </figure>
          <h4 className="movie__title">{movies.Title}</h4>
          <p>Release Date: <b>{movies.Year}</b></p>
        </div> 
      ))
       : "turkey and cheese"}
    </div>  
  )
}

export default MovieCard
