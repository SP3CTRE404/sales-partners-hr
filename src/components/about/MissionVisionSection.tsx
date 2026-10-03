import React from 'react';
import { Target, Compass, CheckCircle2, Globe2 } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 7-5 Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Mission: 7 Columns */}
          <div 
            className="lg:col-span-7 bg-white p-8 sm:p-12 border border-gray-200 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '45px 45px 0px 45px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <Target className="w-6 h-6" />
                </div>
                <span 
                  className="px-3.5 py-1 bg-[#eeeee8] text-black text-xs font-semibold uppercase tracking-wider"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                >
                  Purpose &bull; 01
                </span>
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Our Mission
              </h2>
              <p className="text-[#707070] leading-relaxed text-lg font-normal max-w-xl">
                To empower growing businesses by delivering modern, compliant, and people-centric HR solutions that cultivate healthy work environments, mitigate regulatory exposure, and drive sustainable performance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-black">
              <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
              <span className="text-sm text-[#707070] font-normal">Empowering sustainable organizational growth</span>
            </div>
          </div>

          {/* Vision: 5 Columns with Contrasting Cream Background & Inverse Corner */}
          <div 
            className="lg:col-span-5 bg-[#eeeee8] p-8 sm:p-12 border border-gray-300 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '0px 45px 45px 45px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-300/80">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#116dff]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                  Horizon &bull; 02
                </span>
              </div>

              <h2 
                className="text-3xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Our Vision
              </h2>
              <p className="text-[#707070] leading-relaxed text-base font-normal">
                To become the premier HR consultancy recognized internationally for transforming workplace cultures, elevating executive talent acquisition, and modernizing workforce operations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300 flex items-center gap-2 text-sm text-black">
              <Globe2 className="w-4 h-4 text-[#116dff]" />
              <span className="text-sm text-[#707070] font-normal">International reach across key markets</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
