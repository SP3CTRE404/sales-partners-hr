import React from 'react';
import { Target, Compass, CheckCircle2, Globe2 } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 7-5 Split Grid with HoverToZoom */}
        <HoverToZoom className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" zoomScale="scale-[1.03]">
          
          {/* Mission: 7 Columns */}
          <div 
            className="lg:col-span-7 bg-white p-8 sm:p-12 border border-gray-200 flex flex-col justify-between group"
            style={{ borderRadius: '45px 45px 0px 45px' }}
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-8">
                <Target className="w-6 h-6" />
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

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-[#707070]">
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>Empowering sustainable organizational growth</span>
            </div>
          </div>

          {/* Vision: 5 Columns (Black Card) */}
          <div 
            className="lg:col-span-5 bg-black text-white p-8 sm:p-12 border border-black flex flex-col justify-between group"
            style={{ borderRadius: '0px 45px 45px 45px' }}
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-8">
                <Compass className="w-6 h-6 text-white" />
              </div>

              <h2 
                className="text-3xl font-normal text-white mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Our Vision
              </h2>
              <p className="text-neutral-300 leading-relaxed text-base font-normal">
                To become the premier HR consultancy recognized internationally for transforming workplace cultures, elevating executive talent acquisition, and modernizing workforce operations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-2 text-sm text-neutral-300">
              <Globe2 className="w-4 h-4 text-white" />
              <span>International reach across key markets</span>
            </div>
          </div>

        </HoverToZoom>

      </div>
    </section>
  );
};
