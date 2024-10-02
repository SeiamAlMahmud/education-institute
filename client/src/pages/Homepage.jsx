import React, { useEffect } from 'react'
import { CarouselCustomArrows } from '../components/Carousol/CarouselCustomArrows'
import BlogsView from '../components/BlogsView/BlogsView'

const Homepage = () => {
  
 

  return (
    <>
    <div className='max-w-screen-xl mx-auto mt-4'>
        <CarouselCustomArrows />
    </div>
    <div className='max-w-screen-2xl' >
        <BlogsView />
    </div>
    </>
  )
}

export default Homepage