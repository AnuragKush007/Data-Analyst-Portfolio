import React from 'react';
import { motion } from 'framer-motion';
import Magnet from './shared/Magnet';
import portrait from '../assets/anurag_portrait.png';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-between overflow-hidden pt-32 pb-16 px-6 md:px-12 select-none"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Central Visual (Portrait backdrop layer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 0.35, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#D7E2EA]/10 shadow-[0_0_80px_rgba(215,226,234,0.03)]"
        >
          {/* Subtle Data Analytics Overlay Lines */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10" />
          <img 
            src={portrait} 
            alt="Anurag Kushwaha Portrait" 
            className="w-full h-full object-cover grayscale opacity-90 contrast-110"
          />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-center text-center mt-8">
        
        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full"
        >
          <h1 className="hero-heading font-black tracking-tight leading-none text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[15.5vw] uppercase">
            Hi, I'm Anurag
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 md:mt-4 max-w-[280px] sm:max-w-[400px] md:max-w-[550px]"
        >
          <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm md:text-base lg:text-[1.1rem] leading-relaxed">
            Data Analyst focused on transforming raw data into meaningful insights using SQL, Power BI, Excel, and Python.
          </p>
        </motion.div>
      </div>

      {/* Footer Area: CTA & Actions */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-4 md:px-0">
        
        {/* Left Side: Secondary actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-4 order-2 sm:order-1"
        >
          <a
            href="#projects"
            className="border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 px-6 py-3 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors focus-visible:ring-2"
          >
            View Projects
          </a>
          <a
            href="/Anurag_Resume_Final.pdf"
            download="Anurag_Kushwaha_Resume.pdf"
            className="text-[#D7E2EA]/85 hover:text-[#D7E2EA] underline uppercase tracking-widest text-xs font-medium focus-visible:ring-2"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right Side: Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-1 sm:order-2"
        >
          <Magnet strength={3} range={150}>
            <a
              href="#contact"
              className="premium-cta-gradient text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs border border-white/20 shadow-[0_10px_20px_rgba(182,0,168,0.15)] hover:shadow-[0_15px_30px_rgba(182,0,168,0.3)] transition-all duration-300 block focus-visible:ring-2"
            >
              Contact Me
            </a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
