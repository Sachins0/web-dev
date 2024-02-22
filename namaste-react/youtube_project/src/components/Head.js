import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery,setSearchQuery]=useState("")
    const[suggestion,setSuggestion]=useState([])
    const[showSuggestions,setShowSuggestions]=useState(false)

    const searchCache=useSelector((store)=>store.search)
    

    useEffect(()=>{

        const timer=setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSeachSuggestions();
            }
        },200)

        return ()=>{
            clearTimeout(timer)
        }

    },[searchQuery])

    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    const getSeachSuggestions=async()=>{
        //console.log(searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json=await data.json()
        setSuggestion(json[1])
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }))
    }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        
            <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
            
            <a href='/'>
            <img className='h-8 mx-2' alt="logo" src="https://t4.ftcdn.net/jpg/04/48/05/91/360_F_448059190_Y2reHnfTndMhocoaAX4UlK3AhnY5Iuyt.jpg"/>
            </a>
        </div>
        <div className='col-span-10 px-16'>
        <div>
            <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
            type='text' 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            />
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100' >🔍 </button>
            {showSuggestions &&
            (<div className='absolute bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                {suggestion.map((s)=>(
                    <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
                ))}
                    
                </ul>
            </div>)
            }
            </div>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt="user" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"/>
        </div>
    </div>
  )
}

export default Head
