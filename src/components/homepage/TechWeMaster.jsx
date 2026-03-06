'use client';

import { motion } from 'framer-motion';
import {
    SiReact,
    SiNodedotjs,
    SiPython,
    SiAmazonwebservices,
    SiGraphql,
    SiDocker,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiSanity,
} from 'react-icons/si';

const technologies = [
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Python', Icon: SiPython },
    { name: 'AWS', Icon: SiAmazonwebservices },
    { name: 'GraphQL', Icon: SiGraphql },
    { name: 'Docker', Icon: SiDocker },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Sanity', Icon: SiSanity },
];

export function TechWeMaster() {
    return (
        <section className="relative py-20 sm:py-25 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.header
                    className="text-center mb-16 sm:mb-20 flex flex-col gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                        Technologies We <span className="text-secondary">Master</span>
                    </h2>
                    <p className="text-white/70 text-lg'">
                        Building with cutting-edge tools and frameworks
                    </p>
                </motion.header>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:gap-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, staggerChildren: 0.05 }}
                >
                    {technologies.map(({ name, Icon }) => (
                        <motion.div
                            key={name}
                            className="flex items-center justify-center text-white/30 hover:text-neutral-300 transition-colors"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon className="w-20 h-20 sm:w-16 sm:h-16" aria-label={name} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
