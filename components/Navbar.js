'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${inter.className} bg-white my-3   px-6 md:px-28 py-4 flex justify-between items-center relative`}>
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image
                    src="/images/Logo.png"
                    alt="RAJ SURGICAL Logo"
                    width={200}
                    height={200}
                />
            </Link>

            {/* Navigation Links - Right (Desktop) */}
            <div className="hidden lg:flex gap-14 font-[500] items-center">
                <Link href="/" className="text-gray-700 hover:text-primary text-sm  transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-primary text-sm transition-colors">About</Link>
                <Link href="/products" className="text-gray-700 hover:text-primary text-sm transition-colors">Product</Link>
                <Link href="/service" className="text-gray-700 hover:text-primary text-sm transition-colors">Service</Link>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors text-sm whitespace-nowrap"
                >
                    Contact
                </Link>
            </div>

            {/* Hamburger Menu - Mobile & Tablet */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
                aria-label="Toggle menu"
            >
                <span
                    className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                        }`}
                ></span>
                <span
                    className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                ></span>
            </button>

            {/* Mobile Menu - Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
                    <div className="flex flex-col gap-4 px-6 py-6 text-center p-1">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-primary text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-primary text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/products"
                            className="text-gray-700 hover:text-primary text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Product
                        </Link>
                        <Link
                            href="/service"
                            className="text-gray-700 hover:text-primary text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Service
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors text-sm inline-block mx-auto"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
