import Navbar from '@/components/common/navbar'
import Form from '@/components/sponsor/form'
import Opportunities from '@/components/sponsor/opportunities'
import HowWePromote from '@/components/sponsor/how_we_promote'
import PreviousSponsor from '@/components/sponsor/previous_sponsor'
import WhyUs from '@/components/sponsor/why_us'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="py-14">
                <div className="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(38,91,248,0.25),rgba(255,255,255,0))]"></div>
                <Navbar />
            </div>
            <section>
                <article className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-40 lekh">
                    <h1 className="mb-4 text-4xl font-bricolage font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl dark:text-white">Become a Sponsor</h1>
                    <div className='mt-24'></div>
                    <div className='text-start text-white'>
                        <h3 className='text-white text-xl font-bricolage font-bold border-b pb-2 border-gray-300/10'>Who we are?</h3>
                        <p>We are <span className='text-white font-bricolage font-bold'>Osint Ambition</span> and we are dedicated to providing high-quality content on <span className='font-bricolage'>Open Source Intelligence (OSINT)</span>, offering our readers the latest tips, tricks, and insights in the industry. Over the past year, our newsletter has grown into a trusted source of information, followed by thousands of enthusiasts and professionals alike.</p>
                        <WhyUs />
                        <PreviousSponsor />
                        <Form />
                        <Opportunities />
                        <HowWePromote />
                        <h4 className='text-4xl font-bricolage font-bold mt-16 text-center'>Thank you for your interest in partnering with OSINT Ambition!</h4>
                    </div>
                </article>
            </section>
        </>
    )
}

export default page