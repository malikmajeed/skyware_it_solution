'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

/* Same star burst as PrimaryButton – for card hover */
const starSvgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlSpace: 'preserve',
  viewBox: '0 0 784.11 815.53',
  className: 'w-full h-auto',
};
const StarPath = () => (
  <path
    fill="#F4F6F8"
    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
  />
);
/* Shorter burst; hover + selected state use same burst position */
const starConfigs = [
  { w: 'w-[25px]', top: 'top-[20%]', left: 'left-[20%]', hoverTop: 'group-hover:top-[-35%] group-[.selected]:top-[-35%]', hoverLeft: 'group-hover:left-[-15%] group-[.selected]:left-[-15%]', duration: 'duration-1000' },
  { w: 'w-[15px]', top: 'top-[45%]', left: 'left-[45%]', hoverTop: 'group-hover:top-[-12%] group-[.selected]:top-[-12%]', hoverLeft: 'group-hover:left-[5%] group-[.selected]:left-[5%]', duration: 'duration-1000' },
  { w: 'w-[5px]', top: 'top-[40%]', left: 'left-[40%]', hoverTop: 'group-hover:top-[48%] group-[.selected]:top-[48%]', hoverLeft: 'group-hover:left-[22%] group-[.selected]:left-[22%]', duration: 'duration-1000' },
  { w: 'w-[8px]', top: 'top-[20%]', left: 'left-[40%]', hoverTop: 'group-hover:top-[26%] group-[.selected]:top-[26%]', hoverLeft: 'group-hover:left-[68%] group-[.selected]:left-[68%]', duration: 'duration-[800ms]' },
  { w: 'w-[15px]', top: 'top-[25%]', left: 'left-[45%]', hoverTop: 'group-hover:top-[22%] group-[.selected]:top-[22%]', hoverLeft: 'group-hover:left-[82%] group-[.selected]:left-[82%]', duration: 'duration-[600ms]' },
  { w: 'w-[5px]', top: 'top-[5%]', left: 'left-[50%]', hoverTop: 'group-hover:top-[5%] group-[.selected]:top-[5%]', hoverLeft: 'group-hover:left-[58%] group-[.selected]:left-[58%]', duration: 'duration-[800ms]' },
];

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
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <span className="text-sm font-medium capitalize text-neutral-light/90">Which path to innovation will you take?</span>
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
          onMouseLeave={() => setSelectedIndex(0)}
        >
          {services.map((service, index) => {
            const isSelected = selectedIndex === index;
            return (
            <motion.article
              key={service.title}
              variants={item}
              transition={{ duration: 0.4 }}
              className={`group relative ${isSelected ? 'selected' : ''}`}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {/* Blue glow – when hover or selected */}
              <div
                className={`absolute -inset-px rounded-2xl transition-opacity duration-500 pointer-events-none ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,194,255,0.2), transparent 70%)',
                }}
              />
              <div
                className={`absolute -inset-px rounded-2xl transition-opacity duration-500 pointer-events-none ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{
                  background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(31,78,121,0.25), transparent 60%)',
                }}
              />

              {/* Glassmorphism card – selected or hover styles */}
              <div className={`relative h-full rounded-2xl backdrop-blur-lg border p-6 sm:p-8 transition-colors duration-300 overflow-visible ${isSelected ? 'bg-secondary/10 border-accent/30' : 'bg-secondary/5 border-secondary/20 group-hover:border-accent/30 group-hover:bg-secondary/10'}`}>
                {/* Stars – visible when hover or selected */}
                {starConfigs.map((star, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className={`absolute pointer-events-none -z-[5] transition-all ease-out ${star.duration} ${star.w} ${star.top} ${star.left} ${star.hoverTop} ${star.hoverLeft} drop-shadow-[0_0_0_#F4F6F8] group-hover:drop-shadow-[0_0_10px_#F4F6F8] group-[.selected]:drop-shadow-[0_0_10px_#F4F6F8] ${isSelected ? 'opacity-100 z-[2]' : 'opacity-0 group-hover:opacity-100 group-hover:z-[2]'}`}
                  >
                    <svg {...starSvgProps}>
                      <g><StarPath /></g>
                    </svg>
                  </div>
                ))}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-light mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-light/70 text-sm sm:text-base leading-relaxed tracking-wide" style={{ letterSpacing: '0.02em' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
}
