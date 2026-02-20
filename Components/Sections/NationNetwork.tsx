"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, Globe, Navigation } from "lucide-react";

const NetworkPoint = ({ top, left, city, delay }: { top: string; left: string; city: string; delay: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ top, left }}
        className="absolute group cursor-pointer"
    >
        {/* Animated Ping Effect */}
        <span className="absolute -inset-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 m-auto"></span>
        </span>

        {/* City Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-blue-950 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-blue-800">
            {city}
        </div>
    </motion.div>
);

export default function NationwideNetwork() {
    const offices = [
        { city: "Karachi (HO)", top: "80%", left: "20%", delay: 0.2 },
        { city: "Lahore", top: "55%", left: "65%", delay: 0.4 },
        { city: "Islamabad", top: "40%", left: "60%", delay: 0.6 },
        { city: "Peshawar", top: "35%", left: "50%", delay: 0.8 },
        { city: "Quetta", top: "65%", left: "15%", delay: 1.0 },
        { city: "Multan", top: "65%", left: "50%", delay: 1.2 },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Interactive Map Visual */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative p-8 bg-white rounded-[3rem] shadow-2xl border border-slate-100"
                        >
                            {/* Pakistan Map Placeholder Image */}
                            <div className="relative min-h-[450px] w-full bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-dashed border-slate-200">
                                <img
                                    src="https://www.transparentpng.com/download/pakistan-map/pakistan-map-png-images-21.png"
                                    alt="Pakistan Network Map"
                                    className="w-full h-full object-contain opacity-20 grayscale scale-90"
                                />

                                {/* Dynamic Pins */}
                                {offices.map((office, idx) => (
                                    <NetworkPoint key={idx} {...office} />
                                ))}

                                {/* Statistics Floating Card */}
                                <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-50 p-2 rounded-lg">
                                            <Navigation className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-black text-slate-900 leading-none">25+</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sub-Offices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[2px] w-10 bg-red-600"></span>
                                <span className="text-red-600 font-black uppercase text-xs tracking-[0.3em]">Our Network</span>
                            </div>

                            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                                STRONG SECURITY <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                                    PRESENCE NATIONWIDE
                                </span>
                            </h2>

                            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                                Al-Arman Security (Pvt) Ltd operates across key cities and regions of Pakistan through a reliable network of offices and strategic partners. Our presence ensures rapid response and localized management.
                            </p>

                            {/* Service Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <Shield className="text-blue-900 w-8 h-8 mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-1">Local Response</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Dedicated local teams for immediate on-site support and coordination.</p>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <Globe className="text-red-600 w-8 h-8 mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-1">Central Monitoring</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">24/7 centralized command center for nationwide oversight.</p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-12 bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-colors"
                            >
                                Contact Regional Head
                            </motion.button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
