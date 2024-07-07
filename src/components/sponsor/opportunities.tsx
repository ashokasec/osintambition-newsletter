import React from 'react'

const Opportunities = () => {
    return (
        <div>
            <h3>Sponsorship Opportunities</h3>
            <p>We offer several ways for your company to gain visibility and engage with our audience</p>
            <ul className='list-decimal ml-5 text-gray-400/50'>
                <li>
                    <p className='pl-2 !mb-6'><span className='text-white font-bricolage font-bold'>Newsletter Sponsorship</span>:  Feature your brand in our newsletter, reaching thousands of subscribers directly in their inboxes. This includes:</p>
                    <ul className='text-gray-300 list-disc ml-6 leading-relaxed mb-8'>
                        <li className='pl-1'>A dedicated sponsor section in our newsletter.</li>
                        <li className='pl-1'>Custom content featuring your product or service.</li>
                        <li className='pl-1'>A call-to-action linking directly to your website or landing page.</li>
                    </ul>
                </li>
                <li>
                    <p className='pl-2 !mb-6'><span className='text-white font-bricolage font-bold'>Sponsored Blog Posts</span>: BCollaborate with us on a detailed blog post published on our Medium page, discussing your product, service, or any relevant topic. This includes:</p>
                    <ul className='text-gray-300 list-disc ml-6 leading-relaxed mb-8'>
                        <li className='pl-1'>In-depth analysis and coverage of your offerings.</li>
                        <li className='pl-1'>SEO-optimized content to increase visibility and search rankings.</li>
                        <li className='pl-1'>Promotion across our social media channels.</li>
                    </ul>
                </li>
                <li>
                    <p className='pl-2 !mb-6'><span className='text-white font-bricolage font-bold'>Social Media Promotion</span>: Gain additional exposure through our active social media channels. This includes:</p>
                    <ul className='text-gray-300 list-disc ml-6 leading-relaxed mb-8'>
                        <li className='pl-1'>Sponsored posts on platforms like Twitter, LinkedIn, and Facebook.</li>
                        <li className='pl-1'>Engagement campaigns to encourage interaction and shares.</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Opportunities