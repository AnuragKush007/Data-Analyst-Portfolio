import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-[#D7E2EA] hover:text-[#D7E2EA]/70 transition-colors duration-200 uppercase font-medium tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded"
  >
    {label}
  </a>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 pt-6 md:pt-8"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a 
          href="#home"
          className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
        >
          ANURAG
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#D7E2EA] p-1 focus:outline-none focus:ring-2 focus:ring-[#D7E2EA] rounded"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full w-full bg-[#0C0C0C]/95 backdrop-blur-md py-6 px-8 border-b border-[#D7E2EA]/10 flex flex-col space-y-4 md:hidden"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
