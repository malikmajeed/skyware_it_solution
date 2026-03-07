'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex flex-col gap-0.5 shrink-0"
            onClick={closeMobile}
            aria-label="Skyware IT Solutions – Home"
          >
            <img
              src="/Skyware It solutions pvt ltd logo.png"
              alt="Skyware IT Solutions"
              className="h-8 sm:h-[40px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative py-2 text-white font-normal text-sm lg:text-base transition-colors hover:text-primary min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 md:py-0 flex items-center ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary hidden md:block"
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/contact" className="shrink-0">
              <PrimaryButton className="px-4 py-2.5 text-sm font-normal text-white transition-colors hover:bg-primary/90">
                Get Started
              </PrimaryButton>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          mobileOpen ? 'max-h-[80vh]' : 'max-h-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="border-t border-neutral-800 bg-black px-4 pb-6 pt-3 text-left"
          aria-label="Main navigation"
        >
          <ul className="flex flex-col items-start gap-0">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <li key={href} className="w-full">
                  <Link
                    href={href}
                    onClick={closeMobile}
                    className={`flex items-center justify-start w-full px-0 py-2 rounded-lg text-base font-normal transition-colors min-h-[44px] ${
                      isActive
                        ? 'bg-primary/20 text-primary'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-1 pt-3 border-t border-neutral-800 w-full">
              <Link href="/contact" onClick={closeMobile} className="block text-left">
                <PrimaryButton className="justify-start px-4 py-2.5 text-base font-normal text-white">
                  Get Started
                </PrimaryButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
