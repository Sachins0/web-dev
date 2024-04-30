import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBg = ({movieId}) => {
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
  useMovieTrailer(movieId)
  return (
    <div>
      <iframe
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1"} 
      title="YouTube video player" >
      </iframe>
    </div>
  )
}

export default VideoBg