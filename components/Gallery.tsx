'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────────── */
interface GalleryItem {
    id: number;
    frontImage: string;
    backImage: string;
}

/* ─── Gallery Dataset (18 Event Gallery Images with Shuffled Flip) ───── */
const galleryItems: GalleryItem[] = [
    // Row 1 (5 items)
    {
        id: 1,
        frontImage: '/event gallary/optimized/1st in agenitc ai track.webp',
        backImage: '/event gallary/optimized/Smiles under the sunny canopy.webp',
    },
    {
        id: 2,
        frontImage: '/event gallary/optimized/IMG_9563.webp',
        backImage: '/event gallary/optimized/winner of open inovation.webp',
    },
    {
        id: 3,
        frontImage: '/event gallary/optimized/Team presentation on agentic AI.webp',
        backImage: '/event gallary/optimized/IMG_9567.webp',
    },
    {
        id: 4,
        frontImage: '/event gallary/optimized/IMG_9564.webp',
        backImage: '/event gallary/optimized/runner up in open inovation.webp',
    },
    {
        id: 5,
        frontImage: '/event gallary/optimized/Focused collaboration in warm tones.webp',
        backImage: '/event gallary/optimized/worm 1.webp',
    },

    // Row 2 (4 items)
    {
        id: 6,
        frontImage: '/event gallary/optimized/winner of open inovation.webp',
        backImage: '/event gallary/optimized/IMG_9571.webp',
    },
    {
        id: 7,
        frontImage: '/event gallary/optimized/IMG_9567.webp',
        backImage: '/event gallary/optimized/1st in agenitc ai track.webp',
    },
    {
        id: 8,
        frontImage: '/event gallary/optimized/Focused study in a vintage lab.webp',
        backImage: '/event gallary/optimized/IMG_9564.webp',
    },
    {
        id: 9,
        frontImage: '/event gallary/optimized/IMG_9569.webp',
        backImage: '/event gallary/optimized/Warm afternoon smiles in the courtyard.webp',
    },

    // Row 3 (5 items)
    {
        id: 10,
        frontImage: '/event gallary/optimized/runner up in open inovation.webp',
        backImage: '/event gallary/optimized/worm 2.webp',
    },
    {
        id: 11,
        frontImage: '/event gallary/optimized/IMG_9571.webp',
        backImage: '/event gallary/optimized/Team presentation on agentic AI.webp',
    },
    {
        id: 12,
        frontImage: '/event gallary/optimized/worm 1.webp',
        backImage: '/event gallary/optimized/IMG_9569.webp',
    },
    {
        id: 13,
        frontImage: '/event gallary/optimized/Smiles under the sunny canopy.webp',
        backImage: '/event gallary/optimized/IMG_9563.webp',
    },
    {
        id: 14,
        frontImage: '/event gallary/optimized/IMG_9572.webp',
        backImage: '/event gallary/optimized/Focused collaboration in warm tones.webp',
    },

    // Row 4 (4 items)
    {
        id: 15,
        frontImage: '/event gallary/optimized/Warm afternoon smiles in the courtyard.webp',
        backImage: '/event gallary/optimized/worm3.webp',
    },
    {
        id: 16,
        frontImage: '/event gallary/optimized/worm 2.webp',
        backImage: '/event gallary/optimized/IMG_9572.webp',
    },
    {
        id: 17,
        frontImage: '/event gallary/optimized/Warm group smiles on a sunlit patio.webp',
        backImage: '/event gallary/optimized/Focused study in a vintage lab.webp',
    },
    {
        id: 18,
        frontImage: '/event gallary/optimized/worm3.webp',
        backImage: '/event gallary/optimized/Warm group smiles on a sunlit patio.webp',
    },
];

/* ─── Pointy-Topped Hexagon Clip Path ────────────────────────────────── */
const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

/* ─── Hexagon Card Component ─────────────────────────────────────────── */
interface HexCardProps {
    item: GalleryItem;
    onSelect: (item: GalleryItem) => void;
}

