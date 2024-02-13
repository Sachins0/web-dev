import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
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
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100' >🔍 </button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt="user" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"/>
        </div>
    </div>
  )
}

export default Head