"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ShieldCheck, Eye } from 'lucide-react';
import Navbar from '@/Components/Navbar/page';
import EliteTacticalFooter from '@/Components/Sections/EliteTractical';

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    // Sab IDs ko unique kar diya gaya hai (1 to 27)
    const photos = [
        { id: 1, src: "/Better Pixels/1.jpg", title: "VIP Protection", category: "Escort" },
        { id: 2, src: "/Better Pixels/2.jpg", title: "Tactical Training", category: "Training" },
        { id: 3, src: "/Better Pixels/3.jpg", title: "Night Surveillance", category: "Security" },
        { id: 4, src: "/Better Pixels/4.jpg", title: "Event Guarding", category: "Events" },
        { id: 5, src: "/Better Pixels/5.jpg", title: "Armed Response", category: "Quick Response" },
        { id: 6, src: "/Better Pixels/6.jpg", title: "Corporate Security", category: "Office" },
        { id: 7, src: "/Better Pixels/7.jpg", title: "Surveillance Ops", category: "Control" },
        { id: 8, src: "/Better Pixels/8.jpg", title: "Asset Protection", category: "Control" },
        { id: 9, src: "/Better Pixels/9.jpg", title: "K9 Patrol Unit", category: "Control" },
        { id: 10, src: "/Better Pixels/10.jpg", title: "Command Center", category: "Control" },
        { id: 11, src: "/Better Pixels/11.jpg", title: "Elite Guarding", category: "Control" },
        { id: 12, src: "/Better Pixels/12.jpg", title: "Tactical Unit", category: "Control" },
        { id: 13, src: "/Better Pixels/13.jpeg", title: "VIP Transport", category: "Control" },
        { id: 14, src: "/Better Pixels/14.jpg", title: "Night Ops", category: "Control" },
        { id: 15, src: "/Better Pixels/15.jpeg", title: "Rapid Response", category: "Control" },
        { id: 16, src: "/Better Pixels/16.jpeg", title: "Close Protection", category: "Control" },
        { id: 17, src: "/Better Pixels/17.jpeg", title: "Site Security", category: "Control" },
        { id: 18, src: "/Better Pixels/18.jpeg", title: "Crowd Control", category: "Control" },
        { id: 19, src: "/Better Pixels/19.jpeg", title: "Perimeter Watch", category: "Control" },
        { id: 20, src: "/Better Pixels/20.jpeg", title: "High-Risk Escort", category: "Control" },
        { id: 21, src: "/Better Pixels/21.jpeg", title: "Secure Logistics", category: "Control" },
        { id: 22, src: "/Better Pixels/22.jpeg", title: "Event Safety", category: "Control" },
        { id: 23, src: "/Better Pixels/23.jpeg", title: "Industrial Watch", category: "Control" },
        { id: 24, src: "/Better Pixels/24.jpeg", title: "Undercover Ops", category: "Control" },
        { id: 25, src: "/Better Pixels/25.jpeg", title: "Special Units", category: "Control" },
        { id: 26, src: "/Better Pixels/26.jpeg", title: "Technical Guarding", category: "Control" },
        { id: 27, src: "/Better Pixels/27.jpeg", title: "Strategic Defense", category: "Control" },
    ];

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#020617] pt-32 md:pt-40 pb-24 px-6">

                {/* --- VIP Header --- */}
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#e11d48]/30 bg-[#e11d48]/5 mb-6"
                    >
                        <ShieldCheck className="text-[#e11d48] w-5 h-5" />
                        <span className="text-[#e11d48] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                            Elite Security Surveillance
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
                        Operational <span className="text-[#e11d48] drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">Archive</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-[#e11d48] mx-auto mb-8 rounded-full"></div>
                </div>

                {/* --- Modern Grid Layout --- */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={`${photo.id}-${index}`} // Unique key fix
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.02 }}
                            onClick={() => setSelectedImg(photo.src)}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className="relative h-72 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0f172a] transition-all duration-500 group-hover:border-[#e11d48]/50 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.2)]">

                                {/* LIVE INDICATOR (Red Dot) */}
                                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e11d48]"></span>
                                    </span>
                                    <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Live View</span>
                                </div>

                                {/* Image */}
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Elite Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                        <span className="text-[#e11d48] text-[10px] font-bold uppercase tracking-widest bg-black/50 px-2 py-1 rounded">
                                            {photo.category}
                                        </span>
                                        <h3 className="mt-2 text-lg font-black text-white uppercase italic leading-tight">
                                            {photo.title}
                                        </h3>
                                    </div>

                                    {/* View Button */}
                                    <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <Eye className="w-4 h-4 text-white/70" />
                                        <span className="text-[10px] text-white/70 uppercase tracking-tighter">Expand Intel</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- VIP Lightbox --- */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/98 backdrop-blur-xl p-6"
                            onClick={() => setSelectedImg(null)}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                className="absolute top-10 right-10 text-white z-[1001]"
                            >
                                <X size={40} strokeWidth={1.5} />
                            </motion.button>

                            <motion.img
                                src={selectedImg}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="max-w-full max-h-[80vh] rounded-md border border-white/10 shadow-[0_0_100px_rgba(225,29,72,0.3)] object-contain"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <EliteTacticalFooter />
            </div>
        </>
    );

};

export default GalleryPage;
