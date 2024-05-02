import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-3 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4'>
            <button className='border border-black bg-white text-black py-1 md:py-2 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-70'>▶ Play</button>
            <button className='hidden md:inline-block border border-black bg-gray-500 text-white mx-3 p-2 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-0'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
