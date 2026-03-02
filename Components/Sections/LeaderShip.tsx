"use client";

import React from 'react';
import { FaLinkedinIn, FaUserTie } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoDiamondOutline } from "react-icons/io5";

const LeadershipSection = () => {
    const leaders = [
        {
            name: "Major Pervaiz Ali Khan",
            role: "Managing Director",
            company: "Al-Aman Security Services",
            image: "/vip/Major.jpg",
            bio: "Visionary leader ensuring the highest standards of security operations across the country."
        },
        {
            name: "Ch Tahir Mehmood Gujjar",
            role: "Director",
            company: "Administration & Legal Affairs",
            image: "/vip/Ch.jpg", // <--- Check extension: .jpg vs .jpeg vs .png
            bio: "Expert in legal compliance and administrative excellence, maintaining organizational integrity."
        },
        {
            name: "Azmat Nawaz Khanzada",
            role: "Director",
            company: "Al-Aman Security Services",
            image: "/vip/Azmat.jpeg",
            bio: "Strategist focused on growth and professional service delivery in the security sector."
        }
    ];

    return (
        <section className="py-32 bg-[#fcfcfd] overflow-hidden" id="leadership">
            <div className="container mx-auto px-6">

                {/* --- VIP Header --- */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
                        <IoDiamondOutline className="text-[#e11d48] animate-pulse" size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e11d48]">Executive Board</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                        OUR <span className="text-gray-300">LEADERSHIP</span>
                    </h2>
                </div>

                {/* --- Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {leaders.map((leader, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e11d48] to-orange-500 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

                            <div className="relative bg-white rounded-[2.3rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-full flex flex-col items-center text-center transition-all duration-500 group-hover:translate-y-[-5px]">

                                {/* --- IMAGE BOX (SMART FIX) --- */}
                                <div className="relative w-40 h-40 mb-8 p-1 rounded-full border-2 border-dashed border-gray-200 group-hover:border-[#e11d48] transition-colors duration-500">
                                    <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 ring-8 ring-gray-50 group-hover:ring-red-50 transition-all flex items-center justify-center">

                                        {/* Default Icon (Background mein rahega) */}
                                        <FaUserTie size={60} className="absolute text-slate-300 z-0" />

                                        {/* Main Image (Z-index 10 taake icon ke upar aaye) */}
                                        {leader.image && (
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="relative z-10 w-full h-full object-cover object-top"
                                                onError={(e) => {
                                                    // Agar image na mile to is element ko hide kar do, peeche icon nazar aayega
                                                    (e.currentTarget as HTMLImageElement).style.opacity = '0';
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic mb-2">
                                    {leader.name}
                                </h3>
                                <div className="px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:bg-[#e11d48] transition-colors">
                                    {leader.role}
                                </div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6 leading-tight">
                                    {leader.company}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 italic font-medium">
                                    "{leader.bio}"
                                </p>

                                {/* VIP Action Buttons */}
                                <div className="mt-auto flex gap-4">
                                    <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-[#e11d48] hover:bg-red-50 transition-all border border-slate-100">
                                        <HiOutlineMail size={20} />
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#e11d48] transition-all shadow-lg active:scale-95">
                                        View Profile
                                    </button>
                                    <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100">
                                        <FaLinkedinIn size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;