'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Who can participate?',
        answer: 'Anyone with a passion for space and technology! Students, professionals, and enthusiasts are all welcome.',
    },
    {
        question: 'Is it free to register?',
        answer: 'Yes, participation in Singularity is completely free.',
    },
    {
        question: 'Do I need a team?',
        answer: 'You can participate solo or in a team of up to 4 members. We will also have team formation events.',
    },
    {
        question: 'What if I don\'t have a background in space tech?',
        answer: 'No problem! We have tracks for all skill levels and mentors to guide you.',
    },
    {
        question: 'Will there be swag?',
        answer: 'Yes! All participants will receive digital swag, and winners will get exclusive physical merchandise.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 px-6 relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-16 text-center">
                Comms <span className="text-gold-500">Relay</span>
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="text-xl font-inter font-medium text-white">{faq.question}</span>
                            <ChevronDown
                                className={`w-6 h-6 text-gold-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-gray-400 font-inter border-t border-white/10">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
