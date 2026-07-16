import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service } from '../data';
import { Plus, Minus, ArrowRight, Zap, Award, Shield } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("brand-strategy");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 relative bg-[#050505] overflow-hidden"
    >
      {/* Decorative Subtle Grid & Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 text-left">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none font-medium">
              Architecting <br />
              <span className="font-serif italic text-gold">Elite Ecosystems.</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-silver max-w-sm leading-relaxed text-opacity-80">
            We bypass template solutions. Every touchpoint is hand-crafted to secure premium positioning, combining world-class aesthetics with highly scalable modern systems.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="space-y-4" id="services-grid">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <div
                key={service.id}
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'border-gold/40 bg-dark-panel shadow-[0_15px_40px_rgba(212,175,55,0.06)]'
                    : 'border-white/5 bg-black hover:border-white/20'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Index */}
                    <span className="font-mono text-xs text-gold/60 md:text-sm font-semibold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* Title & Category */}
                    <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4">
                      <h3 className="font-serif text-lg md:text-2xl text-white font-medium tracking-wide">
                        {service.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[9px] text-silver text-opacity-70 tracking-widest uppercase self-start md:self-auto">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Expansion indicator icon */}
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-white hover:border-white/25 transition-all">
                    {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                        {/* Description & KPI */}
                        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                          <div>
                            <p className="font-sans text-xs md:text-sm text-silver leading-relaxed text-opacity-80">
                              {service.description}
                            </p>
                          </div>

                          {/* Metric Highlights */}
                          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                            <div>
                              <span className="font-mono text-[9px] text-gold tracking-widest uppercase block mb-1">Target Benchmark</span>
                              <span className="font-serif text-base text-white tracking-wide">{service.metric}</span>
                            </div>
                            <div>
                              <span className="font-mono text-[9px] text-silver tracking-widest uppercase block mb-1">Engagement Span</span>
                              <span className="font-serif text-base text-white tracking-wide">{service.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="lg:col-span-7 bg-black/40 border border-white/5 p-6 md:p-8 rounded-xl flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-[10px] text-gold tracking-widest uppercase block mb-4">Core Deliverables</span>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-center gap-2.5 text-silver text-opacity-90">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                  <span className="font-sans text-xs">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <span className="font-sans text-[10px] text-silver text-opacity-40">
                              * Customized alignment protocols will be modeled during consulting.
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
