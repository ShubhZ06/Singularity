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
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8 text-center">
                Mission <span className="text-gold-500">Partners</span>
            </h2>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center"
            >
                <p className="text-lg md:text-xl text-gray-300 mb-12 font-inter">
                    Join us in launching the next generation of builders. Partner with Singularity to empower innovators and shape the future of technology.
                </p>
                
                <motion.button
                    onClick={handleSponsorClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-yellow-600 rounded-lg font-orbitron font-bold text-black text-lg shadow-lg hover:shadow-gold-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                    <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Become a Sponsor
                    <motion.span
                        className="absolute inset-0 rounded-lg bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-500 mt-6 font-inter"
                >
                    Support innovation • Build connections • Shape the future
                </motion.p>
            </motion.div>

            {/* Sponsor Logos Grid */}
            <div className="mt-20 max-w-5xl mx-auto w-full px-4">
                {sponsorLogos.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
                        {sponsorLogos.map((sponsor, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative w-full h-24 group"
                            >
                                <Image 
                                    src={sponsor.image} 
                                    alt={sponsor.name} 
                                    fill 
                                    className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-30">
                        {/* Placeholders */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-24 w-full bg-white/10 rounded-lg flex items-center justify-center text-gray-400 border border-white/20 font-inter text-sm">
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
