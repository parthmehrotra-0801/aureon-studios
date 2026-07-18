import React from "react";
import { motion } from "motion/react";
import { 
  Fingerprint, 
  Compass, 
  Globe, 
  Layers, 
  Camera, 
  Film, 
  Laptop, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Service } from "../types";

export const Services: React.FC = () => {
  const servicesList: Service[] = [
    {
      id: "srv-01",
      title: "Brand Identity",
      description: "Defining prestigious visual systems, custom typography, logo suites, and comprehensive brand books that establish immediate premium positioning.",
      icon: "fingerprint",
      details: ["Logo Monograms", "Typography Systems", "Color Architecture", "Brand Guidelines"]
    },
    {
      id: "srv-02",
      title: "Marketing Strategy",
      description: "Surgical, performance-driven market strategy. We position your brand exactly where maximum value and qualified ambition intersect.",
      icon: "compass",
      details: ["Positioning Audits", "Target Audience Matrix", "Campaign Outlines", "Market Acquisition"]
    },
    {
      id: "srv-03",
      title: "Social Media",
      description: "Curated, high-fidelity feeds that look like premium galleries. We manage your presence to generate deep envy and strategic trust.",
      icon: "globe",
      details: ["Aesthetic Direction", "Content Calendar", "Community Care", "Paid Prestige Ads"]
    },
    {
      id: "srv-04",
      title: "Content Production",
      description: "Creating highly artistic digital assets, graphic compositions, and copywriting with sophisticated vocabulary and modern grids.",
      icon: "layers",
      details: ["Editorial Graphics", "Prestige Newsletters", "Copywriting", "Launch Assets"]
    },
    {
      id: "srv-05",
      title: "Photography",
      description: "Editorial-grade product and studio shoots. We capture your brand assets in dramatic lighting that feels raw, expensive, and iconic.",
      icon: "camera",
      details: ["Product Shoots", "Executive Portraits", "Creative Direction", "Lighting Scapes"]
    },
    {
      id: "srv-06",
      title: "Film Production",
      description: "Cinematic promotional reels, documentaries, and social campaign films. Handled from screenplay writing to professional color grading.",
      icon: "film",
      details: ["Script & Concept", "Professional Shoots", "Color Grading", "Post Sound Design"]
    },
    {
      id: "srv-07",
      title: "Web Design",
      description: "We code custom award-winning websites with buttery smooth animations, responsive grids, WebGL features, and elegant layout typography.",
      icon: "laptop",
      details: ["UI/UX Prototyping", "WebGL & 3D Integration", "NextJS / Vite Speed", "Responsive Layouts"]
    },
    {
      id: "srv-08",
      title: "AI Solutions",
      description: "Next-gen generative creativity. We integrate state-of-the-art AI systems with human touch, boosting assets production speed by 10x.",
      icon: "sparkles",
      details: ["Generative Assets", "Prompt Architecture", "AI Consultation", "Custom API Tools"]
    },
    {
      id: "srv-09",
      title: "Creative Consulting",
      description: "Hourly, highly focused guidance for brand upgrades. We sit down with your team to review, refine, and polish your entire public output.",
      icon: "messagesquare",
      details: ["Design Review", "Luxury Repositioning", "Scale Brainstorming", "Continuous Audit"]
    }
  ];

  // Helper function to render correct Lucide Icon
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "text-white w-6 h-6 group-hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]" };
    switch (iconName) {
      case "fingerprint": return <Fingerprint {...iconProps} />;
      case "compass": return <Compass {...iconProps} />;
      case "globe": return <Globe {...iconProps} />;
      case "layers": return <Layers {...iconProps} />;
      case "camera": return <Camera {...iconProps} />;
      case "film": return <Film {...iconProps} />;
      case "laptop": return <Laptop {...iconProps} />;
      case "sparkles": return <Sparkles {...iconProps} />;
      case "messagesquare": return <MessageSquare {...iconProps} />;
      default: return <Fingerprint {...iconProps} />;
    }
  };

  // Luxury 3D Tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12; // Max 12 deg tilt
    const rotateY = ((x / rect.width) - 0.5) * 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    
    // Animate glow effect inside the card border
    const glow = card.querySelector(".border-glow") as HTMLDivElement;
    if (glow) {
      glow.style.opacity = "0.85";
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    const glow = card.querySelector(".border-glow") as HTMLDivElement;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      {/* Background grids */}
      <div className="absolute inset-0 grid-mesh opacity-[0.015]" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-30">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8] mb-4">
            [ WHAT WE DELIVER • CAPABILITIES ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            STUDIO EXPERTISE
          </h2>
          <div className="w-12 h-[1px] bg-white mt-4" />
        </div>

        {/* Bento Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-panel p-8 lg:p-10 flex flex-col justify-between h-[360px] relative overflow-hidden transition-all duration-300 select-none cursor-pointer group"
              style={{
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            >
              {/* Dynamic mouse-tracking border-glow highlight */}
              <div 
                className="border-glow absolute w-36 h-36 rounded-full bg-white/[0.06] blur-[40px] pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Card Header (Icon & Code ID) */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/[0.04] border border-white/[0.06] rounded-none group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {renderIcon(service.icon)}
                </div>
                <span className="font-mono text-[9px] text-white/30 tracking-widest font-semibold">
                  {service.id}
                </span>
              </div>

              {/* Card Content */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-[#B8B8B8] leading-relaxed tracking-wide mt-3">
                  {service.description}
                </p>
              </div>

              {/* Subtle hover reveals: key capabilities tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap gap-x-3 gap-y-1.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                {service.details.slice(0, 2).map((det, i) => (
                  <span key={i} className="font-mono text-[8px] tracking-[0.15em] uppercase text-white/60">
                    • {det}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom CTA for Services */}
        <div className="mt-16 lg:mt-24 border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="font-sans text-xs text-[#B8B8B8] max-w-lg tracking-wide leading-relaxed">
            Need a hyper-custom combination of cinematic production, website design, and AI-driven workflows? We formulate custom pricing brackets for enterprise partners and ambitious boutiques.
          </p>
          <a
            href="#contact"
            className="cursor-hover-link group inline-flex items-center gap-2 text-white font-mono text-[10px] tracking-[0.3em] uppercase py-2 border-b border-white/20 hover:border-white transition-all duration-500"
          >
            DISCUSS DEDICATED SERVICES
            <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};
