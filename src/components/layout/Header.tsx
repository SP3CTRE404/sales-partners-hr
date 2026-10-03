import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ArrowRight } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // User has scrolled past the hero middle button threshold (~280px)
      setIsScrolledPastHero(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  // On Home: only show after scrolling past middle button.
  // On About: always show.
  // On Contact: hide because user is already on contact/consultation page.
  const showHeaderCta = isHome ? isScrolledPastHero : !isContact;

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#f5f5f0]/95 backdrop-blur-md border-b border-gray-300 transition-all font-sans">
      {/* Top Bar - Clean Minimalist Bar */}
      <div className="bg-white/80 text-xs text-[#707070] hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Left Topbar */}
            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@salespartners.io"
                className="hover:text-black transition-colors flex items-center gap-1.5 text-xs tracking-tight"
              >
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>hello@salespartners.io</span>
              </a>

              <div className="h-3 w-px bg-gray-300"></div>

              <a
                href="tel:+447428724380"
                className="hover:text-black transition-colors flex items-center gap-1.5 text-xs tracking-tight"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>+44 7428 724380</span>
              </a>
            </div>

            {/* Right Topbar */}
            <div className="flex items-center space-x-4">
              <span className="text-[#707070] text-xs font-normal">
                London &bull; Bengaluru
              </span>
              <div className="h-3 w-px bg-gray-300"></div>
              <a
                href="https://www.linkedin.com/company/salespartnersio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#707070] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://salespartners.io/wp-content/uploads/2024/08/cropped-SPI_Asset-4-1.png"
              alt="Sales Partners"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex items-center gap-2">
              <span className="text-xl font-normal tracking-tight text-black group-hover:opacity-80 transition-opacity" style={{ fontFamily: 'Questrial, Arial, sans-serif' }}>
                SalesPartners
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black text-white">
                HR
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-2 text-sm font-normal">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 transition-all duration-200 text-sm ${
                    active
                      ? 'text-black font-semibold'
                      : 'text-[#707070] hover:text-black'
                  }`}
                  style={active ? { borderRadius: '15px 15px 15px 0px', backgroundColor: '#e8e8e3' } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Only reveals when user has scrolled past the hero's middle button on Home, or on About */}
          <div className="hidden md:flex items-center justify-end">
            <div
              className={`transition-all duration-300 ease-out transform ${
                showHeaderCta
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-normal text-white bg-black hover:bg-neutral-900 transition-colors gap-2"
                style={{ borderRadius: '25px 25px 25px 0px', border: '1px solid black' }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black bg-[#e8e8e3] rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-300 bg-[#f5f5f0] px-5 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-base font-normal">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 transition-colors flex items-center justify-between text-sm ${
                    active
                      ? 'bg-[#e8e8e3] text-black font-semibold'
                      : 'text-[#707070] hover:bg-white hover:text-black'
                  }`}
                  style={{ borderRadius: '15px 15px 15px 0px' }}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-black"></span>}
                </Link>
              );
            })}
          </nav>

          {!isContact && (
            <div className="pt-3 border-t border-gray-300">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-normal text-white bg-black hover:bg-neutral-900 transition-colors gap-2"
                style={{ borderRadius: '25px 25px 25px 0px', border: '1px solid black' }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
