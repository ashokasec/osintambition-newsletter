import SubstackWidget from "./input";
import SparklesText from "@/components/magicui/sparkle-text";

export default function Hero() {
    return (
        <>
            <div className="max-w-[85rem] mx-auto px-4 xl:px-20 my-24 lg:my-48 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h1 className="block text-4xl font-bricolage font-bold text-white text-center lg:text-7xl lg:leading-tight">Essential <SparklesText text="Osint" className="inline !font-bold" sparklesCount={5} colors={{first: '#fff', second: '#0081ff'}} /> Updates Delivered to Your Inbox</h1>
                    <p className="mt-3 text-base lg:text-lg text-center text-gray-300 px-6 lg:px-28">Don&#39;t miss out on the insights you need to excel in your intelligence gathering efforts and stay ahead in the world 🌏 of Open Source Intelligence.</p>
                    <div className="mt-16 hero-subs">
                        <SubstackWidget />
                    </div>
                    <div className="text-[15px] text-gray-500 mt-7 flex flex-col items-center">
                    <p className="text-center px-4">Join 650+ 😎 smart & curious readers uncovering the world of Osint</p>
                    <p>Its absolutely free 🔥</p>
                    </div>
                </div>
            </div>
        </>
    )
}2