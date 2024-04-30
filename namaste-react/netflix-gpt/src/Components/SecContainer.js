import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
    <div className='-mt-52 pl-12 relative z-30'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    </div>
  )
}

export default SecContainer