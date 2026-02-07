import {
    Cpu,
    KeyRound,
    Plug,
    Code,
    Zap,
    Cloud,
    Box,
    Server,
    Database,
    Layers,
    Globe,
    Lock,
} from 'lucide-react';

import { motion } from 'framer-motion';

const processSteps = [
    {
        step: '01',
        title: 'Discovery & Synthesis',
        description: 'We analyze your friction points and map the digital architecture.',
    },
    {
        step: '02',
        title: 'Rapid Prototyping',
        description: 'We build "wrappers" and integrations using Next.js and AI for instant feedback.',
    },
    {
        step: '03',
        title: 'Seamless Deployment',
        description: 'Hyper-realistic testing and deployment into your existing ecosystem.',
    },
];

const techGroups = [
    {
        label: 'Frameworks',
        items: [
            { name: 'Next.js', Icon: Layers },
            { name: 'React', Icon: Code },
            { name: 'Node.js', Icon: Server },
        ],
    },
    {
        label: 'Intelligence',
        items: [
            { name: 'OpenAI', Icon: Cpu },
            { name: 'LangChain', Icon: Zap },
            { name: 'Python', Icon: Database },
        ],
    },
    {
        label: 'Infrastructure',
        items: [
            { name: 'AWS', Icon: Cloud },
            { name: 'Google Cloud', Icon: Globe },
            { name: 'Docker', Icon: Box },
        ],
    },
    {
        label: 'Hospitality Tech',
        items: [
            { name: 'PMS Integrations', Icon: Plug },
            { name: 'Smart Lock APIs', Icon: KeyRound },
        ],
    },
];

export function ServicesSection() {
    return (
        <section className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
              linear-gradient(to right, #1F4E79 1px, transparent 1px),
              linear-gradient(to bottom, #1F4E79 1px, transparent 1px)
            `,
                    backgroundSize: '4rem 4rem',
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.header
                    className="text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary/70 backdrop-blur-sm mb-8 hover:border-accent/50 transition-colors">
                        <Lock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium capitalize text-neutral-light/90"> Tech Stack & Process</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-accent tracking-tight">
                        The Engine Room
                    </h2>
                </motion.header>

                <div className="mb-20 sm:mb-25">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {processSteps.map((item, index) => (
                            <article
                                key={item.step}
                                className="relative rounded-2xl bg-secondary/10 backdrop-blur-sm border border-secondary/30 p-8 hover:border-accent/40 hover:bg-secondary/20 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
                                style={{
                                    animation: `slide-up 0.6s ease-out ${index * 0.15}s both`,
                                }}
                            >
                                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <span className="text-5xl sm:text-6xl font-bold text-accent/40 group-hover:text-accent/60 transition-colors">
                                    {item.step}
                                </span>
                                <h4 className="text-xl sm:text-2xl font-semibold text-neutral-light mt-4 mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-neutral-light/70 text-sm sm:text-base leading-relaxed">
                                    {item.description}
                                </p>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                <div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techGroups.map((group, groupIndex) => (
                            <div
                                key={group.label}
                                className="rounded-2xl bg-secondary/10 backdrop-blur-sm border border-secondary/30 p-6 hover:border-accent/30 hover:bg-secondary/20 transition-all duration-300 group"
                                style={{
                                    animation: `fade-in 0.6s ease-out ${groupIndex * 0.1}s both`,
                                }}
                            >
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                                        <Cpu className="w-5 h-5 text-accent shrink-0" />
                                    </div>
                                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                        {group.label}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {group.items.map(({ name, Icon }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/20 border border-secondary/40 text-neutral-light text-sm font-medium hover:border-accent/40 hover:bg-secondary/30 transition-all duration-200 hover:translate-x-1"
                                        >
                                            <Icon className="w-5 h-5 text-accent shrink-0" />
                                            <span>{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
