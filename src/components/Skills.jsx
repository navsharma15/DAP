import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, BarChart, PieChart, FileSpreadsheet } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      name: 'SQL', 
      icon: <Database className="w-8 h-8" />, 
      level: 'Expert', 
      desc: 'Complex queries, optimization',
      mobileColor: 'max-md:text-[#336791] max-md:bg-[#336791]/10',
      hoverColor: 'group-hover:text-[#336791] group-hover:bg-[#336791]/10'
    },
    { 
      name: 'Python', 
      icon: <Code className="w-8 h-8" />, 
      level: 'Advanced', 
      desc: 'Pandas, NumPy, Scikit-learn',
      mobileColor: 'max-md:text-[#FFD43B] max-md:bg-[#FFD43B]/10',
      hoverColor: 'group-hover:text-[#FFD43B] group-hover:bg-[#FFD43B]/10'
    },
    { 
      name: 'Power BI', 
      icon: <BarChart className="w-8 h-8" />, 
      level: 'Expert', 
      desc: 'DAX, Dashboards',
      mobileColor: 'max-md:text-[#F2C811] max-md:bg-[#F2C811]/10',
      hoverColor: 'group-hover:text-[#F2C811] group-hover:bg-[#F2C811]/10'
    },
    { 
      name: 'Tableau', 
      icon: <PieChart className="w-8 h-8" />, 
      level: 'Advanced', 
      desc: 'Data Visualization, Stories',
      mobileColor: 'max-md:text-[#E97627] max-md:bg-[#E97627]/10',
      hoverColor: 'group-hover:text-[#E97627] group-hover:bg-[#E97627]/10'
    },
    { 
      name: 'Excel', 
      icon: <FileSpreadsheet className="w-8 h-8" />, 
      level: 'Expert', 
      desc: 'VBA, Pivot Tables, Macros',
      mobileColor: 'max-md:text-[#217346] max-md:bg-[#217346]/10',
      hoverColor: 'group-hover:text-[#217346] group-hover:bg-[#217346]/10'
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-white/60 font-semibold mb-2">Expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skillset</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-8 rounded-2xl border border-white/5 shadow-sm hover:shadow-xl transition-all"
            >
              <div 
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 md:bg-white/10 md:text-white/70 ${skill.mobileColor} ${skill.hoverColor}`}
              >
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
              <p className="text-sm text-white/70 font-medium mb-3">{skill.level}</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
