import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../../types';

export const ConsultationFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: 'talent-acquisition',
    companySize: '21-50',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#f5f5f0] text-black border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="mb-6 uppercase tracking-[0.2em] text-[#707070] text-xs font-semibold">
                Consultation &bull; Client Intake
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal text-black tracking-tight leading-[1.15]" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                Discuss Your Unique HR &amp; Talent Requirements
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#707070] leading-relaxed font-normal">
                Whether you are scaling your executive leadership, conducting a labor law audit, or designing competitive compensation structures, our advisory team provides actionable guidance.
              </p>
            </div>

            {/* What to Expect Card (Black Card) */}
            <div 
              className="bg-black text-white p-8 sm:p-10 border border-black transition-all duration-300 space-y-6"
              style={{ borderRadius: '45px 0px 45px 45px' }}
            >
              <h4 className="text-xs uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                What to Expect
              </h4>
              <ul className="space-y-4 text-sm text-neutral-300 font-normal">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Comprehensive assessment of your current hiring or compliance bottleneck</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>No generic templates—practical, custom strategic frameworks tailored to your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Strict confidentiality and non-disclosure standards</span>
                </li>
              </ul>
            </div>

            {/* Trust Badge */}
            <div 
              className="p-6 bg-white border border-gray-200 flex items-center gap-4 text-xs text-[#707070] font-normal"
              style={{ borderRadius: '25px 25px 25px 0px' }}
            >
              <ShieldCheck className="w-6 h-6 text-black flex-shrink-0" />
              <span className="leading-relaxed">
                All client discussions and organizational data are protected under strict GDPR and enterprise security protocols.
              </span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div 
              className="bg-white border border-gray-200 p-8 sm:p-12 transition-all duration-300 shadow-sm"
              style={{ borderRadius: '0px 45px 45px 45px' }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#e8e8e3] text-black rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                    Consultation Request Received
                  </h3>
                  <p className="text-base text-[#707070] max-w-md mx-auto leading-relaxed font-normal">
                    Thank you for contacting Sales Partners HR. An HR specialist from our advisory team will review your requirements and reach out within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 text-sm font-normal text-black border border-black hover:bg-black hover:text-white transition-colors"
                      style={{ borderRadius: '25px 25px 25px 0px' }}
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                      Schedule a Consultation
                    </h3>
                    <p className="text-sm text-[#707070] mt-1 font-normal">
                      Fill out the parameters below and an advisory director will contact you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Global Inc."
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 20 7123 4567"
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      >
                        <option value="talent-acquisition">Talent Acquisition &amp; Executive Search</option>
                        <option value="compliance">HR Consulting &amp; Regulatory Compliance</option>
                        <option value="culture">Employee Engagement &amp; Culture</option>
                        <option value="payroll">Payroll &amp; Benefits Administration</option>
                        <option value="audit">Strategic Workforce Audit</option>
                        <option value="general">Comprehensive HR Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                        Current Headcount
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                        style={{ borderRadius: '15px 15px 15px 0px' }}
                      >
                        <option value="1-20">1 - 20 Employees</option>
                        <option value="21-50">21 - 50 Employees</option>
                        <option value="51-200">51 - 200 Employees</option>
                        <option value="201-500">201 - 500 Employees</option>
                        <option value="500+">500+ Employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-black mb-2">
                      Tell us about your organization's unique needs
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, key roles, or compliance areas you would like to address..."
                      className="w-full px-4 py-3 bg-[#f5f5f0] border border-gray-300 focus:border-black text-sm text-black outline-none transition-colors"
                      style={{ borderRadius: '15px 15px 15px 0px' }}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-black text-white text-base hover:bg-neutral-900 transition-colors gap-3"
                      style={{ borderRadius: '25px 25px 25px 0px', border: '1px solid black' }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Consultation Request</span>
                    </button>
                  </div>

                  <p className="text-xs text-[#707070] text-center font-normal">
                    We respect your privacy. All inquiries are handled directly under strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
