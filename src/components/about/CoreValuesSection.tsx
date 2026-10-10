import React from 'react';
import { Shield, Heart, Cpu, Award, Users2 } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
            Guiding Principles &bull; Values
          </div>
          <h2 
            className="text-4xl sm:text-6xl font-normal text-black tracking-tight leading-[1.08]" 
            style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
          >
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-[#707070] leading-relaxed font-normal">
            The foundational standards that guide our advisory counsel, executive placements, and long-term client relationships.
          </p>
        </div>

        {/* Asymmetrical Bento Grid of Core Values with HoverToZoom */}
        <HoverToZoom className="grid grid-cols-1 lg:grid-cols-12 gap-8" zoomScale="scale-[1.03]">
          
          {/* Card 1 (4 Cols): Integrity First */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 flex flex-col justify-between group"
            style={{ borderRadius: '35px 35px 35px 0px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Integrity First
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We uphold the highest ethical standards in every policy, placement, and client interaction. Trust is the non-negotiable foundation of our firm.
              </p>
            </div>
          </div>

          {/* Card 2 (8 Cols): Wide Feature Card (Black Card) - People-Centric Approach */}
          <div
            className="lg:col-span-8 bg-black text-white p-8 sm:p-12 border border-black flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '0px 40px 40px 40px' }}
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-3xl font-normal text-white mb-4" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                People-Centric Approach
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed font-normal max-w-xl mb-6">
                Behind every resilient balance sheet and high-margin product are energized, well-supported people. We architect systems that elevate well-being, engagement, and long-term retention.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 text-sm text-neutral-400">
              Focus on retention, culture, and leadership alignment across scaling teams.
            </div>
          </div>

          {/* Card 3 (4 Cols): Innovation in Execution (White Card) */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 flex flex-col justify-between group"
            style={{ borderRadius: '35px 0px 35px 35px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#f5f5f0] flex items-center justify-center text-black mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Innovation in Execution
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We leverage modern cloud HR tools and data-driven insights to eliminate administrative friction and accelerate key talent decisions.
              </p>
            </div>
          </div>

          {/* Card 4 (4 Cols): Excellence in Service (Black Card) */}
          <div
            className="lg:col-span-4 bg-black text-white p-8 sm:p-10 border border-black flex flex-col justify-between group"
            style={{ borderRadius: '0px 35px 35px 35px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-white mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Excellence in Service
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                Committed to delivering clear guidance, rigorous execution, and tangible outcomes for every organization we support.
              </p>
            </div>
          </div>

          {/* Card 5 (4 Cols): Collaborative Partnership */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 flex flex-col justify-between group"
            style={{ borderRadius: '35px 35px 0px 35px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Collaborative Partnership
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We do not operate as detached external contractors; we act as an integrated extension of your business leadership team.
              </p>
            </div>
          </div>

        </HoverToZoom>

      </div>
    </section>
  );
};
