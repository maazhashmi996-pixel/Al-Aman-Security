"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Next.js Link for page routing
import { usePathname } from 'next/navigation'; // To highlight active page
import {
    Phone,
    Mail,
    Clock,
    Menu,
    X,
    Facebook,
    Instagram,
    MessageCircle,
    ShieldCheck
} from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Current page ka path pata karne ke liye

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Items with their actual page paths
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`w-full fixed top-0 z-[100] transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>

            {/* 1. Top Bar (Desktop Only) */}
            <div className={`hidden md:flex bg-[#1a1a1a] text-white py-2 px-6 md:px-12 justify-between items-center text-sm border-b border-white/10 transition-all ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#e11d48]" />
                        <span className="font-medium text-gray-300 italic">Mon - Sat: 09:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                        <Mail size={14} className="text-[#e11d48]" />
                        <span className="font-medium text-gray-300 italic">info@alamansecurity.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Follow Us:</span>
                    <Facebook size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                    <Instagram size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                    <MessageCircle size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                </div>
            </div>

            {/* 2. Main Navbar */}
            <div className={`bg-white py-4 px-6 md:px-12 flex justify-between items-center relative transition-all ${scrolled ? 'py-3' : 'py-5'}`}>

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="bg-[#e11d48] p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
                        <ShieldCheck size={28} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-black text-[#1a1a1a] leading-none tracking-tighter uppercase italic">
                            Al Aman <span className="text-[#e11d48]">Security</span>
                        </h1>
                        <p className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">PVT LTD</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-black uppercase tracking-widest transition-all relative group ${isActive ? 'text-[#e11d48]' : 'text-gray-800 hover:text-[#e11d48]'}`}
                            >
                                {item.name}
                                {/* Underline effect for active and hover state */}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#e11d48] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        );
                    })}

                    {/* Emergency Call CTA */}
                    <a
                        href="tel:+923008036902"
                        className="ml-4 flex items-center gap-4 bg-gray-50 p-2 rounded-full border border-gray-100 pr-6 hover:bg-gray-100 transition-colors"
                    >
                        <div className="bg-[#e11d48] p-2 rounded-full text-white animate-pulse">
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Emergency Call</p>
                            <p className="text-sm font-black text-[#1a1a1a] tracking-tighter">+92 300 8036902</p>
                        </div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-800 hover:text-[#e11d48] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* 3. Mobile Sidebar Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}`}>
                <div className="flex flex-col p-6 gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-black uppercase tracking-tighter border-b border-gray-50 pb-2 transition-all ${isActive ? 'text-[#e11d48] pl-2' : 'text-gray-800'}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <a
                        href="tel:+923008036902"
                        className="bg-[#e11d48] text-white py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform"
                    >
                        <Phone size={20} /> Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;