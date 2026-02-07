'use client';

import { HeroSection } from '@/components/HeroSection';
import { InnovationPathSection } from '@/components/homepage/InnovationPathSection';
import {ServicesSection} from '@/components/homepage/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InnovationPathSection />
      <ServicesSection />
    </main>
  );
}
