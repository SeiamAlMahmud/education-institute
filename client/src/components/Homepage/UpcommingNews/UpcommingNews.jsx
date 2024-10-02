import React from 'react'
import { CardDefault } from '../CardDefault/CardDefault'

const UpcommingNews = () => {
  return (
    <div className='w-full mb-20 mx-auto'>
    <h2 className='text-left my-3 ml-3 pb-4 text-xl font-bold border-b-2 border-b-pink-400 w-72 hover:w-96 transition-all mb-5'>Upcomming Events</h2>
    <div className='grid place-items-center gap-5 md:gap-4 
   lg:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5'>
        <CardDefault />
        <CardDefault />
        <CardDefault />
    </div>
    </div>
  )
}

export default UpcommingNews