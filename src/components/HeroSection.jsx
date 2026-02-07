import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { useState, useEffect } from 'react';

const services = [
  'AI Automations',
  'Hospitality Solutions',
  'Web Applications',
  'Mobile Applications',
  'IoT Services'
];

const TYPING_SPEED_MS = 80;
const DELETING_SPEED_MS = 50;
const PAUSE_AT_END_MS = 2000;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = services[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedLength < currentWord.length) {
          setDisplayedLength((prev) => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, PAUSE_AT_END_MS);
        }
      } else {
        if (displayedLength > 0) {
          setDisplayedLength((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, isPaused ? PAUSE_AT_END_MS : speed);

    return () => clearTimeout(timer);
  }, [displayedLength, isDeleting, isPaused, currentWord.length, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F4E79_1px,transparent_1px),linear-gradient(to_bottom,#1F4E79_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000" />

      {/* Floating stars – 4-point, blue & white, some bigger/brighter */}
      <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden>
        {/* 4-point star path (corners) */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 opacity-70 animate-float-slow">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[22%] right-[12%] w-3.5 h-3.5 opacity-65 animate-float-slower" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neutral-light">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[12%] right-[28%] w-2.5 h-2.5 opacity-50 animate-float-slow" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[50%] left-[6%] w-5 h-5 opacity-60 animate-float-slow" style={{ animationDelay: '2.5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-secondary">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[58%] right-[8%] w-3.5 h-3.5 opacity-70 animate-float-slower" style={{ animationDelay: '0.5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neutral-light">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[32%] left-[18%] w-2.5 h-2.5 opacity-55 animate-float-slow" style={{ animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[22%] right-[22%] w-4 h-4 opacity-65 animate-float-slower" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neutral-light">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[38%] left-[15%] w-3 h-3 opacity-60 animate-float-slow" style={{ animationDelay: '0.8s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute top-[75%] left-[25%] w-4 h-4 opacity-55 animate-float-slower" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-secondary">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[38%] right-[30%] w-2.5 h-2.5 opacity-70 animate-float-slow" style={{ animationDelay: '1.2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-neutral-light">
            <path d="M12 0 L 14.5 9 L 24 12 L 14.5 15 L 12 24 L 9.5 15 L 0 12 L 9.5 9 Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary/70 backdrop-blur-sm mb-8 hover:border-accent/50 transition-colors">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-neutral-light/90">Skyware IT Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="text-neutral-light text-5xl">Your Partner In</span>
            <br />
            {/* <span className="text-neutral-light">With </span> */}
            <div className="inline-block h-20 sm:h-24 md:h-28 lg:h-32 align-middle min-w-[2ch]">
              <span className="bg-gradient-to-r from-accent via-[#00C2FF] to-secondary bg-clip-text text-transparent inline-block">
                AI & Software Services
              </span>
              <span
                className="inline-block w-0.5 h-[0.85em] bg-accent ml-0.5 align-middle animate-pulse"
                style={{ marginBottom: '0.1em' }}
                aria-hidden
              />
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-light/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade software solutions powered by cutting-edge technology. 
            From AI-driven automation to scalable cloud infrastructure—we transform your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
           
            <SecondaryButton>
              Our Services
            </SecondaryButton>
            <PrimaryButton icon={ArrowRight} iconPosition="right">
              Start Your Project
            </PrimaryButton>
          </div>

          {/* Stats */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-secondary/50 select-none">
        {[
          { value: "399+", label: "Global Clients" },
          { value: "500+", label: "Projects Delivered" },
          { value: "15+", label: "Years of Excellence" },
          { value: "99.9%", label: "Uptime SLA" },
        ].map((stat) => (
          <div key={stat.label} className="text-center group min-w-[0]">
            <div 
              className="
                text-4xl md:text-5xl font-bold mb-2 
                bg-gradient-to-br from-white to-neutral-light/50 bg-clip-text text-transparent
                will-change-transform
                transition-transform duration-300
                group-hover:scale-[1.04]
                "
              // Avoid layout shift by reserving space & limiting scale
              style={{
                minHeight: '3.5rem', // prevents height jumping during scale
                display: 'inline-block'
              }}
            >
              {stat.value}
            </div>
            <div className="text-sm text-neutral-light/50 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
       </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}