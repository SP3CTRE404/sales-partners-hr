import React from 'react';
import { Globe, Heart } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 border-b border-slate-200 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Accent Bar */}
        <div className="flex items-center gap-3 mb-12">
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b192c] tracking-tight uppercase">
            WHO WE ARE
          </h2>
        </div>

        {/* Content Section with Image Grid Background & Cards */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900/5 p-6 sm:p-10 border border-slate-200/80">
          
          {/* Background image grid matching PDF aesthetic */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 opacity-15 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Office" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" alt="Meeting" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Work" className="w-full h-full object-cover" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
            {/* Card 1: Our Global Network */}
            <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#008767] mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0b192c] mb-4">
                  Our Global Network
                </h3>
                <p className="text-slate-600 leading-relaxed text-base font-normal">
                  We oversee the largest direct and field marketing campaigns across the UK and USA. Now, through Sales Partners India, we bring our market-tested experience to Asia's primary growth hub, driving conversions and high-value customer acquisition for the world's biggest brands.
                </p>
              </div>
            </div>

            {/* Card 2: Our Team-First Values */}
            <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#008767] mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0b192c] mb-4">
                  Our Team-First Values
                </h3>
                <p className="text-slate-600 leading-relaxed text-base font-normal">
                  Unlike traditional organizations that chase only top-line metrics, we put our teams first, clients second, and the company last—knowing that this will foster something more sustainable and lasting.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
