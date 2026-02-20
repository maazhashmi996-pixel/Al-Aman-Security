"use client";

import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

interface StatProps {
    percentage: number;
    title: string;
    description: string;
    colors: { stop1: string; stop2: string; shadow: string };
    id: string;
}

const StatCircle = ({ percentage, title, description, colors, id }: StatProps) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const [displayValue, setDisplayValue] = useState(0);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] transition-shadow duration-500 hover:shadow-2xl hover:shadow-gray-100"
        >
            <div className="relative w-44 h-44 flex items-center justify-center mb-8">
                {/* Soft Glow Effect behind circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`absolute inset-4 rounded-full blur-2xl opacity-20 ${colors.shadow}`}
                />

                <svg className="w-full h-full -rotate-90 drop-shadow-sm">
                    <defs>
                        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={colors.stop1} />
                            <stop offset="100%" stopColor={colors.stop2} />
                        </linearGradient>
                    </defs>

                    {/* Background Track */}
                    <circle
                        cx="88"
                        cy="88"
                        r={radius}
                        stroke="#F1F5F9"
                        strokeWidth="8"
                        fill="transparent"
                    />

                    {/* Animated Progress */}
                    <motion.circle
                        cx="88"
                        cy="88"
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

                {/* Counter Text */}
                <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-black text-slate-800 tracking-tight">
                        {displayValue}%
                    </span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] flex items-center">
                {title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
                {description}
            </p>
        </motion.div>
    );
};

export default function StatsSection() {
    const stats = [
        {
            p: 96,
            t: "Client Satisfaction Rate",
            d: "Based on 480+ successfully served clients and positive feedback.",
            colors: { stop1: "#06b6d4", stop2: "#3b82f6", shadow: "bg-cyan-400" },
            id: "sat"
        },
        {
            p: 95,
            t: "Operational Reliability",
            d: "Calculated from 1,200+ operations executed without incident.",
            colors: { stop1: "#f97316", stop2: "#ef4444", shadow: "bg-orange-400" },
            id: "rel"
        },
        {
            p: 97,
            t: "Guard Deployment Accuracy",
            d: "Out of 2,000+ assignments, guards deployed exactly as scheduled.",
            colors: { stop1: "#8b5cf6", stop2: "#d946ef", shadow: "bg-purple-400" },
            id: "acc"
        },
        {
            p: 96,
            t: "Crowd Control Effectiveness",
            d: "Measured during 90+ events for safe crowd control.",
            colors: { stop1: "#84cc16", stop2: "#10b981", shadow: "bg-lime-400" },
            id: "eff"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <StatCircle
                            key={index}
                            percentage={stat.p}
                            title={stat.t}
                            description={stat.d}
                            colors={stat.colors}
                            id={stat.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}