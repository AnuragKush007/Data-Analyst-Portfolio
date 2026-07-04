import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Dual Row Projects Marquee */}
      <MarqueeSection />

      {/* About Me Section (Character Scroll Reveal) */}
      <AboutSection />

      {/* Skills Section (White top-rounded rows) */}
      <SkillsSection />

      {/* Projects Section (Sticky cards stacking) */}
      <ProjectsSection />

      {/* Experience and Education timelines */}
      <ExperienceSection />

      {/* Certifications grid list */}
      <CertificationsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default App;
