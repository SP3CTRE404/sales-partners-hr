import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award, Layers, CheckCircle2 } from 'lucide-react';
import FoldText from '../common/FoldText';
import HoverToZoom from '../common/HoverToZoom';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-24 pb-28 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Editorial Eyebrow - Plain text, no pill, no dot */}
        <div className="mb-8 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
          Workforce Architecture &bull; People-First HR
        </div>

        {/* Asymmetrical Hero Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Left Column: Bold Editorial Typography & Clean Actions */}
          <div className="lg:col-span-8 text-left">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold text-black tracking-tight leading-[1.08] mb-8"
              style={{ fontFamily: 'Questrial, Inter, sans-serif' }}
            >
              <FoldText
                text={"Built for Performance\nDesigned to Scale"}
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
                style={{ fontFamily: 'Questrial, Inter, sans-serif', lineHeight: '1.08' }}
              />
            </h1>

            <p className="text-lg md:text-2xl text-[#707070] font-normal max-w-2xl leading-relaxed mb-10">
              Recruitment for International Clients in Unitid States of America and United Kingdom helping the growth of businesses with our fast-paced faced to faced methods.
            </p>

            {/* Asymmetrical Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                id="hero-schedule-cta"
                className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg hover:bg-neutral-900 transition-all gap-3"
                style={{ borderRadius: '35px 35px 35px 0px', border: '1px solid black' }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-black border border-black hover:bg-black hover:text-white transition-all text-lg gap-3"
                style={{ borderRadius: '0px 30px 30px 30px' }}
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Asymmetric Retention Card */}
          <div className="lg:col-span-4 lg:pt-4">
            <div 
              className="bg-white border border-gray-200 p-8 sm:p-10 transition-all"
              style={{ borderRadius: '40px 0px 40px 40px' }}
            >
              <div className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-6">
                Client Continuity
              </div>

              {/* Big Metric */}
              <div 
                className="text-6xl font-normal text-black tracking-tight mb-3"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                98%
              </div>
              <p className="text-base font-normal text-black leading-relaxed mb-8">
                Retention rate across enterprise and high-growth commercial partners.
              </p>

              <div className="space-y-3 pt-6 border-t border-gray-100 text-sm text-[#707070]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                  <span>Audit-ready compliance frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                  <span>Dedicated search directors on every placement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                  <span>Named advisory lead for your organization</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Asymmetrical Staggered Capability Grid */}
        <div className="pt-10 border-t border-gray-300">
          <HoverToZoom className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
            
            {/* Card 1 */}
            <div 
              className="bg-white border border-gray-200 p-8 flex flex-col justify-between"
              style={{ borderRadius: '30px 30px 30px 0px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Tailored Strategies
                </div>
                <div className="text-sm text-[#707070] leading-relaxed">
                  Frameworks configured directly for your organizational structure and growth objectives.
                </div>
              </div>
            </div>

            {/* Card 2: Shifted Down Black Card */}
            <div 
              className="bg-black text-white p-8 border border-black flex flex-col justify-between lg:translate-y-6"
              style={{ borderRadius: '0px 30px 30px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-white mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Certified Advisors
                </div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  Senior guidance from certified HR professionals with decades of leadership experience.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="bg-white border border-gray-200 p-8 flex flex-col justify-between"
              style={{ borderRadius: '30px 0px 30px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Compliance Ready
                </div>
                <div className="text-sm text-[#707070] leading-relaxed">
                  Ensuring your business remains audit-ready across modern labor laws and employment regulations.
                </div>
              </div>
            </div>

            {/* Card 4: Dark Contrast Shifted Down */}
            <div 
              className="bg-black text-white p-8 border border-black flex flex-col justify-between lg:translate-y-6"
              style={{ borderRadius: '30px 30px 0px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-white mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Modern HR Stack
                </div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  Implementing automated payroll, streamlined benefits, and data-driven workforce workflows.
                </div>
              </div>
            </div>

          </HoverToZoom>
        </div>

      </div>
    </section>
  );
};
