import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/contants'
import { addGPTMovieResult } from '../utils/GPTSlice'


const GPTSearchBar = () => {

    const dispatch=useDispatch()

    const langKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)

    //search movie in TMDB
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', API_OPTIONS)
        const json=await data.json()

        return json.results
    }

    const handleGPTSearchClick=async()=>{
        //make an API cal to GPT API and get result

        const gptQuery="Act as a Movie Recommendation system and give some movie names atleast five for query in comma separatad format ,For exmaple:Gadar,Don,Avengers"+searchText.current.value

            const gptResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });

            const gptMovies=gptResults.choices?.[0].message?.content.split(",")


            const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie))

            const tmdbResults=await Promise.all(promiseArray)
            dispatch(addGPTMovieResult({movieName:gptMovies,movieResults:tmdbResults}))

    }

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar