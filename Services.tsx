import React from "react";
import { motion } from "motion/react";
import { ThreeCanvas } from "./ThreeCanvas";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Mesh Grid & Subtle Atmosphere */}
      <div className="absolute inset-0 grid-mesh opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      {/* 3D Obsidian Object Canvas */}
      <ThreeCanvas />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-30 flex flex-col justify-between min-h-[75vh] lg:min-h-[80vh]">
        
        {/* Editorial Sub-line (Top of Hero) */}
        <div className="flex justify-between items-center border-b border-white/[0.04] pb-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-[#B8B8B8]">
              AUREON CREATIVE HQ
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="hidden sm:block font-mono text-[9px] tracking-[0.35em] uppercase text-[#B8B8B8]/60"
          >
            EST. 2026 • DIGITAL ARCHITECTURE
          </motion.div>
        </div>

        {/* Cinematic Main Headings & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12">
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Split text reveal for uncompromised craft */}
            <div className="overflow-visible select-none no-select mb-6">
              {[
                { text: "Architecting", delay: 1.0 },
                { text: "Brands", delay: 1.15, italic: true },
                { text: "That Influence.", delay: 1.3 }
              ].map((line, i) => (
                <div key={i} className="overflow-hidden py-1">
                  <motion.h1
                    initial={{ y: "100%", rotateX: 30 }}
                    animate={{ y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 1.4, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: line.delay 
                    }}
                    className={`text-5xl md:text-7xl lg:text-[100px] font-display font-extrabold tracking-tighter leading-[0.9] ${
                      line.italic 
                        ? "font-serif italic font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40" 
                        : "text-white"
                    }`}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
              className="font-sans text-[#B8B8B8] text-sm md:text-lg tracking-widest uppercase font-light max-w-xl mb-10 pl-1 border-l border-white/20"
            >
              Luxury Branding <span className="text-white/30 mx-2">•</span> Marketing <span className="text-white/30 mx-2">•</span> Creative Strategy
            </motion.p>

            {/* Button Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
              className="flex flex-wrap gap-4 items-center pl-1"
            >
              <a
                href="#contact"
                className="cursor-hover-link group relative overflow-hidden bg-white text-black font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4.5 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-bold transition-colors group-hover:text-white">
                  START YOUR PROJECT
                  <ArrowUpRight size={13} />
                </span>
                <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>

              <a
                href="#portfolio"
                className="cursor-hover-link group relative overflow-hidden border border-white/10 hover:border-white text-white font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4.5 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5 transition-colors group-hover:text-black">
                  EXPLORE OUR WORK
                </span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>
            </motion.div>
          </div>

          {/* Right margin info (Desktop only) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end text-right">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 2.0 }}
              className="font-mono text-[9px] tracking-[0.3em] leading-relaxed text-[#B8B8B8] max-w-[240px]"
            >
              [ INTERACTIVE INTENSITY NODE ]
              <br />
              DRAG OR MOVE MOUSE OVER OBSIDIAN GRAPHIC TO TILT THE REFRACTIVE LIGHT SYSTEM
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator Foot */}
        <div className="flex justify-between items-center border-t border-white/[0.04] pt-6 pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 2.1 }}
            className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8] uppercase"
          >
            AUREON STUDIO © 2026
          </motion.div>
          
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.5,
              delay: 2.2
            }}
            className="cursor-hover-link flex items-center gap-2 font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8] uppercase hover:text-white transition-colors"
          >
            SCROLL DOWN
            <ArrowDown size={10} />
          </motion.a>
        </div>

      </div>

      <style>{`
        .group:hover span {
          color: #050505 !important;
        }
        .group:hover .relative {
          color: inherit;
        }
      `}</style>
    </section>
  );
};
