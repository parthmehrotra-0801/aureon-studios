import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AureonLogo } from './AureonLogo';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<'fade-in' | 'shine' | 'complete'>('fade-in');

  useEffect(() => {
    // Dynamic progress ticking with realistic luxury delay pacing
    let timer: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 2800; // 2.8 seconds loading experience

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(pct);

      if (pct < 100) {
        // Organic speed variance
        const delay = pct > 40 && pct < 75 ? 15 : 25 + Math.random() * 30;
        timer = setTimeout(updateProgress, delay);
      } else {
        // At 100% progress, trigger the next cinematic phases
        setAnimationPhase('shine');
        setTimeout(() => {
          setAnimationPhase('complete');
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for exit animations
        }, 1200); // Shimmer duration
      }
    };

    timer = setTimeout(updateProgress, 50);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        id="aureon-immersive-loader"
      >
        {/* Cinematic Ambient Background Particles */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[120px] animate-pulse duration-[6000ms]" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-silver/10 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />
          
          {/* Moving Micro-Particles */}
          <svg className="w-full h-full">
            <g>
              {[...Array(25)].map((_, i) => {
                const rx = Math.random() * 100;
                const ry = Math.random() * 100;
                const delay = Math.random() * 6;
                const duration = 8 + Math.random() * 12;
                return (
                  <circle
                    key={i}
                    cx={`${rx}%`}
                    cy={`${ry}%`}
                    r={Math.random() * 1.5 + 0.5}
                    fill={Math.random() > 0.5 ? '#D4AF37' : '#FFFFFF'}
                    opacity={0.3 + Math.random() * 0.4}
                    className="animate-pulse"
                    style={{
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`,
                    }}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Logo Container and Animations */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative p-10 flex items-center justify-center"
          >
            {/* The primary Aureon Logo */}
            <AureonLogo 
              size={110} 
              variant="full"
              glowing={true}
            />

            {/* Silver light sweep animation layer */}
            {animationPhase === 'shine' && (
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-30 mix-blend-overlay pointer-events-none"
              />
            )}
            
            {/* Ambient circular pulse halo around logo */}
            <motion.div
              animate={{ 
                scale: [1, 1.12, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute inset-0 border border-gold/15 rounded-full pointer-events-none"
              style={{ margin: '-20px' }}
            />
          </motion.div>

          {/* Cinematic Status Indicator */}
          <div className="flex flex-col items-center gap-2 mt-4 select-none">
            <span className="font-mono text-[10px] tracking-[0.3em] text-silver text-opacity-40 uppercase">
              {progress < 100 ? 'Architecting Experience' : 'System Initialized'}
            </span>

            {/* Precision Percentage Counter */}
            <div className="font-serif text-3xl font-light text-white flex items-baseline tracking-widest">
              <span className="w-16 text-right">
                {String(progress).padStart(3, '0')}
              </span>
              <span className="text-gold text-lg ml-1">%</span>
            </div>

            {/* Custom high-end loading bar track */}
            <div className="w-48 h-[1px] bg-white/10 mt-3 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gold/50 via-gold to-silver"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Decorative corner framing markings (Pentagram/Porsche editorial vibe) */}
        <div className="absolute top-10 left-10 hidden md:block">
          <span className="font-mono text-[9px] text-silver/20 tracking-[0.5em] uppercase">Aureon Studios</span>
        </div>
        <div className="absolute top-10 right-10 hidden md:block">
          <span className="font-mono text-[9px] text-silver/20 tracking-[0.5em] uppercase">Parth Mehrotra</span>
        </div>
        <div className="absolute bottom-10 left-10 hidden md:block">
          <span className="font-mono text-[9px] text-silver/20 tracking-[0.5em] uppercase">Mumbai, India</span>
        </div>
        <div className="absolute bottom-10 right-10 hidden md:block">
          <span className="font-mono text-[9px] text-silver/20 tracking-[0.5em] uppercase">Est. 2026</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
