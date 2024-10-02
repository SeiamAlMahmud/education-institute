
import React from "react";

const Card = () => {

    return (
        <div className="min-w-[60%] max-w-[90%] relative bg-white shadow-md rounded-xl flex sm:flex-row flex-col gap-[20px] p-4">
            <div className="w-full sm:w-[50%] relative">
                <img
                    src="https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg?t=st=1722616951~exp=1722620551~hmac=88c27af52ea53d69a3f15a046cd8f7fe8c8036a5c733e1e1449b78bc68aeef24&w=360"
                    alt="image"
                    className="w-[100px] sm:w-[100px] h-[100px] object-cover rounded-full absolute top-[12rem]"
                />
            </div>

            <div className="">
                <h1 className="text-[1.4rem] font-bold leading-[24px]">Jhon Dee</h1>
                <span className="text-[0.9rem] text-gray-400">UI/UX Designer</span>

                <p className="text-gray-600 mt-3 text-[0.9rem]">UI is the saddle, the stirrups, & the reins. UX is
                    the feeling you get being able to ride the horse.</p>
            </div>
        </div>
    );
};

export default Card;
                    