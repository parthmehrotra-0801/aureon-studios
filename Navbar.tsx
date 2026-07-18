import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogoIcon } from "./Logo";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant percentage increase with accelerating increments
    let timer: NodeJS.Timeout;
    const startProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Allow exit animations to finish
          return 100;
        }
        
        // Random incremental speedups for luxury feeling
        const increment = prev < 30 
          ? Math.floor(Math.random() * 8) + 3 
          : prev < 70 
          ? Math.floor(Math.random() * 12) + 4
          : Math.floor(Math.random() * 5) + 2;
          
        return Math.min(prev + increment, 100);
      });
    };

    timer = setInterval(startProgress, 70);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="aureon-loader"
          className="fixed inset-0 w-screen h-screen bg-[#050505] z-[99999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle noise and mesh elements inside loader */}
          <div className="absolute inset-0 grid-mesh opacity-[0.03]" />
          <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col items-center gap-12 relative z-10">
            {/* Elegant SVG Logo drawing itself */}
            <div className="relative">
              <LogoIcon size={120} animate={true} />
              
              {/* Soft metallic sheen sweep */}
              <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-overlay">
                <div 
                  className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 translate-x-[-100%]"
                  style={{
                    animation: "sheenSweep 3s cubic-bezier(0.25, 1, 0.5, 1) infinite",
                    animationDelay: "1.5s"
                  }}
                />
              </div>
            </div>

            {/* Status and Percentage Indicator */}
            <div className="flex flex-col items-center gap-2 select-none">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#B8B8B8]"
              >
                ARCHITECTING BRAND INFLUENCE
              </motion.div>
              
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                  {progress}
                </span>
                <span className="font-mono text-sm font-light text-[#B8B8B8]">%</span>
              </div>
            </div>
          </div>

          {/* Bottom editorial tags */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[#B8B8B8]/30 font-mono text-[8px] tracking-[0.25em] uppercase z-10">
            <span>© AUREON STUDIOS 2026</span>
            <span>MILAN • TOKYO • MORADABAD • SEOUL</span>
          </div>

          {/* CSS Sheen keyframe for loader specifically */}
          <style>{`
            @keyframes sheenSweep {
              0% { transform: translateX(-100%) skewX(-15deg); }
              50% { transform: translateX(100%) skewX(-15deg); }
              100% { transform: translateX(100%) skewX(-15deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
