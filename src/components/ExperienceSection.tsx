import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  location: string;
  bullets: string[];
  type: 'work' | 'edu';
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, location, bullets, type, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative pl-8 sm:pl-12 md:pl-16 pb-12 last:pb-0 border-l border-[#D7E2EA]/10 select-none group"
    >
      {/* Bullet Point Circle Icon Indicator */}
      <div className="absolute -left-[17px] top-1 bg-[#0C0C0C] border-2 border-[#D7E2EA] w-8 h-8 rounded-full flex items-center justify-center text-[#D7E2EA] group-hover:scale-110 group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
        {type === 'work' ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
      </div>

      <div className="bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 p-6 rounded-3xl transition-colors duration-300 shadow-sm">
        {/* Date & Meta Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between mb-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 font-light">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl md:text-2xl mb-1 uppercase tracking-tight">
          {title}
        </h3>

        {/* Subtitle / Company / University */}
        <div className="text-base text-[#D7E2EA]/75 font-semibold mb-4 uppercase tracking-wide">
          {subtitle}
        </div>

        {/* bullet points */}
        <ul className="list-none pl-0 flex flex-col gap-2.5">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
              <span className="text-[#D7E2EA] font-black mt-1 select-none">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      date: 'May 2026 – Present',
      title: 'Data Analyst Intern',
      subtitle: 'Unified Mentor Pvt. Ltd.',
      location: 'Gurugram, Haryana',
      bullets: [
        'Analyzed 261K+ ferry ticket sales and redemption records spanning 2015 – 2025 to evaluate passenger demand patterns and movement trends for Toronto Island Park ferry operations.',
        'Performed data cleaning, datetime transformation, feature engineering, and exploratory data analysis using Python and Pandas to examine hourly, daily, weekly, and seasonal demand patterns.',
        'Analyzed ticket sales, redemptions, net passenger movement, peak demand windows, and rolling averages to support data-driven ferry scheduling and operational planning.',
        'Developed an interactive Streamlit analytics dashboard with KPI cards, time-series visualizations, date and time filters, and peak versus off-peak demand comparisons.'
      ],
      type: 'work' as const,
    },
    {
      date: 'April 2024 – June 2024',
      title: 'Front-End Developer Intern',
      subtitle: 'Celebal Technologies',
      location: 'Noida, Uttar Pradesh',
      bullets: [
        'Developed 10+ responsive and mobile-friendly web pages using HTML5, CSS3, and JavaScript while contributing to a live web project and following modern UI/UX standards.',
        'Optimized CSS structure and refactored JavaScript code, improving page load performance by 25%.',
        'Collaborated in an Agile development environment, participated in sprint reviews, and used Git for version control.'
      ],
      type: 'work' as const,
    },
  ];

  const education = [
    {
      date: 'Dec 2025 – Dec 2026',
      title: 'Masters in Data Science and Analytics with AI',
      subtitle: 'IT Vedant',
      location: 'Lucknow, Uttar Pradesh',
      bullets: [
        'Advanced coursework in SQL, Python, Excel, Power BI, Tableau, Machine Learning, and Statistics.',
        'Practical projects focused on data extraction, ETL pipelines, and business dashboard visualization.'
      ],
      type: 'edu' as const,
    },
    {
      date: 'Nov 2021 – June 2025',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      subtitle: 'Noida Institute of Engineering and Technology',
      location: 'Greater Noida, Uttar Pradesh',
      bullets: [
        'Relevant coursework: Database Management Systems (DBMS), Data Structures and Algorithms, Operating Systems, Computer Networks, Software Engineering.'
      ],
      type: 'edu' as const,
    },
  ];

  return (
    <section 
      id="experience"
      className="bg-[#0C0C0C] px-6 sm:px-12 py-24 sm:py-28 md:py-36 relative z-30"
      aria-label="Experience and Education Timeline"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Experience Column */}
          <div>
            <div className="mb-12 overflow-hidden">
              <h2 className="hero-heading font-black tracking-tight leading-none text-3xl sm:text-4xl md:text-[3rem] uppercase">
                Work Experience
              </h2>
            </div>
            <div className="flex flex-col">
              {experiences.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  date={exp.date}
                  title={exp.title}
                  subtitle={exp.subtitle}
                  location={exp.location}
                  bullets={exp.bullets}
                  type={exp.type}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="mb-12 overflow-hidden">
              <h2 className="hero-heading font-black tracking-tight leading-none text-3xl sm:text-4xl md:text-[3rem] uppercase">
                Education
              </h2>
            </div>
            <div className="flex flex-col">
              {education.map((edu, idx) => (
                <TimelineItem
                  key={idx}
                  date={edu.date}
                  title={edu.title}
                  subtitle={edu.subtitle}
                  location={edu.location}
                  bullets={edu.bullets}
                  type={edu.type}
                  index={idx + 2} // offset index for stagger delay
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
