'use client';

import Link from 'next/link';
import { ArrowRight, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

const servicesLinks = [
    { label: 'Web Development', href: '/services#web' },
    { label: 'Mobile Apps', href: '/services#mobile' },
    { label: 'Digital Transformation', href: '/services#digital' },
    { label: 'IoT Solutions', href: '/services#iot' },
];

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
];

const socials = [
    { label: 'LinkedIn', href: '#', Icon: Linkedin },
    { label: 'Twitter', href: '#', Icon: Twitter },
    { label: 'GitHub', href: '#', Icon: Github },
    { label: 'Email', href: 'mailto:hello@skyware.com', Icon: Mail },
];

export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 sm:py-20">
                {/* Newsletter */}
                <div className="rounded-2xl border border-neutral-600/80 bg-neutral-900/60 p-8 sm:p-10 mb-16 sm:mb-20">
                    <h3 className="text-2xl sm:text-3xl  text-white">
                        Stay Updated
                    </h3>
                    <p className="text-white/70 text-lg'">
                        Get the latest insights on technology and innovation delivered to your inbox.
                    </p>
                    <form
                        className="mt-6 flex flex-col sm:flex-row gap-3"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 min-w-0 rounded-lg border border-neutral-600 bg-neutral-800/80 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90 shrink-0"
                        >
                            Subscribe
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>

                {/* Main footer links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                    <Link href="/" className="flex flex-col gap-0.5">
           <img src="/Skyware It solutions pvt ltd logo.png" alt="Skyware It solutions pvt ltd logo"  />
          </Link>
                        <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                            Future-proofing your business with intelligent IT solutions. From web development to IoT ecosystems, we deliver excellence.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-600 bg-neutral-800/80 text-white transition-colors hover:border-primary hover:text-primary"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className=" text-white">Company</h4>
                        <ul className="mt-4 space-y-2">
                            {companyLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-neutral-400 text-sm transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white">Services</h4>
                        <ul className="mt-4 space-y-2">
                            {servicesLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-neutral-400 text-sm transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white">Legal</h4>
                        <ul className="mt-4 space-y-2">
                            {legalLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-neutral-400 text-sm transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <span>© 2026 Skyware IT Solutions. All rights reserved.</span>
                    <span>
                        Built with <span className="text-red-500" aria-hidden>❤️</span> for innovation.
                    </span>
                </div>
            </div>
        </footer>
    );
}
