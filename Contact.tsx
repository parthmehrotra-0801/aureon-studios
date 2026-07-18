import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  subLabel: string;
}

const StatCounter: React.FC<StatItemProps> = ({ value, suffix, label, subLabel }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    if (start === end) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Luxurious easeOutExpo easing function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div 
      ref={ref}
      className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.05] last:border-0"
    >
      <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 block mb-6">
        {subLabel}
      </span>
      
      <div className="flex items-baseline gap-1 select-none">
        <span className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
          {count}
        </span>
        <span className="font-serif text-3xl md:text-4xl italic text-white/50 font-light">
          {suffix}
        </span>
      </div>

      <h3 className="font-display text-xs tracking-widest text-[#B8B8B8] font-bold uppercase mt-4">
        {label}
      </h3>
    </div>
  );
};

export const Stats: React.FC = () => {
  const statsList = [
    {
      value: 50,
      suffix: "+",
      label: "PROJECTS DELIVERED",
      subLabel: "[ METRIC // 01 ]"
    },
    {
      value: 98,
      suffix: "%",
      label: "CLIENT SATISFACTION",
      subLabel: "[ METRIC // 02 ]"
    },
    {
      value: 12,
      suffix: "+",
      label: "INDUSTRIES MASTERED",
      subLabel: "[ METRIC // 03 ]"
    },
    {
      value: 5,
      suffix: "M+",
      label: "AUDIENCE ENGAGEMENT",
      subLabel: "[ METRIC // 04 ]"
    }
  ];

  return (
    <section 
      id="stats" 
      className="relative bg-[#050505] border-b border-white/[0.04]"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.015]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {statsList.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              subLabel={stat.subLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
