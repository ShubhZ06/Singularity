'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorLogos = [
    {
        name: 'Computer Society of India',
        tag: 'Technical Partner',
        image: '/computersocietyofindia-logo.jpeg',
    },
    {
        name: 'IDP Foundation Inc.',
        tag: 'Community Partner',
        image: '/idp-logo.jpeg',
    },
];

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-20 px-6 relative z-10 flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-14 text-center"
            >
                Mission <span className="text-gold-500">Partners</span>
            </motion.h2>

            {/* Framed Sponsor Cards Grid (Reduced Distance) */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-3xl mx-auto px-4">
                {sponsorLogos.map((sponsor, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' as const }}
                        className="w-full max-w-[320px] sm:max-w-[340px] rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] via-black/60 to-black/80 backdrop-blur-md border border-white/15 hover:border-gold-500/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all duration-300 flex flex-col items-center group cursor-default"
                    >
                        {/* Inner Logo Well */}
                        <div className="w-full h-44 sm:h-48 rounded-xl bg-white p-5 flex items-center justify-center shadow-inner overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image 
                                    src={sponsor.image} 
                                    alt={sponsor.name} 
                                    fill 
                                    unoptimized
                                    className="object-contain group-hover:scale-105 transition-transform duration-500" 
                                />
                            </div>
                        </div>

                        {/* Partner Name & Tag */}
                        <div className="mt-5 text-center flex flex-col items-center">
                            <span className="text-[10px] font-jetbrains-mono tracking-widest uppercase text-gold-500 mb-1">
                                {sponsor.tag}
                            </span>
                            <h3 className="font-orbitron font-bold text-white text-base sm:text-lg group-hover:text-gold-400 transition-colors leading-snug">
                                {sponsor.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Sponsors;
