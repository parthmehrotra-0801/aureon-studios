import React from 'react';
import { motion } from 'motion/react';

interface AureonLogoProps {
  className?: string;
  size?: number; // Monogram size or base size indicator
  showText?: boolean; // Keep for backwards compatibility
  textClassName?: string;
  glowing?: boolean;
  variant?: 'monogram' | 'full' | 'compact';
}

export const AureonLogo: React.FC<AureonLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
  textClassName = '',
  glowing = true,
  variant,
}) => {
  // Determine variant based on parameters
  const activeVariant = variant || (showText ? 'compact' : 'monogram');

  // Silver Metallic Gradient to match the uploaded logo's premium metal tones
  const SilverGradient = () => (
    <defs>
      <linearGradient id="silverMetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="20%" stopColor="#E6E6EB" />
        <stop offset="45%" stopColor="#A2A2A6" />
        <stop offset="55%" stopColor="#7E7E82" />
        <stop offset="80%" stopColor="#D1D1D6" />
        <stop offset="100%" stopColor="#8E8E93" />
      </linearGradient>
      <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );

  // Render 1: Full Stacked Vertical Logo (Exact match of the uploaded image)
  if (activeVariant === 'full') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        whileHover={{ scale: 1.015 }}
        className={`metallic-sweep-container group relative flex flex-col items-center justify-center text-center select-none cursor-pointer p-4 transition-all duration-500 ${className}`}
        style={{ width: '100%', maxWidth: `${size * 2.8}px` }}
      >
        {/* Subtle background glow on hover */}
        {glowing && (
          <div className="absolute inset-0 bg-white/[0.02] rounded-3xl blur-2xl group-hover:bg-white/[0.04] transition-all duration-700 pointer-events-none" />
        )}

        <svg
          viewBox="0 0 320 320"
          className="w-full h-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.22)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SilverGradient />

          {/* AS Monogram - Styled exactly like the serif letters in the image */}
          <g>
            {/* Elegant letter 'A' with custom spacing and italics */}
            <text
              x="116"
              y="135"
              textAnchor="middle"
              style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                fontSize: '138px',
                fontStyle: 'italic',
                fontWeight: 300,
                fill: 'url(#silverMetalGradient)',
                letterSpacing: '-0.05em',
              }}
            >
              A
            </text>

            {/* Elegant letter 'S' overlapping */}
            <text
              x="178"
              y="135"
              textAnchor="middle"
              style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                fontSize: '138px',
                fontStyle: 'italic',
                fontWeight: 300,
                fill: 'url(#silverMetalGradient)',
                letterSpacing: '-0.05em',
              }}
            >
              S
            </text>
          </g>

          {/* Aureon Studios cursive handwriting script below monogram */}
          <text
            x="160"
            y="208"
            textAnchor="middle"
            style={{
              fontFamily: '"Pinyon Script", "Great Vibes", cursive',
              fontSize: '52px',
              fill: '#FFFFFF',
            }}
          >
            Aureon Studios
          </text>

          {/* BRANDING • MARKETING • (Centered line 1) */}
          <text
            x="160"
            y="248"
            textAnchor="middle"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              fill: '#FFFFFF',
              letterSpacing: '0.45em',
              opacity: 0.9,
            }}
          >
            BRANDING  •  MARKETING  •
          </text>

          {/* MEDIA (Centered line 2) */}
          <text
            x="160"
            y="278"
            textAnchor="middle"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              fill: '#FFFFFF',
              letterSpacing: '0.45em',
              opacity: 0.9,
            }}
          >
            MEDIA
          </text>
        </svg>

        {/* Premium metallic sweep line running across the logo on render */}
        <div className="metallic-sweep-line" />
      </motion.div>
    );
  }

  // Render 2: Compact Row-Based Logo (For header, Navbar, or sidebars)
  if (activeVariant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
        whileHover={{ scale: 1.02 }}
        className={`metallic-sweep-container group flex items-center gap-3 select-none cursor-pointer transition-all duration-300 ${className}`}
      >
        {/* Monogram Box */}
        <div 
          className="relative flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          {glowing && (
            <div 
              className="absolute inset-0 bg-white/5 rounded-full blur-lg group-hover:bg-white/10 transition-all duration-500"
              style={{ width: size * 1.5, height: size * 1.5, transform: 'translate(-16%, -16%)' }}
            />
          )}
          
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SilverGradient />
            <text
              x="62"
              y="112"
              textAnchor="middle"
              style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                fontSize: '115px',
                fontStyle: 'italic',
                fontWeight: 300,
                fill: 'url(#silverMetalGradient)',
              }}
            >
              A
            </text>
            <text
              x="112"
              y="112"
              textAnchor="middle"
              style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                fontSize: '115px',
                fontStyle: 'italic',
                fontWeight: 300,
                fill: 'url(#silverMetalGradient)',
              }}
            >
              S
            </text>
          </svg>
        </div>

        {/* Compact Typography next to Monogram */}
        <div className="flex flex-col text-left">
          <span 
            className={`font-serif text-base md:text-lg tracking-[0.25em] text-white font-medium leading-none ${textClassName}`}
            style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }}
          >
            AUREON
          </span>
          <span 
            className="font-script text-xs tracking-[0.1em] text-silver font-light leading-none mt-1"
            style={{ fontFamily: '"Pinyon Script", "Great Vibes", cursive' }}
          >
            Studios
          </span>
        </div>

        {/* Subtle sweep line on horizontal hover */}
        <div className="metallic-sweep-line" />
      </motion.div>
    );
  }

  // Render 3: Monogram Only Variant (Favicon, scroll to top, etc)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ scale: 1.05 }}
      className={`metallic-sweep-container group relative flex items-center justify-center cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      {glowing && (
        <div 
          className="absolute inset-0 bg-white/[0.03] rounded-full blur-md group-hover:bg-white/[0.08] transition-all duration-500"
          style={{ width: size * 1.5, height: size * 1.5 }}
        />
      )}
      
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SilverGradient />
        <text
          x="62"
          y="112"
          textAnchor="middle"
          style={{
            fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
            fontSize: '115px',
            fontStyle: 'italic',
            fontWeight: 300,
            fill: 'url(#silverMetalGradient)',
          }}
        >
          A
        </text>
        <text
          x="112"
          y="112"
          textAnchor="middle"
          style={{
            fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
            fontSize: '115px',
            fontStyle: 'italic',
            fontWeight: 300,
            fill: 'url(#silverMetalGradient)',
          }}
        >
          S
        </text>
      </svg>
      
      {/* Subtle sweep line on monogram */}
      <div className="metallic-sweep-line" />
    </motion.div>
  );
};
