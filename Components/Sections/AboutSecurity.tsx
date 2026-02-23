import React from 'react';
import { Shield, Users, ThumbsUp, ArrowRight } from 'lucide-react';

const AboutSecurity: React.FC = () => {
    const features = [
        {
            title: "Close Protection",
            description: "Professional guards delivering discreet and reliable personal security with constant alertness and discipline.",
            icon: <Shield size={28} />,
            highlight: true
        },
        {
            title: "Trained Professionals",
            description: "Skilled security experts equipped with modern training, sharp awareness, and strong operational control.",
            icon: <Users size={28} />,
            highlight: false
        },
        {
            title: "Elite Bodyguards",
            description: "High-level bodyguards ensuring maximum safety through precision, experience, and absolute confidentiality.",
            icon: <ThumbsUp size={28} />,
            highlight: false
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-3/5">
                        <div className="mb-10">
                            <h4 className="text-[#e11d48] font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-[#e11d48]"></span>
                                About Al-Aman Security PVT LTD
                            </h4>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase mb-8 italic tracking-tighter">
                                We Provide <span className="text-[#e11d48]">Top-Class</span> <br />
                                Protection To Our Clients
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl">
                                Al-Aman Security (Pvt) Ltd is a trusted private security company delivering reliable,
                                professional, and customized protection services. With experienced personnel, modern
                                systems, and a client-focused approach, we ensure safety, confidence, and peace of mind at every level.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-8 transition-all duration-300 border-b-4 ${item.highlight
                                        ? 'bg-[#e11d48] text-white border-black shadow-xl shadow-red-200'
                                        : 'bg-white text-gray-800 border-gray-100 shadow-sm hover:shadow-md'
                                        }`}
                                >
                                    <div className={`mb-6 ${item.highlight ? 'text-white' : 'text-[#e11d48]'}`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image with Overlay */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src="pics/Service 2.jpg"
                                alt="Security Guard"
                                className="w-full h-full object-cover min-h-[500px]"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-0 right-0 bg-black text-white p-8 max-w-[200px]">
                                <p className="text-3xl font-black text-[#e11d48]">100%</p>
                                <p className="text-xs font-bold uppercase tracking-widest mt-1">Satisfaction Guaranteed</p>
                            </div>
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-100 -z-0 rounded-full blur-3xl opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSecurity;