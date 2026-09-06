'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pastWinners = [
    {
        id: 2,
        place: '2nd Place',
        team: 'Team Beta',
        image: '/opengraph.jpg', // Placeholder
        height: 'md:h-80',
        color: 'border-gray-400',
        glow: 'shadow-[0_0_30px_rgba(192,192,192,0.3)]',
        delay: 0.2
    },
    {
        id: 1,
        place: '1st Place',
        team: 'Team Alpha',
        image: '/opengraph.jpg', // Placeholder
        height: 'md:h-96 md:-mt-16',
        color: 'border-gold-500',
        glow: 'shadow-[0_0_50px_rgba(255,215,0,0.5)]',
        delay: 0.4
    },
    {
        id: 3,
        place: '3rd Place',
        team: 'Team Gamma',
        image: '/opengraph.jpg', // Placeholder
        height: 'md:h-72 md:mt-8',
        color: 'border-amber-700',
        glow: 'shadow-[0_0_30px_rgba(184,115,51,0.3)]',
        delay: 0.6
    }
];

const PastWinners = () => {
    return (
        <section id="past-winners" className="py-20 px-6 relative z-10 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-24"
            >
                Our Past <span className="text-gold-500">Winners</span>
            </motion.h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-6 max-w-5xl mx-auto px-4 pb-10">
                {pastWinners.map((winner) => (
                    <motion.div
                        key={winner.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: winner.delay, type: 'spring' }}
                        className={`relative w-full md:w-1/3 flex flex-col items-center group`}
                    >
                        {/* Podium place indicator */}
                        <div className="mb-4">
                            <span className={`font-orbitron font-bold text-2xl tracking-wider ${winner.id === 1 ? 'text-gold-500 text-3xl' : 'text-gray-300'}`}>
                                {winner.place}
                            </span>
                        </div>
                        
                        {/* Photo Card */}
                        <div className={`relative w-full h-64 ${winner.height} rounded-2xl overflow-hidden border-2 ${winner.color} ${winner.glow} bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:z-20`}>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                            
                            {/* Placeholder for Photo (using opengraph or logo if no photos yet) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                                <Image src="/logo1.svg" alt="Placeholder" width={100} height={100} className="object-contain" />
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                                <h3 className="text-2xl font-inter font-bold text-white mb-1">{winner.team}</h3>
                                <p className="text-gray-400 text-sm font-jetbrains-mono tracking-widest uppercase">Classified</p>
                            </div>
                        </div>
                        
                        {/* Podium Base for desktop */}
                        <div className={`hidden md:block w-[80%] h-4 mt-6 rounded-full blur-md opacity-50 ${winner.id === 1 ? 'bg-gold-500' : winner.id === 2 ? 'bg-gray-400' : 'bg-amber-700'}`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PastWinners;
