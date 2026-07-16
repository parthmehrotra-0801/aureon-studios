import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag' | 'explore'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Disable custom cursor on touch devices for performance

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or parent is interactive
      const isInteractive = target.closest('button, a, [role="button"], input, select, textarea');
      const viewElement = target.closest('[data-cursor="view"]');
      const dragElement = target.closest('[data-cursor="drag"]');
      const exploreElement = target.closest('[data-cursor="explore"]');

      if (viewElement) {
        setCursorType('view');
        setIsHovered(true);
      } else if (dragElement) {
        setCursorType('drag');
        setIsHovered(true);
      } else if (exploreElement) {
        setCursorType('explore');
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorType('pointer');
        setIsHovered(true);
      } else {
        setCursorType('default');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerping for trail cursor
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = mousePosition.current.x - prev.x;
        const dy = mousePosition.current.y - prev.y;
        // Adjust the division factor for speed/smoothness (e.g., 6)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  // Render cursor style based on current hovered type
  const getCursorContent = () => {
    switch (cursorType) {
      case 'view':
        return <span className="font-serif text-[10px] text-black font-semibold uppercase tracking-widest scale-90">View</span>;
      case 'drag':
        return <span className="font-serif text-[10px] text-black font-semibold uppercase tracking-widest scale-90">Drag</span>;
      case 'explore':
        return <span className="font-serif text-[9px] text-black font-bold uppercase tracking-widest scale-90">Go</span>;
      default:
        return null;
    }
  };

  const getTrailClass = () => {
    if (isClicking) return 'scale-50 border-gold bg-gold/20';
    
    switch (cursorType) {
      case 'view':
      case 'drag':
      case 'explore':
        return 'scale-[3.5] bg-gold border-gold text-black';
      case 'pointer':
        return 'scale-[2] border-gold bg-gold/10';
      default:
        return 'scale-100 border-white/50';
    }
  };

  return (
    <>
      {/* Precision Core Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Floating Trail Aura */}
      <div
        ref={trailRef}
        className={`fixed w-8 h-8 rounded-full border border-solid pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${getTrailClass()}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      >
        {getCursorContent()}
      </div>
    </>
  );
};
