"use client";

import React from 'react';
import {
    Shield,
    UserCheck,
    Cctv,
    ArrowRight,
    MessageCircle,
    Phone,
    CheckCircle2,
    Zap
} from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            title: "Guarding Division",
            tag: "24/7 Protection",
            description: "Highly trained armed and unarmed security guards for residential, commercial, industrial and government facilities.",
            icon: <Shield className="w-8 h-8" />,
            image: "Better Pixels/11.jpg",
            points: ["Armed & Unarmed Guards", "VIP & Executive Escort", "Event Security", "24/7 Security Support"],
            color: "from-blue-600 to-cyan-500"
        },
        {
            title: "Verification Services",
            tag: "Trusted Checks",
            description: "Strict recruitment and monitoring procedures including police verification, NADRA verification and regular site inspections.",
            icon: <UserCheck className="w-8 h-8" />,
            image: "/Pics/Service 1.jpg",
            points: ["Police & NADRA Verification", "Mobile Patrol Units", "Surprise Inspections", "Performance Monitoring"],
            color: "from-rose-600 to-orange-500"
        },
        {
            title: "Integrated Systems",
            tag: "Smart Surveillance",
            description: "Advanced electronic security solutions for complete risk management, surveillance and automated protection.",
            icon: <Cctv className="w-8 h-8" />,
            image: "/Pics/d.jpg",
            points: ["CCTV Surveillance Systems", "Access Control & Attendance", "Intrusion & Perimeter Protection", "Metal & Explosive Detection"],
            color: "from-emerald-600 to-teal-500"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="services">
            <div className="container mx-auto px-6">

                {/* --- Header Section --- */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
                        <Zap size={16} className="text-[#e11d48] animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-600">World Class Security</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                        OUR <span className="text-[#e11d48]">SERVICES</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium italic">
                        Professional security solutions available 24/7 across the country. We provide unmatched expertise in safeguarding your assets.
                    </p>
                </div>

                {/* --- Services Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group relative">
                            {/* Card Container */}
                            <div className="relative bg-white rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">

                                {/* Top Image Section */}
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${service.color} shadow-lg`}>
                                        {service.tag}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="px-6 pb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-slate-50 rounded-xl text-[#e11d48] group-hover:bg-[#e11d48] group-hover:text-white transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight">{service.title}</h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                        {service.description}
                                    </p>

                                    {/* Bullet Points */}
                                    <div className="space-y-3 mb-8">
                                        {service.points.map((point, pIndex) => (
                                            <div key={pIndex} className="flex items-center gap-3">
                                                <CheckCircle2 size={16} className="text-[#e11d48]" />
                                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{point}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTAs */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <a
                                            href="https://wa.me/+923008036902"
                                            className="flex items-center justify-center gap-2 py-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all active:scale-95"
                                        >
                                            <MessageCircle size={16} /> WhatsApp
                                        </a>
                                        <a
                                            href="tel:+923008036902"
                                            className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#e11d48] transition-all active:scale-95 shadow-lg"
                                        >
                                            <Phone size={16} /> Call Now
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom Arrow Decor */}
                                <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-[#e11d48] p-3 rounded-full text-white shadow-xl">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Trust Indicator --- */}
                <div className="mt-20 py-10 border-t border-slate-200 flex flex-wrap justify-center gap-12 grayscale opacity-50">
                    {/* Yahan aap client logos ya certificates add kar sakte hain */}
                    <div className="flex items-center gap-2 font-black text-slate-400 italic">AL AMAN SECURITY SOLUTIONS</div>
                    <div className="flex items-center gap-2 font-black text-slate-400 italic">NADRA VERIFIED</div>
                    <div className="flex items-center gap-2 font-black text-slate-400 italic">ISO CERTIFIED</div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;