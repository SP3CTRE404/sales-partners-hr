import React from 'react';
import { Quote, CheckCircle2, Users, Building, ShieldCheck } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* Asymmetric Metrics Bento with HoverToZoom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
          
          {/* 8-Col Anchor Metric Card: Black Card */}
          <HoverToZoom className="lg:col-span-8 flex flex-col" zoomScale="scale-[1.02]">
            <div 
              className="bg-black text-white border border-black p-8 sm:p-10 min-h-[360px] flex flex-col justify-between group relative overflow-hidden h-full w-full"
              style={{ borderRadius: '40px 40px 0px 40px' }}
            >
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                  Executive Retention
                </div>

                <div 
                  className="text-5xl sm:text-7xl font-normal text-white tracking-tight mb-2"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  98%
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-normal text-white mb-3"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  Client Retention &amp; Advisory Continuity
                </h3>
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                  Reflecting consistent executive quality, compliance precision, and long-term organizational partnerships across technology, healthcare, and finance sectors.
                </p>
              </div>

              <div className="pt-5 border-t border-neutral-800 flex items-center gap-3 text-sm text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                <span>Tested across over 12 international labor jurisdictions</span>
              </div>
            </div>
          </HoverToZoom>

          {/* 4-Col Staggered Vertical Stack with HoverToZoom */}
          <HoverToZoom className="lg:col-span-4 flex flex-col gap-4 justify-between" zoomScale="scale-[1.04]">
            
            {/* Top Stat: 1,200+ (White Card) */}
            <div 
              className="bg-white border border-gray-200 p-6 sm:p-7 min-h-[175px] flex flex-col justify-between flex-1 group"
              style={{ borderRadius: '0px 32px 32px 32px' }}
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#f5f5f0] flex items-center justify-center text-black mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <div 
                  className="text-4xl sm:text-5xl font-normal text-black tracking-tight mb-1"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  1,200+
                </div>
                <h4 className="text-base sm:text-lg font-normal text-black mb-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Top Candidates Placed
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#707070] leading-relaxed font-normal pt-3 border-t border-gray-100">
                Across mission-critical leadership, commercial, and technical operations.
              </p>
            </div>

            {/* Bottom Stat: 250+ (Black Card) */}
            <div 
              className="bg-black text-white border border-black p-6 sm:p-7 min-h-[175px] flex flex-col justify-between flex-1 group"
              style={{ borderRadius: '32px 32px 32px 0px' }}
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-3">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <div 
                  className="text-4xl sm:text-5xl font-normal text-white tracking-tight mb-1"
                  style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                >
                  250+
                </div>
                <h4 className="text-base sm:text-lg font-normal text-white mb-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Active Business Partners
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal pt-3 border-t border-neutral-800">
                Trusting our embedded HR teams across European &amp; Asian commercial hubs.
              </p>
            </div>

          </HoverToZoom>

        </div>

        {/* Asymmetrical Testimonials with HoverToZoom */}
        <HoverToZoom className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" zoomScale="scale-[1.03]">
          
          {/* Card 1 (7 Cols): Black Card */}
          <div 
            className="lg:col-span-7 bg-black text-white p-8 sm:p-10 min-h-[290px] border border-black flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '35px 0px 35px 35px' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-5">
                <Quote className="w-4 h-4 text-white" />
              </div>
              <p className="text-white text-lg sm:text-xl font-normal leading-relaxed mb-6">
                "Their HR consulting team completely transformed our hiring process and organizational culture. We scale faster and retain top talent with complete confidence."
              </p>
            </div>

            <div className="pt-5 border-t border-neutral-800 flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-normal text-white" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Chief Executive Officer
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  High-Growth Tech Enterprise
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Card 2 (5 Cols): Light Card */}
          <div 
            className="lg:col-span-5 bg-white border border-gray-200 p-8 sm:p-10 min-h-[290px] flex flex-col justify-between group relative"
            style={{ borderRadius: '0px 35px 35px 35px' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-5">
                <Quote className="w-4 h-4" />
              </div>
              <p className="text-black text-base sm:text-lg font-normal leading-relaxed mb-6">
                "Navigating complex corporate compliance was seamless with their dedicated support. They are an invaluable extension of our operational leadership."
              </p>
            </div>

            <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Head of Operations
                </p>
                <p className="text-xs text-[#707070] mt-0.5">
                  Global Healthcare Organization
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
          </div>

        </HoverToZoom>

      </div>
    </section>
  );
};
