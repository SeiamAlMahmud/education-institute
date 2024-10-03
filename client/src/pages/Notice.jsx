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