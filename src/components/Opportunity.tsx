import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Opportunity: React.FC = () => {
  return (
    <section id="opportunity" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b192c] tracking-tight uppercase">
              THE OPPORTUNITY
            </h2>
          </div>

          <div className="max-w-xl text-right lg:text-right">
            <span className="text-xs font-black uppercase tracking-widest text-[#008767] block mb-1">
              DELHI HR SPECIALIST
            </span>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              A structured, high-yield career path starting with global candidate acquisition and scaling up to complete international business management.
            </p>
          </div>
        </div>

        {/* 3 Career Progression Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Step 1: HR Executive */}
          <div className="relative bg-[#008767] text-white rounded-2xl p-7 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white">
                  INITIAL STEP
                </span>
                <span className="text-xs font-extrabold bg-white text-[#008767] px-3.5 py-1 rounded-full shadow-xs">
                  ₹25,000 / mo
                </span>
              </div>

              <h3 className="text-3xl font-extrabold mb-3">
                HR Executive
              </h3>

              <div className="bg-black/20 text-white/90 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded mb-6 inline-block">
                FOCUS: CANDIDATE ACQUISITION
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-white/95">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Coordinate webinar funnels for global candidate hire.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Manage complete end-to-end international recruitment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Source Trainee Managers and core Sales Executives.</span>
                </li>
              </ul>
            </div>

            {/* Background Step Number Watermark */}
            <span className="absolute bottom-[-20px] right-[-10px] text-9xl font-black text-white/10 select-none pointer-events-none">
              01
            </span>
          </div>

          {/* Step 2: HR Manager */}
          <div className="relative bg-[#02755b] text-white rounded-2xl p-7 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white">
                  GROWTH STEP
                </span>
                <span className="text-xs font-extrabold bg-white text-[#02755b] px-3.5 py-1 rounded-full shadow-xs">
                  ₹50,000 / mo
                </span>
              </div>

              <h3 className="text-3xl font-extrabold mb-3">
                HR Manager
              </h3>

              <div className="bg-emerald-800/40 text-white/90 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded mb-6 inline-block">
                FOCUS: TEAM ENABLEMENT
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-white/95">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Supervise and train a group of 5+ HR Executives.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Govern day-to-day pipeline volume and accuracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Improve productivity workflows and active onboarding.</span>
                </li>
              </ul>
            </div>

            {/* Background Step Number Watermark */}
            <span className="absolute bottom-[-20px] right-[-10px] text-9xl font-black text-white/10 select-none pointer-events-none">
              02
            </span>
          </div>

          {/* Step 3: Senior HR Manager */}
          <div className="relative bg-[#0b192c] text-white rounded-2xl p-7 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white">
                  LEADERSHIP STEP
                </span>
                <span className="text-xs font-extrabold bg-emerald-400 text-slate-900 px-3.5 py-1 rounded-full shadow-xs">
                  ₹1,00,000 / mo
                </span>
              </div>

              <h3 className="text-3xl font-extrabold mb-3">
                Senior HR Manager
              </h3>

              <div className="bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded mb-6 inline-block">
                FOCUS: CORPORATE OPERATIONS
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-white/95">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Direct operations across 10 international branch offices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Oversee executive performance standards & criteria.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Handle strategic partner and corporate coordination.</span>
                </li>
              </ul>
            </div>

            {/* Background Step Number Watermark */}
            <span className="absolute bottom-[-20px] right-[-10px] text-9xl font-black text-white/10 select-none pointer-events-none">
              03
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
