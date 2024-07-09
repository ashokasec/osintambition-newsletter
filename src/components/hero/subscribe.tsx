import SubstackWidget from "./input";

export default function Subscribe() {
    return (
        <div className="px-6">
            <div className="relative mx-auto max-w-5xl py-8 lg:py-16 md:pt-24 md:pb-20 flex items-center justify-center flex-col border-2 border-gray-700 rounded-3xl overflow-clip">
                <div className="absolute inset-[0] -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#10479f_100%)]"></div>
                <div className="flex items-center justify-center flex-col text-white max-w-full">
                    <h1 className="font-extrabold text-2xl md:text-[2.5rem] text-center">Get notified when we’re Publishing.</h1>
                    <p className="text-sm md:text-lg w-full px-4 text-center font-light text-[#d1d5db] leading-normal md:leading-relaxed mt-4 sm:mt-4 md:mt-6 mb-6">Sign up to receive exclusive updates and be the first to know when we are Publishing!</p>
                </div>
                <div className="flex items-center space-x-3 z-10">
                    <SubstackWidget />
                </div>
            </div>
        </div>

    )
}