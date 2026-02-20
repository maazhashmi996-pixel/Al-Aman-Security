import React from 'react';
import {
    ShieldAlert,
    Users,
    UserCheck,
    Star,
    Target,
    ShieldCheck,
    ArrowUpRight
} from 'lucide-react';

const SecurityServices: React.FC = () => {
    const services = [
        {
            title: "Executive Protection",
            description: "Elite class protection by highly trained SSG commandos and ex-forces professionals ensuring maximum safety and discretion.",
            icon: <ShieldAlert size={32} />,
            highlight: true
        },
        {
            title: "Personal Security",
            description: "Reliable personal security services designed to protect individuals, families, and corporate personnel at all times.",
            icon: <UserCheck size={32} />,
            highlight: false
        },
        {
            title: "Event Security",
            description: "Professional event security ensuring crowd control, access management, and incident prevention for all types of events.",
            icon: <Users size={32} />,
            highlight: false
        },
        {
            title: "Celebrity Protection",
            description: "Discreet and professional security solutions for celebrities and public figures, ensuring privacy and smooth movements.",
            icon: <Star size={32} />,
            highlight: false
        },
        {
            title: "Bouncers",
            description: "Trained bouncers providing crowd management, access control, and safety at venues and high-profile events.",
            icon: <Target size={32} />,
            highlight: false
        },
        {
            title: "Bodyguards",
            description: "Licensed bodyguards for armed or unarmed deployment, offering close protection based on comprehensive risk assessment.",
            icon: <ShieldCheck size={32} />,
            highlight: false
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-10 left-0 w-full opacity-[0.03] pointer-events-none select-none">
                <h2 className="text-[15rem] font-black text-white leading-none uppercase tracking-tighter">
                    AL AMAN
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h4 className="text-[#e11d48] font-black uppercase tracking-[0.4em] text-xs mb-4">Our Services</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
                        Services <span className="text-[#e11d48]">We Provide</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#e11d48] mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Homeland Security (Pvt) Ltd delivers professional, reliable, and customized security services
                        designed to protect people, property, and assets with efficiency and confidence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-10 border border-white/5 transition-all duration-500 overflow-hidden ${service.highlight ? 'bg-[#e11d48]' : 'bg-black/40 hover:bg-black/60'
                                }`}
                        >
                            {/* Corner Accent for Non-highlighted cards */}
                            {!service.highlight && (
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-style-solid border-b-[40px] border-r-[40px] border-b-[#e11d48] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}

                            <div className={`mb-8 transition-transform duration-500 group-hover:-translate-y-2 ${service.highlight ? 'text-white' : 'text-[#e11d48]'
                                }`}>
                                {service.icon}
                            </div>

                            <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${service.highlight ? 'text-white' : 'text-white'
                                }`}>
                                {service.title}
                            </h3>

                            <p className={`text-sm leading-relaxed mb-8 font-medium ${service.highlight ? 'text-white/90' : 'text-gray-400 group-hover:text-gray-300'
                                }`}>
                                {service.description}
                            </p>

                            <button className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${service.highlight
                                    ? 'text-white border-b-2 border-white pb-1'
                                    : 'text-[#e11d48] hover:text-white'
                                }`}>
                                Read More
                                <ArrowUpRight size={16} />
                            </button>

                            {/* Subtle background number */}
                            <span className="absolute -bottom-4 -right-2 text-8xl font-black text-white opacity-[0.02] italic">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 p-10 bg-gradient-to-r from-[#1a1a1a] to-black border border-white/5 rounded-sm flex flex-col md:row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-black text-white uppercase italic">Need a customized security plan?</h4>
                        <p className="text-gray-500 font-medium">Contact our experts for a comprehensive risk assessment of your premises.</p>
                    </div>
                    <button className="bg-[#e11d48] text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap">
                        Get Started Now
                    </button>
                </div>

            </div>
        </section>
    );
};

export default SecurityServices;