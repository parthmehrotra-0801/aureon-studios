@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&family=Syne:wght@700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Syne", sans-serif;
  --font-serif: "Cormorant Garamond", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer base {
  html {
    scroll-behavior: smooth;
    background-color: #050505;
    color: #ffffff;
    cursor: none; /* Hide default cursor to enable custom luxurious magnetic cursor */
  }

  body {
    overflow-x: hidden;
    background-color: #050505;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom high-end scrollbar suitable for a $100k agency site */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #050505;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
    transition: background 0.3s ease;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* Keyframes for SVG drawing logo animation */
@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Noise overlay for cinematic analog feel */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  opacity: 0.035;
  z-index: 9999;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Premium Grid Mesh overlay */
.grid-mesh {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* Radial elegant shine layer */
.luxury-gradient {
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 75%);
}

/* Pure black obsidian glass panels */
.glass-panel {
  background: rgba(13, 13, 13, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-panel-hover {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-panel-hover:hover {
  background: rgba(20, 20, 20, 0.85);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
  transform: translateY(-4px);
}

/* Disable selection for cinematic headers */
.no-select {
  user-select: none;
  -webkit-user-select: none;
}

/* Custom Hide Cursor class for responsive devices if cursor is missing */
@media (max-width: 1024px) {
  html {
    cursor: auto !important;
  }
}
