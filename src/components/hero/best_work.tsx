import React from 'react'
import axios from 'axios'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const BestWork = async () => {

    function formatDateString(dateString: string) {
        const date = moment(dateString);
        return date.format("DD MMM, YYYY");
    }

    const { data } = await axios.get("https://osintambition.substack.com/api/v1/archive?sort=top&offset=0&limit=3")

    return (
        <div className='mx-auto max-w-5xl mt-28 mb-16'>
            <h2 className="text-3xl text-center mb-16 font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-neutral-200">
                Best of Osint Ambitions
            </h2>
            <div className="grid sm:grid-cols-3 gap-x-6 rounded-xl shadow-sm overflow-hidden px-5 space-y-4 md:space-y-0">
                {
                    data.map((blog: any, index: number) => {
                        return (
                            <div className="flex flex-col flex-[1_0_0%] bg-neutral-900/20" key={index}>
                                <Image src={blog.cover_image} loading='lazy' alt={`${blog.title}`} width={312} height={208} />
                                <div className="p-4 flex-1 md:p-5">
                                    <Link href={blog.canonical_url} title={blog.title}>
                                        <h3 className="text-lg font-bold text-gray-200">
                                            {blog.title}
                                        </h3>
                                    </Link>
                                    <Link href={blog.canonical_url} title={blog.subtitle}>
                                        <p className="mt-1 text-gray-300">
                                            {blog.subtitle}
                                        </p>
                                    </Link>
                                </div>
                                <div className="p-4 border-t border-gray-300/20 sm:px-5">
                                    <p className="text-xs text-gray-400">
                                        {formatDateString(blog.post_date)}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestWork