import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, CircleDot } from "lucide-react";
import { ProcessStep } from "../types";

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      description: "We dive deep into your brand DNA, perform rigorous market mapping, audit key competitors, and discover unique luxury leverage nodes.",
      deliverables: ["Competitive Matrix", "Target Audience Personas", "Visual Archetype Definition", "Brand Health Audit"]
    },
    {
      number: "02",
      title: "Strategy",
      description: "We formulate the cinematic roadmap. Meticulous positioning models, campaign concepts, copywriting tone architectures, and scaling systems.",
      deliverables: ["Creative Direction Brief", "Media Campaign Deck", "Verbal Tone Guide", "Marketing Timeline"]
    },
    {
      number: "03",
      title: "Design",
      description: "The crystallization. We craft custom geometric typography, logo Suites, high-end print mockups, cinematic video structures, and responsive WebGL frontends.",
      deliverables: ["High-Fidelity UI/UX Kits", "Custom Font & Monogram Suite", "Commercial Scripting", "3D WebPrototypes"]
    },
    {
      number: "04",
      title: "Launch",
      description: "The deployment phase. Pushing campaigns live, shipping polished websites, scheduling cinematic film premieres, and capturing target feeds.",
      deliverables: ["Production-Ready Website", "Curated Feed Launch Assets", "Cinematic Film Premiere", "Campaign Analytics Node"]
    },
    {
      number: "05",
      title: "Scale",
      description: "Fusing state-of-the-art AI automation tools with human oversight, refining creative consulting, auditing feed health, and expanding influence.",
      deliverables: ["Continuous Creative Consulting", "AI Asset Training Sets", "Monthly Influence Reports", "Interactive Auditing"]
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section 
      id="process" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.015]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 lg:mb-24 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
              [ STRUCTURAL TIMELINE • PATHWAY ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              CREATIVE METHODOLOGY
            </h2>
            <div className="w-12 h-[1px] bg-white mt-4" />
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`cursor-hover-link p-3 border border-white/10 rounded-none transition-all duration-300 ${
                activeStep === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-white hover:bg-white hover:text-black"
              }`}
              aria-label="Previous step"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextStep}
              disabled={activeStep === steps.length - 1}
              className={`cursor-hover-link p-3 border border-white/10 rounded-none transition-all duration-300 ${
                activeStep === steps.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:border-white hover:bg-white hover:text-black"
              }`}
              aria-label="Next step"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Process Timeline Bar - Desktop Only */}
        <div className="hidden md:block relative w-full h-[2px] bg-white/10 mb-16">
          {/* Active progress fill */}
          <div 
            className="absolute left-0 top-0 h-full bg-white transition-all duration-700 ease-[0.16,1,0.3,1]"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {/* Dots on progress line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`cursor-hover-link relative w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                  i <= activeStep ? "bg-white scale-110" : "bg-neutral-800 border border-white/10 hover:bg-neutral-700"
                }`}
                aria-label={`Go to step ${i + 1}`}
              >
                {/* Active pulse */}
                {i === activeStep && (
                  <span className="absolute w-8 h-8 rounded-full border border-white/20 animate-ping" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Presentation: Single Highlighted Step Slider */}
        <div className="hidden md:block min-h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Left Side: Step Number and Info */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-lg font-bold text-white/40 tracking-widest">
                    PHASE // {steps[activeStep].number}
                  </span>
                  <div className="h-[1px] w-8 bg-white/20" />
                </div>
                
                <h3 className="font-display text-4xl lg:text-5xl font-extrabold tracking-wider text-white uppercase mb-6">
                  {steps[activeStep].title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-[#B8B8B8] leading-relaxed tracking-wider max-w-xl mb-6">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Right Side: Key Deliverables Panel */}
              <div className="lg:col-span-5 flex items-center">
                <div className="glass-panel p-8 lg:p-10 w-full relative">
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 block mb-6">
                    [ VERIFIED DELIVERABLES ]
                  </span>
                  <ul className="flex flex-col gap-4">
                    {steps[activeStep].deliverables.map((del, dIdx) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dIdx * 0.1, duration: 0.4 }}
                        key={dIdx}
                        className="flex items-center gap-3.5"
                      >
                        <CircleDot size={12} className="text-white/40" />
                        <span className="font-mono text-xs text-white/85 tracking-widest uppercase">
                          {del}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Presentation: Fully Stacked Elegant List */}
        <div className="md:hidden flex flex-col gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="border-b border-white/[0.05] pb-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-white/40 tracking-widest font-semibold">
                  {step.number} // PHASE
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wider mb-6">
                {step.description}
              </p>
              <div className="bg-white/[0.02] border border-white/[0.04] p-5">
                <span className="font-mono text-[8px] tracking-[0.25em] text-white/30 block mb-3 uppercase">
                  DELIVERABLES:
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2.5 font-mono text-[9px] text-white/80 tracking-widest uppercase">
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                      {del}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
