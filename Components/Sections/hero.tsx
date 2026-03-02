"use client";

import React, { useState } from 'react';
import {
    ShieldCheck,
    PhoneCall,
    ArrowRight,
    Volume2,
    VolumeX
} from 'lucide-react';

const AlAmanHero: React.FC = () => {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <section className="relative w-full h-[700px] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black mt-[80px] md:mt-[100px]">

            {/* 1. Single Background Video Layer */}
            <div className="absolute inset-0 z-10">
                {/* Balanced Overlays: Isse left aur right dono side video ki visibility barabar hogi */}
                <div className="absolute inset-0 bg-black/40 z-20"></div> {/* Uniform dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-20"></div>

                <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    poster="/images/video-placeholder.jpg"
                    className="w-full h-full object-cover"
                >
                    <source src="/Pics/0002.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-30">
                <div className="max-w-4xl mx-auto md:mx-0 text-left">
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">

                        {/* Tagline */}
                        <div className="inline-flex items-center gap-3 bg-[#e11d48] text-white px-4 py-2 rounded-sm mb-6 shadow-lg shadow-red-900/20">
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Premier Protection Agency</span>
                            <div className="w-8 h-[1px] bg-white/50"></div>
                        </div>

                        {/* Main Title - Size adjusted from 8xl to 7xl for better fit */}
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 uppercase italic tracking-tighter">
                            ELITE <br />
                            <span className="text-[#e11d48]">SECURITY SERVICES</span>
                        </h1>

                        {/* Subtitle & Description */}
                        <div className="border-l-4 border-[#e11d48] pl-6 mb-10">
                            <h3 className="text-lg md:text-xl font-bold text-white/90 mb-3 uppercase tracking-widest flex items-center gap-3">
                                <ShieldCheck className="text-[#e11d48]" size={24} />
                                Unmatched Reliability
                            </h3>
                            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-medium">
                                Providing highly trained, disciplined security personnel and advanced
                                surveillance solutions. We safeguard your assets, executives, and
                                premises with 24/7 professional vigilance.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#e11d48] text-white px-7 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all group active:scale-95 shadow-xl">
                                Request Security
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>

                            {/* Sound Control */}
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="backdrop-blur-md bg-white/5 border border-white/20 text-white px-5 py-3.5 md:px-6 md:py-4 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3 active:scale-95"
                            >
                                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                {isMuted ? "Unmute" : "Mute"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Decorative Bottom Element */}
            <div className="absolute bottom-10 left-6 md:left-12 z-30 hidden md:block">
                <div className="flex items-center gap-4 text-white/30 font-black text-[10px] uppercase tracking-[0.4em]">
                    <div className="w-12 h-[1px] bg-[#e11d48]"></div>
                    ESTABLISHED IN EXCELLENCE
                </div>
            </div>

            {/* 4. Floating Emergency Contact */}
            <div className="hidden lg:flex absolute right-12 bottom-10 z-30 bg-white p-5 rounded-sm items-center gap-5 shadow-2xl border-b-4 border-[#e11d48]">
                <div className="bg-[#e11d48] p-3 text-white rounded-sm">
                    <PhoneCall size={20} />
                </div>
                <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Emergency 24/7</p>
                    <p className="text-lg font-black text-black leading-none">0300-8036902</p>
                </div>
            </div>

        </section>
    );
};

export default AlAmanHero;