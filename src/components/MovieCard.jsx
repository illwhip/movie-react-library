import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieCard = () => {


  const [moviesData, setMoviesData] = useState([])


  async function fetchMovies() {
    const { data } = await axios.get('https://www.omdbapi.com/?apikey=6aff4282&s=batman')
    setMoviesData(data)
  }

  useEffect(()=>{
    fetchMovies()
  },[])

  console.log(moviesData.Search)
  
  return (
    <div className="movie">
      {/* {moviesData.Search.map((movies) => (
        <div className="movie__card">
          <figure className="movie__cover--wrapper">
            <img className="movie__cover" src={movies.Poster} alt="Movie Cover" />
          </figure>
          <h4 className="movie__title">{movies.Title}</h4>
          <p>Release Date: <b>{movies.Year}</b></p>
        </div> 
      ))} */}
    </div>  
  )
}

export default MovieCard
