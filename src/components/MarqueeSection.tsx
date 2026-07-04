import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import project screenshots and mockups
import sqlMockup from '../assets/projects/sql_cab_booking_mockup.png';
import dmartP1 from '../assets/projects/dmart_dashboard_page1.png';
import dmartP2 from '../assets/projects/dmart_dashboard_page2.png';
import dmartP3 from '../assets/projects/dmart_dashboard_page3.png';
import coffeeDashboard from '../assets/projects/coffee_shop_dashboard.png';
import pythonMockup from '../assets/projects/python_automobile_mockup.png';

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the marquee section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress to horizontal translation (GPU accelerated, no React state triggers)
  const x1 = useTransform(scrollYProgress, [0, 1], [-250, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [150, -250]);

  // Sourced from approved projects
  const row1Images = [sqlMockup, dmartP1, coffeeDashboard, sqlMockup, dmartP1, coffeeDashboard];
  const row2Images = [dmartP2, pythonMockup, dmartP3, dmartP2, pythonMockup, dmartP3];

  return (
    <section 
      ref={containerRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6 select-none"
      aria-label="Project Previews Marquee"
    >
      {/* Row 1: Moves Right */}
      <div className="flex w-full overflow-hidden">
        <motion.div 
          style={{ x: x1 }} 
          className="flex gap-4 whitespace-nowrap will-change-transform"
        >
          {row1Images.map((src, idx) => (
            <div 
              key={`r1-${idx}`} 
              className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-[#D7E2EA]/10 shadow-lg"
            >
              <img 
                src={src} 
                alt="Analytical Project Visualizer"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moves Left */}
      <div className="flex w-full overflow-hidden">
        <motion.div 
          style={{ x: x2 }} 
          className="flex gap-4 whitespace-nowrap will-change-transform"
        >
          {row2Images.map((src, idx) => (
            <div 
              key={`r2-${idx}`} 
              className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-[#D7E2EA]/10 shadow-lg"
            >
              <img 
                src={src} 
                alt="Analytical Project Visualizer"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
