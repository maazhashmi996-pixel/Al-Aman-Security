"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function SecuritySupportCTA() {
    return (
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('/image_c46848.jpg')`, // Apni image ka sahi path dein
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Dark Tint Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

                {/* Left Side Purple/Indigo Diagonal Shape (As seen in image) */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-indigo-900/40 skew-x-[-15deg] -translate-x-20 blur-3xl pointer-events-none"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Sub-headline */}
                    <span className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                        Always Ready To Protect
                    </span>

                    {/* Main Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                        24/7 Security Support <br />
                        <span className="text-white/90">You Can Trust</span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                        Homeland Security (Pvt) Ltd provides round-the-clock security services with trained personnel
                        and continuous monitoring to ensure safety, reliability, and rapid response whenever you need protection.
                    </p>

                    {/* Red Contact Button (Styled exactly like the image) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="tel:04235708470"
                            className="flex items-center gap-4 bg-[#FF1E1E] text-white px-10 py-5 rounded-md shadow-[0_10px_40px_rgba(255,30,30,0.4)] transition-all hover:bg-red-700 border border-red-500"
                        >
                            <Phone className="w-6 h-6 fill-current" />
                            <span className="text-xl md:text-2xl font-black tracking-tighter">042-3570-8470</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Subtle Gradient for transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}