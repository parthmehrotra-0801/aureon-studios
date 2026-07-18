import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogoFull } from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        id="aureon-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.05]"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="cursor-hover-link relative z-50">
            <LogoFull size={32} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="cursor-hover-link font-sans text-xs tracking-[0.25em] uppercase text-[#B8B8B8] hover:text-white transition-colors duration-300 relative py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="cursor-hover-link group relative inline-flex items-center gap-2 overflow-hidden border border-white/10 hover:border-white px-5 py-2.5 rounded-none bg-transparent text-white font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                START PROJECT
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] -z-0" />
              <style>{`
                .group:hover span {
                  color: #050505 !important;
                }
              `}</style>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white cursor-hover-link p-2 focus:outline-none relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-screen h-screen bg-[#050505] z-40 md:hidden flex flex-col justify-center px-8"
          >
            <div className="absolute inset-0 grid-mesh opacity-[0.02]" />
            <div className="flex flex-col gap-8 relative z-10">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl tracking-wider text-[#B8B8B8] hover:text-white font-bold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/5"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-xs font-mono tracking-widest text-white hover:bg-white hover:text-black transition-all"
                >
                  START YOUR PROJECT
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
