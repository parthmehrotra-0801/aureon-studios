import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS, ProcessStep } from '../data';
import { Compass, BookOpen, PenTool, Rocket, TrendingUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once on load
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollOffset = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01': return <Compass className="w-5 h-5 text-gold" />;
      case '02': return <BookOpen className="w-5 h-5 text-gold" />;
      case '03': return <PenTool className="w-5 h-5 text-gold" />;
      case '04': return <Rocket className="w-5 h-5 text-gold" />;
      case '05': return <TrendingUp className="w-5 h-5 text-gold" />;
      default: return null;
    }
  };

  return (
    <section 
      id="process" 
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Absolute backgrounds */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        {/* Header containing navigation arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3">Our Protocol</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none font-medium">
              A Meticulous <br />
              <span className="font-serif italic text-gold">Evolutionary Path.</span>
            </h2>
          </div>

          {/* Lateral Scroll Navigation (Desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft 
                  ? 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30' 
                  : 'border-white/5 text-white/20 cursor-not-allowed'
              }`}
              id="process-scroll-left-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight 
                  ? 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30' 
                  : 'border-white/5 text-white/20 cursor-not-allowed'
              }`}
              id="process-scroll-right-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lateral scrolling element */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          id="process-horizontal-container"
        >
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <div
                key={step.number}
                className="snap-start flex-shrink-0 w-full sm:w-[380px] md:w-[450px] bg-dark-panel border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between h-[450px] relative overflow-hidden group hover:border-gold/30 transition-colors duration-500"
              >
                {/* Background Subtle Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Step Top Header */}
                <div>
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                    {/* Index */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center">
                        {getStepIcon(step.number)}
                      </div>
                      <span className="font-mono text-xs text-gold/60 uppercase tracking-widest font-semibold">
                        Phase {step.number}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-silver text-opacity-40 tracking-widest uppercase">
                      {step.duration}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <span className="font-sans text-[11px] text-gold tracking-widest uppercase font-semibold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-silver leading-relaxed text-opacity-70">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable blocks */}
                <div className="mt-6 border-t border-white/5 pt-6 relative z-10">
                  <span className="font-mono text-[9px] text-silver tracking-widest uppercase block mb-3 opacity-60">Deliverables Highlights:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {step.deliverables.slice(0, 2).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-silver text-opacity-80">
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span className="font-sans text-[10px] truncate">{del}</span>
                      </div>
                    ))}
                    {step.deliverables.slice(2, 4).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-silver text-opacity-80">
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span className="font-sans text-[10px] truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
