'use client';
import { Sparkles } from 'lucide-react';

import { motion } from 'framer-motion';

const services = [
  
  {
    title: 'Hospitality Digitalization',
    description: 'Transforming hospitality with intelligent automation and contactless guest journeys.',
  },
  {
    title: 'Strategic Networking',
    description: 'Designing the backbone of your business with hyper-secure, high-speed network architecture.',
  },

  {
    title: 'IoT & Voice AI Integration',
    description: 'Bridge the physical and digital worlds with smart sensors and real-time automated intelligence.',
  },
  {
    title: 'Next-Gen App Development',
    description: "Engineering fluid mobile experiences that put your brand directly in the palm of your user's hand.",
  },
  {
    title: 'Web Development',
    description: 'Architecting high-performance web ecosystems with scalable, future-proof frameworks.',
  },
  {
    title: 'Cyber Security & Resilience',
    description: 'Hardening your digital perimeter with advanced threat intelligence and zero-trust protocols.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function InnovationPathSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-primary overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F4E79_1px,transparent_1px),linear-gradient(to_bottom,#1F4E79_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
         
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary/70 backdrop-blur-sm mb-8 hover:border-accent/50 transition-colors">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-neutral-light/90">Which path to innovation will you take?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-accent tracking-tight">
            Let&apos;s Build the Future
          </h2>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              transition={{ duration: 0.4 }}
              className="group relative"
            >
              {/* Blue glow on hover – accent & secondary */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,194,255,0.2), transparent 70%)',
                }}
              />
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(31,78,121,0.25), transparent 60%)',
                }}
              />

              {/* Glassmorphism card – theme borders */}
              <div className="relative h-full rounded-2xl bg-secondary/5 backdrop-blur-lg border border-secondary/20 p-6 sm:p-8 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-secondary/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-light mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-light/70 text-sm sm:text-base leading-relaxed tracking-wide" style={{ letterSpacing: '0.02em' }}>
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
