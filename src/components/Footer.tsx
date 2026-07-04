import React from 'react';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-12 py-10 relative z-30 select-none"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="text-center sm:text-left">
          <div className="text-[#D7E2EA] font-bold text-sm sm:text-base uppercase tracking-widest">
            Anurag Kushwaha
          </div>
          <div className="text-[#D7E2EA]/50 text-xs uppercase tracking-wider font-light mt-1">
            Data Analyst Portfolio
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-[#D7E2EA]/45 text-xs text-center font-light">
          &copy; {currentYear} Anurag Kushwaha. All rights reserved.
        </div>

        {/* Scroll back to top */}
        <a 
          href="#home" 
          className="flex items-center gap-1.5 text-xs text-[#D7E2EA] font-bold uppercase tracking-widest hover:text-[#D7E2EA]/75 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded p-1"
          aria-label="Scroll back to top of the page"
        >
          Back to Top
          <ChevronUp className="h-4 w-4" />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
