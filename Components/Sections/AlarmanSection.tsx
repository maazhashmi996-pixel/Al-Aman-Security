"use client";

import React, { useState } from "react";
import { motion, animate } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Interface for Props
interface StatProps {
    percentage: number;
    title: string;
    description: string;
    colors: { stop1: string; stop2: string; shadow: string };
    id: string;
}

const StatCircle = ({ percentage, title, description, colors, id }: StatProps) => {
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const [displayValue, setDisplayValue] = useState(0);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
        >
            <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                {/* Dynamic Glow Background */}
                <motion.div
                    className={`absolute inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${colors.shadow}`}
                />

                <svg className="w-full h-full -rotate-90 drop-shadow-sm">
                    <defs>
                        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={colors.stop1} />
                            <stop offset="100%" stopColor={colors.stop2} />
                        </linearGradient>
                    </defs>
                    <circle cx="72" cy="72" r={radius} stroke="#f8fafc" strokeWidth="8" fill="transparent" />
                    <motion.circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke={`url(#grad-${id})`}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                        variants={{
                            hidden: { strokeDashoffset: circumference },
                            visible: {
                                strokeDashoffset: circumference - (percentage / 100) * circumference,
                                transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                        onAnimationComplete={() => {
                            animate(0, percentage, {
                                duration: 2,
                                onUpdate: (latest) => setDisplayValue(Math.round(latest))
                            });
                        }}
                    />
                </svg>
                <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-800 tracking-tighter">
                        {displayValue}%
                    </span>
                </div>
            </div>

            <h4 className="text-lg font-extrabold text-slate-900 leading-tight mb-2 uppercase tracking-tight">
                {title}
            </h4>
            <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default function AlArmanSection() {
    // Stats data with matching property names to avoid TS errors
    const stats = [
        {
            percentage: 98,
            title: "Client Satisfaction",
            description: "Highest rated security provider in the region based on reviews.",
            colors: { stop1: "#1e3a8a", stop2: "#3b82f6", shadow: "bg-blue-600" },
            id: "sat"
        },
        {
            percentage: 95,
            title: "Operational Speed",
            description: "Swift emergency response within minutes across all zones.",
            colors: { stop1: "#b91c1c", stop2: "#ef4444", shadow: "bg-red-600" },
            id: "ops"
        },
        {
            percentage: 99,
            title: "Guard Punctuality",
            description: "Strict zero-delay deployment policy for every client shift.",
            colors: { stop1: "#15803d", stop2: "#22c55e", shadow: "bg-green-600" },
            id: "punc"
        },
        {
            percentage: 97,
            title: "Reliability Index",
            description: "Trust earned through consistent excellence in field operations.",
            colors: { stop1: "#a16207", stop2: "#eab308", shadow: "bg-yellow-600" },
            id: "rel"
        }
    ];

    const features = [
        "Security Consulting", "VIP Close Protection",
        "Event Security", "Industrial Safety",
        "Electronic Monitoring", "24/7 Rapid Response"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Hero Style Top Row */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6"
                        >
                            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">
                                Al-Arman Security Services
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter"
                        >
                            ELITE PROTECTION <br /> <span className="text-blue-900 underline decoration-red-600/20 underline-offset-8">YOU CAN TRUST.</span>
                        </motion.h2>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl font-medium">
                            Al-Arman Security (Pvt) Ltd delivers professional services backed by
                            highly trained commandos and years of strategic field experience.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                            {features.map((item, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="bg-red-50 p-1 rounded-md group-hover:bg-red-600 transition-colors duration-300">
                                        <CheckCircle2 className="text-red-600 group-hover:text-white w-4 h-4" />
                                    </div>
                                    <span className="font-extrabold text-slate-800 text-sm tracking-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Custom Styled Image */}
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                        <div className="relative h-[550px] w-full rounded-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white">
                            <img
                                src="pics/a.jpeg"
                                alt="Al-Arman Security Professional"
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
                                <p className="text-blue-900 font-black text-2xl tracking-tighter">EST. 2008</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Legacy of Safety</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCircle key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}