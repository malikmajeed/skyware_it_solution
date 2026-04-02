'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeroSection } from '@/components/ui/PageHeroSection';
import { ul } from 'framer-motion/client';

const CONTACT_FORM_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || 'https://skywareit.com/backend';

const contactCards = [
  {
    title: 'Email Us',
    Icon: Mail,
    lines: ['info@skywareit.com'],
  },
  {
    title: 'Call Us',
    Icon: Phone,
    lines: ['+1 (307) 922-0592', '+92 (330) 769-3693'],
  },
  {
    title: 'Offices',
    Icon: MapPin,
    lines: ['30 N Gould St. Sheridan, WY 82801', 'Office 215, Uhad Tower Phase 3 Chowk, University Road, Peshawar'],
  },
  {
    title: 'Working Hours',
    Icon: Clock,
    lines: ['24/7 Support Service Available'],
  },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CONTACT_FORM_URL) {
      setSubmitStatus('error');
      setSubmitError('Contact form is not configured. Please email us at info@skywareit.com.');
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('Network error. Please try again or email us at info@skywareit.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeroSection contentClassName="max-w-3xl flex flex-col gap-6 items-center text-center">
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-normal">
          Let&apos;s Start a <span className="text-primary font-bold">Conversation</span>
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
                    <ul key={line} className="text-neutral-400 text-sm">

                      <li key={line} className="text-neutral-400 text-sm list-disc list-inside space-y-2">
                        {line}
                      </li>
                    </ul>
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
              onSubmit={handleSubmit}
            >
              {submitStatus === 'success' && (
                <p className="text-primary text-sm">Thanks! We&apos;ll get back to you within 24 hours.</p>
              )}
              {submitStatus === 'error' && submitError && (
                <p className="text-red-400 text-sm">{submitError}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm text-white font-normal mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white font-normal mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    disabled={submitting}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-white font-normal mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={submitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white font-normal mb-2">
                  Tell us about your goal?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project or inquiry"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y min-h-[120px]"
                  disabled={submitting}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-normal text-white transition-colors hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send Message'}
                {!submitting && <ArrowRight className="w-5 h-5" />}
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
