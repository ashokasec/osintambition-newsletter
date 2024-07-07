import OsintIndustries from "@/assets/sponsors/past/osint.ind.svg"
import UserSearch from "@/assets/sponsors/past/usersearch.svg"
import { ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const clients = [OsintIndustries, UserSearch]
const sponsors = [
    {
        imgSrc: OsintIndustries,
        alt: "Osint Industries",
        href: "https://osint.industries",
    },
    {
        imgSrc: UserSearch,
        alt: "User Search",
        href: "https://usersearch.ai",
    },
]

const SponsorCard = ({ image, alt, link }: { image: any, alt: string, link: string }) => {
    return (
        <div className="bg-gray-300/5 rounded-xl p-5 w-full h-full flex flex-col justify-between">
            <figure className="w-6 md:w-10">
            <Image src={image} layout="cover" alt={alt} />
            </figure>
            <p className="sm:text-2xl text-lg font-bricolage font-bold mt-4 my-1 text-white leading-tight md:leading-normal">{alt}</p>
            <Link href={link} target="_blank" className="flex font-bricolage underline text-[14px] leading-none items-center text-[#30a2ff] font-semibold">Visit Website <span className="ml-1"><ChevronRight size={19} /></span></Link>
        </div>
    )
}

export default function Clients() {
    return (
        <div className="mx-auto max-w-5xl mb-32 mt-40 md:px-20 lg:p-20 xl:p-0">
            <div className="flex flex-col flex-wrap items-center">
                <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-neutral-200 mb-12">
                    Our Sponsors
                </h2>
                <div className="max-w-5xl w-full gap-y-3 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-8 place-items-center items-center px-6">
                    {
                        sponsors.map((sponsor, index) =>
                            <SponsorCard
                                key={index}
                                image={sponsor.imgSrc}
                                alt={sponsor.alt}
                                link={sponsor.href}
                            />
                        )
                    }
                    <div className="bg-gray-300/5 rounded-xl p-5 w-full">
                        <Sparkles color="#fff" size={40} />
                        <p className="sm:text-2xl text-lg font-bricolage font-bold mt-4 my-1 text-white">Your Company</p>
                        <Link href="/sponsor" target="_blank" className="flex font-bricolage underline text-[14px] leading-none items-center text-[#30a2ff] font-semibold">Visit Website <span className="ml-1"><ChevronRight size={19} /></span></Link>
                    </div>
                </div>

                <h3 className="text-gray-400 mt-12 text-lg">Proud Supporters of Osint Ambition | Thank You</h3>
            </div>
        </div>

    )
}