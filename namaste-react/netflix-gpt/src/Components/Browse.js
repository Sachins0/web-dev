import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainCotainer from './MainCotainer'
import SecContainer from './SecContainer'
import usePopularMovies from '../hooks/usePopulaMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomigMovies'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      <MainCotainer/>
      <SecContainer/>
    </div>
  )
}

export default Browse