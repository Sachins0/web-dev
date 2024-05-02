import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
    const {movieResults,movieName}=useSelector((store)=>store.GPT)

    if(!movieName) return null

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div>
        {movieName.map((movieName,index)=>(
            <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))}
    </div>
    </div>
  )
}

export default GPTMovieSuggestions