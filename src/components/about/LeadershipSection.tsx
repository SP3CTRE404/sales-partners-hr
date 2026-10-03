import React from 'react';
import { UserCheck, Shield, CheckCircle2 } from 'lucide-react';
import { LeadershipMember } from '../../types';

const leaders: (LeadershipMember & { icon: React.ReactNode; borderRadius: string; offsetClass: string; bgClass: string })[] = [
  {
    title: 'Executive Director',
    personName: 'Advisory Leadership',
    expertise: 'Strategic Workforce Planning & Organizational Restructuring',
    bio: '15+ years leading global human capital initiatives, corporate restructuring, and talent development programs across European and North American markets.',
    icon: <UserCheck className="w-7 h-7 text-[#116dff]" />,
    borderRadius: '40px 40px 40px 0px',
    offsetClass: '',
    bgClass: 'bg-white border-gray-200',
  },
  {
    title: 'Head of HR Consulting',
    personName: 'Regulatory Lead',
    expertise: 'Regulatory Compliance, Risk Management & Labor Governance',
    bio: 'Specialized in navigating multi-jurisdiction compliance, audit readiness, and designing robust corporate governance frameworks for venture-backed and enterprise firms.',
    icon: <Shield className="w-7 h-7 text-[#116dff]" />,
    borderRadius: '0px 40px 40px 40px',
    offsetClass: 'md:translate-x-6',
    bgClass: 'bg-[#eeeee8] border-gray-300',
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
              className="p-6 bg-white border border-gray-200 space-y-3 text-xs text-[#707070]"
              style={{ borderRadius: '25px 25px 25px 0px' }}
            >
              <div className="flex items-center gap-2 text-black font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                <span>Active board &amp; executive counsel</span>
              </div>
              <p>Continuous involvement throughout implementation, auditing, and organizational scaling.</p>
            </div>
          </div>

          {/* Right Column (7 Cols): Staggered Offset Profile Cards */}
          <div className="lg:col-span-7 space-y-8">
            {leaders.map((leader) => (
              <div
                key={leader.title}
                className={`p-8 sm:p-12 border hover:border-black transition-all flex flex-col justify-between group ${leader.bgClass} ${leader.offsetClass}`}
                style={{ borderRadius: leader.borderRadius }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                    <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center">
                      {leader.icon}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#707070] font-semibold">
                      Senior Partner
                    </span>
                  </div>

                  <h3 className="text-3xl font-normal text-black mb-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                    {leader.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#707070] font-semibold mb-6">
                    {leader.personName}
                  </p>

                  <div className="space-y-4 text-base text-[#707070] font-normal">
                    <p>
                      <strong className="text-black font-semibold">Specialization:</strong> {leader.expertise}
                    </p>
                    <p className="leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
