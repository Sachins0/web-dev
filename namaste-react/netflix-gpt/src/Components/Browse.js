import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainCotainer from './MainCotainer'
import SecContainer from './SecContainer'
import usePopularMovies from '../hooks/usePopulaMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomigMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGPTSearch=useSelector((store)=>store.GPT.showGPTSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      {
        showGPTSearch?<GPTSearch/>:
        <>
        <MainCotainer/>
      <SecContainer/>
        </>
      }
    </div>
  )
}

export default Browse