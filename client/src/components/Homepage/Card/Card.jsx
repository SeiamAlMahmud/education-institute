
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";

const Card = () => {

    return (
        <div className="min-w-[90%] md:min-w-[60%] max-w-[80%] sm:max-w-[60%] min-h-[15rem] h-auto mx-auto relative bg-red-50 bg-opacity-40 shadow-md rounded-xl flex sm:flex-row flex-col justify-center items-center gap-[20px] p-4 shadow-bro-200 mt-32">
            
                <img
                    src="https://randomimg.almahmud.top/boy"
                    alt="image"
                    className="w-[130px]  h-[130px] object-cover rounded-full absolute top-[-4rem]"
                />

            <div className="relative">
                <h1 className="text-[1.4rem] font-bold leading-[24px] text-center mt-20"> Professor Niaz Ahmed Khan, PhD</h1>
                <span className="text-[0.9rem] text-gray-400 text-center mx-auto flex justify-center my-4 font-semibold">Vice Chancellor</span>
    <i className="absolute text-brown-400 left-[-0.5rem]">
        <BiSolidQuoteLeft /></i>
        <i className="absolute text-brown-400 right-[-0.5rem] bottom-0">
        <BiSolidQuoteRight /></i>
                <p className="text-gray-600 mt-3 text-[0.9rem] px-4">
                                    Welcome to the official website of the University of Dhaka. It is an honor for me to serve as the Vice Chancellor of University of Dhaka and I hope that this website provides you with the necessary information that will meet your academic, research, and administrative needs. 

Established in 1921, the University of Dhaka has always been an integral part of the history of Bangladesh. In every critical juncture of the nation’s journey, be it the  ... 
                                    </p>
            </div>
        </div>
    );
};

export default Card;
                    