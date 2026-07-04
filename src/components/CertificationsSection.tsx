import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, ExternalLink } from 'lucide-react';

// Import certificate images
import sqlMasteryImg from '../assets/certificates/Sql Mastery.jpg';
import pbiEssentialsImg from '../assets/certificates/Powerbi Essentials.jpg';
import advancedExcelImg from '../assets/certificates/Advanced Excel.jpg';
import tableauEssentialsImg from '../assets/certificates/Tableau Essentials.jpg';
import pythonIBMImg from '../assets/certificates/Python for Data Science, AI & Development.jpg';
import pythonVedantImg from '../assets/certificates/Python for Data Science.jpg';

interface CertificationData {
  title: string;
  issuer: string;
  date: string;
  imgSrc: string;
  credentialId?: string;
}

export const CertificationsSection: React.FC = () => {
  const certificationsList: CertificationData[] = [
    {
      title: 'SQL Mastery',
      issuer: 'IT Vedant',
      date: 'Feb 2026',
      imgSrc: sqlMasteryImg,
    },
    {
      title: 'Power BI Essentials',
      issuer: 'IT Vedant',
      date: 'May 2026',
      imgSrc: pbiEssentialsImg,
    },
    {
      title: 'Advanced Excel',
      issuer: 'IT Vedant',
      date: 'Jun 2026',
      imgSrc: advancedExcelImg,
    },
    {
      title: 'Tableau Essentials',
      issuer: 'IT Vedant',
      date: 'Mar 2026',
      imgSrc: tableauEssentialsImg,
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM via Coursera',
      date: 'May 2022',
      imgSrc: pythonIBMImg,
    },
    {
      title: 'Python for Data Science',
      issuer: 'IT Vedant',
      date: 'Dec 2025',
      imgSrc: pythonVedantImg,
    },
  ];

  return (
    <section 
      id="certifications"
      className="bg-[#0C0C0C] px-6 sm:px-12 py-24 sm:py-28 md:py-36 relative z-30"
      aria-label="Professional Certifications"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center select-none">
          <h2 className="hero-heading font-black tracking-tight leading-none text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[100px] uppercase">
            Certifications
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-lg"
            >
              {/* Image Preview Area */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#1a1a1a] border-b border-[#D7E2EA]/5">
                <img 
                  src={cert.imgSrc} 
                  alt={`${cert.title} Certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-[#0C0C0C]/85 backdrop-blur-sm border border-[#D7E2EA]/10 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] sm:text-xs text-[#D7E2EA] font-semibold uppercase tracking-wider select-none">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                  Verified
                </div>
              </div>

              {/* Text & Meta details Area */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4 select-none">
                <div>
                  <h3 className="text-[#D7E2EA] font-bold text-base sm:text-lg uppercase leading-tight tracking-tight group-hover:text-white transition-colors duration-200 line-clamp-2 mb-2">
                    {cert.title}
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-3">
                    {cert.issuer}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#D7E2EA]/5 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/65 font-light">
                    <Calendar className="h-3.5 w-3.5" />
                    {cert.date}
                  </div>
                  
                  {/* Action Link to inspect */}
                  <a
                    href={cert.imgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] sm:text-xs text-[#D7E2EA] font-bold uppercase tracking-widest hover:underline hover:opacity-85 transition-opacity"
                  >
                    View File
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
