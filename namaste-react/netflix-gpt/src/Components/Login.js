import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidDate } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch();

    const [isSignInForm,setSignInForm]=useState(true)

    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)

    const[errorMsg,setErrorMsg]=useState(null)

    const togglesignInEvent=()=>{
        setSignInForm(!isSignInForm)
    }

    const handleBtnClick=()=>{
        const message=checkValidDate(email.current.value,password.current.value)
        setErrorMsg(message);
        if(message) return

        //sign in/sign up logic
        if(!isSignInForm){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/149316445?v=4"
                      }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                        navigate('/browse')
                      }).catch((error) => {
                        setErrorMsg(error.message)
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                });

        }else{
            //sign in
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential) => {
                    navigate('/browse')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                 });
        }
    }

  return (
    <div>
        <Header/>
        <div  className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='bgImage'/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute p-12 bg-black w-3/12 my-36 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {
                !isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>
            }
            <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
            <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={togglesignInEvent}>{isSignInForm?"New to netflix? Sign Up Now":"Already registered sign In?"}</p>
        </form>
    </div>
  )
}

export default Login