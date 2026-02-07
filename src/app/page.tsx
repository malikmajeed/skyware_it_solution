'use client';

import { HeroSection } from '@/components/HeroSection';
import { InnovationPathSection } from '@/components/homepage/InnovationPathSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InnovationPathSection />
    </main>
  );
}
