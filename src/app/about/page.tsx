'use client';

import {
    Users,
    Briefcase,
    TrendingUp,
    Heart,
    Lightbulb,
    Handshake,
    Gauge,
    Target,
    ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

const stats = [
    { value: '25+', label: 'Team Members', Icon: Users },
    { value: '100+', label: 'Projects Completed', Icon: Briefcase },
    { value: '78%', label: 'Client Satisfaction', Icon: TrendingUp },
    { value: '12', label: 'Years in business', Icon: Heart },
];

const expertiseTags = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML'];

const coreValues = [
    {
        title: 'Transparency',
        description: 'We believe in open communication and clear processes. You always know where your project stands.',
        Icon: Handshake,
    },
    {
        title: 'Agility',
        description: 'We adapt to change quickly. Our flexible approach ensures we deliver results even when requirements evolve.',
        Icon: Gauge,
    },
    {
        title: 'Innovation',
        description: 'We stay ahead of the curve with cutting-edge tools and practices to future-proof your solutions.',
        Icon: Target,
    },
];

const timeline = [
    { year: '2023', text: 'Launched Skyware Labs and expanded our AI and IoT offerings.' },
    { year: '2021', text: 'Celebrated our first 50 successful projects and opened a second office.' },
    { year: '2020', text: 'Expanded services to include cloud migration and digital transformation.' },
    { year: '2018', text: 'Opened our first international office and grew the team to 15.' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <PageHeroSection>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
                    We Build Tech That <br /><span className="text-primary">Empowers People</span>
                </h1>
                <p className="text-white/70 text-lg">
                    At Skyware, we don't just write code; we solve problems. Born from a passion for innovation, we've spent years helping businesses navigate the shifting digital landscape.
                </p>
            </PageHeroSection>

            {/* Our Story */}
            <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, #1F4E79 1px, transparent 1px), linear-gradient(to bottom, #1F4E79 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <p className="text-neutral-500 text-sm uppercase tracking-wider">Our Mission</p>
                            <h2 className="mt-2 text-3xl sm:text-4xl  text-white">
                                Making Technology Your Biggest Advantage
                            </h2>
                            <p className="mt-6 text-neutral-400 leading-relaxed">
                                We are a team of engineers, designers, and strategists who believe technology should work for people—not the other way around. From day one, we have focused on delivering solutions that are both powerful and intuitive.
                            </p>
                            <p className="mt-4 text-neutral-400 leading-relaxed">
                                Our clients range from startups to enterprises. What unites them is the need for a partner who can translate complex requirements into reliable, scalable systems.
                            </p>
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                {stats.map(({ value, label, Icon }) => (
                                    <div
                                        key={label}
                                        className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-5"
                                    >
                                        <Icon className="w-6 h-6 text-primary" />
                                        <p className="mt-2 text-2xl  text-white">{value}</p>
                                        <p className="text-sm text-neutral-400">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="relative rounded-2xl border border-neutral-700 bg-neutral-900/50 p-8">
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
                                <Lightbulb className="w-10 h-10 text-primary" />
                                <h3 className="mt-4 text-xl font-semibold text-white">Innovation First</h3>
                                <p className="mt-3 text-neutral-400 leading-relaxed">
                                    We are dedicated to revolutionizing the way businesses leverage technology. By combining deep technical expertise with a human-centered approach, we build systems that drive growth, efficiency, and long-term success for our clients.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {expertiseTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-neutral-600 px-4 py-2 text-sm text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `
              radial-gradient(ellipse 70% 70% at 0% 0%, rgba(42, 149, 147, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 70% 70% at 100% 100%, rgba(42, 149, 147, 0.08) 0%, transparent 50%)
            `,
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.header
                        className="text-center mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl  text-white">
                            Our Core <span className="text-primary">Values</span>
                        </h2>
                        <p className="mt-3 text-neutral-400 text-lg">The human element that sets us apart</p>
                    </motion.header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map(({ title, description, Icon }) => (
                            <motion.article
                                key={title}
                                className="rounded-2xl border border-neutral-700 bg-neutral-900/50 p-8 text-center"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <Icon className="w-12 h-12 text-primary mx-auto" />
                                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.header
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl  text-white">Our Journey</h2>
                        <p className="mt-3 text-neutral-400 text-lg">A timeline of our growth and milestones</p>
                    </motion.header>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700 -translate-x-1/2" />
                        <ul className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.li
                                    key={item.year}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />
                                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                        <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6 inline-block max-w-md">
                                            <span className="text-primary font-semibold">{item.year}</span>
                                            <p className="mt-2 text-neutral-300 text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1" />
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


        </main>
    );
}
