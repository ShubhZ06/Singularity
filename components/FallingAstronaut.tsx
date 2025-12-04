// components/FallingAstronaut.tsx
'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function FallingAstronaut() {
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();

    // Map scroll progress [0..1] -> vertical travel from -25vh to 120vh
    // Strings with units are supported by useTransform.
    const y = useTransform(scrollYProgress, [0, 1], ['120vh', '-25vh']);
    // X wobble: gentle horizontal drift across viewport
    const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['0vw', '-6vw', '6vw', '-3vw', '0vw']);

    // Rotation (subtle)
    const rotate = useTransform(scrollYProgress, [0, 1], ['-6deg', '12deg']);

    // Opacity: fade in as it rises and fade out near the top
    const opacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0.06, 1, 1, 0.06]);

    useEffect(() => {
        if (shouldReduceMotion) {
            // If user prefers reduced motion, optionally do nothing or keep a static subtle presence.
            // No extra action needed here, framer-motion's useReducedMotion can be used to bypass transforms.
        }
    }, [shouldReduceMotion]);

    return (
        <motion.div
            aria-hidden
            style={{
                y,
                x,
                rotate,
                opacity,
            }}
            className="pointer-events-none fixed left-[10vw] md:left-[75vw] top-0 z-9999 w-[110px] md:w-40 translate-y-0"
        >
            {/* Wrapper for local animations (helmet shine / tether swing) */}
            <div className="relative w-full h-full">
                <motion.div
                    className="w-full h-full"
                    // small idle float if motion not reduced
                    animate={!shouldReduceMotion ? { y: [0, -6, 0] } : undefined}
                    transition={!shouldReduceMotion ? { duration: 3.6, repeat: Infinity, ease: 'easeInOut' } : undefined}
                >
                    {/* Inline astronaut SVG — replace with your own higher fidelity SVG if you like */}
                    <img
                        src="/astronaut.svg"
                        alt="falling astronaut"
                        className="w-full h-35 object-contain"
                        draggable="false"
                    />
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#f7f4ec" stopOpacity="0.95" />
                            <stop offset="1" stopColor="#d6a35b" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>

                    {/* tether / little trail */}
                    <path d="M6 4 C18 12, 44 10, 58 18" stroke="rgba(214,163,91,0.12)" strokeWidth="1" fill="none" />

                    {/* suit body */}
                    <g transform="translate(6,6)">
                        <ellipse cx="26" cy="30" rx="14" ry="18" fill="#e6eef6" stroke="#cbd8e6" strokeWidth="1" />
                        {/* helmet */}
                        <circle cx="26" cy="12" r="9" fill="url(#g1)" stroke="#ffffff30" strokeWidth="1.2" />
                        {/* visor shine */}
                        <path d="M19 9 Q26 6 33 9" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
                        {/* backpack */}
                        <rect x="32" y="20" width="8" height="12" rx="2" ry="2" fill="#cbd8e6" opacity="0.9" />
                        {/* small accent */}
                        <circle cx="22" cy="32" r="1.6" fill="#d6a35b" />
                    </g>
                </motion.div>

                {/* optional subtle tether swing (CSS keyframes for slight rotation) */}
                <style>{`
          @keyframes tether-swing {
            0% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
            100% { transform: rotate(-3deg); }
          }
          /* apply to the parent to simulate swinging tether */
          .tether-swing {
            transform-origin: top left;
            animation: tether-swing 4.8s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .tether-swing { animation: none !important; }
          }
        `}</style>
            </div>
        </motion.div>
    );
}
