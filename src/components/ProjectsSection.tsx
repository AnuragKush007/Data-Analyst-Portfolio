import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import images
import sqlMockup from '../assets/projects/sql_cab_booking_mockup.png';
import dmartP1 from '../assets/projects/dmart_dashboard_page1.png';
import dmartP2 from '../assets/projects/dmart_dashboard_page2.png';
import dmartP3 from '../assets/projects/dmart_dashboard_page3.png';
import coffeeDashboard from '../assets/projects/coffee_shop_dashboard.png';
import pythonMockup from '../assets/projects/python_automobile_mockup.png';

interface ProjectData {
  id: string;
  num: string;
  category: string;
  title: string;
  desc: string;
  techs: string[];
  githubUrl: string;
  images: string[];
}

const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track this specific card's position relative to the top of the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Dynamic scale-down and opacity-down as the card moves up the sticky stack
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <div 
      ref={cardRef}
      // tall container to allow scrolling space before it hits the sticky state
      className="sticky top-24 md:top-32 w-full mb-16 md:mb-24 z-10"
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px] lg:min-h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] justify-between"
      >
        {/* Left Column: Text & Meta Details (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between items-start gap-6 select-none">
          <div className="w-full">
            {/* Number & Category */}
            <div className="flex justify-between items-center w-full mb-6 border-b border-[#D7E2EA]/10 pb-4">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs font-semibold">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-bold text-xl md:text-2xl">
                {project.num}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl md:text-[2.2rem] leading-tight uppercase mb-4 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              {project.desc}
            </p>
          </div>

          <div className="w-full">
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-[#D7E2EA]/10 text-[#D7E2EA] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#D7E2EA]/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA action button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#D7E2EA] hover:bg-[#D7E2EA]/15 text-[#D7E2EA] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-colors focus-visible:ring-2 select-none"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Visual Layout Grid (60%) */}
        <div className="w-full lg:w-[57%] flex items-center justify-center rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#161616] border border-[#D7E2EA]/10 relative aspect-[4/3] lg:aspect-[16/11]">
          {project.images.length === 1 ? (
            /* Single Image Showcase Layout */
            <img 
              src={project.images[0]} 
              alt={`${project.title} dashboard visualization`}
              loading="lazy"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          ) : (
            /* Multi-Image Dashboard Layout (Power BI style grid) */
            <div className="w-full h-full p-4 flex gap-3 bg-[#111]">
              {/* Main Visual (Left Column) */}
              <div className="w-[65%] h-full rounded-[15px] overflow-hidden border border-[#D7E2EA]/5">
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} Page 1`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Secondary Visuals Stack (Right Column) */}
              <div className="w-[35%] h-full flex flex-col gap-3">
                <div className="h-[49%] rounded-[10px] overflow-hidden border border-[#D7E2EA]/5">
                  <img 
                    src={project.images[1]} 
                    alt={`${project.title} Page 2`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-[49%] rounded-[10px] overflow-hidden border border-[#D7E2EA]/5">
                  <img 
                    src={project.images[2]} 
                    alt={`${project.title} Page 3`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const whitelistProjects: ProjectData[] = [
    {
      id: 'sql-cabs',
      num: '01',
      category: 'SQL / Database Analysis',
      title: 'Cab Booking Database Analysis',
      desc: 'Designed normalized relational schemas and optimized analytical queries (CTEs, aggregate filters, joins) to examine passenger booking histories, driver cancellation triggers, rating trends, and peak booking schedules.',
      techs: ['SQL', 'MySQL', 'Database Design', 'Schema Normalization', 'Stored Procedures', 'Indexing'],
      githubUrl: 'https://github.com/AnuragKush007/Project-SQL_Cab_Booking_System',
      images: [sqlMockup],
    },
    {
      id: 'pbi-dmart',
      num: '02',
      category: 'Power BI / Business Intelligence',
      title: 'D-Mart Sales & Performance Analysis',
      desc: 'Developed interactive multi-page dashboards mapping business KPIs, profit margins, sales segments, and inventory trends. Built complex DAX queries to compute cumulative growth metrics and target variances.',
      techs: ['Power BI', 'Power Query', 'DAX Measures', 'Data Modeling', 'Interactive Dashboards', 'KPI Tracking'],
      githubUrl: 'https://github.com/AnuragKush007/Project-POWERBI_D-mart_Sales_Analysis',
      images: [dmartP1, dmartP2, dmartP3],
    },
    {
      id: 'xlsx-coffee',
      num: '03',
      category: 'Excel / Business Analysis',
      title: 'Coffee Shop Revenue Dashboard',
      desc: 'Analyzed transaction logs to track sales performance, hourly peak volumes, and product margins. Integrated PivotTables, lookup functions, conditional rules, and charts into a dynamic workbook.',
      techs: ['Microsoft Excel', 'PivotTables', 'Lookup Functions', 'KPI Dashboards', 'Conditional Formatting'],
      githubUrl: 'https://github.com/AnuragKush007/Project-EXCEL_Coffee_Shop_Revenue_Performance_Analysis',
      images: [coffeeDashboard],
    },
    {
      id: 'py-auto',
      num: '04',
      category: 'Python / Exploratory Data Analysis',
      title: 'Automobile Price Preprocessing & EDA',
      desc: 'Engineered Python preprocessing pipelines to impute missing attributes, correct formats, and map categories. Designed correlation matrix heatmaps and regression models to explore variables impacting market values.',
      techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Exploratory Data Analysis'],
      githubUrl: 'https://github.com/AnuragKush007/Project-PYTHON_Automobile_Data_Analysis',
      images: [pythonMockup],
    },
  ];

  return (
    <section 
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-12 py-24 sm:py-28 md:py-36 relative z-30 -mt-10 sm:-mt-12 md:-mt-14"
      aria-label="Analytical Projects Showcase"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="hero-heading font-black tracking-tight leading-none text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[100px] uppercase">
            Featured Projects
          </h2>
        </div>

        {/* Sticky Cards Stacking Wrapper */}
        <div className="flex flex-col relative w-full">
          {whitelistProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
