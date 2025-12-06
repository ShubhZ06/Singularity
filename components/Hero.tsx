'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RippleButton from '@/components/animata/button/ripple-button';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-01-17T00:00:00'); // Updated date
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
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4 relative overflow-hidden">

            {/* Satellite Image */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{
                    y: [0, -20, 0],
                    opacity: 1
                }}
                transition={{
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    opacity: {
                        duration: 1
                    }
                }}
                className="absolute top-20 left-0 md:-left-20 w-48 h-48 md:w-[30rem] md:h-[30rem] opacity-80 pointer-events-none z-0 hidden md:block"
            >
                <img src="/Satellite.svg" alt="Satellite" className="w-full h-full object-contain" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-4 leading-tight tracking-wider relative z-10"
            >
                Singularity
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col items-center relative z-10"
            >
                <h2 className="text-2xl md:text-4xl font-orbitron text-gold-500 mb-8">
                    Build the Future of the Galaxy
                </h2>
                <p className="text-xl md:text-2xl font-inter text-gray-300 mb-8">
                    January 17th - 18th, 2026 • 24hr Offline Event
                </p>
                <RippleButton onClick={() => window.open('https://luma.com/369a1jle', '_blank')}>
                    Register Now
                </RippleButton>
                <Countdown />
            </motion.div>
        </section>
    );
};

export default Hero;
