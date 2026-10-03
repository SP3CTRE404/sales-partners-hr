import React from 'react';
import { Shield, Heart, Cpu, Award, Users2 } from 'lucide-react';

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Section Heading */}
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

        {/* Asymmetrical Bento Grid of Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1 (4 Cols): Integrity First */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '35px 35px 35px 0px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                  01
                </span>
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Integrity First
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We uphold the highest ethical standards in every policy, placement, and client interaction. Trust is the non-negotiable foundation of our firm.
              </p>
            </div>
          </div>

          {/* Card 2 (8 Cols): Wide Feature Card - People-Centric Approach */}
          <div
            className="lg:col-span-8 bg-white p-8 sm:p-12 border border-gray-200 hover:border-black transition-all flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '0px 40px 40px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span 
                    className="px-3.5 py-1 bg-[#eeeee8] text-black text-xs font-semibold uppercase tracking-wider"
                    style={{ borderRadius: '12px 12px 12px 0px' }}
                  >
                    Core Anchor &bull; 02
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-normal text-black mb-4" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                People-Centric Approach
              </h3>
              <p className="text-[#707070] text-lg leading-relaxed font-normal max-w-xl mb-6">
                Behind every resilient balance sheet and high-margin product are energized, well-supported people. We architect systems that elevate well-being, engagement, and long-term retention.
              </p>
            </div>

            <div 
              className="p-5 bg-[#f5f5f0] border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              style={{ borderRadius: '15px 15px 15px 0px' }}
            >
              <span className="text-[#707070]">Focus: Retention, Culture &amp; Leadership Alignment</span>
              <span className="font-semibold text-black">Measurable Well-Being</span>
            </div>
          </div>

          {/* Card 3 (4 Cols): Innovation in Execution */}
          <div
            className="lg:col-span-4 bg-[#eeeee8] p-8 sm:p-10 border border-gray-300 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '35px 0px 35px 35px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-300">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#116dff]">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                  03
                </span>
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Innovation in Execution
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We leverage modern cloud HR tools and data-driven insights to eliminate administrative friction and accelerate key talent decisions.
              </p>
            </div>
          </div>

          {/* Card 4 (4 Cols): Excellence in Service */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '0px 35px 35px 35px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                  04
                </span>
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Excellence in Service
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                Committed to delivering clear guidance, rigorous execution, and tangible outcomes for every organization we support.
              </p>
            </div>
          </div>

          {/* Card 5 (4 Cols): Collaborative Partnership */}
          <div
            className="lg:col-span-4 bg-white p-8 sm:p-10 border border-gray-200 hover:border-black transition-all flex flex-col justify-between group"
            style={{ borderRadius: '35px 35px 0px 35px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-[#116dff]">
                  <Users2 className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                  05
                </span>
              </div>
              <h3 className="text-2xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Collaborative Partnership
              </h3>
              <p className="text-[#707070] text-base leading-relaxed font-normal">
                We do not operate as detached external contractors; we act as an integrated extension of your business leadership team.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
