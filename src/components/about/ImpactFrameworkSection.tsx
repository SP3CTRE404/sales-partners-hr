import React from 'react';
import { ImpactFrameworkStage } from '../../types';
import HoverToZoom from '../common/HoverToZoom';

const stages: ImpactFrameworkStage[] = [
  {
    stage: '01',
    title: 'Assessment & Insights',
    description: 'Deep-dive analysis of your current workforce structure, organizational culture, and operational compliance.',
  },
  {
    stage: '02',
    title: 'Tailored Frameworks',
    description: 'Custom HR policies, competitive compensation structures, and high-precision talent acquisition programs.',
  },
  {
    stage: '03',
    title: 'Seamless Integration',
    description: 'Implementation of modernized workflows, tooling, and team structures with zero operational downtime.',
  },
  {
    stage: '04',
    title: 'Continuous Optimization',
    description: 'Ongoing advisory, performance analytics, and responsive strategic support to scale seamlessly with your growth.',
  },
];

export const ImpactFrameworkSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
            Methodology &bull; Advisory Roadmap
          </div>
          <h2 className="text-4xl sm:text-6xl font-normal text-black tracking-tight leading-[1.08]" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
            Our Impact Framework
          </h2>
          <p className="mt-4 text-lg text-[#707070] leading-relaxed font-normal">
            A proven four-stage roadmap transforming workforce potential into high-impact operational performance.
          </p>
        </div>

        {/* 4 Framework Detailed Cards */}
        <HoverToZoom className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
          {stages.map((stage) => (
            <div
              key={stage.stage}
              className="bg-white p-8 border border-gray-200 flex flex-col justify-between"
              style={{ borderRadius: '25px 25px 25px 0px' }}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-sm font-semibold text-black mb-6">
                  {stage.stage}
                </div>
                <h3 className="text-xl font-normal text-black mb-3" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                  {stage.title}
                </h3>
                <p className="text-sm text-[#707070] leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </HoverToZoom>
      </div>
    </section>
  );
};
