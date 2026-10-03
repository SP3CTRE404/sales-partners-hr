import React from 'react';
import { AdvantageItem } from '../../types';
import { ArrowRight, ShieldCheck, Cpu, Headphones, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        
        {/* Asymmetrical Split: Sticky Left Pillar + Staggered Right Cascade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sculpted Hero Anchor Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div 
              className="bg-black text-white p-8 sm:p-12 border border-black"
              style={{ borderRadius: '45px 0px 45px 45px' }}
            >
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-6">
                Strategic Advantage
              </div>

              <h2 
                className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-[1.1] mb-6"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Why Traditional HR Models Fail Modern Teams
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed mb-8 font-normal">
                Generic templates and disconnected agencies create compliance blindspots and cultural friction. We engineer living HR architectures tailored to how your company actually functions.
              </p>

              <div className="space-y-4 pt-6 border-t border-neutral-800 text-sm text-neutral-300 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Zero off-the-shelf policy templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Direct senior partner involvement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Cross-border compliance and hiring</span>
                </div>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-normal hover:bg-neutral-200 transition-colors"
                  style={{ borderRadius: '25px 25px 25px 0px' }}
                >
                  <span>Book Strategic Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Offset Cascade of Asymmetric Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#707070] font-semibold">
                Strategic Advantages &bull; Unmatched Execution
              </span>
            </div>

            {advantages.map((item, index) => {
              const isDark = index % 2 === 1;
              return (
                <div
                  key={item.advantage}
                  className={`p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group ${item.offsetClass} ${
                    isDark 
                      ? 'bg-black text-white border border-black hover:bg-neutral-900' 
                      : 'bg-white text-black border border-gray-200 hover:border-black'
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
          </div>

        </div>

      </div>
    </section>
  );
};
