import React from 'react';

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-28 pb-16 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
          Connect &bull; Direct HR Advisory Line
        </div>
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-normal text-black tracking-tight leading-[1.1] max-w-3xl mx-auto"
          style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
        >
          Connect With Our Senior Advisory Team
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#707070] max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with our senior advisory team to discover how our tailored HR strategies can support your company's growth objectives.
        </p>
      </div>
    </section>
  );
};
