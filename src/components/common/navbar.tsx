import Link from "next/link";
import NavbarItems from "./navbar_items";

export default function Navbar() {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 text-white fixed top-0 border-b border-gray-400/10 z-[100] bg-background/50 backdrop-blur-md">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                <a className="sm:order-1 flex-none text-xl font-semibold" href="#">OSINT Ambition</a>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <button type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <Link href="https://publication.osintambition.org/" title="Osint Ambition Medium Publication" target="_blank">
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-theme text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Publication
                        </button>
                    </Link>
                </div>
                <NavbarItems />
            </nav>
        </header>
    )
}