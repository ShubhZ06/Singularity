'use client';

import { motion } from 'framer-motion';
import RippleButton from '@/components/animata/button/ripple-button';

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        if (typeof window !== 'undefined' && window.lenis) {
            window.lenis.scrollTo(element, { offset: -60, duration: 1.4 });
        } else {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4 relative overflow-hidden">

            {/* Built with CIREX - Top Right */}
            <motion.a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: 1, 
                    y: 0
                }}
                transition={{ 
                    opacity: { duration: 1, delay: 1 },
                    y: { duration: 1, delay: 1 }
                }}
                className="absolute top-8 right-8 w-40 md:w-52 h-16 md:h-20 z-20 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
                <img 
                    src="/buildwithcirex.svg" 
                    alt="Built with CIREX" 
                    className="w-full h-full object-contain"
                />
            </motion.a>

            {/* Satellite Image */}
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    delay: 2.5,
                    ease: "easeOut"
                }}
                className="absolute top-20 left-0 md:-left-10 w-44 h-44 md:w-[27rem] md:h-[27rem] opacity-80 pointer-events-none z-0 hidden md:block"
            >
                <motion.img
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src="/Satellite.svg"
                    alt="Satellite"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                src="/lettering.svg"
                alt="Singularity"
                className="w-full max-w-2xl md:max-w-4xl h-auto relative z-10"
            />
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl md:max-w-3xl text-center tracking-wide relative z-10 px-4 -mt-6 sm:-mt-12"
            >
                <span className="text-gold-500 font-orbitron font-bold">Mission Accomplished.</span>{' '}
                <span className="text-gray-300 font-inter">Launching the Next Generation of Innovators for 2.0.</span>
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 mt-10 relative z-10"
            >
                <RippleButton type="button" onClick={() => scrollToSection('gallery')}>
                    Event Gallery
                </RippleButton>
                <RippleButton type="button" onClick={() => scrollToSection('sponsors')}>
                    Sponsors
                </RippleButton>
            </motion.div>
        </section>
    );
};

export default Hero;

