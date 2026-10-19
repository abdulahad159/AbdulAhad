import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/60 py-3.5 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            id="brand-logo-link"
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 via-neutral-900 to-neutral-900 border border-teal-500/30 flex items-center justify-center text-teal-400 font-display font-bold text-lg tracking-wider group-hover:border-teal-400/60 transition-all duration-300 shadow-sm">
              AA
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-neutral-100 tracking-tight flex items-center gap-1.5 group-hover:text-teal-300 transition-colors">
                ABDUL AHAD
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-neutral-400 tracking-wider font-mono uppercase">
                ART Group • Founder & CEO
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-xs'
                      : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-connect"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-neutral-950 transition-all duration-200 shadow-sm shadow-teal-500/20 active:scale-95"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-header-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500 text-neutral-950"
            >
              Connect
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 border border-neutral-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-neutral-950/98 border-b border-neutral-800/80 px-4 pt-3 pb-6 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                      : 'text-neutral-300 hover:bg-neutral-900 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              id="mobile-menu-contact-action"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-teal-500 text-neutral-950 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>
            <div className="text-center text-[11px] text-neutral-500 font-mono pt-1">
              {PERSONAL_INFO.titles}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
