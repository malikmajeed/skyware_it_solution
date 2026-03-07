'use client';

import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeroSection } from '@/components/ui/PageHeroSection';

const contactCards = [
  {
    title: 'Email Us',
    Icon: Mail,
    lines: ['info@skywareit.com', 'career@skywareit.com'],
  },
  {
    title: 'Call Us',
    Icon: Phone,
    lines: ['+1 (000) 123-4567', '+1 (000) 123-4560'],
  },
  {
    title: 'Visit Us',
    Icon: MapPin,
    lines: ['123 Innovation Street', 'SDH, US, CA 90020'],
  },
  {
    title: 'Working Hours',
    Icon: Clock,
    lines: ['Mon - Fri 9:00 AM - 5:00 PM', 'Weekend by Appointment'],
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeroSection contentClassName="max-w-3xl flex flex-col gap-6 items-center text-center">
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-normal">
          Let&apos;s Start a <span className="text-primary">Conversation</span>
        </h1>
        <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed">
          Have a project in mind? Or just want to talk tech? We&apos;re all ears.
        </p>
      </PageHeroSection>

      {/* Contact info cards */}
      <section className="relative py-12 sm:py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #1F4E79 1px, transparent 1px), linear-gradient(to bottom, #1F4E79 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map(({ title, Icon, lines }, index) => (
              <motion.article
                key={title}
                className="rounded-2xl border border-neutral-700/80 bg-neutral-900/50 p-6 sm:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Icon className="w-8 h-8 text-primary" />
                <h2 className="mt-4 text-xl text-white font-normal">{title}</h2>
                <div className="mt-3 space-y-1">
                  {lines.map((line) => (
                    <p key={line} className="text-neutral-400 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Send Us a Message */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 70% at 0% 0%, rgba(42, 149, 147, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 70% 70% at 100% 100%, rgba(42, 149, 147, 0.06) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.header
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Send Us a <span className="text-primary">Message</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-lg">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.header>
          <motion.div
            className="rounded-2xl border border-neutral-700/80 bg-neutral-900/50 p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm text-white font-normal mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white font-normal mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-white font-normal mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white font-normal mb-2">
                  Tell us about your goal?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your project or inquiry"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y min-h-[120px]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-normal text-white transition-colors hover:bg-primary/90"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA / Testimonial box */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-neutral-700/80 bg-neutral-900/60 p-8 sm:p-10 lg:p-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed">
              Join <span className="text-primary">100+</span> businesses already scaling with{' '}
              <span className="text-primary">Skyware IT Solutions</span>
            </p>
            <p className="mt-3 text-neutral-400 text-lg">
              Trusted by startups, SMEs, and enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
