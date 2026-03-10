import React from 'react'
import Link from 'next/link'

import { FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="mx-auto flex justify-between items-end">
                <h1 className="flex items-end text-lg font-bold text-white">
                <Link href="/" className="text-white/90 no-underline hover:text-white">myblog</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/nils-kristian-pedersen-a980677b">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://nkped.github.io/">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/nkped">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </nav>
    )
}