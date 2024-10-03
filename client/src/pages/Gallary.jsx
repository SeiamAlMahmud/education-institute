import React from 'react'
import ImageGallery from '../components/Gallary/ImageGallery/ImageGallery'

const Gallary = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-5'>
        <h1 className='text-center text-3xl my-10 text-black font-bold'>
        Gallary
        </h1>
        <ImageGallery />
    </div>
  )
}

export default Gallary