const HexCard: React.FC<HexCardProps> = ({ item, onSelect }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative [perspective:1000px] select-none transition-transform duration-300 cursor-pointer hover:scale-105 hover:z-30 shrink-0"
            style={{
                width: 'var(--hex-w)',
                height: 'var(--hex-h)',
            }}
            onClick={() => onSelect(item)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            {/* 3D Flipper Element */}
            <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
            >
                {/* ── FRONT FACE (White Glow, Clean Photo) ───────────── */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.85)] transition-all duration-300"
                >
                    {/* Outer Hex Border (Clean White Gradient Ring) */}
                    <div
                        className="w-full h-full p-[2px] bg-gradient-to-b from-white/90 via-white/50 to-white/30 hover:from-white hover:via-white/80 hover:to-white/60 transition-all duration-300"
                        style={{ clipPath: HEX_CLIP }}
                    >
                        {/* Inner Hex Content */}
                        <div
                            className="relative w-full h-full bg-neutral-950 overflow-hidden"
                            style={{ clipPath: HEX_CLIP }}
                        >
                            <Image
                                src={item.frontImage}
                                alt="Event gallery moment"
                                fill
                                unoptimized
                                loading="lazy"
                                sizes="(max-width: 640px) 100px, (max-width: 1024px) 160px, 200px"
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* ── BACK FACE (White Glow, Clean Photo) ────────────── */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.85)] transition-all duration-300"
                >
                    {/* Outer Hex Border (Clean White Gradient Ring) */}
                    <div
                        className="w-full h-full p-[2px] bg-gradient-to-b from-white/90 via-white/50 to-white/30 hover:from-white hover:via-white/80 hover:to-white/60 transition-all duration-300"
                        style={{ clipPath: HEX_CLIP }}
                    >
                        {/* Inner Hex Content */}
                        <div
                            className="relative w-full h-full bg-neutral-950 overflow-hidden"
                            style={{ clipPath: HEX_CLIP }}
                        >
                            <Image
                                src={item.backImage}
                                alt="Event gallery moment flip"
                                fill
                                unoptimized
                                loading="lazy"
                                sizes="(max-width: 640px) 100px, (max-width: 1024px) 160px, 200px"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Main Gallery Component ─────────────────────────────────────────── */
