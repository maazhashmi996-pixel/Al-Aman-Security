"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Navigation, Target, Zap } from "lucide-react";

const NetworkPoint = ({ top, left, city, delay }: { top: string; left: string; city: string; delay: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ top, left }}
        className="absolute group z-10"
    >
        {/* Elite Red Ping Effect */}
        <span className="absolute -inset-3 flex h-8 w-8">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 m-auto border-2 border-slate-950 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></span>
        </span>

        {/* Tactical City Label */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900/95 backdrop-blur-sm border border-slate-700 text-white text-[10px] font-black rounded uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-2xl z-20">
            {city}
        </div>
    </motion.div>
);

export default function NationwideNetwork() {
    // Realistic Pakistan Map coordinates for your PNG
    const offices = [
        { city: "Karachi (HQ)", top: "85%", left: "38%", delay: 0.2 },
        { city: "Lahore", top: "52%", left: "80%", delay: 0.4 },
        { city: "Islamabad", top: "35%", left: "72%", delay: 0.6 },
        { city: "Peshawar", top: "28%", left: "58%", delay: 0.8 },
        { city: "Quetta", top: "68%", left: "25%", delay: 1.0 },
        { city: "Multan", top: "60%", left: "65%", delay: 1.2 },
        { city: "Gwadar", top: "88%", left: "12%", delay: 1.4 },
    ];

    return (
        <section className="py-24 bg-slate-950 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Dark Map Visual */}
                    <div className="lg:w-1/2 relative w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-[4/5] sm:aspect-square bg-gradient-to-br from-slate-900/50 to-slate-950 rounded-[4rem] border border-slate-800/50 shadow-[0_0_60px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center"
                        >
                            {/* Tactical Grid Overlay - Fixed No Side Lines */}
                            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            {/* Transparent Pakistan Map Image */}
                            <img
                                src="unnamed.png" // Apni background-removed PNG yahan rakhein
                                alt="Pakistan Strategic Grid"
                                className="w-[85%] h-[85%] object-contain opacity-60 contrast-125 brightness-110 grayscale"
                            />

                            {/* Animated Network Points */}
                            {offices.map((office, idx) => (
                                <NetworkPoint key={idx} {...office} />
                            ))}

                            {/* Live Deployment Badge */}
                            <div className="absolute bottom-10 left-10 bg-black/60 backdrop-blur-xl border-l-4 border-red-600 p-5 rounded-2xl flex items-center gap-4 shadow-2xl">
                                <div className="h-10 w-10 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                                    <Target className="text-white w-5 h-5 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-white font-black text-lg leading-none tracking-tighter">LIVE FEED</p>
                                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Operational</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: High-Impact Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[3px] w-12 bg-red-600"></span>
                                <span className="text-red-500 font-black uppercase text-xs tracking-[0.5em]">Global Standards</span>
                            </div>

                            <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                                DEPLOYED <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                                    NATIONWIDE.
                                </span>
                            </h2>

                            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium max-w-lg">
                                Al-Arman Security provides an impenetrable shield across Pakistan. Our tactical grid ensures elite protection is active from Lahore to Peshawar.
                            </p>

                            {/* Service Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800 hover:border-red-600/30 transition-all group">
                                    <Zap className="text-red-600 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-white mb-2 uppercase text-sm tracking-widest">Rapid Units</h4>
                                    <p className="text-[12px] text-slate-500 leading-relaxed">Intervention teams stationed every 50km for instant support.</p>
                                </div>

                                <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800 hover:border-blue-600/30 transition-all group">
                                    <Globe className="text-blue-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-white mb-2 uppercase text-sm tracking-widest">Satellite Link</h4>
                                    <p className="text-[12px] text-slate-500 leading-relaxed">Every asset is tracked via our 24/7 central command center.</p>
                                </div>
                            </div>

                            {/* CTA Button & Trust Badge */}
                            <div className="flex items-center gap-8 flex-wrap">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl"
                                >
                                    Activate Protection
                                </motion.button>

                                <div className="flex flex-col">
                                    <span className="text-white font-black text-2xl tracking-tighter">1,200+</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Elite Guards</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}