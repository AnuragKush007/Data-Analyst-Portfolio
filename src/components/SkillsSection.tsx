import React from 'react';
import { motion } from 'framer-motion';

interface SkillRowProps {
  num: string;
  title: string;
  desc: string;
  skills: string[];
  index: number;
}

const SkillRow: React.FC<SkillRowProps> = ({ num, title, desc, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-t border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:bg-[#F9F9F9] px-4 rounded-2xl transition-colors duration-300"
    >
      {/* Left: Oversized Number */}
      <div className="font-black text-[#0C0C0C] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] leading-none select-none">
        {num}
      </div>

      {/* Middle: Title & Description */}
      <div className="flex-1 md:pl-10 lg:pl-16">
        <h3 className="font-black text-[#0C0C0C] uppercase tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] leading-none mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="font-light text-[#0C0C0C]/75 leading-relaxed text-sm sm:text-base md:text-lg lg:text-[1.25rem] max-w-2xl">
          {desc}
        </p>
      </div>

      {/* Right: Technical Tags */}
      <div className="flex flex-wrap gap-2 max-w-xs md:max-w-sm justify-start md:justify-end">
        {skills.map((skill, idx) => (
          <span 
            key={idx}
            className="border border-[#0C0C0C]/25 text-[#0C0C0C]/85 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-transparent hover:bg-[#0C0C0C] hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      num: '01',
      title: 'SQL & Databases',
      desc: 'Expertise in writing high-performance database queries. Competent in database design, schema normalization, table relations, indexes, and stored procedures to ensure transaction security and data integrity.',
      skills: ['SQL', 'MySQL', 'Joins', 'CTEs', 'Subqueries', 'Window Functions', 'Stored Procedures', 'Indexing'],
    },
    {
      num: '02',
      title: 'Power BI & BI',
      desc: 'Developing interactive Business Intelligence reports. Experienced in loading and modeling complex datasets, writing analytical DAX measures, shaping tables in Power Query, and building automated dashboards.',
      skills: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Interactive Dashboards', 'KPI Tracking', 'Tableau'],
    },
    {
      num: '03',
      title: 'Excel & Business Analysis',
      desc: 'Sleek spreadsheet analytics and reporting. Slicing raw metrics using advanced formulas, PivotTables, conditional rules, and creating visual reporting templates for quick management decisions.',
      skills: ['Microsoft Excel', 'PivotTables', 'PivotCharts', 'Lookup Functions', 'Conditional Formatting', 'KPI Reporting'],
    },
    {
      num: '04',
      title: 'Python Data Analysis',
      desc: 'Data wrangling and computation using scientific libraries. Processing and reshaping tabular structures, executing missing value imputations, categorical mappings, and running exploratory pipelines.',
      skills: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Data Cleaning', 'Data Transformation'],
    },
    {
      num: '05',
      title: 'EDA & Visual Insight',
      desc: 'Interpreting multivariate dataset trends. Conducting correlation tests, pricing trends, seasonality analyses, and designing visual representations to present findings to non-technical stakeholders.',
      skills: ['Exploratory Data Analysis', 'Matplotlib', 'Seaborn', 'Trend Analysis', 'Statistical Charts', 'Insights Generation'],
    },
  ];

  return (
    <section 
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-12 py-20 sm:py-24 md:py-32 relative z-20"
      aria-label="Skills & Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        {/* White Section Heading */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-[#0C0C0C] font-black tracking-tight leading-none text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[100px] uppercase">
            My Skills
          </h2>
        </div>

        {/* Numbered Rows List */}
        <div className="flex flex-col border-b border-[#0C0C0C]/15">
          {skillCategories.map((skill, idx) => (
            <SkillRow
              key={skill.num}
              num={skill.num}
              title={skill.title}
              desc={skill.desc}
              skills={skill.skills}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
