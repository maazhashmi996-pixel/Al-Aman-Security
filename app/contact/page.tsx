"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, LifeBuoy, Clock } from 'lucide-react';
import EliteTacticalFooter from '@/Components/Sections/EliteTractical';
import Navbar from '@/Components/Navbar/page';
import AlAmanHero from '@/Components/Sections/hero';

const ContactPage = () => {
    return (
        <div className="bg-[#020617] min-h-screen text-white">
            <Navbar />
            <AlAmanHero />

            {/* --- Hero Section --- */}
            <div className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#e11d48]/5 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#e11d48]/30 bg-[#e11d48]/10 mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-[#e11d48]" />
                        <span className="text-[#e11d48] text-[10px] font-bold uppercase tracking-[0.2em]">24/7 Response Unit</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
                        Contact <span className="text-[#e11d48] drop-shadow-[0_0_15px_rgba(225,29,72,0.3)]">Command</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
                        Deploy our elite security services or get immediate assistance from our tactical support team.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- Left Side: Tactical Contact Form --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <h2 className="text-2xl font-bold mb-8 uppercase italic flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#e11d48]"></span> Deployment Request
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input type="email" placeholder="john@security.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-lg p-4 outline-none focus:border-[#e11d48] transition-all text-white appearance-none">
                                    <option>VIP Protection Services</option>
                                    <option>Event Security Planning</option>
                                    <option>CCTV Installation Query</option>
                                    <option>Immediate Crisis Response</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message Intel</label>
                                <textarea rows={5} placeholder="Describe your security requirements..." className="w-full bg-black/40 border border-white/10 rounded-lg p-4 outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-white"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-black uppercase italic py-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#e11d48]/20"
                            >
                                Send Dispatch <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* --- Right Side: VIP Support Info --- */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* WhatsApp VIP Box */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-[#128c7e] to-[#075e54] p-8 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer"
                        >
                            <div className="relative z-10">
                                <MessageSquare className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-2xl font-black uppercase italic mb-2">Instant WhatsApp</h3>
                                <p className="text-white/80 mb-6 text-sm">Need immediate backup? Chat with our tactical coordinator now.</p>
                                <a href="https://wa.me/yournumber" target="_blank" className="bg-white text-[#075e54] px-6 py-3 rounded-full font-bold uppercase text-xs inline-block hover:shadow-lg transition-shadow">Start Secure Chat</a>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <MessageSquare size={150} />
                            </div>
                        </motion.div>

                        {/* Help Center / Info Cards */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-8">
                            <h3 className="text-xl font-bold uppercase italic flex items-center gap-2 text-[#e11d48]">
                                <LifeBuoy className="w-5 h-5" /> Help Center
                            </h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <Phone className="w-4 h-4 text-[#e11d48]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Emergency Line</p>
                                        <p className="text-lg font-bold">+92 300 1234567</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <Mail className="w-4 h-4 text-[#e11d48]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Official Intel</p>
                                        <p className="text-lg font-bold">ops@security.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <Clock className="w-4 h-4 text-[#e11d48]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Ops Hours</p>
                                        <p className="text-lg font-bold">24/7/365 Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Online Security Notice */}
                        <div className="p-6 border border-dashed border-white/20 rounded-2xl">
                            <div className="flex items-start gap-4 text-sm text-gray-400">
                                <ShieldCheck className="w-8 h-8 text-[#e11d48] shrink-0" />
                                <p><span className="text-white font-bold">Privacy Protocol:</span> All communication is encrypted. Your location and data are handled under strict military-grade security protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EliteTacticalFooter />
        </div>
    );
};

export default ContactPage;