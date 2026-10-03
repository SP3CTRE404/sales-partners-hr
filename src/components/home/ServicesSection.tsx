import React from 'react';
import { Users, ShieldCheck, HeartHandshake, CreditCard, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Section Header: Left Heavy Title + Right Description */}
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
              <span>Request custom service scoping</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Bento Grid: 7-5 / 5-7 Col Spans with Sculpted Corner Shapes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Card 1: 7-Column Hero Feature (Talent Acquisition) */}
          <div
            className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            style={{ borderRadius: '40px 40px 0px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#116dff]" />
                  </div>
                  <span 
                    className="px-3.5 py-1 bg-[#eeeee8] text-black text-xs font-semibold uppercase tracking-wider"
                    style={{ borderRadius: '12px 12px 12px 0px' }}
                  >
                    Flagship Practice
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="w-12 h-12 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                  aria-label="Inquire about Talent Acquisition"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <h3 
                className="text-3xl sm:text-4xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Talent Acquisition &amp; Executive Search
              </h3>
              <p className="text-[#707070] text-lg leading-relaxed mb-8 font-normal max-w-xl">
                Attract, recruit, and retain top-tier industry talent tailored to your company's strategic vision, growth milestones, and cultural framework.
              </p>
            </div>

            {/* Embedded Sculpted Highlight Card Inside */}
            <div 
              className="bg-[#f5f5f0] border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ borderRadius: '20px 20px 20px 0px' }}
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#707070] block mb-1">
                  Key Organizational Impact
                </span>
                <p className="text-sm font-normal text-black">
                  Reduces time-to-hire by <strong>40%</strong> through precision candidate matching and dedicated search directors.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs rounded-full font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  Fast Track
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 5-Column High-Contrast Complement (Compliance) */}
          <div
            className="lg:col-span-5 bg-[#eeeee8] border border-gray-300 p-8 sm:p-12 hover:border-black transition-all duration-300 flex flex-col justify-between group relative"
            style={{ borderRadius: '0px 40px 40px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#116dff]" />
                </div>
                <Link
                  to="/contact"
                  className="w-12 h-12 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                  aria-label="Inquire about Compliance"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <h3 
                className="text-3xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                HR Consulting &amp; Regulatory Compliance
              </h3>
              <p className="text-[#707070] text-base leading-relaxed mb-6 font-normal">
                Protect your business with up-to-date labor law compliance, risk management audits, and comprehensive company policy development.
              </p>

              <div className="space-y-2.5 mb-8 text-xs text-[#707070]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Audit-ready labor law standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Multi-jurisdiction employee handbook</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#116dff]" />
                  <span>Risk mitigation &amp; legal alignment</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-300 text-xs text-black font-medium">
              <strong>Key Benefit:</strong> Mitigates regulatory exposure and maintains constant audit readiness.
            </div>
          </div>

          {/* Bento Card 3: 5-Column Sculpted Card (Culture & Engagement) */}
          <div
            className="lg:col-span-5 bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all duration-300 flex flex-col justify-between group relative"
            style={{ borderRadius: '40px 0px 40px 40px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6 text-[#116dff]" />
                </div>
                <Link
                  to="/contact"
                  className="w-12 h-12 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                  aria-label="Inquire about Culture"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <h3 
                className="text-3xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Employee Engagement &amp; Culture
              </h3>
              <p className="text-[#707070] text-base leading-relaxed mb-6 font-normal">
                Build high-performing, inclusive workplace cultures through bespoke engagement surveys, leadership coaching, and retention initiatives.
              </p>

              <div 
                className="p-4 bg-[#f5f5f0] mb-6 flex items-center justify-between text-xs"
                style={{ borderRadius: '15px 15px 15px 0px' }}
              >
                <span className="text-[#707070]">Average Retention Lift</span>
                <span className="text-black font-semibold text-sm">+32% Year 1</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-black font-medium">
              <strong>Key Benefit:</strong> Cultivates lasting morale and drives sustained operational productivity.
            </div>
          </div>

          {/* Bento Card 4: 7-Column Sculpted Card (Payroll & Benefits) */}
          <div
            className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-12 hover:border-black transition-all duration-300 flex flex-col justify-between group relative"
            style={{ borderRadius: '40px 40px 40px 0px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e8e8e3] flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#116dff]" />
                  </div>
                  <span 
                    className="px-3.5 py-1 bg-[#f5f5f0] border border-gray-300 text-black text-xs font-semibold uppercase tracking-wider"
                    style={{ borderRadius: '12px 12px 12px 0px' }}
                  >
                    Infrastructure
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="w-12 h-12 flex items-center justify-center text-black border border-black hover:bg-black hover:text-white transition-colors"
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                  aria-label="Inquire about Payroll"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <h3 
                className="text-3xl sm:text-4xl font-normal text-black mb-4" 
                style={{ fontFamily: 'Questrial, Arial, sans-serif' }}
              >
                Payroll &amp; Benefits Administration
              </h3>
              <p className="text-[#707070] text-lg leading-relaxed mb-6 font-normal max-w-xl">
                Streamline administrative overhead with automated payroll processing, competitive benefits design, and frictionless digital onboarding workflows.
              </p>
            </div>

            <div 
              className="bg-[#eeeee8] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ borderRadius: '20px 20px 20px 0px' }}
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#707070] block mb-1">
                  Operational Efficiency
                </span>
                <p className="text-sm font-normal text-black">
                  Zero administrative delays. Modern cloud infrastructure tailored for multinational teams.
                </p>
              </div>
              <Link
                to="/contact"
                className="px-4 py-2 bg-black text-white text-xs hover:bg-neutral-900 transition-colors flex-shrink-0"
                style={{ borderRadius: '12px 12px 12px 0px' }}
              >
                Schedule Demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
