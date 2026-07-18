import React from "react";
import { motion } from "motion/react";
import { Compass, Eye, ShieldAlert, Award, Star, ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Cinematic Narrative",
      desc: "Every brand has a pulse. We capture that rhythm through world-class visual composition, cinematic storytelling, and deep-focus film production that demands absolute attention.",
    },
    {
      number: "02",
      title: "Strategic Rigor",
      desc: "We combine high-concept art with data-driven creative strategy. We do not gamble with your influence—we construct meticulous scaling pathways for ambitious boutiques.",
    },
    {
      number: "03",
      title: "Bespoke Digital Art",
      desc: "Websites are the flagship digital storefronts of modern institutions. We build responsive, highly animated, immersive digital canvases that feel worth millions of dollars.",
    },
  ];

  const brandValues = [
    {
      title: "Our Story",
      icon: <Award className="w-4 h-4 text-white/60" />,
      desc: "Aureon Studios was conceived in Moradabad, Uttar Pradesh, born from a singular obsession: to strip away the clutter of standard corporate marketing and build pure, unadulterated brand equity. We saw ambitious businesses, high-potential startups, and crafted boutiques buried under generic digital noise. Aureon was forged to give them the gravity and permanence of a cultural institution.",
    },
    {
      title: "Why Aureon Exists",
      icon: <ShieldAlert className="w-4 h-4 text-white/60" />,
      desc: "In a world where attention is fleeting and cheap, authentic authority is the only asset that scales. Aureon exists because great businesses deserve more than just advertising—they deserve to be legendary. We bridge the gap between high-end aesthetic majesty and absolute market conviction.",
    },
    {
      title: "Our Philosophy",
      icon: <Star className="w-4 h-4 text-white/60" />,
      desc: "Silence is the ultimate luxury. We design with restraint, curate with precision, and scale with conviction. We reject transient visual hype and pixelated trends. Instead, we establish absolute, timeless influence through structured grids, premium materials, and custom-tailored creative direction.",
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.015]" />
      <div className="absolute right-0 top-1/3 w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
            [ EST. 2026 • CREATIVE DOSSIER ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            STUDIO OUTLINE
          </h2>
          <div className="w-12 h-[1px] bg-white mt-4" />
        </div>

        {/* Large Editorial Quote Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 lg:mb-32">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-3xl md:text-5xl lg:text-[3.2rem] font-light leading-tight text-white/95"
            >
              “In an era of relentless digital noise, we design silence. Meticulous, unapologetic, highly focused <span className="text-white font-sans font-bold not-italic tracking-tight">Luxury Influence</span>.”
            </motion.p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-sans text-xs md:text-sm text-[#B8B8B8] leading-relaxed tracking-wider border-l border-white/10 pl-6"
            >
              Aureon Studios is a premium branding, marketing, creative strategy and digital media studio. We do not make generic templates or repeat standardized trends. We partner with ambitious founders who refuse mediocrity and want to establish absolute market authority.
            </motion.p>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 lg:mb-36">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 lg:p-10 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500 bg-white/[0.01] border border-white/5"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="font-mono text-xs text-white/30 tracking-widest font-semibold mb-8 block">
                {pillar.number} // PILLAR
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wide">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand Expanded Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-16 border-t border-white/[0.04] mb-28 lg:mb-36">
          
          {/* Left Column: Mission, Vision, Story */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div>
              <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-white/40 block mb-2">
                [ INTENT & CONVICTION ]
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white uppercase tracking-tight">
                OUR CREATIVE CRUCIBLE
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-6 bg-white/[0.01] border border-white/[0.03] flex flex-col gap-3 group hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/30 uppercase">
                  <Compass className="w-3.5 h-3.5" />
                  <span>MISSION</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  ARCHITECTING LEGACIES
                </h4>
                <p className="font-sans text-xs text-[#B8B8B8]/80 leading-relaxed">
                  To architect unmatched market presence and prestige for ambitious startups, boutique agencies, and small businesses, converting functional products into high-value legacy brands.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-6 bg-white/[0.01] border border-white/[0.03] flex flex-col gap-3 group hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/30 uppercase">
                  <Eye className="w-3.5 h-3.5" />
                  <span>VISION</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  THE STANDARD OF INFLUENCE
                </h4>
                <p className="font-sans text-xs text-[#B8B8B8]/80 leading-relaxed">
                  To become the global gold standard of creative strategy and digital craft, proving that elegant aesthetic intelligence paired with cinematic direction is the ultimate driver of human influence.
                </p>
              </motion.div>
            </div>

            {/* Stories List */}
            <div className="flex flex-col gap-8 mt-4">
              {brandValues.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="flex gap-4 border-l border-white/5 pl-6 group hover:border-white/20 transition-all"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center">
                      {val.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">
                      {val.title}
                    </h4>
                    <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wide">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder & Team (Luxury Layout) */}
          <div className="lg:col-span-5 flex flex-col gap-12 bg-white/[0.01] border border-white/[0.04] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] blur-2xl rounded-full" />
            
            {/* Meet the Founder */}
            <div>
              <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-white/40 block mb-2">
                [ INTRODUCING THE VISIONARY ]
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight">
                MEET THE FOUNDER
              </h3>
            </div>

            {/* Founder Profile Details */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="font-serif italic text-3xl font-light text-white leading-tight">
                  Parth Mehrotra
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/50 mt-1">
                  Founder & Creative Director
                </span>
              </div>

              <div className="w-12 h-[1px] bg-white/20" />

              <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wide">
                Aureon Studios was founded by Parth Mehrotra to help ambitious startups, boutiques, and small businesses transform into premium, unforgettable brands. Parth envisioned a studio built on strategy, creativity, and digital innovation—one that rejects standard templates and cliché corporate mechanics to deliver true artistic authority and high-caliber commercial results.
              </p>

              <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wide">
                By directly partnering with visionaries, Parth ensures that every visual asset, pixel, and film frame is executed with the rigorous craftsmanship of a luxury physical asset, translating conceptual brilliance into undeniable, permanent influence.
              </p>
            </div>

            {/* Current Team Sub-section */}
            <div className="border-t border-white/[0.06] pt-8 mt-4 flex flex-col gap-6">
              <div>
                <span className="font-mono text-[8px] tracking-[0.3em] text-white/40 uppercase block mb-2">
                  [ TEAM DIRECTORY ]
                </span>
                <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  CURRENT TEAM
                </h4>
              </div>

              <div className="flex flex-col gap-4">
                {/* Team Row 1 */}
                <div className="flex justify-between items-baseline py-2 border-b border-white/[0.02]">
                  <span className="font-sans text-xs text-white/90 font-medium">Parth Mehrotra</span>
                  <div className="flex flex-col items-end text-right font-mono text-[8px] text-white/40 uppercase tracking-widest gap-0.5">
                    <span>Founder</span>
                    <span>Creative Director</span>
                    <span>Brand Strategist</span>
                    <span>Marketing Consultant</span>
                  </div>
                </div>

                {/* Growth Note */}
                <p className="font-serif italic text-[11px] text-[#B8B8B8]/60 leading-relaxed tracking-wide mt-2">
                  “As Aureon Studios grows, we will continue building a team of exceptional designers, strategists, and creators.”
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
