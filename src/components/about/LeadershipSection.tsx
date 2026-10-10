import React from 'react';
import { UserCheck, Shield } from 'lucide-react';
import { LeadershipMember } from '../../types';
import HoverToZoom from '../common/HoverToZoom';

const leaders: (LeadershipMember & { icon: React.ReactNode; borderRadius: string; offsetClass: string; bgClass: string })[] = [
  {
    title: 'Executive Director',
    personName: 'Advisory Leadership',
    expertise: 'Strategic Workforce Planning & Organizational Restructuring',
    bio: '15+ years leading global human capital initiatives, corporate restructuring, and talent development programs across European and North American markets.',
    icon: <UserCheck className="w-7 h-7 text-black" />,
    borderRadius: '40px 40px 40px 0px',
    offsetClass: '',
    bgClass: 'bg-white border-gray-200',
  },
  {
    title: 'Head of HR Consulting',
    personName: 'Regulatory Lead',
    expertise: 'Regulatory Compliance, Risk Management & Labor Governance',
    bio: 'Specialized in navigating multi-jurisdiction compliance, audit readiness, and designing robust corporate governance frameworks for venture-backed and enterprise firms.',
    icon: <Shield className="w-7 h-7 text-black" />,
    borderRadius: '0px 40px 40px 40px',
    offsetClass: 'md:translate-x-6',
    bgClass: 'bg-white border-gray-200',
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Split: Left Anchor + Right Cascading Staggered Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
              Governance &bull; Domain Leadership
            </div>
            <h2 
              className="text-4xl sm:text-6xl font-normal text-black tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
            >
              Direct Advisory From Senior Partners
            </h2>
            <p className="text-lg text-[#707070] leading-relaxed font-normal mb-8">
              We do not hand off client accounts to junior staff. Our advisory and recruitment frameworks are guided by experienced partners with extensive enterprise backgrounds.
            </p>

            <div 
              className="p-6 bg-white border border-gray-200 space-y-2 text-sm text-[#707070]"
              style={{ borderRadius: '25px 25px 25px 0px' }}
            >
              <div className="text-black font-semibold">
                Active Board &amp; Executive Counsel
              </div>
              <p>Continuous involvement throughout implementation, auditing, and organizational scaling.</p>
            </div>
          </div>

          {/* Right Column (7 Cols): Staggered Offset Profile Cards with HoverToZoom */}
          <HoverToZoom className="lg:col-span-7 space-y-8" zoomScale="scale-[1.03]">
            {leaders.map((leader, index) => {
              const isDark = index === 0;
              return (
                <div
                  key={leader.title}
                  className={`p-8 sm:p-12 border transition-all flex flex-col justify-between group ${leader.offsetClass} ${
                    isDark 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-black border-gray-200'
                  }`}
                  style={{ borderRadius: leader.borderRadius }}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 ${
                      isDark ? 'bg-neutral-800 text-white' : 'bg-[#e8e8e3] text-black'
                    }`}>
                      {React.cloneElement(leader.icon as React.ReactElement, {
                        className: `w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`
                      })}
                    </div>

                    <h3 
                      className={`text-3xl font-normal mb-1 ${isDark ? 'text-white' : 'text-black'}`}
                      style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
                    >
                      {leader.title}
                    </h3>
                    <p className={`text-xs uppercase tracking-widest font-semibold mb-6 ${
                      isDark ? 'text-neutral-400' : 'text-[#707070]'
                    }`}>
                      {leader.personName}
                    </p>

                    <div className={`space-y-4 text-base font-normal ${
                      isDark ? 'text-neutral-300' : 'text-[#707070]'
                    }`}>
                      <p>
                        <strong className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Specialization:</strong> {leader.expertise}
                      </p>
                      <p className="leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
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
