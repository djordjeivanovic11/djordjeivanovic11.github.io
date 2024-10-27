import React from 'react';
import NavbarItem from './NavbarItem';
import Link from 'next/link';
import { AiOutlineFilePdf } from 'react-icons/ai'; 
import { blackOpsOne, robotoMono } from '@/app/fonts/fonts';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
            <div className="flex items-center space-x-6">
                <NavbarItem href="/" text="Home" className={`${blackOpsOne.className} text-2xl hover:text-[#F5F5DC] transition-colors duration-300`} />
                <NavbarItem href="/about" text="About" className={`${blackOpsOne.className} text-2xl hover:text-transition-colors duration-300`} />
                <NavbarItem href="/projects" text="Projects" className={`${blackOpsOne.className} text-2xl hover:text-[#F5F5DC] transition-colors duration-300`} />
            </div>
            <div className="flex items-center space-x-6">
                <NavbarItem href="/contact" text="Contact" className={`${blackOpsOne.className} text-2xl hover:text-[#F5F5DC] transition-colors duration-300`} />
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button
                        title="Resume"
                        className={`${robotoMono.className} flex items-center p-2 text-white hover:bg-[#F5F5DC] rounded-full transition-all duration-300 transform hover:scale-105`}
                    >
                        <AiOutlineFilePdf size={24} />
                        <span className="hidden md:inline">Resume</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