const Gallery: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [modalFace, setModalFace] = useState<'front' | 'back'>('front');

    // Desktop interlocking row slices (5 - 4 - 5 - 4)
    const desktopRows = [
        galleryItems.slice(0, 5),
        galleryItems.slice(5, 9),
        galleryItems.slice(9, 14),
        galleryItems.slice(14, 18),
    ];

    // Mobile / Tablet interlocking row slices (3 - 2 - 3 - 2 - 3 - 2 - 3)
    const mobileRows = [
        galleryItems.slice(0, 3),
        galleryItems.slice(3, 5),
        galleryItems.slice(5, 8),
        galleryItems.slice(8, 10),
        galleryItems.slice(10, 13),
        galleryItems.slice(13, 15),
        galleryItems.slice(15, 18),
    ];

    // Modal navigation
    const handleNext = useCallback(() => {
        if (!selectedItem) return;
        const currentIndex = galleryItems.findIndex(i => i.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedItem(galleryItems[nextIndex]);
        setModalFace('front');
    }, [selectedItem]);

    const handlePrev = useCallback(() => {
        if (!selectedItem) return;
        const currentIndex = galleryItems.findIndex(i => i.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedItem(galleryItems[prevIndex]);
        setModalFace('front');
    }, [selectedItem]);

    // Keyboard support for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedItem) return;
            if (e.key === 'Escape') setSelectedItem(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === ' ') {
                e.preventDefault();
                setModalFace(prev => (prev === 'front' ? 'back' : 'front'));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedItem, handleNext, handlePrev]);

    return (
        <section id="gallery" className="py-20 px-4 md:px-6 relative z-10 text-center overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            {/* ── Section Title (Only Event Gallery, no sub-headings) ── */}
            <div className="max-w-4xl mx-auto mb-14">
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
                    Event <span className="text-gold-500">Gallery</span>
                </h2>
            </div>

            {/* ── Honeycomb Matrix Container ────────────────────────── */}
            <div className="max-w-6xl mx-auto py-4">
                <style>{`
                    .honeycomb-mesh-desktop {
                        --hex-w: 176px;
                        --hex-gap: 8px;
                        --hex-h: calc(var(--hex-w) * 1.1547005);
                        --hex-step-y: calc((var(--hex-w) + var(--hex-gap)) * 0.8660254);
                        --hex-margin-top: calc(var(--hex-step-y) - var(--hex-h));
                    }
                    @media (max-width: 1100px) {
                        .honeycomb-mesh-desktop {
                            --hex-w: 136px;
                            --hex-gap: 7px;
                        }
                    }
                    .honeycomb-mesh-mobile {
                        --hex-w: 96px;
                        --hex-gap: 5px;
                        --hex-h: calc(var(--hex-w) * 1.1547005);
                        --hex-step-y: calc((var(--hex-w) + var(--hex-gap)) * 0.8660254);
                        --hex-margin-top: calc(var(--hex-step-y) - var(--hex-h));
                    }
                    @media (min-width: 480px) {
                        .honeycomb-mesh-mobile {
                            --hex-w: 112px;
                            --hex-gap: 6px;
                        }
                    }
                `}</style>

                {/* Desktop / Tablet Matrix (hidden on sm, visible md+) */}
                <div className="honeycomb-mesh-desktop hidden md:flex flex-col items-center">
                    {desktopRows.map((row, rIdx) => (
                        <div
                            key={`d-row-${rIdx}`}
                            className="flex justify-center items-center"
                            style={{
                                gap: 'var(--hex-gap)',
                                marginTop: rIdx > 0 ? 'var(--hex-margin-top)' : '0px',
                            }}
                        >
                            {row.map((item) => (
                                <HexCard
                                    key={item.id}
                                    item={item}
                                    onSelect={(selected) => {
                                        setSelectedItem(selected);
                                        setModalFace('front');
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Mobile Matrix (visible on mobile, hidden md+) */}
                <div className="honeycomb-mesh-mobile flex md:hidden flex-col items-center">
                    {mobileRows.map((row, rIdx) => (
                        <div
                            key={`m-row-${rIdx}`}
                            className="flex justify-center items-center"
                            style={{
                                gap: 'var(--hex-gap)',
                                marginTop: rIdx > 0 ? 'var(--hex-margin-top)' : '0px',
                            }}
                        >
                            {row.map((item) => (
                                <HexCard
                                    key={item.id}
                                    item={item}
                                    onSelect={(selected) => {
                                        setSelectedItem(selected);
                                        setModalFace('front');
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Lightbox Modal ─────────────────────────────────────── */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="relative max-w-4xl w-full bg-neutral-900/95 border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Prev / Next navigation buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Modal Image Area */}
                            <div className="relative w-full h-80 sm:h-[480px] bg-black">
                                <Image
                                    src={modalFace === 'front' ? selectedItem.frontImage : selectedItem.backImage}
                                    alt="Gallery preview"
                                    fill
                                    unoptimized
                                    className="object-contain object-center"
                                />
                            </div>

                            {/* Modal Footer Controls */}
                            <div className="p-4 sm:p-6 bg-neutral-950/90 flex items-center justify-between">
                                <button
                                    onClick={() => setModalFace(prev => (prev === 'front' ? 'back' : 'front'))}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-orbitron font-bold text-xs tracking-wider hover:bg-gray-200 transition-all cursor-pointer"
                                >
                                    <RotateCw className="w-3.5 h-3.5" />
                                    <span>Flip to {modalFace === 'front' ? 'Back' : 'Front'} Photo</span>
                                </button>
                                <span className="text-xs font-mono text-gray-400">
                                    {selectedItem.id} / {galleryItems.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
