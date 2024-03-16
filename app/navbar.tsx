'use client'

import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {

    useEffect(() => {
        window.onscroll = function () {
            const header = document.querySelector('nav');
            if (header) {
                if (window.scrollY > 10) {
                    header.classList.add('navbar-fixed')
                } else {
                    header.classList.remove('navbar-fixed')
                }
            }
        }
    }, []);

    function handleClick() {
        document.getElementById('hambuger')?.classList.toggle('hamburger-active')
        document.getElementById('nav-menu')?.classList.toggle('hidden')
    }


    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center z-[9999999] p-3 lg:p-0">
            <div className="container ">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <Link href="/">
                            <span className="text-lg lg:text-2xl font-bold text-white">TRAVELLING<span className="text-warning">GO</span></span>
                        </Link>
                    </div>
                    <div className="flex items-center px-4">
                        <button type="button" id="hambuger" name="hambuger"
                            className={'block absolute right-4 lg:hidden'} onClick={handleClick}>
                            <span className="hamburger-line transition duration-300"></span>
                            <span className="hamburger-line transition duration-300"></span>
                            <span className="hamburger-line transition duration-300"></span>
                        </button>

                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none text-accent">
                            <ul className="block lg:flex font-semibold">
                                <li className="group">
                                    <Link href="/">
                                        <span className="py-2 mx-8 group-hover:text-primary">Home</span>
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="/about">
                                        <span className="py-2 mx-8 group-hover:text-primary">About</span>
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="/contact">
                                        <span className="py-2 mx-8 group-hover:text-primary">Contact</span>
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="/blog">
                                        <span className="py-2 mx-8 group-hover:text-primary">Blog</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </nav >
    )
}
