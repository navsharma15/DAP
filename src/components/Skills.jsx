import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart, Layers, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: <Database size={28} className="text-black" />,
      borderColor: "border-[#C8BA95]/30",
      hoverBorder: "hover:border-[#C8BA95]",
      glowColor: "bg-[#C8BA95]",
      textColor: "text-black",
      skills: [
        { name: "SQL", level: 95, desc: "Complex CTEs, Window Functions, Query Optimization" },
        { name: "Python", level: 85, desc: "Pandas, NumPy, Scikit-learn, Data Pipelines" }
      ]
    },
    {
      title: "BI & Visualization",
      icon: <BarChart size={28} className="text-[#94a679]" />,
      borderColor: "border-[#94a679]/30",
      hoverBorder: "hover:border-[#94a679]",
      glowColor: "bg-[#94a679]",
      textColor: "text-[#94a679]",
      skills: [
        { name: "Power BI", level: 95, desc: "DAX, Data Modeling, Interactive Dashboards" },
        { name: "Tableau", level: 85, desc: "Visual Storytelling, Calculated Fields, Server" }
      ]
    },
    {
      title: "Advanced Analytics",
      icon: <Layers size={28} className="text-black" />,
      borderColor: "border-[#E3D8BC]/30",
      hoverBorder: "hover:border-[#E3D8BC]",
      glowColor: "bg-[#E3D8BC]",
      textColor: "text-black",
      skills: [
        { name: "Excel", level: 95, desc: "VBA, Advanced Macros, Power Pivot, Array Formulas" },
        { name: "Statistics", level: 80, desc: "A/B Testing, Regression, Hypothesis Testing" }
      ]
    }
  ];

  // Unique Data Node Progress Bar Component
  const DataNodeBar = ({ level, color }) => {
    const totalNodes = 15;
    const activeNodes = Math.floor((level / 100) * totalNodes);

    return (
      <div className="flex gap-1.5 mt-3 mb-2">
        {[...Array(totalNodes)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '6px' }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={`flex-1 rounded-full ${
              i < activeNodes 
                ? `${color} shadow-[0_0_10px_currentColor]` 
                : 'bg-[#94a679]/20'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 flex items-center justify-center gap-3">
              <Terminal className="text-black" size={28} /> Technical Arsenal
            </h2>
            <p className="text-black max-w-2xl mx-auto text-base">
              Precision tools and methodologies I use to extract, analyze, and visualize complex data structures.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group bg-[#C8BA95]/5 backdrop-blur-md rounded-3xl p-8 border ${category.borderColor} ${category.hoverBorder} transition-all duration-500 hover:bg-[#C8BA95]/10 hover:-translate-y-2 relative overflow-hidden shadow-xl`}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -top-24 -right-24 w-56 h-56 ${category.glowColor} opacity-0 group-hover:opacity-[0.15] blur-[80px] transition-opacity duration-700 rounded-full pointer-events-none`} />
              
              <div className="flex items-center gap-4 mb-8 border-b border-[#C8BA95]/20 pb-6 relative z-10">
                <div className="p-3 bg-[#4f633c] rounded-2xl shadow-inner border border-[#C8BA95]/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-black tracking-wide">{category.title}</h3>
              </div>

              <div className="space-y-10 relative z-10">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-1">
                      <h4 className="text-lg font-bold text-black tracking-wide">{skill.name}</h4>
                      <span className={`text-xs font-mono font-semibold ${category.textColor}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <DataNodeBar level={skill.level} color={category.glowColor} />
                    <p className="text-sm text-black/80 mt-3 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
