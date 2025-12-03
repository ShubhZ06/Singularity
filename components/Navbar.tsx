import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NavbarProps {
    isLoading?: boolean;
}

const Navbar = ({ isLoading = false }: NavbarProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-2">
                {!isLoading && (
                    <motion.div
                        layoutId="main-logo"
                        className="relative w-10 h-10"
                        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
                    >
                        <Image src="/logo.svg" alt="Singularity Logo" fill className="object-contain" />
                    </motion.div>
                )}
                <span className="text-2xl font-orbitron font-bold text-white">Singularity</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
                {['About', 'Stats', 'Schedule', 'Prizes', 'Sponsors', 'FAQ'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                        className="text-white hover:text-gold-500 transition-colors font-inter"
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <button className="px-6 py-2 bg-gold-500 text-black font-bold rounded-full hover:bg-gold-600 transition-colors font-orbitron">
                Register Now
            </button>
        </nav>
    );
};

export default Navbar;
