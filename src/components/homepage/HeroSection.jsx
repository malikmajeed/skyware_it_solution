import { ArrowRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      <img src="./background-hero-section.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24  gap-10 py-20">
        <div className="text-center  flex  flex-col gap-10 items-center max-w-4xl">
          

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
            <span className="text-white font-bold ">Future-Proofing Your <br /> Business With</span>
            <br />
            {/* <span className="text-neutral-light">With </span> */}
            <div className="">
              <span className="bg-gradient-to-b from-primary via-secondary font-bold to-primary bg-clip-text text-transparent inline-block">
              Intelligent IT Solutions
              </span>
             
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-lg'">
            Enterprise-grade software solutions powered by cutting-edge technology. 
            From AI-driven automation to scalable cloud infrastructure—we transform your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <PrimaryButton icon={ArrowRight} iconPosition="right" href="/contact">
              Get a Free Strategy Session
          </PrimaryButton>
          <SecondaryButton href="/services">
              Our Services
          </SecondaryButton>
           
          </div>

      
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}