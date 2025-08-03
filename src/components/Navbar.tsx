'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
    const pathname = usePathname(); 

    const navLinks = [
        { href: '/', label: 'SSG Page' },
        { href: '/csr', label: 'CSR Page' },
        { href: '/ssr', label: 'SSR Page' },
    ];

    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Shopeeh
                </Link>
                <div className="flex space-x-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`pb-1 transition-colors duration-200 ${
                                    isActive
                                        ? 'text-blue-400 border-b-2 border-blue-400 font-semibold' 
                                        : 'text-gray-300 hover:text-white' 
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}