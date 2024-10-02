import React from 'react'
import BasicPie from '../BasicPie/BasicPie'

const StatsChart = () => {
    const pieData = [
        { id: 0, value: 1000, label: "Hon's 2019" },
        { id: 1, value: 2000, label: "Hon's 2020" },
        { id: 2, value: 3000, label: "Hon's 2021" },
        { id: 3, value: 2500, label: "Hon's 2022" },
        { id: 4, value: 4000, label: "Hon's 2023" }
      ]
  return (
    <>
     <div className='mx-auto flex justify-center text-center items-center flex-col '>
      <h1 className='text-center text-3xl font-bold my-10'>Our Success (Last 5 years)</h1>
      <div className='mr-10 mb-10'>
      <BasicPie pieData={pieData} />
      </div>
     </div>
    </>
  )
}

export default StatsChart