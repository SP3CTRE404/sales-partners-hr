import React from 'react';
import { Mail, Building, Calendar, Phone, MapPin, Clock } from 'lucide-react';

export const ContactCardsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Direct Inquiries */}
          <div 
            className="bg-white p-8 border border-gray-200 hover:border-black transition-all duration-300 flex flex-col justify-between group"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-2">Direct Inquiries</p>
              <h3 className="text-2xl font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                HR Advisory Lead
              </h3>
              <p className="text-base text-[#707070] mb-6 leading-relaxed font-normal">
                Speak directly with our senior HR consultants and account managers.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 space-y-3 text-sm font-normal">
              <a
                href="mailto:hello@salespartners.io"
                className="text-black font-semibold hover:opacity-75 block transition-opacity text-base"
              >
                hello@salespartners.io
              </a>
              <div className="text-[#707070] text-sm flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-black" />
                <span className="text-black font-medium">UK:</span>
                <a href="tel:+447428724380" className="hover:text-black transition-colors">+44 7428 724380</a>
              </div>
            </div>
          </div>

          {/* Office Locations (Black Card) */}
          <div 
            className="bg-black text-white p-8 border border-black hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between group"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
                <Building className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">Office Locations</p>
              <h3 className="text-2xl font-normal text-white mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Global Hubs
              </h3>
              <p className="text-base text-neutral-300 mb-6 leading-relaxed font-normal">
                Operating across primary commercial hubs in Europe and Asia.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 space-y-3 text-sm font-normal">
              <div>
                <span className="font-semibold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  London, UK (HQ)
                </span>
                <span className="text-xs text-neutral-400 pl-5 block mt-0.5">Tetbury Place, 52 Upper Street, London N1 0HQ</span>
              </div>
              <div>
                <span className="font-semibold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  Bengaluru, India
                </span>
                <span className="text-xs text-neutral-400 pl-5 block mt-0.5">20 Cunningham Rd, Vasanth Nagar, Bengaluru 560052</span>
              </div>
            </div>
          </div>

          {/* Schedule Meeting */}
          <div 
            className="bg-white p-8 border border-gray-200 hover:border-black transition-all duration-300 flex flex-col justify-between group"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#707070] font-semibold mb-2">Schedule Meeting</p>
              <h3 className="text-2xl font-normal text-black mb-2" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Discovery Session
              </h3>
              <p className="text-base text-[#707070] mb-6 leading-relaxed font-normal">
                Book a strategic 30-minute discovery call to evaluate your workforce framework.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-black">
              <Clock className="w-4 h-4 text-black" />
              <span className="text-sm text-[#707070]">Response within 24 business hours</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
