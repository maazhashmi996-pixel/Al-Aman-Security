"use client";

import React from 'react';

// 1. Standard Heroicons (hi)
import {
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
    HiOutlineFingerPrint,
    HiOutlineVideoCamera,
    HiOutlineLockClosed,
    HiOutlineLightningBolt,
    HiOutlineClipboardCheck,
    HiOutlineSearch,
    HiOutlineEye,
    HiOutlineBell,
    HiOutlineCog
} from "react-icons/hi";

// 2. Fixed Imports (hi2) - MapPin aur Office yahan se aayenge
import {
    HiOutlineMapPin,
    HiOutlineBuildingOffice2
} from "react-icons/hi2";

// 3. Material Design & Other Icons
import {
    MdOutlineSecurity,
    MdOutlineVerifiedUser,
    MdOutlineScale,
    MdOutlineFactCheck,
    MdOutlineSettingsSuggest
} from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

const ServicesDetail: React.FC = () => {

    // VIP Feature Box Component
    const FeatureBox = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
        <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="text-3xl text-[#e11d48] group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <span className="text-[12px] font-black text-[#1a1a1a] uppercase tracking-widest leading-snug">
                {label}
            </span>
        </div>
    );

    return (
        <section className="bg-white py-32 px-6 overflow-hidden border-t border-gray-50" id="services-detailed">
            <div className="container mx-auto">

                {/* --- VIP Section Header --- */}
                <div className="flex flex-col items-center text-center mb-28 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-50 border border-red-100 mb-6 shadow-sm">
                        <IoDiamondOutline className="text-[#e11d48] animate-pulse" size={18} />
                        <span className="text-[#e11d48] font-black uppercase tracking-[0.4em] text-[10px]">Elite Protection Services</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-[#1a1a1a] uppercase italic tracking-tighter leading-[0.9]">
                        DETAILED <span className="text-gray-200">EXPERTISE</span>
                    </h2>
                    <p className="mt-8 text-xl text-gray-500 font-medium italic max-w-2xl">
                        A closer look at our specialized divisions, built on the pillars of discipline, technology, and absolute trust.
                    </p>
                </div>

                {/* --- 1. Guarding Division --- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-16 items-start mb-48">
                    <div className="lg:sticky lg:top-32 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-200/50 italic pointer-events-none group-hover:text-[#e11d48]/10 transition-colors">01</div>
                        <div className="p-5 bg-white rounded-2xl border border-gray-100 inline-block text-[#e11d48] shadow-md">
                            <HiOutlineShieldCheck size={40} />
                        </div>
                        <h3 className="text-5xl font-black text-[#1a1a1a] uppercase italic tracking-tighter leading-none">
                            Guarding <br /> <span className="text-[#e11d48]">Division</span>
                        </h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                            Highly trained armed and unarmed security guards delivering disciplined protection for high-stakes environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FeatureBox icon={<MdOutlineSecurity />} label="Armed & Unarmed Physical Guards" />
                        <FeatureBox icon={<HiOutlineUserGroup />} label="VIP Executive & VVIP Escort Services" />
                        <FeatureBox icon={<HiOutlineLightningBolt />} label="Professional Event Security Teams" />
                        <FeatureBox icon={<HiOutlineBuildingOffice2 />} label="Residential & Corporate Facility Guarding" />
                        <FeatureBox icon={<HiOutlineClipboardCheck />} label="24/7 Monitoring & Rapid Response Units" />
                        <FeatureBox icon={<HiOutlineMapPin />} label="Mobile Patrol & Surprise Inspections" />
                    </div>
                </div>

                {/* --- 2. Verification & Due Diligence --- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-16 items-start mb-48">
                    <div className="lg:sticky lg:top-32 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-200/50 italic pointer-events-none group-hover:text-[#e11d48]/10 transition-colors">02</div>
                        <div className="p-5 bg-white rounded-2xl border border-gray-100 inline-block text-[#e11d48] shadow-md">
                            <MdOutlineVerifiedUser size={40} />
                        </div>
                        <h3 className="text-5xl font-black text-[#1a1a1a] uppercase italic tracking-tighter leading-none">
                            Verification <br /> <span className="text-[#e11d48]">& Diligence</span>
                        </h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                            Strict recruitment screening including NADRA and Police verification to eliminate risks and ensure absolute trust.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FeatureBox icon={<HiOutlineFingerPrint />} label="NADRA Biometric CNIC Verification" />
                        <FeatureBox icon={<MdOutlineScale />} label="Police Character & Criminal History Check" />
                        <FeatureBox icon={<MdOutlineFactCheck />} label="Employment & Professional Background Search" />
                        <FeatureBox icon={<HiOutlineClipboardCheck />} label="Verified Security Personnel Deployment" />
                        <FeatureBox icon={<HiOutlineSearch />} label="Educational & Reference Due Diligence" />
                        <FeatureBox icon={<HiOutlineEye />} label="Ongoing Performance Integrity Audits" />
                    </div>
                </div>

                {/* --- 3. Integrated Security Systems --- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-16 items-start">
                    <div className="lg:sticky lg:top-32 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-200/50 italic pointer-events-none group-hover:text-[#e11d48]/10 transition-colors">03</div>
                        <div className="p-5 bg-white rounded-2xl border border-gray-100 inline-block text-[#e11d48] shadow-md">
                            <HiOutlineVideoCamera size={40} />
                        </div>
                        <h3 className="text-5xl font-black text-[#1a1a1a] uppercase italic tracking-tighter leading-none">
                            Integrated <br /> <span className="text-[#e11d48]">Systems</span>
                        </h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                            Advanced tech-driven security for risk management. From smart surveillance to perimeter protection and support.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FeatureBox icon={<HiOutlineEye />} label="AI-Powered CCTV Surveillance Systems" />
                        <FeatureBox icon={<HiOutlineLockClosed />} label="Smart Access Control & Time Attendance" />
                        <FeatureBox icon={<HiOutlineBell />} label="Intrusion & High-Risk Perimeter Alarms" />
                        <FeatureBox icon={<HiOutlineSearch />} label="Metal & Explosive Detection Tech" />
                        <FeatureBox icon={<MdOutlineSettingsSuggest />} label="Smart Fire & Threat Detection Sensors" />
                        <FeatureBox icon={<HiOutlineCog />} label="Proactive System Maintenance & Support" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesDetail;