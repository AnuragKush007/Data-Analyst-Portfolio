import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText } from 'lucide-react';
import Magnet from './shared/Magnet';

export const ContactSection: React.FC = () => {
  return (
    <section 
      id="contact"
      className="bg-[#0C0C0C] px-6 sm:px-12 py-24 sm:py-28 md:py-36 relative z-30"
      aria-label="Contact Information"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
        
        {/* Section Heading */}
        <div className="mb-8 overflow-hidden select-none">
          <h2 className="hero-heading font-black tracking-tight leading-none text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[100px] uppercase">
            Let's Connect
          </h2>
        </div>

        {/* Supporting Pitch */}
        <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-sm sm:text-base md:text-lg lg:text-[1.2rem] max-w-xl mb-12 select-none">
          I am actively seeking professional opportunities in **Data Analyst** roles. If you have an opening, want to discuss a project, or just want to connect, feel free to reach out.
        </p>

        {/* Contact Details Cards / Stack */}
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center items-stretch mb-16 max-w-3xl">
          {/* Email Card */}
          <motion.a 
            href="mailto:anurag07012002@gmail.com"
            whileHover={{ y: -5, borderColor: 'rgba(215,226,234,0.4)' }}
            className="flex-1 min-w-[200px] bg-[#121212] border border-[#D7E2EA]/10 p-6 rounded-3xl flex flex-col items-center text-center gap-3 transition-colors duration-300"
          >
            <div className="bg-[#D7E2EA]/10 p-3 rounded-2xl text-[#D7E2EA]">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] font-semibold">Email</span>
            <span className="text-[#D7E2EA] font-bold text-sm sm:text-base break-all select-all">anurag07012002@gmail.com</span>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href="tel:+917007022601"
            whileHover={{ y: -5, borderColor: 'rgba(215,226,234,0.4)' }}
            className="flex-1 min-w-[200px] bg-[#121212] border border-[#D7E2EA]/10 p-6 rounded-3xl flex flex-col items-center text-center gap-3 transition-colors duration-300"
          >
            <div className="bg-[#D7E2EA]/10 p-3 rounded-2xl text-[#D7E2EA]">
              <Phone className="h-6 w-6" />
            </div>
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] font-semibold">Phone</span>
            <span className="text-[#D7E2EA] font-bold text-sm sm:text-base select-all">+91 7007022601</span>
          </motion.a>
        </div>

        {/* Action Buttons: LinkedIn, GitHub, Resume */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
          {/* LinkedIn Button */}
          <Magnet strength={3} range={100}>
            <a 
              href="https://linkedin.com/in/anurag-kushwaha-analytics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 text-[#D7E2EA] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 select-none"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </Magnet>

          {/* GitHub Button */}
          <Magnet strength={3} range={100}>
            <a 
              href="https://github.com/AnuragKush007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 text-[#D7E2EA] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 select-none"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </Magnet>

          {/* Resume Download button */}
          <Magnet strength={3} range={100}>
            <a 
              href="/Anurag_Resume_Final.pdf"
              download="Anurag_Kushwaha_Resume.pdf"
              className="flex items-center gap-2.5 premium-cta-gradient text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 hover:shadow-[0_10px_20px_rgba(182,0,168,0.15)] transition-all duration-300 select-none"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </Magnet>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
