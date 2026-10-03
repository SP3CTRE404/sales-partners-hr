import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export const CtaBannerSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Split Bento Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-sm overflow-hidden">
          
          {/* Left Block (7 Cols): Warm White Editorial Invitation */}
          <div 
            className="lg:col-span-7 bg-white border border-gray-200 border-b-0 lg:border-b lg:border-r-0 p-8 sm:p-14 flex flex-col justify-between"
            style={{ borderRadius: '45px 0px 0px 45px' }}
          >
            <div>
              <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
                Workforce Architecture &bull; Consultation
              </div>

              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-black leading-[1.08] mb-6"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Ready to Elevate Your HR Strategy?
              </h2>

              <p className="text-lg text-[#707070] font-normal leading-relaxed max-w-xl mb-8">
                Schedule a discovery call with our senior HR specialists today to discuss your organization's unique hiring, compliance, and culture objectives.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm text-[#707070]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Confidential consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Direct partner match</span>
              </div>
            </div>
          </div>

          {/* Right Block (5 Cols): Deep Black Action Box */}
          <div 
            className="lg:col-span-5 bg-black text-white p-8 sm:p-14 border border-black flex flex-col justify-between"
            style={{ borderRadius: '0px 45px 45px 0px' }}
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-6">
                Discovery Session
              </div>

              <h3 
                className="text-2xl sm:text-3xl font-normal text-white mb-4"
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Schedule an Assessment
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-8">
                We evaluate your organizational structure and provide actionable recommendations tailored to your upcoming milestones.
              </p>
            </div>

            <div>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-8 py-5 bg-white text-black text-base font-normal hover:bg-neutral-200 transition-colors gap-3 mb-6"
                style={{ borderRadius: '30px 30px 30px 0px' }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-800">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  hello@salespartners.io
                </span>
                <span>London &bull; Bengaluru</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
