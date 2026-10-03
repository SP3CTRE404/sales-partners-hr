import React from 'react';
import { AboutHeroSection } from '../components/about/AboutHeroSection';
import { MissionVisionSection } from '../components/about/MissionVisionSection';
import { CoreValuesSection } from '../components/about/CoreValuesSection';
import { ImpactFrameworkSection } from '../components/about/ImpactFrameworkSection';
import { LeadershipSection } from '../components/about/LeadershipSection';
import { AboutCtaSection } from '../components/about/AboutCtaSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f0]">
      <AboutHeroSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ImpactFrameworkSection />
      <LeadershipSection />
      <AboutCtaSection />
    </div>
  );
};
