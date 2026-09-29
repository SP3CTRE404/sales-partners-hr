import React from 'react';
import { GraduationCap, Target, Shield, Users } from 'lucide-react';

export const Difference: React.FC = () => {
  const diffItems = [
    {
      icon: GraduationCap,
      title: "True Training",
      description: "We build elite corporate communication skills, mastery over brand accounts like Indeed and LinkedIn, and strict professional timekeeping habits over standard scripting models.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Target,
      title: "Goal Alignment",
      description: "We coordinate and manage teams based on their personal ambitions, ensuring that daily performance translates directly into rewarding financial compensation.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Shield,
      title: "Total Transparency",
      description: "We operate with zero internal politics or hidden performance metrics. We maintain honest, two-way feedback loops to drive continuous professional growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Culture",
      description: "We invest in our people beyond the desk — with international travel opportunities, team dinners, and global conferences that build lasting bonds and broaden perspective.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="difference" className="py-24 bg-white border-b border-slate-200 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b192c] tracking-tight uppercase">
            THE SALES PARTNERS DIFFERENCE
          </h2>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#008767] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b192c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden h-40 bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
