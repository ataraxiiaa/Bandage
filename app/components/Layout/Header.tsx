'use client'

import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileOpen, setisMobileOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 font-montserrat">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-black">Bandage</h1>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        <Link href="/">
                            <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</p>
                        </Link>
                        <Link href="/About">
                            <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Product</p>
                        </Link>
                        <Link href="/Pricing">
                            <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Pricing</p>
                        </Link>
                        <p className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact</p>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <p className="hover:text-blue-600 cursor-pointer text-sky-400 font-bold">Login</p>
                        <button
                            className="ml-4 px-4 py-2 rounded transition text-white"
                            style={{ backgroundColor: '#23A6F0' }}
                        >
                            Become a member
                            <ArrowRight className="inline ml-2" size={16} />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setisMobileOpen(!isMobileOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>


                {isMobileOpen && (
                    <div className='md:hidden flex flex-col items-center justify-end space-y-4 mt-5 bg-gray-50'>
                        <Link href="/" onClick={() => setisMobileOpen(false)}>
                            <p className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer mt-2">Home</p>
                        </Link>
                        <Link href="/About"  onClick={() => setisMobileOpen(false)}>
                            <p className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">Product</p>
                        </Link>
                        <Link href="/Pricing" onClick={() => setisMobileOpen(false)}>
                            <p className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer">Pricing</p>
                        </Link>
                        <Link href="#"  onClick={() => setisMobileOpen(false)}>
                            <p className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer mb-3">Contact</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar
