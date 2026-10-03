import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-20 pb-28 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Eyebrow Pill - Offset Left */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e8e8e3] text-black text-xs uppercase tracking-[0.18em] font-semibold"
            style={{ borderRadius: '20px 20px 20px 0px' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#116dff] animate-pulse"></span>
            <span>Workforce Architecture &bull; People-First HR</span>
          </div>
          <span className="text-xs text-[#707070] hidden sm:inline-block">
            Advisory &bull; Recruitment &bull; Compliance
          </span>
        </div>

        {/* Asymmetrical Hero Core: Large Left Statement + Right Sculpted Bento Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Left Column: Asymmetrical Typography & Actions */}
          <div className="lg:col-span-8 text-left">
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-black tracking-tight leading-[1.05] mb-8"
              style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
            >
              Built for <span className="underline decoration-1 underline-offset-8 decoration-gray-400">Performance</span><br />
              Designed to Scale.
            </h1>

            <p className="text-lg md:text-2xl text-[#707070] font-normal max-w-2xl leading-relaxed mb-10">
              From executive recruitment to modern workplace compliance, we design tailored human resource strategies that drive growth, culture, and operational excellence.
            </p>

            {/* Asymmetrical Actions: Varied Button Shapes */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                id="hero-schedule-cta"
                className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg hover:bg-neutral-900 transition-all gap-3 shadow-sm hover:translate-y-[-2px]"
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

          {/* Right Column: Sculpted Bento Card Breaking Symmetry */}
          <div className="lg:col-span-4 lg:pt-6">
            <div 
              className="bg-white border border-gray-200 p-8 sm:p-10 shadow-sm hover:border-black transition-all relative overflow-hidden group"
              style={{ borderRadius: '40px 0px 40px 40px' }}
            >
              {/* Asymmetric Header in Card */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#707070]">
                  Live HR Benchmark
                </span>
                <div className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Big Metric */}
              <div 
                className="text-6xl font-normal text-black tracking-tight mb-2"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                98%
              </div>
              <p className="text-base font-normal text-black mb-6">
                Client retention rate across fast-growing commercial &amp; tech companies.
              </p>

              <div className="space-y-3 pt-6 border-t border-gray-100 text-xs text-[#707070]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Audit-ready compliance frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Executive candidate matching within 14 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Named strategic advisor for every account</span>
                </div>
              </div>

              {/* Sculpted Bottom Pill */}
              <div className="mt-8 pt-4">
                <div 
                  className="bg-[#eeeee8] text-black text-xs font-medium px-4 py-2.5 flex items-center justify-between"
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                >
                  <span>Active Capacity</span>
                  <span className="text-[#116dff] font-semibold">&bull; London &bull; Bengaluru</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Asymmetrical Staggered Capability Grid (Unequal Offsets, Varied Corners & Contrasts) */}
        <div className="pt-8 border-t border-gray-300">
          <div className="text-xs uppercase tracking-[0.2em] text-[#707070] font-semibold mb-8 text-left">
            Core Competencies &bull; Architecture
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Classic Asymmetric Pill Corner */}
            <div 
              className="bg-white border border-gray-200 p-8 hover:border-black transition-all flex flex-col justify-between group"
              style={{ borderRadius: '30px 30px 30px 0px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff] mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Tailored Strategies
                </div>
                <div className="text-sm text-[#707070] leading-relaxed">
                  Frameworks configured directly for your exact organizational structure and growth objectives.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#707070] font-medium">
                01 &bull; Custom Architecture
              </div>
            </div>

            {/* Card 2: Shifted Down with Inverted Corner */}
            <div 
              className="bg-[#eeeee8] border border-gray-300 p-8 hover:border-black transition-all flex flex-col justify-between lg:translate-y-6 group"
              style={{ borderRadius: '0px 30px 30px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#116dff] mb-6">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Certified Advisors
                </div>
                <div className="text-sm text-[#707070] leading-relaxed">
                  Senior guidance from certified HR professionals with decades of hands-on industry leadership.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300/60 text-xs text-[#707070] font-medium">
                02 &bull; Industry Expertise
              </div>
            </div>

            {/* Card 3: Inverted Top-Right Corner */}
            <div 
              className="bg-white border border-gray-200 p-8 hover:border-black transition-all flex flex-col justify-between group"
              style={{ borderRadius: '30px 0px 30px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff] mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Compliance Ready
                </div>
                <div className="text-sm text-[#707070] leading-relaxed">
                  Ensuring your business remains audit-ready across modern labor laws and international standards.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#707070] font-medium">
                03 &bull; Regulatory Shield
              </div>
            </div>

            {/* Card 4: Contrast Dark Card Shifted Down */}
            <div 
              className="bg-black text-white p-8 border border-black hover:bg-neutral-900 transition-all flex flex-col justify-between lg:translate-y-6 group"
              style={{ borderRadius: '30px 30px 0px 30px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xl font-normal text-white mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Modern HR Stack
                </div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  Implementing automated payroll, streamlined benefits, and data-driven workforce analytics.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 font-medium">
                04 &bull; Digital Infrastructure
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
