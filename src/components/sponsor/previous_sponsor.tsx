import Image from 'next/image'
import React from 'react'
import OsintInd from "@/assets/sponsors/past/website/osint.industries.png"
import UserSearch from "@/assets/sponsors/past/website/usersearch.ai_.png"
import { ExternalLink } from 'lucide-react'

const PreviousSponsor = () => {
    return (
        <div>
            <h3>Our Previous Sponsors</h3>
            <div className='grid grid-cols-2 gap-x-6 mt-6'>
                <div>
                    <a href="https://www.osint.industries/">
                        <figure className='rounded-xl overflow-clip shadow-xl shadow-gray-400/5 mb-4'>
                            <Image src={OsintInd} layout='cover' alt='Company' />
                        </figure>
                    </a>
                    <a href="https://www.osint.industries/" className='justify-center items-center font-bricolage font-semibold text-xl flex'>Osint Industries &nbsp;<ExternalLink size={18} /></a>
                </div>
                <div>
                    <a href="https://usersearch.ai/">
                        <figure className='rounded-xl overflow-clip shadow-xl shadow-gray-400/5 mb-4'>
                            <Image src={UserSearch} layout='cover' alt='Company' />
                        </figure>
                    </a>
                    <a href="https://usersearch.ai/" className='justify-center items-center font-bricolage font-semibold text-xl flex'>User Search &nbsp;<ExternalLink size={18} /></a>
                </div>
            </div>
        </div>
    )
}

export default PreviousSponsor