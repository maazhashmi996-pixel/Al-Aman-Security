"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Phone, MapPin, Clock, Facebook, Instagram,
    Send, ShieldCheck, MessageSquare, ExternalLink
} from "lucide-react";

export default function EliteTacticalFooter() {
    return (
        /* mt-[180px] ensure karta hai ke upar wala section aur footer overlap na karein */
        <footer className="relative bg-[#020617] pt-64 pb-12 mt-[180px] overflow-visible">

            {/* 1. Floating Contact Card - Fixed Z-Index and Position */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-6xl z-[50]">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-10 border border-slate-100"
                >
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                            Ready To Get <br /><span className="text-indigo-950">Elite Protection?</span>
                        </h2>
                        <p className="text-slate-500 mt-4 text-lg font-medium">
                            Our tactical response units are standing by 24/7 across Pakistan.
                        </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                        <div className="relative w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Email for a quick quote"
                                className="w-full pl-8 pr-36 py-6 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-indigo-900 outline-none text-slate-900 font-bold shadow-inner"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-[#1e1b4b] text-white px-8 rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all flex items-center gap-2">
                                SEND <Send className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtly Textured Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* 2. Main Footer Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 p-3 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                <ShieldCheck className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white leading-none uppercase tracking-tighter">
                                    Al-Aman
                                </h3>
                                <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Security Guards</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium italic border-l-2 border-red-600/30 pl-6 py-1">
                            "Setting the gold standard in tactical security services for VVIPs, Corporates, and Events across Pakistan."
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, MessageSquare].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-900/80 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all border border-white/5">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Locations (Lahore & Karachi Combined for cleaner layout) */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Lahore */}
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-2 opacity-50">
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                                Lahore HQ
                            </h4>
                            <div className="flex gap-4">
                                <MapPin className="text-red-600 w-5 h-5 shrink-0" />
                                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                                    Office # 18/19 Waqar Heights, DHA Phase-1, Near Defence Mall.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-red-600 w-5 h-5 shrink-0" />
                                <span className="text-white font-bold text-lg tracking-tighter">042-3570-8470</span>
                            </div>
                        </div>

                        {/* Karachi */}
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-2 opacity-50">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                Lahore Division
                            </h4>
                            <div className="flex gap-4">
                                <MapPin className="text-red-600 w-5 h-5 shrink-0" />
                                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                                    H-No 78/A First Floor, Sheet # 2, Model Colony Malir.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-red-600 w-5 h-5 shrink-0" />
                                <span className="text-white font-bold text-lg tracking-tighter">021-3468-2040</span>
                            </div>
                        </div>
                    </div>

                    {/* Operational Status */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#0f172a]/80 p-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <Clock className="text-red-600 w-8 h-8" />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a] animate-pulse"></span>
                                </div>
                                <div>
                                    <span className="text-white font-black block text-xl tracking-tighter">Active 24/7</span>
                                    <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Tactical Ops Ready</span>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group">
                                VIEW GALLERY <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Copyright & Legal */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                            © 2026 Al-Aman Security (Pvt) Ltd.
                        </p>
                        <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></span>
                        <p className="text-slate-700 text-[10px] font-bold uppercase tracking-widest italic">
                            Approved by Govt. of Pakistan
                        </p>
                    </div>
                    <div className="flex gap-8">
                        {["Privacy Policy", "Terms", "Cookies"].map((item) => (
                            <a key={item} href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}