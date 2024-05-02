import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/contants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  const showGPTSearch=useSelector((store)=>store.GPT.showGPTSearch)

  const handleSignOut=()=>{
    signOut(auth).then(() => {}).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    return ()=>unsubscribe()
  },[])

  const handleGPTSearch=()=>{
    dispatch(toggleGPTSearchView())
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className='absolute p-5 bg-gradient-to-b from-black z-10 w-screen flex-col md:flex-row justify-between '>
        <img className='w-[148px] mx-auto md:mx-0' src={LOGO_URL} alt='logo'/>
        {user && (<div className='flex h-9 justify-between'>
        {showGPTSearch && (<select className='h-12 p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {
          SUPPORTED_LANGUAGE.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))
        }
          
        </select>)}
        <button onClick={handleGPTSearch} className='h-12 py-2 px-4 bg-purple-800 text-white rounded-lg'>{showGPTSearch?"Home Page":"GPT Search"}</button>
        <img className='hidden md:block w-12 h-12' src={user?.photoURL} alt='userImage'/>
        <button onClick={handleSignOut} className='border border-red-400 text-white bg-green-500 ' >Sign Out</button>
        </div>)}
        

    </div>
  )
}

export default Header