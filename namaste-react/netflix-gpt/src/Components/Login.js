import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true)

    const togglesignInEvent=()=>{
        setSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div  className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='bgImage'/>
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {
                !isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>
            }
            <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={togglesignInEvent}>{isSignInForm?"New to netflix? Sign Up Now":"Already registered sign In?"}</p>
        </form>
    </div>
  )
}

export default Login