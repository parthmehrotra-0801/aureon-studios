import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AureonLogo } from './AureonLogo';

interface NavbarProps {
  onBookConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll with an offset for the navbar
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of compressed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 select-none ${
          isScrolled
            ? 'py-3.5 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        id="aureon-header-nav"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo - clickable to return home */}
          <button 
            onClick={() => handleScrollToSection('home')}
            className="flex items-center hover:opacity-90 transition-opacity cursor-pointer text-left"
            aria-label="Aureon Studios Home"
            id="nav-logo-btn"
          >
            <AureonLogo size={36} showText={true} textClassName="text-lg tracking-[0.3em]" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-full px-5 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 relative cursor-pointer ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-silver text-opacity-70 hover:text-white'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.07] rounded-full z-0 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Consultation Trigger Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={onBookConsultation}
              className="group px-5 py-2.5 bg-transparent hover:bg-gold text-white hover:text-black border border-gold rounded-full font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer relative overflow-hidden"
              id="desktop-consultation-nav-btn"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-silver hover:text-white transition-all cursor-pointer z-50"
            aria-label="Toggle navigation menu"
            id="mobile-hamburger-btn"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black/98 z-30 lg:hidden flex flex-col justify-between p-8 pt-28"
            id="mobile-nav-drawer"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

            {/* Menu Links */}
            <nav className="flex flex-col gap-5 text-left pl-4 max-w-sm mt-4">
              <span className="font-mono text-[9px] tracking-[0.4em] text-gold uppercase mb-1">Index Directory</span>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.04 }}
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className="flex items-baseline gap-4 group text-left cursor-pointer"
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span className="font-serif text-gold text-xs italic opacity-60 group-hover:opacity-100 transition-opacity">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-serif text-3xl font-medium tracking-wide ${
                      isActive ? 'text-gold' : 'text-white hover:text-gold transition-colors'
                    }`}>
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Footer details in mobile navigation */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4 relative z-10 text-left">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-3 bg-gold hover:bg-gold-hover text-black text-center font-bold text-xs tracking-widest uppercase rounded-full transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="mobile-nav-consultation-btn"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-[10px] font-sans text-silver text-opacity-50">
                <span>Inquiries: inquiries@aureon.studio</span>
                <span>© 2026 Aureon Studios</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
