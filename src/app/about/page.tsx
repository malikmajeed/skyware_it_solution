'use client';

import {
    Users,
    Target,
    TrendingUp,
    Heart,
    Eye,

    Gauge,
    Award,
    ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

// Stat cards: bottom-left (Client Satisfaction) is teal
const statCards = [
    { value: '25+', label: 'Team Members', Icon: Users },
    { value: '100+', label: 'Projects Delivered', Icon: Target },
    { value: '98%', label: 'Client Satisfaction', Icon: TrendingUp, teal: true },
    { value: '12+', label: 'Years in Business', Icon: Heart },
];

const coreValues = [
    { title: 'Transparency', description: "No hidden costs, no technical 'magic.' We believe in honest communication and clear pricing.", Icon: Eye },
    { title: 'Agility', description: 'We pivot as fast as the market moves. Adaptable solutions for a changing world.', Icon: Gauge, teal: true },
    { title: 'Excellence', description: "If it's not industry-leading, it's not Skyware. We set the bar high and deliver beyond it.", Icon: Award },
];

const evolutionSteps = [
    { step: '01', title: 'Share Your Vision', description: 'Tell us your goals and challenges. We listen, ask the right questions, and align on a clear direction—so your idea becomes a shared roadmap.', image: '' },
    { step: '02', title: 'Get Your Blueprint', description: 'We translate your vision into a detailed technical blueprint: architecture, UX flows, and a phased plan that fits your timeline and budget.', image: '' },
    { step: '03', title: 'We Build & Iterate', description: 'Our team brings the blueprint to life with modern tech and agile sprints. You get early demos, feedback loops, and a product that evolves with you.', image: '' },
    { step: '04', title: 'You Scale With Confidence', description: 'We hand over a production-ready solution with documentation and support. You launch, grow, and iterate with a partner who stays by your side.', image: '' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <PageHeroSection contentClassName="max-w-3xl flex flex-col gap-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
                    We Build Tech That <span className="text-primary font-bold"> <br />Empowers People</span>
                </h1>
                <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed">
                    A visionary tech firm, crafting innovative solutions and experiences for our clients to thrive in the digital age.
                </p>
                {/* Hero image cluster – add your images to public/about/ (e.g. hero-collab.jpg, hero-development.jpg, hero-digital.jpg) */}

            </PageHeroSection>

            <section className="px-4 sm:px-0">
                <div className="grid grid-cols-3 gap-1 sm:gap-3 mt-10 w-full max-w-4xl mx-auto">
                    {[
                        {
                            alt: 'Team collaboration and brainstorming',
                            src: '/images/team planning.jpg'
                        },
                        {
                            alt: 'Software development',
                            src: '/images/person coding.jpg'
                        },
                        {
                            alt: 'Digital solutions and touch interfaces',
                            src: '/images/kiosk scanning.jpg'
                        },
                    ].map((item, i) => (
                        <div key={i} className="relative aspect-square sm:aspect-[3/4] rounded-sm overflow-hidden border border-neutral-700 bg-neutral-800/80">
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Making Technology Your Biggest Advantage */}
            <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, #1F4E79 1px, transparent 1px), linear-gradient(to bottom, #1F4E79 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left column: 4 stat cards in 2x2 */}
                        <div className="grid grid-cols-2 gap-4">
                            {statCards.map(({ value, label, Icon, teal }) => (
                                <motion.article
                                    key={label}
                                    className={`rounded-2xl p-6 ${teal ? 'bg-primary text-white' : 'border border-neutral-700 bg-neutral-900/50'}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Icon className={`w-8 h-8 ${teal ? 'text-white' : 'text-primary'}`} />
                                    <p className={`mt-3 text-2xl sm:text-3xl ${teal ? 'text-white' : 'text-primary'}`}>{value}</p>
                                    <p className={`mt-1 text-sm ${teal ? 'text-white/90' : 'text-neutral-400'}`}>{label}</p>
                                </motion.article>
                            ))}
                        </div>
                        {/* Right column: OUR MISSION + heading + paragraphs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-primary text-xs font-semibold uppercase tracking-wider">Our Mission</p>
                            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-4xl text-white leading-tight">
                                Making Technology Your Biggest Advantage
                            </h2>
                            <p className="mt-6 text-neutral-400 leading-relaxed">
                                Our team is a mix of dreamers and doers—dedicated to making technology your biggest competitive advantage. We believe that the right technology can transform businesses, streamline operations, and create unforgettable customer experiences.
                            </p>
                            <p className="mt-4 text-neutral-400 leading-relaxed">
                                From startups to enterprises, we partner with organizations that aren&apos;t afraid to innovate. We&apos;re not just service providers; we&apos;re collaborators invested in your success.
                            </p>
                        </motion.div>
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
                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-4xl text-white leading-tight">
                            Our Core <span className="text-primary">Values</span>
                        </h2>
                        <p className="mt-3 text-neutral-400 text-lg">The principles that guide everything we do</p>
                    </motion.header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map(({ title, description, Icon, teal }) => (
                            <motion.article
                                key={title}
                                className={`rounded-xl p-8 text-start ${teal ? 'bg-primary text-white' : ' border border-neutral-700 bg-accent/15'}`}
                                initial={{ opacity: 0, y: 16, rotate: teal ? -5 : 0 }}
                                whileInView={{ opacity: 1, y: 0, rotate: teal ? -5 : 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={`inline-flex p-2.5 rounded-lg ${teal ? 'bg-black ' : 'bg-secondary'}`}>
                                    <Icon className={`w-8 h-8 text-white`} />
                                </div>
                                <h3 className={`mt-4 text-2xl ${teal ? 'text-black' : 'text-primary'}`}>{title}</h3>
                                <p className={`mt-3 text-sm leading-relaxed ${teal ? 'text-black' : 'text-neutral-400'}`}>
                                    {description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Your Digital Evolution in Four Steps */}
            <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.header
                        className="text-center mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl text-white">
                            Your Digital Evolution in <span className="text-primary">Four Steps</span>
                        </h2>
                        <p className="mt-3 text-neutral-400 text-lg">Moving your business from concept to code, and beyond.</p>
                    </motion.header>
                    <ul className="space-y-4">
                        {evolutionSteps.map(({ step, title, description, image }, index) => (
                            <motion.li
                                key={step}
                                className="relative rounded-2xl border border-neutral-600/80 bg-neutral-900/80 overflow-hidden min-h-[140px] sm:min-h-[160px]"
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                {/* Optional background image – add step-01.jpg … step-04.jpg to public/about/ */}
                                {image && (
                                    <div className="absolute inset-0">
                                        <img
                                            src={image}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                                            aria-hidden
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                        <div className="absolute inset-0 bg-neutral-900/85" aria-hidden />
                                    </div>
                                )}
                                <div className="relative px-6 grid grid-cols-8 gap-10 items-stretch">

                                    {/* Step number container */}
                                    <div className="col-span-2 flex items-end justify-center shrink-0 w-28 sm:w-36 pl-4 sm:pl-6 ">
                                        <span
                                            className="text-9xl sm:text-9xl md:text-9xl font-extrabold text-white/15 select-none translate-y-[35%]"
                                            aria-hidden
                                        >
                                            {step}
                                        </span>
                                    </div>

                                    <div className="col-span-6 py-6 sm:py-8 pr-6 sm:pr-8 pl-0">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
                                        <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
                                            {description}
                                        </p>
                                    </div>

                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>


        </main>
    );
}
