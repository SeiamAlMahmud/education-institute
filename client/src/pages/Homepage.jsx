import React, { useEffect } from 'react'
import { CarouselCustomArrows } from '../components/Carousol/CarouselCustomArrows'
import BlogsView from '../components/BlogsView/BlogsView'
import Stats from '../components/Homepage/Stats/Stats'
import StatsChart from '../components/Homepage/StatsChart/StatsChart'
import UpcommingNews from '../components/Homepage/UpcommingNews/UpcommingNews'
import Card from '../components/Homepage/Card/Card'
import CountdownTimer from '../components/Homepage/CountDownTimer/CountdownTimer'


const Homepage = () => {
  
 

  return (
    <>
    <div className='max-w-screen-xl mx-auto mt-4'>
        <CarouselCustomArrows />
    </div>
    <div className='max-w-screen-2xl mx-auto' >
        <BlogsView />
    </div>
    <div className='max-w-screen-xl mx-auto mt-4'>
        <Stats />
    </div>
    <div className='max-w-screen-xl mx-auto mt-4'>
        <StatsChart />
        <Card/>
        <UpcommingNews />
        <CountdownTimer />
    </div>
    
    </>
  )
}

export default Homepage