"use client";

import React, { useState } from 'react';
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

    return (
        <nav className="w-full fixed top-0 z-50 shadow-md">
            {/* 1. Top Bar: Contact & Timings */}
            <div className="hidden md:flex bg-[#1a1a1a] text-white py-2 px-6 md:px-12 justify-between items-center text-sm border-b border-white/10">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#e11d48]" />
                        <span className="font-medium text-gray-300">Mon - Sat: 09:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                        <Mail size={14} className="text-[#e11d48]" />
                        <span className="font-medium text-gray-300">info@alamansecurity.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Follow Us:</span>
                    <Facebook size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                    <Instagram size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                    <MessageCircle size={16} className="hover:text-[#e11d48] cursor-pointer transition-colors" />
                </div>
            </div>

            {/* 2. Main Navbar */}
            <div className="bg-white py-4 px-6 md:px-12 flex justify-between items-center relative">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="bg-[#e11d48] p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
                        <ShieldCheck size={28} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-black text-[#1a1a1a] leading-none tracking-tighter uppercase">
                            Al Aman <span className="text-[#e11d48]">Security</span>
                        </h1>
                        <p className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">PVT LTD</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="text-sm font-black text-gray-800 uppercase tracking-widest hover:text-[#e11d48] transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e11d48] transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Call to Action Button */}
                    <div className="ml-4 flex items-center gap-4 bg-gray-50 p-2 rounded-full border border-gray-100 pr-6">
                        <div className="bg-[#e11d48] p-2 rounded-full text-white animate-pulse">
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Emergency Call</p>
                            <p className="text-sm font-black text-[#1a1a1a]">+92 300 8036902</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* 3. Mobile Sidebar Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}`}>
                <div className="flex flex-col p-6 gap-6">
                    {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-black text-gray-800 uppercase tracking-tighter border-b border-gray-50 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-[#e11d48] text-white py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3">
                        <Phone size={20} /> Call Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;