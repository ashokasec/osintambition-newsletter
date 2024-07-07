"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const NavbarItems = () => {

    const path = usePathname()

    return (
        <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
            <div className="flex text-base flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                <a className={`font-medium border px-3 py-1 rounded-md ${path === "/" ? "text-theme bg-[#131b2a] border-theme/20 hover:bg-[#1a263d]" : "text-white border-transparent hover:text-gray-400"}`} href="/">Home</a>
                <a className={`font-medium border px-3 py-1 rounded-md ${path === "/sponsor" ? "text-theme bg-[#131b2a] border-theme/20 hover:bg-[#1a263d]" : "text-white border-transparent hover:text-gray-400"}`} href="/sponsor">Sponsor</a>
            </div>
        </div>
    )
}

export default NavbarItems