'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800); // Wait for animation to finish before unmounting
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Background Overlay */}
            <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 1 }}
                animate={exit ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Ripple Effect */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
                animate={exit ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-gold-500/30"
                        initial={{ width: 0, height: 0, opacity: 0.8 }}
                        animate={{
                            width: '800px',
                            height: '800px',
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Logo Animation */}
            <motion.div
                layoutId="main-logo"
                className="relative w-40 h-40 z-10"
                transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
            >
                <Image src="/logo.svg" alt="Singularity Logo" fill className="object-contain" priority />
            </motion.div>
        </div>
    );
}
