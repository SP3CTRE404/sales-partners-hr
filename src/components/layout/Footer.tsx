import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#707070] text-sm border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          
          {/* Brand & Indeed / LinkedIn */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-normal tracking-tight text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                SalesPartners
              </span>
              <span className="text-[10px] uppercase tracking-wider text-white bg-black px-2.5 py-0.5 rounded-full font-semibold">
                HR Solutions
              </span>
            </Link>

            <div className="flex items-center gap-2.5 pt-2">
              {/* Email Address Pill */}
              <a 
                href="mailto:hello@salespartners.io" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8e8e3] text-xs font-semibold text-black hover:bg-black hover:text-white transition-colors"
                aria-label="Email hello@salespartners.io"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello@salespartners.io</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/salespartnersio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-black" />
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[#707070]">
              <p className="flex items-center gap-2">
                <span className="text-xs text-black font-semibold">IN:</span>
                <a href="tel:+919873489490" className="hover:text-black transition-colors">
                  +91 9873489490
                </a>
              </p>
            </div>
          </div>

          {/* India Address */}
          <div>
            <h4 className="text-black text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black" />
              India Office
            </h4>
            <p className="text-[#707070] text-sm leading-relaxed mb-3">
              Sainik Farm, Saket, New Delhi
            </p>
            <a
              href="https://maps.app.goo.gl/Tnk8PYSkUmyjwDpCA?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#e8e8e3] text-xs font-semibold text-black hover:bg-black hover:text-white transition-colors"
              aria-label="View India Office on Google Maps"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <div>
            © {new Date().getFullYear()} SALES &amp; MARKETING PARTNERS LIMITED. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://salespartners.io/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Privacy</a>
            <span>/</span>
            <a href="https://salespartners.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
