"use client";

import React from 'react';

const ClientScroller = () => {
    // Sab IDs ko unique kar diya gaya hai (1 se 17 tak)
    const logos = [
        { id: 1, name: "Organization 01", path: "/logos/1.jpg" },
        { id: 2, name: "Organization 02", path: "/logos/2.png" },
        { id: 3, name: "Organization 03", path: "/logos/3.jpg" },
        { id: 4, name: "Organization 04", path: "/logos/3.jpg" },
        { id: 5, name: "Organization 05", path: "/logos/4.jpg" },
        { id: 6, name: "Organization 06", path: "/logos/5.jpg" },
        { id: 7, name: "Organization 07", path: "/logos/6.png" },
        { id: 8, name: "Organization 08", path: "/logos/7.jpg" },
        { id: 9, name: "Organization 09", path: "/logos/8.png" },
        { id: 10, name: "Organization 10", path: "/logos/9.jpeg" },
        { id: 11, name: "Organization 11", path: "/logos/10.jpeg" },
        { id: 12, name: "Organization 12", path: "/logos/11.jpeg" },
        { id: 13, name: "Organization 13", path: "/logos/12.jpeg" },
        { id: 14, name: "Organization 14", path: "/logos/13.jpeg" },
        { id: 15, name: "Organization 15", path: "/logos/14.jpeg" },
        { id: 16, name: "Organization 16", path: "/logos/15.jpeg" },
        { id: 17, name: "Organization 17", path: "/logos/16.jpeg" },
        { id: 18, name: "Organization 18", path: "/logos/17.jpeg" },
    ];

    return (
        <section className="py-24 bg-[#020617] overflow-hidden border-t border-white/5">
            <style jsx>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-infinite-slider {
                    display: flex;
                    width: max-content;
                    animation: scroll 60s linear infinite;
                }
                .animate-infinite-slider:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
                    TRUSTED BY <span className="text-[#e11d48]">LEADING</span> ORGANIZATIONS
                </h2>
                <div className="w-24 h-1 bg-[#e11d48] mx-auto mb-6"></div>
                <p className="text-gray-400 font-medium italic">
                    We proudly provide security services to reputable companies across Pakistan.
                </p>
            </div>

            <div className="relative flex overflow-hidden group py-10">
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

                <div className="animate-infinite-slider">
                    {/* Unique Keys generated using loop index and item index */}
                    {[1, 2].map((loopNum) => (
                        <div key={`loop-${loopNum}`} className="flex">
                            {logos.map((logo, index) => (
                                <div
                                    key={`logo-${loopNum}-${logo.id}-${index}`}
                                    className="flex flex-col items-center justify-center w-48 md:w-64 mx-6 md:mx-10 group/item"
                                >
                                    <div className="h-16 md:h-24 w-full flex items-center justify-center">
                                        <img
                                            src={logo.path}
                                            alt={logo.name}
                                            className="max-h-full max-w-full object-contain grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-500"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <span className="mt-4 text-[9px] md:text-[11px] font-black text-white/10 uppercase tracking-[0.3em] group-hover/item:text-[#e11d48] transition-colors">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientScroller;