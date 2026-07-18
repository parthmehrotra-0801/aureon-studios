import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../types";
import { ArrowUpRight, X, Sparkles } from "lucide-react";

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const projects: PortfolioItem[] = [
    {
      id: "proj-01",
      title: "AETHER EV",
      category: "LUXURY AUTOMOTIVE",
      year: "2025",
      description: "Crafting a highly emotional digital launch campaign and custom brand identity for a next-generation luxury electric Grand Tourer competing globally.",
      image: "/src/assets/images/portfolio_aether_ev_1784304132429.jpg",
      link: "#",
      details: [
        "Interactive 3D configurator website with WebGL shaders",
        "Cinematic launch film shot in Northern Iceland and Tokyo",
        "Custom high-contrast titanium physical badging design",
        "Targeted strategic rollout driving 15,000+ waitlist conversions"
      ]
    },
    {
      id: "proj-02",
      title: "KAIZEN SKIN",
      category: "PREMIUM BEAUTY",
      year: "2025",
      description: "Architecting a raw, organic skincare identity. Combining brutalist Swiss grids with Japanese calligraphic elegance for a high-fashion cosmetic flagship store.",
      image: "/src/assets/images/portfolio_kaizen_skin_1784304148664.jpg",
      link: "#",
      details: [
        "Complete bespoke packaging systems using eco-limestone material",
        "Bespoke editorial photography catalog featuring warm side-lighting",
        "E-commerce flagship built with fluid page-lift animations",
        "Copywriting guide based on quiet confidence and sensory science"
      ]
    },
    {
      id: "proj-03",
      title: "VORTEX CHRONO",
      category: "SWISS HOROLOGY",
      year: "2026",
      description: "Developing an interactive mechanical watchmaking simulator and campaign to launch a perpetual calendar titanium watch series.",
      image: "/src/assets/images/portfolio_vortex_watch_1784304164665.jpg",
      link: "#",
      details: [
        "Full web-based virtual reality watch disassembly tool",
        "Cinematic 3D animation detailing the kinetic perpetual gear train",
        "Exclusive invitation campaign for VIP watch collectors",
        "Global digital marketing across premium Swiss watch networks"
      ]
    },
    {
      id: "proj-04",
      title: "HELIOS VILLAS",
      category: "ELITE ARCHITECTURE",
      year: "2026",
      description: "Positioning a collection of brutalist concrete villas in Kyoto and Ibiza as premier architectural sanctuaries for ultra-high-net-worth investors.",
      image: "/src/assets/images/portfolio_helios_villas_1784304179512.jpg",
      link: "#",
      details: [
        "Premium landscape storytelling film utilizing aerial tracking",
        "Exclusive editorial print-magazine distributed to luxury airport lounges",
        "Custom client portal with interactive sun-shadow simulations",
        "Strategic branding and direct outreach program for HNWI"
      ]
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden border-t border-b border-white/[0.04]"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.01]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
            [ BESPOKE ARTIFACTS • CASE STUDIES ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            SELECTED CREATIVE WORK
          </h2>
          <div className="w-12 h-[1px] bg-white mt-4" />
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer select-none relative"
              data-cursor-project="VIEW CASE"
            >
              {/* Image Frame with hover expand */}
              <div className="w-full aspect-[3/2] overflow-hidden border border-white/[0.06] bg-neutral-900 relative">
                
                {/* Fallback elegant dark placeholder if image fails */}
                <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center -z-10">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-white/20">AUREON CASE ARTIFACT</span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                />

                {/* Corner Label */}
                <div className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md px-3 py-1 border border-white/5 font-mono text-[8px] tracking-[0.3em] uppercase text-[#B8B8B8]">
                  {project.year}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-6 flex justify-between items-start border-b border-white/[0.05] pb-6">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#B8B8B8]/60 uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mt-1 group-hover:translate-x-1 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                <div className="p-2 border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500 rounded-none mt-2">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Case Study Dialog Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-full z-[10000] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 overflow-y-auto"
            >
              <div className="absolute inset-0 grid-mesh opacity-[0.02] pointer-events-none" />
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel w-full max-w-5xl bg-[#0D0D0D] relative overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-8 p-6 lg:p-12 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 border border-white/10 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover-link z-50 rounded-none"
                  aria-label="Close dialog"
                >
                  <X size={16} />
                </button>

                {/* Left side: Project Artwork */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="aspect-[3/2] border border-white/10 overflow-hidden bg-neutral-900 w-full mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[#B8B8B8] font-mono text-[9px] tracking-widest uppercase">
                    <span>SECTOR: {selectedProject.category}</span>
                    <span>YEAR: {selectedProject.year}</span>
                  </div>
                </div>

                {/* Right side: Project Deep-Dive Content */}
                <div className="lg:col-span-6 flex flex-col justify-between pt-4 lg:pt-0">
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.4em] text-white/30 uppercase block mb-2">
                      [ EXCLUSIVE ARCHIVE • CASE STUDY ]
                    </span>
                    <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-wide uppercase mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#B8B8B8] leading-relaxed tracking-wider mb-8">
                      {selectedProject.description}
                    </p>

                    {/* Deliverables detail */}
                    <div className="border-t border-white/10 pt-6">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase block mb-4">
                        DELIVERED STRATEGY & ASSETS
                      </span>
                      <ul className="flex flex-col gap-3">
                        {selectedProject.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Sparkles size={12} className="text-white mt-0.5 shrink-0" />
                            <span className="font-sans text-xs text-[#E2E2E2] tracking-wide">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Start Project Link */}
                  <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="cursor-hover-link inline-flex items-center gap-2 bg-white text-black font-mono text-[9px] tracking-[0.3em] uppercase px-5 py-3 font-bold hover:bg-[#050505] hover:text-white hover:border hover:border-white/20 transition-all duration-300"
                    >
                      COMMISSION PROJECT
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="cursor-hover-link font-mono text-[9px] tracking-[0.25em] text-[#B8B8B8]/40 hover:text-white uppercase transition-colors"
                    >
                      RETURN TO GRID
                    </button>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
