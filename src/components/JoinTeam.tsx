import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

export const JoinTeam: React.FC = () => {
  return (
    <section id="join-us" className="py-24 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 border-b border-slate-200 text-center scroll-mt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b192c] tracking-tight mb-6">
          Join Our Delhi Team
        </h2>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
          If you possess the maturity, drive, and capability to anchor our Delhi NCR HR operations, we are excited to hear from you. Candidates with strong communication, execution and recruitment interests are highly encouraged to join us.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-[#0b192c] hover:bg-[#152844] shadow-lg shadow-slate-900/10 transition-all duration-200 tracking-wider uppercase gap-2.5"
        >
          <Send className="w-4 h-4 text-emerald-400" />
          Apply Now via Recruitment Portal
        </a>

      </div>
    </section>
  );
};
