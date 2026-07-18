import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [hoverType, setHoverType] = useState<"none" | "link" | "project" | "text">("none");
  const [projectText, setProjectText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for positions to avoid constant re-renders
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const dotCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animation Loop for extreme buttery smoothness (lerp)
    let animationFrameId: number;
    const renderCursor = () => {
      // Ring lerp (slower, magnetic lag)
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * 0.12;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * 0.12;

      // Dot lerp (faster, almost instant)
      dotCoords.current.x += (mouseCoords.current.x - dotCoords.current.x) * 0.35;
      dotCoords.current.y += (mouseCoords.current.y - dotCoords.current.y) * 0.35;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotCoords.current.x}px, ${dotCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(renderCursor);
    };

    renderCursor();

    // Event delegation to capture hovers dynamically
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverLink = target.closest("a, button, [role='button'], .cursor-hover-link");
      const hoverProject = target.closest("[data-cursor-project]");
      const hoverText = target.closest(".cursor-hover-text");

      if (hoverProject) {
        setHoverType("project");
        setProjectText(hoverProject.getAttribute("data-cursor-project") || "VIEW");
      } else if (hoverLink) {
        setHoverType("link");
      } else if (hoverText) {
        setHoverType("text");
      } else {
        setHoverType("none");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Hidden on touch devices to avoid layout confusion */}
      <div className="hidden lg:block">
        {/* Central precise dot */}
        <div
          ref={dotRef}
          className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] mix-blend-difference bg-white transition-all duration-300 ${
            hoverType === "link" ? "scale-0" : ""
          } ${hoverType === "project" ? "scale-[0.5]" : ""}`}
        />

        {/* Magnetic outer ring */}
        <div
          ref={ringRef}
          className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-display font-bold text-[9px] tracking-widest text-black uppercase transition-all duration-300 ease-out ${
            hoverType === "none"
              ? "w-8 h-8 border border-white/20 bg-transparent mix-blend-normal"
              : hoverType === "link"
              ? "w-14 h-14 bg-white mix-blend-difference scale-110"
              : hoverType === "project"
              ? "w-20 h-20 bg-white/95 text-black border-transparent scale-100 filter drop-shadow-lg"
              : hoverType === "text"
              ? "w-16 h-16 border border-white/40 bg-white/5 mix-blend-difference scale-105"
              : ""
          }`}
        >
          {hoverType === "project" && (
            <span className="text-black text-center font-semibold scale-90 animate-fade-in">
              {projectText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
