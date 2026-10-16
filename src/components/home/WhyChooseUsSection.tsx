import React from 'react';
import { AdvantageItem } from '../../types';
import { ShieldCheck, Cpu, Headphones, Award } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';

const advantages: (AdvantageItem & { 
  icon: React.ReactNode; 
  borderRadius: string;
  offsetClass: string;
})[] = [
  {
    advantage: 'Deep Industry Expertise',
    meaning: 'Certified HR professionals with decades of hands-on leadership experience across fast-moving tech, healthcare, and finance sectors.',
    icon: <Award className="w-5 h-5 text-black" />,
    borderRadius: '35px 35px 35px 0px',
    offsetClass: '',
  },
  {
    advantage: 'Customized HR Solutions',
    meaning: 'No generic templates. Every policy, framework, and strategy is engineered specifically to match your team culture and business milestones.',
    icon: <ShieldCheck className="w-5 h-5 text-black" />,
    borderRadius: '0px 35px 35px 35px',
    offsetClass: 'md:translate-x-6',
  },
  {
    advantage: 'Tech-Enabled Processes',
    meaning: 'Integrating modern cloud HR software, automated workflows, and predictive analytics to eliminate operational bottlenecks.',
    icon: <Cpu className="w-5 h-5 text-black" />,
    borderRadius: '35px 0px 35px 35px',
    offsetClass: 'md:-translate-x-2',
  },
  {
    advantage: 'Dedicated HR Support',
    meaning: 'A named senior account manager and advisory team who function as an integrated, proactive extension of your executive leadership.',
    icon: <Headphones className="w-5 h-5 text-black" />,
    borderRadius: '35px 35px 0px 35px',
    offsetClass: 'md:translate-x-6',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Advantage Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#707070] font-semibold">
              Strategic Advantages &bull; Unmatched Execution
            </span>
          </div>

          <HoverToZoom className="space-y-6" zoomScale="scale-[1.03]">
            {advantages.map((item, index) => {
              const isDark = index % 2 === 1;
              return (
                <div
                  key={item.advantage}
                  className={`p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group ${item.offsetClass} ${
                    isDark 
                      ? 'bg-black text-white border border-black' 
                      : 'bg-white text-black border border-gray-200'
                  }`}
                  style={{ borderRadius: item.borderRadius }}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      isDark ? 'bg-neutral-800' : 'bg-[#e8e8e3]'
                    }`}>
                      {React.cloneElement(item.icon as React.ReactElement, {
                        className: `w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`
                      })}
                    </div>

                    <h3 
                      className={`text-2xl font-normal mb-3 ${isDark ? 'text-white' : 'text-black'}`}
                      style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                    >
                      {item.advantage}
                    </h3>
                    <p className={`text-base leading-relaxed font-normal ${isDark ? 'text-neutral-300' : 'text-[#707070]'}`}>
                      {item.meaning}
                    </p>
                  </div>
                </div>
              );
            })}
          </HoverToZoom>
        </div>

      </div>
    </section>
  );
};
