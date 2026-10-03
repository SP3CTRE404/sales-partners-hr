import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { SocialProofSection } from '../components/home/SocialProofSection';
import { CtaBannerSection } from '../components/home/CtaBannerSection';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f0]">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <SocialProofSection />
      <CtaBannerSection />
    </div>
  );
};
