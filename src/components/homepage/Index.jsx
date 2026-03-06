import React from 'react'

import { HeroSection } from '@/components/homepage/HeroSection';

import {WhyChooseSkyware} from '@/components/homepage/WhyChooseSkyware';
import { Statistics } from '../ui/Statistics';
import {TechWeMaster} from '@/components/homepage/TechWeMaster';
import {CallToAction} from '@/components/ui/CTA';


export const HomePage = () => {
  return (
    <>
    <HeroSection />
 <Statistics />
    <WhyChooseSkyware />
    <TechWeMaster />
    <CallToAction />
    </>
  )
}
