import React, { useState } from 'react'
import WorkCard from './work_card'
import axios from 'axios'
import moment from 'moment';

const BestWork = async () => {

    function formatDateString(dateString: string) {
        const date = moment(dateString);
        return date.format("DD MMM, YYYY");
    }

    const { data } = await axios.get("https://osintambition.substack.com/api/v1/archive?sort=top&offset=0&limit=3")


    console.log(data)

    return (
        <div className='mx-auto max-w-5xl mt-28 mb-16'>
            <h2 className="text-3xl text-center mb-16 font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-neutral-200">
                    Best of Osint Ambitions
                </h2>
            <div className="grid grid-cols-3 gap-x-6 rounded-xl shadow-sm overflow-hidden">
                {
                    data?.map((blog: any, index: number) => (
                        <div className="flex flex-col flex-[1_0_0%] bg-neutral-900/20">
                            <img className="w-full h-auto aspect-[16/10]" src={blog.cover_image} alt="Image Description" />
                            <div className="p-4 flex-1 md:p-5">
                                <h3 className="text-lg font-bold text-gray-200">
                                    {blog.title}
                                </h3>
                                <p className="mt-1 text-gray-300">
                                    {blog.subtitle}
                                </p>
                            </div>
                            <div className="p-4 border-t border-gray-300/20 sm:px-5">
                                <p className="text-xs text-gray-400">
                                    {formatDateString(blog.post_date)}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestWork