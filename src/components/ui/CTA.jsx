'use client';
import { ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';
import {PrimaryButton} from '@/components/ui/PrimaryButton'



export function CallToAction() {
    return (
        <section className="relative py-20 sm:py-25 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden">
           
            {/* Corner gradient overlays: top-left and bottom-right, center transparent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 70% 70% at 0% 0%, rgba(42, 149, 147, 0.25) 0%, transparent 90%),
            radial-gradient(ellipse 70% 70% at 100% 100%, rgba(42, 149, 147, 0.25) 0%, transparent 90%)
          `,
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.header
                    className="text-center mb-16 sm:mb-20 flex flex-col gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                        Ready To Transform Your <span className="text-secondary">Business?</span>
                    </h2>
                    <p className="text-white/70 text-lg'">
                    Join 100+ businesses already scaling with Skyware IT Solutions
                    </p>
                </motion.header>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:gap-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, staggerChildren: 0.05 }}
                >
                    <PrimaryButton icon={ArrowRight} iconPosition="right">
                        Start Your Project Today
                    </PrimaryButton>
                  
                </motion.div>
            </div>
        </section>
    );
}
