'use client';

import { Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const developers = [
    'Raaj Patkar',
    'Shubham Gupta',
    'Aryan Yadav',
    'Rushabh Makwana',
];

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-orbitron font-bold text-white mb-2">Singularity</span>
                    <p className="text-gray-400 font-inter text-sm">Launching the Next Generation of Innovators</p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                        <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com/singularity.hack" className="text-gray-400 hover:text-gold-500 transition-colors">
                        <Instagram className="w-6 h-6" />
                    </Link>
                    <Link href="mailto:singularity@kccemsr.edu.in" className="text-gray-400 hover:text-gold-500 transition-colors">
                        <Mail className="w-6 h-6" />
                    </Link>
                </div>

                <div className="text-gray-500 text-sm font-inter">
                    © 2025 Singularity Hackathon. All rights reserved.
                </div>
            </div>

            {/* Developer Credits */}
            <div className="mt-10 pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                    <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-gold-500/50" />
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-orbitron font-bold">
                        Developer Credits
                    </span>
                    <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-gold-500/50" />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-inter">
                    {developers.map((dev) => (
                        <span
                            key={dev}
                            className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-gold-500/60 hover:bg-gold-500/10 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300"
                        >
                            {dev}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Built with CIREX */}
            <div className="flex justify-center mt-8">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <div className="relative w-48 h-20 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <Image 
                            src="/buildwithcirex.svg" 
                            alt="Built with CIREX" 
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
