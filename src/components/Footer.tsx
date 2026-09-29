import React from 'react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#111625] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Locations & Contacts Grid (Exact matching salespartners.io footer) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* UK Office */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">UK</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tetbury Place,<br />
              Business Design Centre,<br />
              52 Upper Street,<br />
              London, ENG, N1 0HQ
            </p>
          </div>

          {/* India Office 1 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">India</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              20, Cunningham Rd,<br />
              Vasanth Nagar,<br />
              Bengaluru, Karnataka 560052
            </p>
          </div>

          {/* India Office 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">India (Operations)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Floor 2, The Phonix,<br />
              No 2A, Hayes Road, Shanthala Nagar,<br />
              Ashok Nagar, Bengaluru, Karnataka 560025
            </p>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Get In Touch</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>🇬🇧 <a href="tel:+447428724380" className="hover:text-white transition-colors">+44 7428 724380</a></p>
              <p>🇮🇳 <a href="tel:+919731333124" className="hover:text-white transition-colors">+91 97 3133 3124</a></p>
              <p>✉️ <a href="mailto:hello@salespartners.io" className="hover:text-white transition-colors">hello@salespartners.io</a></p>
            </div>

            <div className="mt-4">
              <a 
                href="https://www.linkedin.com/company/salespartnersio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Brand & Subpage links */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs border-b border-slate-800">
          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-2.5">Sales Partners Group</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="https://salespartners.io/work/" className="hover:text-white">Work</a></li>
              <li><a href="https://salespartners.io/about/" className="hover:text-white">About Us</a></li>
              <li><a href="https://salespartners.io/industries/" className="hover:text-white">Industries</a></li>
              <li><a href="https://salespartners.io/culture/" className="hover:text-white">Culture</a></li>
              <li><a href="https://salespartners.io/careers/" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-2.5">HR & Recruitment</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#services" className="hover:text-white">Commercial Sales Recruitment</a></li>
              <li><a href="#services" className="hover:text-white">Executive & Leadership Search</a></li>
              <li><a href="#services" className="hover:text-white">High-Volume Campaign Hiring</a></li>
              <li><a href="#services" className="hover:text-white">HR Advisory & Compliance</a></li>
              <li><a href="#services" className="hover:text-white">Sales Onboarding & Enablement</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-2.5">Roles We Hire</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#roles" className="hover:text-white">Field Sales Representatives</a></li>
              <li><a href="#roles" className="hover:text-white">Business Development (BDR/SDR)</a></li>
              <li><a href="#roles" className="hover:text-white">Account Executives</a></li>
              <li><a href="#roles" className="hover:text-white">Sales Directors & VPs</a></li>
              <li><a href="#roles" className="hover:text-white">People Operations Leads</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-200 uppercase tracking-wider mb-2.5">Core Philosophy</h5>
            <p className="text-slate-400 leading-relaxed">
              Conversation. Connection. Conversion. Connecting ambitious brands with proven commercial professionals.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Trademark Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © SALES &amp; MARKETING PARTNERS LIMITED. Company Number <a href="https://find-and-update.company-information.service.gov.uk/company/09874785" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-400">09874785</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://salespartners.io/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Privacy</a>
            <span>/</span>
            <a href="https://salespartners.io/data" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Data Protection</a>
            <span>/</span>
            <a href="https://salespartners.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Terms of Use</a>
            <span>/</span>
            <a href="https://salespartners.io/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
