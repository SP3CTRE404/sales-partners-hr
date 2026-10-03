import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-20 pb-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e8e8e3] text-black text-xs uppercase tracking-[0.18em] font-semibold"
            style={{ borderRadius: '20px 20px 20px 0px' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#116dff]"></span>
            <span>Origin &bull; About Sales Partners HR</span>
          </div>
          <span className="text-xs text-[#707070] hidden sm:inline-block">
            People-First Architecture
          </span>
        </div>

        {/* Asymmetrical 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 Cols): Bold Editorial Statement */}
          <div className="lg:col-span-7">
            <h1 
              className="text-5xl sm:text-7xl lg:text-8xl font-normal text-black tracking-tight leading-[1.05] mb-8"
              style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
            >
              Bridging Strategy and People.
            </h1>

            <p className="text-xl text-[#707070] font-normal leading-relaxed max-w-2xl mb-8">
              Founded on the conviction that employees are an organization's greatest strategic lever, we build resilient, compliant, and thriving workplaces for high-performing teams.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-black">
              <div 
                className="px-4 py-2 bg-white border border-gray-200 flex items-center gap-2 text-xs font-medium"
                style={{ borderRadius: '15px 15px 15px 0px' }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                <span>Dual Presence: London &amp; Bengaluru</span>
              </div>
              <div 
                className="px-4 py-2 bg-white border border-gray-200 flex items-center gap-2 text-xs font-medium"
                style={{ borderRadius: '15px 15px 15px 0px' }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                <span>Executive Search &bull; Compliance &bull; Culture</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Sculpted Asymmetric Foundation Card */}
          <div className="lg:col-span-5 lg:pt-4">
            <div 
              className="bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all shadow-sm"
              style={{ borderRadius: '45px 0px 45px 45px' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff] mb-6">
                <Target className="w-6 h-6" />
              </div>

              <div className="text-xs uppercase tracking-widest text-[#707070] font-semibold mb-2">
                Our Operating Philosophy
              </div>

              <h2 
                className="text-2xl font-normal text-black mb-4"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Human Depth Meets Digital Speed
              </h2>

              <p className="text-[#707070] text-base leading-relaxed font-normal mb-6">
                We combine modern HR technologies with deep human expertise to simplify workforce management, reduce hiring cycle times, and foster enduring workplace excellence.
              </p>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#707070]">
                <span>Senior Advisor Direct Delivery</span>
                <span className="text-black font-semibold">Zero Outsourcing</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
