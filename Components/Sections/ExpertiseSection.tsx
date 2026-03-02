"use client";

import React from 'react';
import {
    Shield,
    UserCheck,
    Cctv,
    Zap,
    ArrowRight,
    LucideIcon
} from 'lucide-react';

// 1. Data Structure ki Typing
interface DivisionItem {
    title: string;
    description: string;
    icon: React.ReactElement<LucideIcon>;
    points: string[];
    image: string;
    align: 'left' | 'right';
}

const ExpertiseSection: React.FC = () => {
    const divisions: DivisionItem[] = [
        {
            title: "Guarding Division",
            description: "Highly trained armed and unarmed security guards for residential, commercial, industrial and government facilities. We ensure total peace of mind.",
            icon: <Shield size={40} />,
            points: ["Armed & Unarmed Guards", "VIP & Executive Escort", "Event Security", "24/7 Security Support"],
            image: "Better Pixels/11.jpg",
            align: "left"
        },
        {
            title: "Monitoring & Background Checks",
            description: "We follow strict recruitment and monitoring procedures including police verification and NADRA verification for maximum safety.",
            icon: <UserCheck size={40} />,
            points: ["Police & NADRA Verification", "Mobile Patrol Units", "Surprise Inspections", "Performance Monitoring"],
            image: "Better Pixels/12.jpg",
            align: "right"
        },
        {
            title: "Integrated Security Systems",
            description: "Advanced electronic security solutions for complete risk management, surveillance and automated protection of your valuable assets.",
            icon: <Cctv size={40} />,
            points: ["CCTV Surveillance Systems", "Access Control & Time Attendance", "Intrusion & Perimeter Protection", "Metal & Explosive Detection"],
            image: "Better Pixels/13.jpeg",
            align: "left"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="container mx-auto">

                {/* --- Section Header --- */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="h-[2px] w-10 bg-[#e11d48]"></span>
                        <span className="text-[#e11d48] font-black uppercase tracking-[0.4em] text-xs">Our Core Divisions</span>
                        <span className="h-[2px] w-10 bg-[#e11d48]"></span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-[#1a1a1a] uppercase italic tracking-tighter leading-none">
                        UNMATCHED <span className="text-gray-300">EXPERTISE</span>
                    </h2>
                </div>

                {/* --- Divisions List --- */}
                <div className="space-y-40">
                    {divisions.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-32`}
                        >

                            {/* Image Side: Fixed Top Cut issue */}
                            <div className="w-full md:w-1/2 relative group">
                                {/* Decorative Background Glow */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e11d48]/5 rounded-full blur-3xl transition-all duration-700 group-hover:bg-[#e11d48]/10"></div>

                                {/* Main Image Container */}
                                <div className="relative z-10 overflow-hidden rounded-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(225,29,72,0.15)] bg-gray-50">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        // object-top use kiya hai taake head cut na ho, aur min-h set ki hai
                                        className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover object-top transition-all duration-1000 group-hover:scale-105"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Highlight Box */}
                                <div className={`absolute z-20 -bottom-8 ${item.align === 'left' ? '-right-8' : '-left-8'} hidden lg:block`}>
                                    <div className="bg-[#e11d48] p-8 shadow-2xl rounded-lg transform group-hover:rotate-6 transition-transform duration-500">
                                        <Zap className="text-white animate-pulse" size={32} />
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-[#e11d48] shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-[#e11d48] to-gray-100"></div>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 italic leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                                    {item.description}
                                </p>

                                {/* Points Grid */}
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-lg group/item hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 cursor-default">
                                            <div className="flex-shrink-0 w-2 h-2 bg-[#e11d48] rounded-full group-hover/item:scale-125 transition-all"></div>
                                            <span className="text-gray-700 font-bold uppercase text-[10px] tracking-[0.1em] group-hover/item:text-[#e11d48] transition-colors">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="group relative inline-flex items-center gap-5 text-[#1a1a1a] font-black uppercase text-sm tracking-[0.2em]">
                                    <span className="relative z-10 group-hover:text-[#e11d48] transition-colors">Explore Division</span>
                                    <div className="p-2 bg-[#1a1a1a] rounded-full group-hover:bg-[#e11d48] transition-all duration-300">
                                        <ArrowRight className="text-white group-hover:translate-x-1 transition-all" size={18} />
                                    </div>
                                    <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#e11d48] group-hover:w-full transition-all duration-500"></div>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertiseSection;