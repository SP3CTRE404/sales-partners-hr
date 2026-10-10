import React from 'react';
import { Target } from 'lucide-react';
import FoldText from '../common/FoldText';
import HoverToZoom from '../common/HoverToZoom';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f0] text-black pt-20 pb-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Plain clean eyebrow */}
        <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
          Origin &bull; About Sales Partners HR
        </div>

        {/* Asymmetrical 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold text-black tracking-tight leading-[1.08] mb-8"
              style={{ fontFamily: 'Questrial, Inter, sans-serif' }}
            >
              <FoldText
                text={"Bridging Strategy\nand People."}
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

            <p className="text-xl text-[#707070] font-normal leading-relaxed max-w-2xl mb-8">
              Founded on the conviction that employees are an organization's greatest strategic lever, we build resilient, compliant, and thriving workplaces for high-performing teams.
            </p>

            <HoverToZoom className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl" zoomScale="scale-[1.04]">
              <div 
                className="bg-white border border-gray-200 p-6 flex flex-col justify-between"
                style={{ borderRadius: '25px 25px 25px 0px' }}
              >
                <div className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-2">
                  Operating Hubs
                </div>
                <div className="text-xl font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  London &amp; Bengaluru
                </div>
                <div className="text-xs text-[#707070] mt-1">Cross-border workforce advisory</div>
              </div>

              <div 
                className="bg-white border border-gray-200 p-6 flex flex-col justify-between"
                style={{ borderRadius: '0px 25px 25px 25px' }}
              >
                <div className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-2">
                  Executive Standard
                </div>
                <div className="text-xl font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  Partner Direct
                </div>
                <div className="text-xs text-[#707070] mt-1">No junior handoffs on advisory</div>
              </div>
            </HoverToZoom>
          </div>

          {/* Right Column (5 Cols): Black Philosophy Bento Card */}
          <div className="lg:col-span-5 lg:pt-4">
            <div 
              className="bg-black text-white border border-black p-8 sm:p-12 transition-all"
              style={{ borderRadius: '45px 0px 45px 45px' }}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>

              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                Operating Philosophy
              </div>

              <h2 
                className="text-2xl font-normal text-white mb-4"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Human Depth Meets Digital Speed
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed font-normal mb-6">
                We combine modern HR technologies with deep human expertise to simplify workforce management, reduce hiring cycle times, and foster enduring workplace excellence.
              </p>

              <div className="pt-6 border-t border-neutral-800 text-xs text-neutral-400">
                Senior advisor direct delivery standard.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
