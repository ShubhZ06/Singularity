'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2025-12-31T00:00:00'); // Example date
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 mt-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <span className="text-4xl font-orbitron text-white">{value.toString().padStart(2, '0')}</span>
                    <span className="text-sm text-gold-500 uppercase">{unit}</span>
                </div>
            ))}
        </div>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-4 leading-tight tracking-wider"
            >
                Singularity
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <h2 className="text-2xl md:text-4xl font-orbitron text-gold-500 mb-8">
                    Build the Future of the Galaxy
                </h2>
                <p className="text-xl md:text-2xl font-inter text-gray-300 mb-8">
                    December 31st, 2025 • Virtual
                </p>
                <button className="relative px-12 py-4 rounded-full font-orbitron font-semibold text-white text-xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_45px_rgba(255,255,255,0.45)] transition-all duration-500 overflow-hidden">
                    <span className="relative z-10">Register via Devfolio</span>
                    {/* Soft Glow Behind */}
                    <span className="absolute inset-0 bg-white/10 blur-2xl opacity-40" />
                    {/* Inner Shine Layer */}
                    <span className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-20" />
                    {/* Tiny Particles */}
                    <span className="absolute inset-0 overflow-hidden">
                        <span className="absolute w-1 h-1 bg-white/70 rounded-full top-2 left-6 animate-ping"></span>
                        <span className="absolute w-1 h-1 bg-white/60 rounded-full top-5 left-10 animate-pulse"></span>
                        <span className="absolute w-1 h-1 bg-white/50 rounded-full top-3 left-20 animate-ping"></span>
                    </span>
                </button>
                <Countdown />
            </motion.div>
        </section>
    );
};

export default Hero;
