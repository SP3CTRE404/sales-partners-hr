import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);


export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm transition-all">
        {/* Top bar (Exact replica of salespartners.io topbar) */}
        <div className="border-b border-slate-100 bg-white text-xs text-slate-600 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9">
              
              {/* Left Topbar: Language & LinkedIn */}
              <div className="flex items-center space-x-4">
                {/* Language Switcher */}
                <div className="relative">
                  <button 
                    onClick={() => setLangDropdown(!langDropdown)}
                    className="flex items-center gap-1.5 hover:text-slate-900 transition-colors font-medium py-1"
                  >
                    <img 
                      src="https://salespartners.io/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg" 
                      alt="EN" 
                      className="w-4 h-3 rounded-xs object-cover"
                    />
                    <span>En</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>
                  {langDropdown && (
                    <div className="absolute left-0 mt-1 w-32 bg-white border border-slate-200 rounded shadow-lg py-1 z-50">
                      <a href="https://salespartners.io/kn-in/" className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 text-slate-700 text-xs">
                        <img src="https://salespartners.io/wp-content/plugins/sitepress-multilingual-cms/res/flags/in.country.svg" alt="India" className="w-4 h-3" />
                        <span>Kannada</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="h-3.5 w-[1px] bg-slate-200"></div>

                {/* Social Icon */}
                <a 
                  href="https://www.linkedin.com/company/salespartnersio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-brand-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>


                <div className="h-3.5 w-[1px] bg-slate-200"></div>

                {/* Email Direct */}
                <a href="mailto:hello@salespartners.io" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" /> hello@salespartners.io
                </a>
              </div>

              {/* Right Topbar: Overlay 3-dots trigger */}
              <div className="flex items-center">
                <button
                  onClick={() => setOverlayOpen(true)}
                  className="flex items-center gap-1 p-1 rounded hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors"
                  title="Quick Info"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Exact salespartners.io layout with active HR tab) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="https://salespartners.io/" className="flex items-center gap-2">
              <img 
                src="https://salespartners.io/wp-content/uploads/2024/08/cropped-SPI_Asset-4-1.png" 
                alt="Sales Partners" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sales<span className="text-brand-500 font-extrabold">Partners</span>
              </span>
            </a>

            {/* Desktop Navigation Links (with HR as active tab) */}
            <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-slate-700">
              <a 
                href="https://salespartners.io/work/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-500 transition-colors"
              >
                Work
              </a>
              <a 
                href="https://salespartners.io/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-500 transition-colors"
              >
                About
              </a>
              <a 
                href="https://salespartners.io/industries/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-500 transition-colors"
              >
                Industries
              </a>
              <a 
                href="https://salespartners.io/culture/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-500 transition-colors"
              >
                Culture
              </a>
              <a 
                href="https://salespartners.io/careers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-500 transition-colors"
              >
                Careers
              </a>

              {/* Active Tab: HR & Recruitment */}
              <a 
                href="#top" 
                className="relative text-brand-500 font-semibold py-1 transition-colors"
              >
                <span>HR & Recruitment</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"></span>
              </a>
            </nav>

            {/* Action CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 transition-all shadow-sm"
              >
                Let's Partner!
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2.5 text-base font-medium text-slate-700">
              <a 
                href="https://salespartners.io/work/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-2 py-1.5 rounded hover:bg-slate-50"
              >
                Work
              </a>
              <a 
                href="https://salespartners.io/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-2 py-1.5 rounded hover:bg-slate-50"
              >
                About
              </a>
              <a 
                href="https://salespartners.io/industries/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-2 py-1.5 rounded hover:bg-slate-50"
              >
                Industries
              </a>
              <a 
                href="https://salespartners.io/culture/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-2 py-1.5 rounded hover:bg-slate-50"
              >
                Culture
              </a>
              <a 
                href="https://salespartners.io/careers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-2 py-1.5 rounded hover:bg-slate-50"
              >
                Careers
              </a>
              
              <div className="px-2 py-2 text-brand-500 font-bold bg-brand-50 rounded">
                HR & Recruitment (Current Page)
              </div>
            </nav>

            <div className="pt-2">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-full text-white bg-brand-500 hover:bg-brand-600 shadow-sm"
              >
                Let's Partner!
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Info Modal Overlay (Replicating salespartners.io 3-dot overlay) */}

      {overlayOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full p-8 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <span className="text-xl font-bold text-slate-900">
                  Sales<span className="text-brand-500">Partners</span>
                </span>
                <button
                  onClick={() => setOverlayOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About Sales Partners
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    At Sales Partners we allow brands to connect in person with their consumers, using targeted field marketing to create amazing customer experiences and revenue growth.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    HR & Recruitment Division
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dedicated commercial recruitment, executive search, and workforce management for expanding sales teams across the UK and globally.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <a href="mailto:hello@salespartners.io" className="hover:text-brand-500">hello@salespartners.io</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span>🇬🇧 +44 7428 724380</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span>🇮🇳 +91 97 3133 3124</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>Business Design Centre, 52 Upper St, London N1 0HQ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                onClick={() => setOverlayOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-md text-white bg-brand-500 hover:bg-brand-600"
              >
                Let's Partner!
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
