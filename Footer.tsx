import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "test-01",
      quote: "Aureon Studios did not just rebrand our company; they redefined our entire commercial category. Their obsession with microscopic detail and cinematic styling placed us in a bracket of our own. A masterclass in luxury strategy.",
      author: "Elena Rostova",
      role: "Head of Marketing",
      company: "AETHER EV"
    },
    {
      id: "test-02",
      quote: "The brand book and frosted packaging systems designed by Aureon became instant artistic artifacts. They combined severe brutalist layouts with deep organic styling flawlessly. Our retail flagship launch sold out on day one.",
      author: "Ren Takahashi",
      role: "Founder & Curator",
      company: "KAIZEN SKIN"
    },
    {
      id: "test-03",
      quote: "To sell multi-million dollar concrete sanctuaries, you need an agency that speaks in quiet, architectural confidence. Aureon created a gorgeous editorial experience that converted ultra-high-net-worth investors directly.",
      author: "Mateo Silva",
      role: "Design Director",
      company: "HELIOS VILLAS"
    },
    {
      id: "test-04",
      quote: "Bespoke Swiss engineering demands an equivalent digital experience. Aureon's WebGL kinetic simulator brought our titanium chronographs to life in ways 2D assets never could. They represent the highest standard of web artistry.",
      author: "Christoph Wehrli",
      role: "Principal Architect",
      company: "VORTEX CHRONO"
    }
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.01]" />
      <div className="absolute left-1/3 top-1/4 w-[300px] h-[300px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
            [ PEER EVALUATION • ENDORSEMENTS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            TRUSTED BY VISIONARIES
          </h2>
          <div className="w-12 h-[1px] bg-white mt-4" />
        </div>

        {/* Carousel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Quote Mark Decoration */}
          <div className="hidden lg:flex lg:col-span-2 justify-center text-white/5">
            <Quote size={120} strokeWidth={1} />
          </div>

          {/* Testimonial Display Card Slider */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 md:p-14 relative min-h-[300px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-serif italic text-lg md:text-2xl leading-relaxed text-white/90">
                    “{testimonials[current].quote}”
                  </p>
                  
                  <div className="mt-8 flex flex-col">
                    <span className="font-display text-sm tracking-wider uppercase text-white font-bold">
                      {testimonials[current].author}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#B8B8B8]/60 uppercase mt-1">
                      {testimonials[current].role} • {testimonials[current].company}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Footer navigation */}
              <div className="mt-12 pt-8 border-t border-white/[0.04] flex justify-between items-center">
                
                {/* Fractional Page count */}
                <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
                  ARCHIVE NODE [ 0{current + 1} / 0{testimonials.length} ]
                </div>

                {/* Left/Right switches */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="cursor-hover-link p-2.5 border border-white/10 rounded-none hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Previous review"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="cursor-hover-link p-2.5 border border-white/10 rounded-none hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Next review"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block" />
        </div>

      </div>
    </section>
  );
};
