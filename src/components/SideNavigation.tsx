import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'top', label: 'Overview' },
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'difference', label: 'Difference' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'join-us', label: 'Join Delhi' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Connect' },
];
const sectionScrollOffset = 160;

export const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + sectionScrollOffset;

      // Top of page
      if (window.scrollY < 300) {
        setActiveSection('top');
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        if (item.id === 'top') continue;
        const element = document.getElementById(item.id);
        if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - sectionScrollOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <aside 
      aria-label="Table of Contents"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md py-2 px-1.5 rounded-lg border border-slate-200 shadow-md shadow-slate-900/5 w-32 transition-all duration-200">
        <nav className="flex flex-col space-y-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={(e) => scrollTo(item.id, e)}
                className={`group w-full text-left px-2 py-1 rounded text-[11px] font-medium transition-all duration-150 flex items-center justify-between ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <span className="w-1 h-3 rounded-full bg-emerald-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </aside>
  );
};
