import React from 'react'
import { IMG_CDN_URL } from '../utils/contants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;  
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt="moviePoster" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard