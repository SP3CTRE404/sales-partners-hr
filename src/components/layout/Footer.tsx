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
    <footer className="bg-[#eeeee8] text-[#707070] text-sm border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Locations & Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-300">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-normal tracking-tight text-black" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                SalesPartners
              </span>
              <span className="text-[10px] uppercase tracking-wider text-black bg-[#e8e8e3] px-2.5 py-0.5 rounded-full font-semibold">
                HR Solutions
              </span>
            </Link>
            <p className="text-[#707070] text-sm leading-relaxed max-w-sm font-normal">
              Empowering organizations through people-first HR solutions. From executive recruitment to modern workplace compliance, we design tailored strategies that drive growth and culture.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/salespartnersio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hello@salespartners.io" 
                className="w-10 h-10 rounded-full bg-[#e8e8e3] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* UK Office */}
          <div className="lg:col-span-3">
            <h4 className="text-black text-xs uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black" />
              UK Headquarters
            </h4>
            <p className="text-[#707070] text-sm leading-relaxed">
              Tetbury Place,<br />
              Business Design Centre,<br />
              52 Upper Street,<br />
              London, ENG, N1 0HQ
            </p>
          </div>

          {/* India Office */}
          <div className="lg:col-span-2">
            <h4 className="text-black text-xs uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black" />
              India Office
            </h4>
            <p className="text-[#707070] text-sm leading-relaxed">
              20, Cunningham Rd,<br />
              Vasanth Nagar,<br />
              Bengaluru, Karnataka 560052
            </p>
          </div>

          {/* Direct Inquiries */}
          <div className="lg:col-span-3">
            <h4 className="text-black text-xs uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-black" />
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-sm text-[#707070]">
              <p className="flex items-center gap-2">
                <span className="text-xs text-black font-semibold">UK:</span>
                <a href="tel:+447428724380" className="hover:text-black transition-colors">+44 7428 724380</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xs text-black font-semibold">IN:</span>
                <a href="tel:+919731333124" className="hover:text-black transition-colors">+91 97 3133 3124</a>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <span className="text-xs text-black font-semibold">Email:</span>
                <a href="mailto:hello@salespartners.io" className="hover:text-black transition-colors">hello@salespartners.io</a>
              </p>
            </div>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm border-b border-gray-300">
          <div>
            <h5 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">Pages</h5>
            <ul className="space-y-2.5 text-[#707070]">
              <li><Link to="/" className="hover:text-black transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact &amp; Discovery Call</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">Services</h5>
            <ul className="space-y-2.5 text-[#707070]">
              <li><Link to="/#services" className="hover:text-black transition-colors">Talent Acquisition &amp; Search</Link></li>
              <li><Link to="/#services" className="hover:text-black transition-colors">HR Consulting &amp; Compliance</Link></li>
              <li><Link to="/#services" className="hover:text-black transition-colors">Employee Engagement &amp; Culture</Link></li>
              <li><Link to="/#services" className="hover:text-black transition-colors">Payroll &amp; Benefits</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">Advantages</h5>
            <ul className="space-y-2.5 text-[#707070]">
              <li>Deep Industry Expertise</li>
              <li>Customized HR Solutions</li>
              <li>Tech-Enabled Processes</li>
              <li>Dedicated HR Support</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-wider text-black font-semibold mb-4">Group Portal</h5>
            <ul className="space-y-2.5 text-[#707070]">
              <li>
                <a href="https://salespartners.io" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  Main Portal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://salespartners.io/work/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  Work <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="https://salespartners.io/careers/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  Global Careers <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Trademark Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <div>
            © {new Date().getFullYear()} SALES &amp; MARKETING PARTNERS LIMITED. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://salespartners.io/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Privacy</a>
            <span>/</span>
            <a href="https://salespartners.io/data" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Data Protection</a>
            <span>/</span>
            <a href="https://salespartners.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
