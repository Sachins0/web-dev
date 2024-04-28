import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='absolute p-5 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-[148px]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
        {user && (<div className='flex h-9 gap-2'>
        <img className='w-12 h-12' src={user?.photoURL} alt='userImage'/>
        <button onClick={handleSignOut} className='border border-red-400 text-white bg-green-500 ' >Sign Out</button>
        </div>)}
        

    </div>
  )
}

export default Header