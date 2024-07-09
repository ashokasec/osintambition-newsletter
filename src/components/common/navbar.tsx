import Link from "next/link";
import NavbarItems from "./navbar_items";

export default function Navbar() {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 text-white fixed top-0 border-b border-gray-400/10 z-[100] bg-background/50 backdrop-blur-md">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                <a className="sm:order-1 flex-none text-xl font-bold font-bricolage" href="/">Osint Ambition</a>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <Link href="/sponsor" title="Osint Ambition Medium Publication" target="_blank" className="sm:hidden">
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-theme text-white font-bricolage hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Sponsor Us
                        </button>
                    </Link>
                    <Link href="https://publication.osintambition.org/" title="Osint Ambition Medium Publication" target="_blank" className="hidden sm:inline-block">
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-theme font-bricolage text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Publication
                        </button>
                    </Link>
                </div>
                <NavbarItems />
            </nav>
        </header>
    )
}