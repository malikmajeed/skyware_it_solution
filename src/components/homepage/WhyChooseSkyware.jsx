import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const whyChooseCards = [
    {
        title: 'No Jargon, Just Results',
        bg:'/no-jargon-card.png',
        description: 'We speak your language, not just code. Clear communication and tangible outcomes.',
        bullets: ['Clear Communication', 'Measurable Results', 'Business-Focused'],
    },
    {
        title: 'Scalable by Design',
        bg:'/scalable-design-card.png',
        description: 'Solutions that grow as you do. Built for today, ready for tomorrow.',
        bullets: ['Future-Proof', 'Flexible Architecture', 'Growth-Ready'],
    },
    {
        title: 'Partner, Not Vendor',
        bg:'/partner-vendor-card.png',
        description: 'Your goals are our benchmarks. We succeed when you succeed.',
        bullets: ['Dedicated Support', 'Long-Term Partnership', 'Your Success First'],
    },
];


export function WhyChooseSkyware() {
    return (
        <section className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden">
          <div
    className="absolute inset-0 pointer-events-none opacity-20 z-0"
    style={{
        backgroundImage: `
            linear-gradient(to right, #1F4E79 1px, transparent 1px),
            linear-gradient(to bottom, #1F4E79 1px, transparent 1px)
        `,
        backgroundSize: '4rem 4rem',
        transform: 'rotate(-30deg) scale(1.5)',
    }}
    aria-hidden="true"
/>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent pointer-events-none" />

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

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative z-10  max-w-7xl mx-auto">
                <motion.header
                    className="text-center mb-16 flex flex-col gap-5 sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >

                 
<h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                        Why Choose <span className='text-secondary'>Skyware</span>
                    </h2>
                    <p className='text-white/70 text-lg'>The human element that sets us apart</p>
                </motion.header>

                <div className="mb-20 sm:mb-25">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {whyChooseCards.map((card, index) => (
                            <article 
                            key={card.title}
                            className="relative min-h-[320px] rounded-2xl backdrop-blur-sm border border-accent/30 p-8 overflow-hidden">
                                {/* Card background image – high quality, no compression */}
                                <Image
                                    src={ card.bg}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover pointer-events-none"
                                    quality={100}
                                    // unoptimized
                                    aria-hidden
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" aria-hidden />

                                <div className="relative z-10">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {card.title}
                                    </h4>
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                                        {card.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {card.bullets.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-white text-sm sm:text-base">
                                                <Check className="w-4 h-4 shrink-0 text-white" strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
