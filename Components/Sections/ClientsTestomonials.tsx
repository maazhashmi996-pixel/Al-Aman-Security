"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Zain Ahmad",
        role: "Corporate Client",
        review: "I visit homeland security office they are professional. Good looking and active security staff. I use homeland security commando for my family protection.",
        rating: 5
    },
    {
        name: "M. Usman",
        role: "Event Manager",
        review: "Excellent event management security. Their team handled our high-profile wedding event with extreme professionalism and zero glitches.",
        rating: 5
    },
    {
        name: "Sajid Khan",
        role: "Business Owner",
        review: "The best private security in Pakistan. Their quick response team is actually 'quick'. Highly recommended for commercial security.",
        rating: 5
    },
    {
        name: "Ahmed Raza",
        role: "VVIP Client",
        review: "Reliable and honest staff. The close protection unit is well-trained and very discreet. Perfect for sensitive security needs.",
        rating: 5
    }
];

export default function ClientTestimonials() {
    const [index, setIndex] = useState(0);
    const features = ["Highly Recommended", "Event Management", "Quick Response", "Digital Protection", "Reliable Security", "Professional Staff"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        /* pb-64 aur mb-20 ensure karta hai ke footer ka floating card yahan na charhay */
        <section className="relative pt-24 pb-64 mb-10 bg-[#f1f5f9] overflow-visible">

            {/* Indigo Tactical Decor - Skewed for modern look */}
            <div className="absolute top-0 left-0 w-[15%] h-full bg-[#1e1b4b] skew-x-[-4deg] -translate-x-16 z-0 shadow-2xl opacity-10 md:opacity-100" />

            <div className="container mx-auto px-6 relative z-10 lg:pl-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* 1. Left Side: Tactical Image with Floating Badges */}
                    <div className="lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl z-10"
                        >
                            {/* Aapki image_c694b4.jpg yahan display hogi */}
                            <img src="Pics/00000.jpeg" alt="HLS Tactical Team" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        {/* Feature Badges Overlay */}
                        <div className="absolute -bottom-8 -right-4 md:right-10 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 w-[280px]">
                            <div className="grid grid-cols-2 gap-3">
                                {features.slice(0, 6).map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-red-600 shrink-0" />
                                        <span className="text-[9px] font-black uppercase tracking-tighter text-slate-800 leading-none">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. Right Side: Dynamic Content Slider */}
                    <div className="lg:w-1/2 w-full pt-10">
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[2px] w-8 bg-red-600"></span>
                                <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em]">Testimonials</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                                WHAT CLIENTS <br /> <span className="text-indigo-950">SAY ABOUT US.</span>
                            </h2>
                        </div>

                        {/* Slider Container - Fixed Height for Stability */}
                        <div className="relative min-h-[350px] md:min-h-[280px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-50 relative"
                                >
                                    <Quote className="absolute top-6 right-8 text-slate-100 w-16 h-16 -z-0" />

                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(reviews[index].rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                                            ))}
                                        </div>

                                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic mb-8">
                                            "{reviews[index].review}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="h-14 w-14 rounded-2xl bg-indigo-950 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-200">
                                                {reviews[index].name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-lg leading-none">{reviews[index].name}</h4>
                                                <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">{reviews[index].role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-10">
                            <div className="flex gap-2">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-10 bg-red-600" : "w-3 bg-slate-300"}`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                                    className="p-4 rounded-2xl border border-slate-200 hover:bg-indigo-950 hover:text-white transition-all active:scale-90"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
                                    className="p-4 rounded-2xl border border-slate-200 hover:bg-indigo-950 hover:text-white transition-all active:scale-90"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}