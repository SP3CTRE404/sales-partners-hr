import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

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
