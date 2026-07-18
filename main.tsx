import React from "react";
import { LogoFull } from "./Logo";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="footer" 
      className="relative bg-[#050505] border-t border-white/[0.04] pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 pb-16 border-b border-white/[0.04]">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <LogoFull size={38} />
            <p className="font-sans text-xs md:text-sm text-[#B8B8B8] leading-relaxed tracking-wider max-w-sm mt-2">
              Aureon Studios is a premium branding, marketing, creative strategy and digital media studio. Architecting Brands. Crafting Influence.
            </p>
          </div>

          {/* Index Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Sitemap */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                [ INDEX ]
              </span>
              <ul className="flex flex-col gap-2.5">
                {["About", "Services", "Process", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="cursor-hover-link font-sans text-xs text-[#B8B8B8] hover:text-white tracking-widest uppercase transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Offices */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                [ CO-ORDINATES ]
              </span>
              <ul className="flex flex-col gap-2.5 font-sans text-xs text-[#B8B8B8] tracking-widest uppercase leading-loose">
                <li>MORADABAD, UP</li>
                <li>MILAN</li>
                <li>TOKYO</li>
              </ul>
            </div>

            {/* Security Nodes */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
                [ SECURED PROTOCOL ]
              </span>
              <p className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/50 uppercase leading-relaxed">
                ESTABLISHED SECURE SOCKET SSL • DIRECTORY DEPLOYMENT COMPLIANT • PRODUCED IN CLOUD CONTAINERS
              </p>
            </div>
          </div>
        </div>

        {/* Breathtaking Oversized Wordmark "AUREON" */}
        <div className="w-full text-center select-none no-select py-4 opacity-[0.035] hover:opacity-[0.055] transition-opacity duration-700 pointer-events-none mb-10">
          <h2 className="font-display text-[11vw] font-extrabold leading-none tracking-[0.18em] text-white uppercase mt-4">
            AUREON
          </h2>
        </div>

        {/* Footer Base bottom details */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/[0.04] pt-8 font-mono text-[8px] tracking-[0.25em] text-[#B8B8B8]/40 uppercase">
          
          <div className="text-center md:text-left leading-relaxed flex flex-col gap-1">
            <span>© AUREON STUDIOS 2026. ALL RIGHTS SECURED.</span>
            <span>FOUNDED IN MORADABAD, UTTAR PRADESH • EST. 2026</span>
            <span className="text-[7px] text-white/50">DESIGNED & CRAFTED BY AUREON STUDIOS</span>
          </div>

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="cursor-hover-link flex items-center gap-2 border border-white/5 hover:border-white/20 px-4 py-2.5 hover:text-white transition-all duration-300 rounded-none bg-white/[0.01]"
            aria-label="Scroll back to top"
          >
            RETURN TO APEX
            <ArrowUp size={10} className="animate-bounce" />
          </button>

        </div>

      </div>
    </footer>
  );
};
