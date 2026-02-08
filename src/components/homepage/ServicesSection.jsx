import {
    BadgeCheck,
    KeyRound,
    Plug,
    Zap,
    Brain,
    Lock,
    Shield,
} from 'lucide-react';
import { VscAzure } from 'react-icons/vsc';
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiVuedotjs,
    SiTypescript,
    SiFlutter,
    SiOpenai,
    SiLangchain,
    SiPython,
    SiAmazonwebservices,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiGithubactions,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiGraphql,
    SiApple,
    SiAndroid,
} from 'react-icons/si';
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

// Official brand colors (Simple Icons / brand guidelines)
const techGroups = [
    {
        label: 'Web & Frameworks',
        items: [
            { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'React', Icon: SiReact, color: '#61DAFB' },
            { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
            { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
            { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        ],
    },
    {
        label: 'Mobile',
        items: [
            { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
            { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
            { name: 'iOS', Icon: SiApple, color: '#FFFFFF' },
            { name: 'Android', Icon: SiAndroid, color: '#3DDC84' },
        ],
    },
    {
        label: 'AI & Intelligence',
        items: [
            { name: 'OpenAI', Icon: SiOpenai, color: '#412991' },
            { name: 'LangChain', Icon: SiLangchain, color: '#2B7A78' },
            { name: 'Python', Icon: SiPython, color: '#3776AB' },
            { name: 'Voice AI', Icon: Zap },
            { name: 'ML Pipelines', Icon: Brain },
        ],
    },
    {
        label: 'Infrastructure & DevOps',
        items: [
            { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
            { name: 'Azure', Icon: VscAzure, color: '#0089D6' },
            { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
            { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
            { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
            { name: 'CI/CD', Icon: SiGithubactions, color: '#2088FF' },
        ],
    },
    {
        label: 'Data & APIs',
        items: [
            { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
            { name: 'REST & GraphQL', Icon: SiGraphql, color: '#E10098' },
        ],
    },
    {
        label: 'Security & Integrations',
        items: [
            { name: 'Zero Trust', Icon: Shield },
            { name: 'PMS Integrations', Icon: Plug },
            { name: 'Smart Lock APIs', Icon: KeyRound },
            { name: 'SSO & Auth', Icon: Lock },
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techGroups.map((group, groupIndex) => (
                        <div
                            key={group.label}
                            className="relative group"
                            style={{
                                animation: `fade-in 0.6s ease-out ${groupIndex * 0.12}s both`,
                            }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-accent/15 border border-accent/30">
                                        <BadgeCheck className="w-5 h-5 text-accent shrink-0" />
                                    </div>
                                    <h4 className="text-base font-semibold text-white  capitalize tracking-wider">
                                        {group.label}
                                    </h4>
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                            </div>
                            <div className="flex flex-wrap gap-3 pl-0">
                                {group.items.map(({ name, Icon, color }, itemIndex) => (
                                    <div
                                        key={name}
                                        className="group/item inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl  border border-secondary/60 text-neutral-light text-sm font-medium hover:border-accent/50 hover:from-secondary hover:to-secondary/80 hover:shadow-lg hover:shadow-accent/10 transition-all duration-250"
                                        style={{
                                            animation: `fade-in 0.5s ease-out ${groupIndex * 0.12 + itemIndex * 0.05}s both`,
                                        }}
                                    >
                                        <Icon
                                            className={`w-4 h-4 shrink-0 group-hover/item:scale-110 transition-transform ${!color ? 'text-accent' : ''}`}
                                            style={color ? { color } : undefined}
                                        />
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
