
import React, { useState } from "react";

const Pagination = () => {
    // const [paginationNum, setPaginationNum] = useState(0);
    // const totalPageNumber = 5;
    // const updatePageNumber = (num) => {
    //     if (num > totalPageNumber - 1 || 0 > num) {
    //         return setPaginationNum(0);
    //     }
    //     setPaginationNum(num);
    // };

    // second pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-3 py-1 rounded-full  text-gray-700 hover:bg-teal-300 transition-all duration-300 transform hover:scale-105  ${
                        currentPage === i ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200"
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center mt-8 space-x-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3B9DF8] hover:text-[#fff] transition-all duration-300 text-sm sm:text-lg ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Previous
            </button>
            <div className="flex items-center space-x-2">
                {renderPageNumbers()}
            </div>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3B9DF8] hover:text-[#fff] transition-all duration-300 text-sm sm:text-lg ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
                    