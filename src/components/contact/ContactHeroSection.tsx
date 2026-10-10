import React from 'react';
import FoldText from '../common/FoldText';

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-28 pb-16 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
          Connect &bull; Direct HR Advisory Line
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-black tracking-tight leading-[1.1] max-w-3xl mx-auto"
          style={{ fontFamily: 'Questrial, Inter, sans-serif' }}
        >
          <FoldText
            text={"Connect With Our\nSenior Advisory Team"}
            splitBy="char"
            hinge="top"
            trigger="scroll"
            duration={0.65}
            stagger={0.035}
            ease="power3.out"
            perspective={700}
            creaseShading={0.55}
            fontSize="inherit"
            fontWeight={700}
            color="#000000"
            style={{ fontFamily: 'Questrial, Inter, sans-serif', lineHeight: '1.1' }}
          />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#707070] max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with our senior advisory team to discover how our tailored HR strategies can support your company's growth objectives.
        </p>
      </div>
    </section>
  );
};
