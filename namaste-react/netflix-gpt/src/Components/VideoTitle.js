import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='border border-black bg-white text-black p-2 px-12 text-xl rounded-lg hover:bg-opacity-70'>▶ Play</button>
            <button className='border border-black bg-gray-500 text-white mx-3 p-2 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-0'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
