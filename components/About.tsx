'use client';

import { motion } from 'framer-motion';

const tracks = [
    {
        title: 'Deep Space AI',
        description: 'Machine learning for celestial navigation or data analysis.',
        icon: '🤖',
    },
    {
        title: 'Orbital Blockchain',
        description: 'Decentralized systems for satellite communication.',
        icon: '🔗',
    },
    {
        title: 'Terraforming Tech',
        description: 'Sustainability and habitat solutions.',
        icon: '🌱',
    },
    {
        title: 'Open Interstellar',
        description: 'Open innovation for creative space solutions.',
        icon: '🚀',
    },
];

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-6 flex flex-col items-center justify-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-12 text-center">
                Mission <span className="text-gold-500">Brief</span>
            </h2>
            <div className="max-w-4xl text-center mb-16">
                <p className="text-lg md:text-xl font-inter text-gray-300">
                    Singularity is the convergence of space and technology. We invite the brightest minds to build the future of interstellar exploration.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {tracks.map((track, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gold-500/30 hover:border-gold-500 transition-all group"
                    >
                        <div className="text-4xl mb-4">{track.icon}</div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">
                            {track.title}
                        </h3>
                        <p className="font-inter text-gray-400">{track.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
