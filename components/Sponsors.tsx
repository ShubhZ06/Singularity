'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Image from 'next/image';

const sponsorLogos = [
    { name: 'Computer Society of India', image: '/computersocietyofindia-logo.jpeg' },
    { name: 'IDP Foundation', image: '/idp-logo.jpeg' },
];

const Sponsors = () => {
    const handleSponsorClick = () => {
        // Replace with your Google Form link
        window.open('', '_blank');
    };

    return (
        <section id="sponsors" className="min-h-screen py-20 px-6 relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 text-center">
                Mission <span className="text-gold-500">Partners</span>
            </h2>

            {/* Sponsor Logos Grid */}
            <div className="w-full max-w-5xl mx-auto px-4">
                {sponsorLogos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center justify-items-center">
                        {sponsorLogos.map((sponsor, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative w-full max-w-[400px] aspect-[3/2] group"
                            >
                                <Image 
                                    src={sponsor.image} 
                                    alt={sponsor.name} 
                                    fill 
                                    className="object-contain transition-transform duration-300 hover:scale-105" 
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center justify-items-center opacity-30">
                        {/* Placeholders */}
                        {[1, 2].map((i) => (
                            <div key={i} className="w-full max-w-[400px] aspect-[3/2] bg-white/10 rounded-lg flex items-center justify-center text-gray-400 border border-white/20 font-inter text-sm">
                                Logo Placeholder
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sponsors;
