'use client';

import { motion } from 'framer-motion';

/**
 * Reusable page hero section for inner pages (About, Services, etc.).
 * Pass content via children for full control (headings, paragraphs, buttons, etc.).
 * Optional props title, highlightText, subtitle still work for the default layout when no children are passed.
 *
 * @param {React.ReactNode} [children] - Content to render inside the hero (e.g. title, subtitle, CTAs)
 * @param {string} [title] - Main title (used only when children is not provided)
 * @param {string} [highlightText] - Teal-highlighted part of title (used only when children is not provided)
 * @param {string} [subtitle] - Description below title (used only when children is not provided)
 * @param {string} [className] - Optional extra class names for the section
 * @param {string} [contentClassName] - Optional class names for the inner content wrapper
 */
export function PageHeroSection({
    children,
    title,
    highlightText,
    subtitle,
    className = '',
    contentClassName = '',
}) {
    const hasChildren =
        children != null &&
        children !== '' &&
        (Array.isArray(children) ? children.length > 0 : true);

    return (
        <section
            className={`relative py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden ${className}`}
        >
            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1F4E79 1px, transparent 1px),
            linear-gradient(to bottom, #1F4E79 1px, transparent 1px)
          `,
                    backgroundSize: '4rem 4rem',
                }}
            />
            {/* Faint diamond / geometric accent (right side) */}
            <div
                className="absolute top-1/2 right-0 w-96 h-96  -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-20"
                style={{
                    border: '1px solid rgba(42, 149, 147, 0.4)',
                    transform: 'translateY(-50%) translateX(33%) rotate(45deg)',
                }}
            />
            {/* Soft gradient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(42, 149, 147, 0.12) 0%, transparent 60%)',
                }}
            />

            <div className={`relative z-10 max-w-3xl  mx-auto text-center ${contentClassName}`}>
                {hasChildren ? (
                    <motion.div 
                    className='flex flex-col gap-10'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {children}
                    </motion.div>
                ) : (
                    <>
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {title}{' '}
                            <span className="text-primary">{highlightText}</span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-neutral-400 text-lg sm:text-xl leading-relaxed"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            {subtitle}
                        </motion.p>
                    </>
                )}
            </div>
        </section>
    );
}
