import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../data';
import { X, Calendar, User, Layers, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Aesthetic Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 text-left">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3">Elite Portfolio</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none font-medium">
              Bespoke <br />
              <span className="font-serif italic text-gold">Masterpieces.</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-silver max-w-sm leading-relaxed text-opacity-80">
            A meticulous showcase of digital environments and narrative campaigns. Each record is backed by illustrative, highly refined business performance results.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="portfolio-masonry-grid"
        >
          {PROJECTS.map((project, index) => {
            // Apply varied column layout to give a luxury masonry look
            let gridSpanClass = "col-span-1";
            if (index === 0) gridSpanClass = "md:col-span-2 lg:col-span-2 row-span-2";
            if (index === 3) gridSpanClass = "md:col-span-2 lg:col-span-1";
            if (index === 6) gridSpanClass = "md:col-span-2 lg:col-span-2";

            return (
              <motion.div
                key={project.id}
                className={`${gridSpanClass} group cursor-pointer relative rounded-2xl overflow-hidden border border-white/5 bg-[#111] h-[320px] md:h-[450px]`}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
                id={`portfolio-item-${project.id}`}
              >
                {/* Image Layer with Zoom Effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out object-center filter brightness-[0.8]"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-left">
                  {/* Card Header (Category & Year) */}
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                    <span className="px-3 py-1 rounded-full border border-gold/30 bg-gold/15 font-mono text-[9px] text-gold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-silver tracking-widest">{project.year}</span>
                  </div>

                  {/* Empty spacer for masonry visual weight */}
                  <div className="flex-grow" />

                  {/* Card Footer (Title & Client) */}
                  <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase mb-1 block">
                      {project.client}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-wide">
                      {project.title}
                    </h3>
                    
                    {/* View Project Reveal text */}
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-sans text-[10px] text-white tracking-widest uppercase">
                        Reveal Case Story
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Story Expansion Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              id="portfolio-modal-backdrop"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-5xl bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[750px]"
              id="portfolio-detail-card"
            >
              {/* Left Side: Cinematic Project Image */}
              <div className="w-full md:w-1/2 relative bg-black flex items-center justify-center min-h-[250px] md:min-h-0 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />
                
                {/* Floating branding tag */}
                <div className="absolute bottom-6 left-6 p-4 bg-black/75 border border-white/5 rounded-xl backdrop-blur-md text-left max-w-xs">
                  <span className="font-mono text-[9px] text-gold tracking-widest uppercase block mb-1">
                    Branded Record
                  </span>
                  <span className="font-serif text-sm text-white block leading-normal">
                    Crafted specifically for {selectedProject.client} in {selectedProject.year}.
                  </span>
                </div>
              </div>

              {/* Right Side: Narrative Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto text-left flex flex-col justify-between">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-silver hover:text-white transition-all cursor-pointer z-10"
                  aria-label="Close view"
                  id="close-project-modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase block mb-2">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-medium leading-none mb-6">
                    {selectedProject.title}
                  </h2>

                  {/* Quick Meta */}
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5 text-silver text-opacity-80">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="font-sans text-xs">Client: {selectedProject.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className="font-sans text-xs">Timeline: {selectedProject.year}</span>
                    </div>
                  </div>

                  {/* Scope of Work */}
                  <div className="py-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-gold" />
                      <span className="font-mono text-[10px] text-gold tracking-widest uppercase">Scope of Craft</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.scope.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.03] text-silver font-mono text-[9px] tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Story description */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <span className="font-mono text-[10px] text-gold tracking-widest uppercase">The Strategy</span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-silver leading-relaxed text-opacity-80">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* High-Impact Stat counters */}
                <div className="border-t border-white/5 pt-6 bg-black/20 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-gold" />
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase">Illustrative Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {selectedProject.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-1">
                        <span className="font-serif text-lg md:text-2xl text-gold font-bold tracking-tight">
                          {stat.value}
                        </span>
                        <span className="font-sans text-[8px] md:text-[10px] text-silver text-opacity-50 uppercase tracking-wider leading-none">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="font-sans text-[8px] text-silver text-opacity-30 block mt-4 text-center leading-none">
                    * Values marked as illustrative and based on model projection parameters.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
