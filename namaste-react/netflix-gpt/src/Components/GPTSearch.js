import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMAGE } from '../utils/contants'

const GPTSearch = () => {
  return (
    <div>
    <div  className='fixed -z-10'>
            <img className='h-screen object-cover w-screen' src={BG_IMAGE} alt='bgImage'/>
        </div>
    <div className=''>
    <GPTSearchBar/>
        <GPTMovieSuggestions/>

    </div>
    </div>
  )
}

export default GPTSearch