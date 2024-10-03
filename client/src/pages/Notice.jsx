// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NoticeCard from "../components/Notice/NoticeCard/NoticeCard";
// import Pagination from "../components/Notice/Pagination/Pagination";

// // Simulated API URL (replace this with your actual API endpoint)
// const API_URL = "https://example.com/api/notices"; // Replace with actual API

// const Notice = () => {
//     const [notices, setNotices] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Function to fetch notices whenever the current page changes
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 // Making the API request with axios
//                 const response = await axios.get(`${API_URL}?page=${currentPage}`);
                
//                 // Assuming response structure:
//                 // response.data = { notices: [...], totalPages: X }
//                 setNotices(response.data.notices);
//                 setTotalPages(response.data.totalPages);
//             } catch (err) {
//                 setError("Failed to fetch notices. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [currentPage]);

//     return (
//         <div>
//             <div className="flex flex-col mx-auto w-[90%] xl:w-[70%] mt-16">
//                 <h2 className="text-left my-3 text-xl md:text-3xl font-bold border-b-2 border-b-pink-400 mb-6 pb-1">
//                     Notice
//                 </h2>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : error ? (
//                     <p className="text-red-500">{error}</p>
//                 ) : (
//                     <div className="flex flex-col gap-3">
//                         {notices.map((notice) => (
//                             <NoticeCard
//                                 key={notice.id}
//                                 title={notice.title}
//                                 content={notice.content}
//                                 date={notice.date}
//                             />
//                         ))}
//                     </div>
//                 )}
//                 <div>
//                     <Pagination
//                         currentPage={currentPage}
//                         setCurrentPage={setCurrentPage}
//                         totalPages={totalPages}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Notice;


import React from 'react'
import { ListWithIcon } from '../components/Homepage/ListWithIcon/ListWithIcon'
import NoticeCard from '../components/Notice/NoticeCard/NoticeCard'
import Pagination from '../components/Notice/Pagination/Pagination'

const Notice = () => {

    const MyOwnList = [
        {
            title: 'Item One',
            link: '/'
        },
        {
            title: 'Item One',
            link: '/'
        },
        {
            title: 'Item One',
            link: '/'
        },
        {
            title: 'Item One',
            link: '/'
        }
    ]

    const date = new Date()
    return (
        <div>
            <div className='flex flex-col mx-auto w-[90%] xl:w-[70%] mt-16'>
                <h2 className='text-left my-3 text-xl md:text-3xl font-bold border-b-2 border-b-pink-400 mb-6 pb-1'>Notice</h2>
                <div className='flex flex-col gap-3'>

                    {
                        MyOwnList.map((item, idx) => {
                            return (
                                <NoticeCard key={idx} date={date} />
                            )
                        })
                    }
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default Notice