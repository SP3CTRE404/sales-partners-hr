import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative bg-gradient-to-b from-slate-50 via-sky-50/40 to-white pt-16 pb-24 border-b border-slate-100 overflow-hidden">
      {/* Decorative background wave lines subtle effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          SALES PARTNERS INDIA
        </div>

        {/* Main Title matching PDF */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
          Empowering Teams, <br className="hidden sm:inline" />
          <span className="text-[#008767]">Inspiring Growth</span>
        </h1>

        {/* Subtitle matching PDF */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Join the world’s most dynamic face-to-face marketing agency.
        </p>

        {/* Pill Button matching PDF */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#opportunity"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-[#0b192c] hover:bg-[#152844] shadow-lg shadow-slate-900/10 transition-all duration-200 tracking-wider uppercase gap-2"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            NOW HIRING: HR SPECIALIST (DELHI NCR)
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs gap-2"
          >
            Apply Now <ArrowRight className="w-4 h-4 text-emerald-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
