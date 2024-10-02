import React from 'react'
import { FaBuildingColumns } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import bgImg from '../../../assets/world-student-day1.jpg'
import Numbers from '../Numbers/Numbers';
import { PiStudentThin } from "react-icons/pi";



const Stats = () => {
    return (
      <>
      <div className='px-5 mb-14'>
      <div className='my-7 mt-20'>
        <h1 className='text-center border-b-4 border-b-yellow-600 w-full md:w-[80%] pb-4 mx-auto text-2xl md:text-3xl font-bold'>Institute in Numbers</h1> 
      </div>
      <div className="relative w-full h-[750px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={bgImg}
          alt="University"
          className="object-cover w-full h-full"
          />

        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col md:flex-row md:gap-14 lg:gap-20 items-center justify-center">
          
          {/* Founded Section */}
          <div className="text-center text-white mb-8 flex flex-col justify-center items-center">
            <i className='my-4 p-6 rounded-full bg-blue-gray-100 bg-opacity-30  text-yellow-500'><FaBuildingColumns size={60} /></i>
            <div className="text-6xl font-bold"><Numbers value={2000} plus={false}/></div>
            <div className="text-2xl">Founded</div>
          </div>
  
          {/* Faculty Members Section */}
          <div className="text-center text-white mb-8 flex flex-col justify-center items-center">
          <i className='my-4 p-6 rounded-full bg-blue-gray-100 bg-opacity-30  text-yellow-500'><IoIosSchool size={60} /></i>
            <div className="text-6xl font-bold">
              <Numbers value={1900} />
              </div>
            <div className="text-2xl">Faculty Members</div>
          </div>
  
          {/* Students Section */}
          <div className="text-center text-white mb-8 flex flex-col justify-center items-center">
            <i  className='my-4 p-6 rounded-full bg-blue-gray-100 bg-opacity-30  text-yellow-500'><PiStudentThin size={60} /></i>
            <div className="text-6xl font-bold"><Numbers value={37000} step={500} /></div>
            <div className="text-2xl">Students</div>
          </div>
  
        </div>
      </div>
      </div>
          </>
    );
  };
  
  export default Stats;