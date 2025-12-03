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
                <button className="px-8 py-4 bg-gold-500 text-black font-bold text-xl rounded-full hover:bg-gold-600 transition-all shadow-[0_0_20px_rgba(255,215,0,0.5)] font-orbitron">
                    Register via Devfolio
                </button>
                <Countdown />
            </motion.div>
        </section>
    );
};

export default Hero;
