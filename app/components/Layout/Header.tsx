import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto px-4">
                <ul className="flex items-center justify-between h-16 font-montserrat">
                    <li>
                        <Link href="/">
                         <h1 className="text-2xl font-bold text-black">Bandage</h1>
                        </Link>
                    </li>
                    <li>
                        <div className="flex space-x-8">
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
                    </li>
                    <div className="flex items-center space-x-4">
                        <li>
                            <p className="hover:text-blue-600 cursor-pointer text-sky-400 font-bold">Login</p>
                        </li>
                        <li>
                            <button
                                className="ml-4 px-4 py-2 rounded transition text-white"
                                style={{ backgroundColor: '#23A6F0' }}
                            >
                                Become a member
                                <ArrowRight className="inline ml-2" size={16} />
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar