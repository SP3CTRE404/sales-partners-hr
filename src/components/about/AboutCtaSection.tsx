import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Building, Calendar, ArrowRight } from 'lucide-react';
import HoverToZoom from '../common/HoverToZoom';

export const AboutCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
          Engage &bull; Start The Conversation
        </div>

        <h2 
          className="text-4xl sm:text-6xl font-normal tracking-tight text-black max-w-3xl mx-auto leading-[1.1]"
          style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
        >
          Let's Build a Stronger Workplace Together
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#707070] max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with our advisory team to discover how our tailored HR solutions can support your company's growth objectives.
        </p>

        {/* 3 Setup Cards with Asymmetric Shape & HoverToZoom */}
        <HoverToZoom className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto" zoomScale="scale-[1.04]">
          <div 
            className="bg-white p-8 border border-gray-200 transition-all duration-300 text-center flex flex-col items-center justify-between"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#707070] font-semibold">Direct Inquiries</p>
              <p className="text-base font-normal text-black mt-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>Advisory Team</p>
              <p className="text-sm text-[#707070] mt-1">hello@salespartners.io</p>
            </div>
          </div>

          <div 
            className="bg-black text-white p-8 border border-black transition-all duration-300 text-center flex flex-col items-center justify-between"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-4">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Office Locations</p>
              <p className="text-base font-normal text-white mt-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>Global Hubs</p>
              <p className="text-sm text-neutral-300 mt-1">London &bull; Bengaluru</p>
            </div>
          </div>

          <div 
            className="bg-white p-8 border border-gray-200 transition-all duration-300 text-center flex flex-col items-center justify-between"
            style={{ borderRadius: '25px 25px 25px 0px' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#707070] font-semibold">Discovery Session</p>
              <p className="text-base font-normal text-black mt-1" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>Consultation</p>
              <p className="text-sm text-[#707070] mt-1">30-Minute Overview</p>
            </div>
          </div>
        </HoverToZoom>

        <div className="mt-14 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg hover:bg-neutral-900 transition-colors gap-3"
            style={{ borderRadius: '25px 25px 25px 0px', border: '1px solid black' }}
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
