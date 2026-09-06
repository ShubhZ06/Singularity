'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Medal } from 'lucide-react';

/* ─── Shared fade-up helper ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

/* ─── Open Innovation data ──────────────────────────────────────────── */
const openInnovationWinners = [
    { rank: 'winner', label: 'Track Winner', team: 'SWIFT CODERS', isWinner: true },
    { rank: 'runner-up', label: 'Runner Up', team: 'CODE CRAFTERS', isWinner: false },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const PastWinners = () => {
    return (
        <section
            id="past-winners"
            className="py-16 px-6 relative z-10 text-center overflow-hidden"
        >
            {/* ── Heading ──────────────────────────────────────────── */}
            <motion.h2
                {...fadeUp(0)}
                className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4"
            >
                Our Past <span className="text-gold-500">Winners</span>
            </motion.h2>
            <motion.p
                {...fadeUp(0.15)}
                className="text-gray-400 font-inter text-base md:text-lg mb-10 max-w-xl mx-auto"
            >
                Singularity 1.0 — two tracks, three champions.
            </motion.p>

            {/* ════════════════════════════════════════════════════════
                TRACK 1 — Agentic AI  (solo hero card)
            ════════════════════════════════════════════════════════ */}

            {/* Agentic AI — section divider */}
            <div className="flex items-center gap-6 max-w-5xl mx-auto mb-8 px-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="font-orbitron font-bold text-white text-lg md:text-xl whitespace-nowrap">
                    Agentic AI <span className="text-gold-500">Track</span>
                </h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
            </div>

            {/* Single centred card — same fixed width as OI cards */}
            <div className="flex justify-center mb-12 px-4">
                <motion.div
                    {...fadeUp(0.2)}
                    whileHover={{ scale: 1.03 }}
                    className="relative w-full max-w-[450px] rounded-2xl overflow-hidden border-2 border-violet-400 bg-black/60 backdrop-blur-md cursor-default group shadow-[0_0_45px_rgba(167,139,250,0.4)]"
                >
                    {/* BG gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-900/40 via-black/60 to-black/80 pointer-events-none" />

                    {/* Hover shimmer */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.4) 0%, transparent 70%)' }}
                    />

                    {/* Corner glows */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Photo area */}
                    <div className="relative w-full h-56 overflow-hidden">
                        <Image
                            src="/images/optimized/1st in agenitc ai track.webp"
                            alt="Agentic AI Track Winner"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Subtle dark gradient at bottom for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 px-6 pb-6 pt-2 text-center">
                        <div
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-orbitron font-bold text-xs text-white mb-3"
                            style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.45)' }}
                        >
                            <Trophy className="w-3.5 h-3.5 text-violet-300" />
                            Track Winner
                        </div>
                        <h3 className="font-inter font-bold text-white text-xl mb-1">
                            @NONYMOU$
                        </h3>
                        <p className="text-gray-500 text-xs font-jetbrains-mono tracking-widest uppercase">
                            Details Classified
                        </p>
                    </div>

                    {/* Bottom accent bar */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-70"
                        style={{ background: 'linear-gradient(90deg, transparent, #a78bfa, transparent)' }}
                    />
                </motion.div>
            </div>

            {/* ════════════════════════════════════════════════════════
                TRACK 2 — Open Innovation  (winner + runner-up)
            ════════════════════════════════════════════════════════ */}

            {/* Open Innovation — section divider */}
            <div className="flex items-center gap-6 max-w-5xl mx-auto mb-8 px-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="font-orbitron font-bold text-white text-lg md:text-xl whitespace-nowrap">
                    Open Innovation <span className="text-gold-500">Track</span>
                </h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
            </div>

            {/* Winner + Runner-up — same fixed width as Agentic AI card */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch px-4">
                {openInnovationWinners.map((winner, i) => (
                    <motion.div
                        key={winner.rank}
                        {...fadeUp(0.1 + i * 0.15)}
                        whileHover={{ scale: 1.03 }}
                        className={`relative w-full max-w-[450px] rounded-2xl overflow-hidden border-2 bg-black/60 backdrop-blur-md cursor-default group
                            ${winner.isWinner
                                ? 'border-yellow-400 shadow-[0_0_45px_rgba(251,191,36,0.4)]'
                                : 'border-slate-400/50 shadow-[0_0_45px_rgba(148,163,184,0.35)]'
                            }`}
                    >
                        {/* BG gradient */}
                        <div
                            className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${winner.isWinner
                                    ? 'from-yellow-900/30 via-black/60 to-black/80'
                                    : 'from-slate-700/20 via-black/60 to-black/80'
                                }`}
                        />

                        {/* Hover shimmer */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: winner.isWinner
                                    ? 'radial-gradient(ellipse at 60% 0%, rgba(251,191,36,0.3) 0%, transparent 70%)'
                                    : 'radial-gradient(ellipse at 60% 0%, rgba(148,163,184,0.25) 0%, transparent 70%)',
                            }}
                        />

                        {/* Silver corner glows for runner-up */}
                        {!winner.isWinner && (
                            <>
                                <div className="absolute top-0 left-0 w-24 h-24 bg-slate-400/10 rounded-full blur-2xl pointer-events-none" />
                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-400/10 rounded-full blur-2xl pointer-events-none" />
                            </>
                        )}

                        {/* Photo area */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src={winner.isWinner
                                    ? '/images/optimized/winner of open inovation.webp'
                                    : '/images/optimized/runner up in open inovation.webp'
                                }
                                alt={winner.isWinner ? 'Open Innovation Winner' : 'Open Innovation Runner Up'}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Subtle dark gradient at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 px-6 pb-6 pt-2 text-center">
                            <div
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-orbitron font-bold text-xs text-white mb-3"
                                style={winner.isWinner
                                    ? { background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.45)' }
                                    : { background: 'rgba(148,163,184,0.15)', border: '1px solid rgba(148,163,184,0.45)' }
                                }
                            >
                                {winner.isWinner
                                    ? <Trophy className="w-3.5 h-3.5 text-yellow-300" />
                                    : <Medal className="w-3.5 h-3.5 text-slate-300" />
                                }
                                {winner.label}
                            </div>
                            <h3 className="font-inter font-bold text-white mb-1 text-xl">
                                {winner.team}
                            </h3>
                            <p className="text-gray-500 text-xs font-jetbrains-mono tracking-widest uppercase">
                                Details Classified
                            </p>
                        </div>

                        {/* Bottom accent bar */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
                            style={{
                                background: winner.isWinner
                                    ? 'linear-gradient(90deg, transparent, #fbbf24, transparent)'
                                    : 'linear-gradient(90deg, transparent, #94a3b8, transparent)',
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PastWinners;
