import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "branding",
    budget: "$10k-$25k",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-end server-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 5 seconds to allow another input
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          company: "",
          projectType: "branding",
          budget: "$10k-$25k",
          message: ""
        });
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://instagram.com/aureonstudios", icon: <Instagram size={14} /> },
    { label: "LINKEDIN", href: "https://linkedin.com/company/aureonstudios", icon: <Linkedin size={14} /> },
    { label: "EMAIL US", href: "mailto:hello@aureonstudios.com", icon: <Mail size={14} /> }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.01]" />
      <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
            [ CAPITAL ENGAGEMENT • COMMUNICATIONS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            COMMISSION THE STUDIO
          </h2>
          <div className="w-12 h-[1px] bg-white mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Brand Handles & Dynamic Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-6">
                Let's Craft Absolute Influence.
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#B8B8B8] leading-relaxed tracking-wider mb-8 max-w-sm">
                We work exclusively with select boutique brands, ambitious startups, and visionary institutions. Tell us about your scope, and our creative directors will contact you in under 24 hours.
              </p>

              {/* Direct Communication Info */}
              <div className="flex flex-col gap-4 border-t border-white/[0.04] pt-8 mb-8">
                <div className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="p-2.5 bg-white/[0.04] border border-white/[0.06] text-[#B8B8B8] group-hover:text-white transition-all duration-300">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      STUDIO HQ
                    </span>
                    <span className="font-sans text-xs text-white/90 tracking-widest uppercase">
                      Moradabad, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-white/[0.04] border border-white/[0.06] text-[#B8B8B8] flex items-center justify-center w-[30px] h-[30px]">
                    <span className="font-mono text-[9px] font-bold text-white/80">PM</span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      FOUNDER & CREATIVE DIRECTOR
                    </span>
                    <span className="font-sans text-xs text-white/90 tracking-widest uppercase">
                      Parth Mehrotra
                    </span>
                  </div>
                </div>

                {/* Contact Placeholders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pt-4 border-t border-white/[0.02]">
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      PHONE [SECURE]
                    </span>
                    <span className="font-sans text-xs text-white/60 tracking-wider">
                      +91 99XX XXX XXX
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      EMAIL [SECURE]
                    </span>
                    <span className="font-sans text-xs text-white/60 tracking-wider lowercase">
                      hello@aureonstudios.com
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      INSTAGRAM
                    </span>
                    <span className="font-sans text-xs text-white/60 tracking-wider">
                      @aureonstudios
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      LINKEDIN
                    </span>
                    <span className="font-sans text-xs text-white/60 tracking-wider">
                      linkedin.com/company/aureonstudios
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#B8B8B8]/40 uppercase block">
                      WEBSITE
                    </span>
                    <span className="font-sans text-xs text-white/60 tracking-wider">
                      www.aureonstudios.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Custom Map Vector Drawing (Creative Agency Signature) */}
            <div className="w-full h-44 border border-white/[0.06] bg-[#0A0A0A] relative mb-12 lg:mb-0 group overflow-hidden">
              {/* Abstract Map Lines (wireframe style) */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 200">
                <line x1="50" y1="0" x2="50" y2="200" stroke="white" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="200" stroke="white" strokeWidth="1" />
                <line x1="300" y1="0" x2="300" y2="200" stroke="white" strokeWidth="1" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="400" y2="140" stroke="white" strokeWidth="1" />
                <path d="M 20,40 Q 150,150 350,30" fill="none" stroke="white" strokeWidth="2" />
                <path d="M 10,180 Q 250,50 380,170" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Holographic Glowing Location Radar */}
              <div className="absolute left-[150px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <span className="absolute w-12 h-12 rounded-full border border-white/20 animate-ping" />
                <span className="absolute w-6 h-6 rounded-full border border-white/40 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>

              {/* Tech Spec Label Overlay */}
              <div className="absolute bottom-3 left-3 flex flex-col font-mono text-[7px] tracking-[0.25em] text-[#B8B8B8]/40 uppercase select-none">
                <span>COORD: 28.8386° N, 78.7768° E</span>
                <span>GEO-LOCATOR NODE // MORADABAD HQ</span>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Luxury Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 lg:p-12 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alexander Mercer"
                          className="w-full bg-[#050505] border border-white/10 px-4 py-3.5 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                          Secure Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. alex@mercer.com"
                          className="w-full bg-[#050505] border border-white/10 px-4 py-3.5 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          placeholder="e.g. Mercer & Co."
                          className="w-full bg-[#050505] border border-white/10 px-4 py-3.5 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-300"
                        />
                      </div>

                      {/* Project Type */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                          Primary Capability
                        </label>
                        <select
                          value={formState.projectType}
                          onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                          className="w-full bg-[#050505] border border-white/10 px-4 py-3.5 font-sans text-xs text-white focus:outline-none focus:border-white transition-all duration-300 appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 16px center"
                          }}
                        >
                          <option value="branding">Brand Identity Suite</option>
                          <option value="marketing">Marketing Strategy</option>
                          <option value="web">Cinematic Web Design</option>
                          <option value="film">Film & Photography</option>
                          <option value="all">Full Creative Scope</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget Bracket */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                        Estimated Budget Bracket
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["$10k-$25k", "$25k-$50k", "$50k-$100k", "Enterprise"].map((bracket) => (
                          <button
                            key={bracket}
                            type="button"
                            onClick={() => setFormState({ ...formState, budget: bracket })}
                            className={`cursor-hover-link py-3 border font-mono text-[9px] tracking-wider uppercase transition-all duration-300 ${
                              formState.budget === bracket
                                ? "bg-white text-black border-white font-bold"
                                : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                            }`}
                          >
                            {bracket}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/50 uppercase">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Detail your goals, vision, and deadlines. We thrive on ambitious scopes."
                        className="w-full bg-[#050505] border border-white/10 px-4 py-3.5 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit CTA button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-hover-link mt-4 group relative overflow-hidden bg-white text-black font-mono text-[10px] tracking-[0.3em] uppercase py-4.5 w-full flex items-center justify-center gap-2 font-bold transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="relative z-10 flex items-center gap-2">
                          TRANSMITTING SECURE DATA...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-white">
                          TRANSMIT INQUIRY
                          <Send size={12} />
                        </span>
                      )}
                      <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] -z-0" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-6"
                  >
                    <CheckCircle2 size={48} className="text-white mb-6 animate-pulse" />
                    <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3">
                      Transmission Successful
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#B8B8B8] leading-relaxed tracking-wider max-w-sm mb-6">
                      Your project brief has been secure-routed directly to our executive creative directors. Check your secure inbox shortly for our analysis.
                    </p>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase">
                      SECURE TICKET ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Floating Social Footer Handles */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-wrap gap-8 items-center justify-center lg:justify-start">
          <span className="font-mono text-[8px] tracking-[0.3em] text-[#B8B8B8]/30 uppercase mr-4">
            FIND THE CRUCIBLE ON SOCIAL CHANNELS //
          </span>
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover-link flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#B8B8B8] hover:text-white transition-colors duration-300 relative py-1 group"
            >
              {social.icon}
              {social.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

      </div>

      <style>{`
        button:hover span {
          color: #050505 !important;
        }
        button:hover .relative {
          color: inherit;
        }
      `}</style>
    </section>
  );
};
