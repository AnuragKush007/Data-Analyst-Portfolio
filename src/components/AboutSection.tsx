import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './shared/AnimatedText';

export const AboutSection: React.FC = () => {
  const bioText = "I am a detail-oriented Data Analyst Intern and Computer Science graduate with hands-on experience in data cleaning, exploratory data analysis, and dashboard development. Skilled in Python, Pandas, SQL, Advanced Excel, Power BI, and Tableau, I specialize in analyzing large-scale time-series records to extract actionable business insights and design interactive visualization dashboards.";

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center items-center px-6 sm:px-10 py-24 select-none overflow-hidden"
    >
      {/* Decorative Corners - Data Themed Icons */}
      
      {/* Top-Left: Database Cylinder (SQL) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-12 left-8 md:top-24 md:left-24 hidden sm:block pointer-events-none"
      >
        <svg className="w-16 h-16 md:w-24 md:h-24 text-[#D7E2EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </motion.div>

      {/* Bottom-Left: Analytics Dashboard / Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-12 left-8 md:bottom-24 md:left-24 hidden sm:block pointer-events-none"
      >
        <svg className="w-16 h-16 md:w-24 md:h-24 text-[#D7E2EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      </motion.div>

      {/* Top-Right: Code / Python brackets */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-12 right-8 md:top-24 md:right-24 hidden sm:block pointer-events-none"
      >
        <svg className="w-16 h-16 md:w-24 md:h-24 text-[#D7E2EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </motion.div>

      {/* Bottom-Right: Excel Spreadsheet Grid */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-12 right-8 md:bottom-24 md:right-24 hidden sm:block pointer-events-none"
      >
        <svg className="w-16 h-16 md:w-24 md:h-24 text-[#D7E2EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.div>

      {/* Section Container */}
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center relative z-10 w-full">
        {/* Editorial Heading */}
        <div className="mb-10 sm:mb-14 overflow-hidden">
          <h2 className="hero-heading font-black tracking-tight leading-none text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[100px] uppercase">
            About Me
          </h2>
        </div>

        {/* Character-by-character scroll reveal text */}
        <AnimatedText 
          text={bioText} 
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[340px] sm:max-w-[550px] md:max-w-[750px] text-base sm:text-lg md:text-xl lg:text-[1.35rem]"
        />
      </div>
    </section>
  );
};

export default AboutSection;
