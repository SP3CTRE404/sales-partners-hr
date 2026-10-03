import React from 'react';
import { Quote, CheckCircle2, TrendingUp, Users, Building, ShieldCheck } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
            Track Record &bull; Measurable Proof
          </div>
          <h2 
            className="text-4xl sm:text-6xl font-normal text-black tracking-tight leading-[1.08]" 
            style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
          >
            Measurable Results That Drive Leadership Confidence
          </h2>
          <p className="mt-4 text-lg text-[#707070] font-normal leading-relaxed">
            Data-backed performance and enduring executive partnerships across international high-growth companies.
          </p>
        </div>

        {/* Asymmetric Metrics Bento: 8-Col Anchor Card + 4-Col Staggered Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* 8-Col Anchor Metric Card */}
          <div 
            className="lg:col-span-8 bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '45px 45px 0px 45px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span 
                  className="px-3.5 py-1 bg-[#eeeee8] text-black text-xs font-semibold uppercase tracking-wider"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                >
                  Primary Benchmark &bull; 01
                </span>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <div 
                className="text-6xl sm:text-8xl font-normal text-black tracking-tight mb-4"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                98%
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-normal text-black mb-3"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Client Retention &amp; Advisory Continuity
              </h3>
              <p className="text-[#707070] text-lg leading-relaxed font-normal max-w-xl mb-8">
                Reflecting consistent executive quality, compliance precision, and long-term organizational partnerships across technology, healthcare, and finance sectors.
              </p>
            </div>

            {/* Embedded Mini Highlight */}
            <div 
              className="bg-[#f5f5f0] border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ borderRadius: '20px 20px 20px 0px' }}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#116dff]" />
                <span className="text-sm text-black font-normal">Audit-tested in over 12 global labor jurisdictions</span>
              </div>
              <span className="text-xs text-[#707070] font-semibold">100% Verified Delivery</span>
            </div>
          </div>

          {/* 4-Col Staggered Vertical Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
            
            {/* Top Stat: 1,200+ */}
            <div 
              className="bg-[#eeeee8] border border-gray-300 p-8 sm:p-10 hover:border-black transition-all flex flex-col justify-between flex-1 group"
              style={{ borderRadius: '0px 40px 40px 40px' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                    Stat &bull; 02
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#116dff]">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div 
                  className="text-5xl font-normal text-black tracking-tight mb-2"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  1,200+
                </div>
                <h4 className="text-lg font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Top Candidates Placed
                </h4>
              </div>
              <p className="text-xs text-[#707070] leading-relaxed pt-4 border-t border-gray-300 font-normal">
                Across mission-critical leadership, commercial, and technical operations.
              </p>
            </div>

            {/* Bottom Stat: 250+ */}
            <div 
              className="bg-white border border-gray-200 p-8 sm:p-10 hover:border-black transition-all flex flex-col justify-between flex-1 group"
              style={{ borderRadius: '40px 40px 40px 0px' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                    Stat &bull; 03
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                    <Building className="w-5 h-5" />
                  </div>
                </div>
                <div 
                  className="text-5xl font-normal text-black tracking-tight mb-2"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  250+
                </div>
                <h4 className="text-lg font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Active Business Partners
                </h4>
              </div>
              <p className="text-xs text-[#707070] leading-relaxed pt-4 border-t border-gray-100 font-normal">
                Trusting our embedded HR teams across key European &amp; Asian commercial hubs.
              </p>
            </div>

          </div>

        </div>

        {/* Asymmetrical Testimonials: 7-Col Dark Obsidian Card vs 5-Col Crisp Light Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1 (7 Cols): High-Contrast Dark Card */}
          <div 
            className="lg:col-span-7 bg-black text-white p-8 sm:p-12 border border-black hover:bg-neutral-900 transition-all flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '40px 0px 40px 40px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-8">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-xl sm:text-2xl font-normal leading-relaxed mb-8">
                "Their HR consulting team completely transformed our hiring process and organizational culture. We scale faster and retain top talent with complete confidence."
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <div>
                <p className="text-base font-normal text-white" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Chief Executive Officer
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  High-Growth Tech Enterprise
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Card 2 (5 Cols): Light Warm Crisp Card */}
          <div 
            className="lg:col-span-5 bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all flex flex-col justify-between group relative"
            style={{ borderRadius: '0px 40px 40px 40px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff] mb-8">
                <Quote className="w-5 h-5" />
              </div>
              <p className="text-black text-lg sm:text-xl font-normal leading-relaxed mb-8">
                "Navigating complex corporate compliance was seamless with their dedicated support. They are an invaluable extension of our operational leadership."
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-base font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Head of Operations
                </p>
                <p className="text-xs text-[#707070] mt-0.5">
                  Global Healthcare Organization
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black">
                <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
