"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.2,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const wordsArray = words.replace(/\r\n/g, ' ').replace(/\n/g, ' ').replace(/\r/g, ' ').split(" ").filter(w => w.length > 0);
    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.05),
                }
            );
        }
    }, [isInView, animate, duration, filter]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} suppressHydrationWarning>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-gray-300 opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn(className)}>
            <div className="mt-4">
                <div className=" dark:text-white text-gray-300 text-lg md:text-xl font-inter leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
