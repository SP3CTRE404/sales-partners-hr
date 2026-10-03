import React from 'react';
import { ContactHeroSection } from '../components/contact/ContactHeroSection';
import { ContactCardsSection } from '../components/contact/ContactCardsSection';
import { ConsultationFormSection } from '../components/contact/ConsultationFormSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f0]">
      <ContactHeroSection />
      <ContactCardsSection />
      <ConsultationFormSection />
    </div>
  );
};
