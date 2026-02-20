"use client";

import React, { useState, useEffect } from 'react';
import {
    ChevronRight,
    ShieldCheck,
    Lock,
    Eye,
    PhoneCall,
    ArrowRight
} from 'lucide-react';

interface SlideContent {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: React.ReactNode;
}

const slides: SlideContent[] = [
    {
        title: "Professional Security Guards",
        subtitle: "Complete Reliability",
        description: "Highly trained and disciplined security guards ensuring round-the-clock protection for your property and assets.",
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1920&q=80",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Elite Executive Protection",
        subtitle: "VVIP Escort Services",
        description: "Specialized close protection services for high-profile individuals, executives, and public figures with maximum discretion.",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80",
        icon: <Lock size={32} />
    },
    {
        title: "Advanced Surveillance",
        subtitle: "24/7 Monitoring",
        description: "Cutting-edge CCTV monitoring and electronic security solutions to safeguard your premises from every angle.",
        image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&w=1920&q=80",
        icon: <Eye size={32} />
    }
];

const AlAmanHero: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[700px] md:h-screen min-h-[600px] flex items-center overflow-hidden bg-black mt-[80px] md:mt-[100px]">

            {/* 1. Background Slides with Ken Burns Effect */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    {/* Main Dark Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-20"></div>
                    <div className="absolute inset-0 bg-black/30 z-20"></div>

                    <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
            ))}

            {/* 2. Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-30">
                <div className="max-w-3xl">
                    <div key={current} className="animate-in fade-in slide-in-from-left-10 duration-1000">

                        {/* Tagline */}
                        <div className="inline-flex items-center gap-3 bg-[#e11d48] text-white px-4 py-2 rounded-sm mb-6 shadow-lg shadow-red-900/20">
                            <span className="text-xs font-black uppercase tracking-[0.3em]">We Supply Protection</span>
                            <div className="w-8 h-[1px] bg-white/50"></div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6 uppercase italic tracking-tighter">
                            {slides[current].title.split(' ')[0]} <br />
                            <span className="text-[#e11d48]">{slides[current].title.split(' ').slice(1).join(' ')}</span>
                        </h1>

                        {/* Subtitle & Description */}
                        <div className="border-l-4 border-[#e11d48] pl-6 mb-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-3 uppercase tracking-widest">
                                {slides[current].subtitle}
                            </h3>
                            <p className="text-lg text-gray-300 max-w-xl leading-relaxed font-medium">
                                {slides[current].description}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#e11d48] text-white px-8 py-4 font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all group active:scale-95">
                                Get a Quote
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Bottom Side Stats/Indicators */}
            <div className="absolute bottom-10 left-6 md:left-12 z-30 flex items-center gap-8">
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 transition-all duration-500 ${i === current ? 'w-16 bg-[#e11d48]' : 'w-6 bg-white/20'}`}
                        />
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-3 text-white/50 font-black text-xs uppercase tracking-widest">
                    <span className="text-white">0{current + 1}</span>
                    <div className="w-12 h-[1px] bg-white/20"></div>
                    <span>0{slides.length}</span>
                </div>
            </div>

            {/* 4. Floating Emergency Contact */}
            <div className="hidden lg:flex absolute right-12 bottom-10 z-30 bg-white p-6 rounded-sm items-center gap-6 shadow-2xl animate-bounce">
                <div className="bg-[#e11d48] p-4 text-white">
                    <PhoneCall size={24} />
                </div>
                <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Emergency Line</p>
                    <p className="text-xl font-black text-black leading-none">0300-8036902</p>
                </div>
            </div>

        </section>
    );
};

export default AlAmanHero;