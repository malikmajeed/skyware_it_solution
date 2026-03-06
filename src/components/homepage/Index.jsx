import React from 'react'

import { HeroSection } from '@/components/homepage/HeroSection';
import { InnovationPathSection } from '@/components/homepage/InnovationPathSection';
import {ServicesSection} from '@/components/homepage/ServicesSection';
import { Statistics } from '../ui/Statistics';

export const HomePage = () => {
  return (
    <>
    <HeroSection />
 <Statistics />
    <ServicesSection />
    <InnovationPathSection />
    
    </>
  )
}
