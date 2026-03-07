'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

const services = [
  {
    id: 'web',
    title: 'Website Development',
    tagline: 'Your 24/7 Salesperson',
    description:
      'High-speed and SEO-aware websites that transform user interaction to drive digital success.',
    features: ['Custom CMS/ERP', 'Responsive & Mobile First', 'Performance Optimized', 'SEO-Boosts'],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    tagline: 'Innovation in YOur Pocket',
    description:
      'Intuitive mobile apps tailored for engagement and functionality across different platforms.',
    features: ['IOS & Android', 'Cross-Platform Solutions', 'Native App Development', 'User-Centric UI/UX'],
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    tagline: 'Evolve or Stay Behind',
    description:
      'We overhaul your workflows, integrating innovative tools to increase efficiency and business value.',
    features: ['Legacy System Modernization', 'Cloud Integration', 'Process Automation', 'Data Analysis'],
    tags: ['AWS', 'Azure', 'Docker', 'Google Cloud'],
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    tagline: 'Connecting the Unconnected',
    description:
      'Transforming industries with data-driven devices for real-time business insights.',
    features: ['Smart Device Integration', 'Industry IoT', 'Real-time Monitoring', 'Predictive Analytics'],
    tags: ['MQTT','Node-RED', 'InfluxDB', 'ChirpStack', 'Sensors'],
  },
  {
    id: 'networking',
    title: 'Networking',
    tagline: 'Robust and secure infrastructure',
    description:
      'Robust and secure network infrastructure to ensure your business\'s seamless and reliable data flow.',
    features: ['Infrastructure Design', 'Network Security', 'Cloud Networking', 'Managed Services'],
    tags: ['Network', 'Security', 'Cloud', 'Managed'],
  },
  {
    id: 'hospitality',
    title: 'Hospitality Digitalization',
    tagline: 'Elevate the Guest Experience',
    description:
      'Revolutionizing the hospitality journey – from smart check-ins to tailored guest engagement systems.',
    features: ['Smart Hotel Solutions', 'Guest Engagement Systems', 'CRM Integration', 'Data Analytics'],
    tags: ['Hospitality', 'CRM', 'Guest', 'Analytics'],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals and challenges.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We define a clear roadmap and technical approach tailored to your needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your solution with modern tech, agile sprints, and continuous feedback.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deliver a production-ready solution with documentation and ongoing support.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeroSection
        title="Our"
        highlightText="Services"
        subtitle="Comprehensive. Tailored to your business needs."
        contentClassName="max-w-3xl flex flex-col gap-10"
      />

      {/* Services grid */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #1F4E79 1px, transparent 1px), linear-gradient(to bottom, #1F4E79 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
            
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                className="relative rounded-2xl border border-neutral-700/80 bg-neutral-900/50 p-6 sm:p-8 flex flex-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
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
                <h2 className="text-xl sm:text-2xl text-white font-normal tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-1 text-primary/90 text-sm">{service.tagline}</p>
                <p className="mt-4 text-white text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white">
                      <Check className="w-4 h-4 shrink-0 text-white" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 text-white text-sm transition-colors hover:text-primary inline-flex items-center gap-1"
                >
                  Tags
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-600 bg-neutral-800/60 px-3 py-1 text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 70% at 0% 0%, rgba(42, 149, 147, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 70% 70% at 100% 100%, rgba(42, 149, 147, 0.06) 0%, transparent 50%)
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
            <h2 className="text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-lg">How we bring your ideas to life</p>
          </motion.header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.article
                key={item.step}
                className="rounded-2xl  border border-neutral-700/80 bg-accent/20 p-6 sm:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span
                  className="text-6xl sm:text-7xl font-normal text-neutral-600 select-none"
                  aria-hidden
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl text-white font-normal">{item.title}</h3>
                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(42, 149, 147, 0.15) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl text-white font-normal tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get <span className="text-primary">Started?</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-neutral-400 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let us discuss how we can help transform your business with the right technology solutions.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-normal text-white transition-colors hover:bg-primary/90"
            >
              Get Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>


    </main>
  );
}
