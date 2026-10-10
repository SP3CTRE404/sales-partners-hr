import React from 'react';
import { Users, ShieldCheck, HeartHandshake, CreditCard, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverToZoom from '../common/HoverToZoom';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="mb-4 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
              Capabilities &bull; Primary Services
            </div>
            <h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-normal text-black tracking-tight leading-[1.08]"
              style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
            >
              Tailored HR Solutions Built for Sustainable Growth
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-base text-[#707070] font-normal leading-relaxed mb-4">
              Integrated workforce infrastructure designed to scale smoothly as your team grows across borders.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-75 transition-opacity"
            >
              <span>Explore Custom Scoping</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Bento Grid with HoverToZoom */}
        <HoverToZoom className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" zoomScale="scale-[1.03]">
          
          {/* Bento Card 1: 7-Column (Talent Acquisition) */}
          <div
            className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 min-h-[350px] flex flex-col justify-between group relative"
            style={{ borderRadius: '40px 40px 0px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#e8e8e3] flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>

                <Link
                  to="/contact"
                  className="w-10 h-10 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                  aria-label="Inquire about Talent Acquisition"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <h3 
                className="text-2xl sm:text-3xl font-normal text-black mb-3" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Talent Acquisition &amp; Executive Search
              </h3>
              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                Attract, recruit, and retain top-tier industry talent tailored to your company's strategic vision, growth milestones, and cultural framework.
              </p>
            </div>

            <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <p className="text-[#707070]">
                <strong className="text-black font-semibold">Key Benefit:</strong> Reduces time-to-hire by 40% using precision candidate matching.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-semibold text-black hover:opacity-75 transition-opacity flex-shrink-0"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: 5-Column Black Card (Compliance) */}
          <div
            className="lg:col-span-5 bg-black text-white border border-black p-8 sm:p-10 min-h-[350px] flex flex-col justify-between group relative"
            style={{ borderRadius: '0px 40px 40px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <Link
                  to="/contact"
                  className="w-10 h-10 flex items-center justify-center text-white border border-white hover:bg-white hover:text-black transition-colors"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                  aria-label="Inquire about Compliance"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <h3 
                className="text-2xl sm:text-3xl font-normal text-white mb-3" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                HR Consulting &amp; Regulatory Compliance
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal mb-5">
                Protect your business with up-to-date labor law compliance, risk management audits, and comprehensive policy development.
              </p>

              <div className="space-y-2 mb-6 text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <span>Audit-ready labor law standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <span>Multi-jurisdiction employee documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <span>Risk mitigation and corporate alignment</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-800 text-sm text-neutral-300">
              <strong className="text-white font-semibold">Key Benefit:</strong> Mitigates regulatory exposure and maintains constant audit readiness.
            </div>
          </div>

          {/* Bento Card 3: 5-Column White Card (Culture) */}
          <div
            className="lg:col-span-5 bg-white border border-gray-200 p-8 sm:p-10 min-h-[350px] flex flex-col justify-between group relative"
            style={{ borderRadius: '40px 0px 40px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f0] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-black" />
                </div>
                <Link
                  to="/contact"
                  className="w-10 h-10 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                  aria-label="Inquire about Culture"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <h3 
                className="text-2xl sm:text-3xl font-normal text-black mb-3" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Employee Engagement &amp; Culture
              </h3>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-normal mb-6">
                Build high-performing, inclusive workplace cultures through engagement surveys, leadership coaching, and retention initiatives.
              </p>
            </div>

            <div className="pt-5 border-t border-gray-100 text-sm text-[#707070]">
              <strong className="text-black font-semibold">Key Benefit:</strong> Improves employee retention and drives workplace productivity.
            </div>
          </div>

          {/* Bento Card 4: 7-Column Black Card (Payroll) */}
          <div
            className="lg:col-span-7 bg-black text-white border border-black p-8 sm:p-10 min-h-[350px] flex flex-col justify-between group relative"
            style={{ borderRadius: '40px 40px 40px 0px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>

                <Link
                  to="/contact"
                  className="w-10 h-10 flex items-center justify-center text-white border border-white hover:bg-white hover:text-black transition-colors"
                  style={{ borderRadius: '12px 12px 12px 0px' }}
                  aria-label="Inquire about Payroll"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <h3 
                className="text-2xl sm:text-3xl font-normal text-white mb-3" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Payroll &amp; Benefits Administration
              </h3>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                Streamline administrative overhead with automated payroll processing, competitive benefits design, and efficient onboarding workflows.
              </p>
            </div>

            <div className="pt-5 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <p className="text-neutral-400">
                <strong className="text-white font-semibold">Key Benefit:</strong> Scalable HR infrastructure that saves leadership valuable time.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-semibold text-white hover:opacity-75 transition-opacity flex-shrink-0"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </HoverToZoom>
      </div>
    </section>
  );
};
