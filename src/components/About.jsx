import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Code2, BrainCircuit, Terminal, Sparkles } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-24 px-4 text-black relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Unlocking Data's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8BA95] to-[#94a679]">True Potential</span></h2>
          <p className="text-black max-w-2xl mx-auto text-base">More than just numbers—I build data architectures that tell compelling stories and drive strategic growth.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Story Card */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-[#C8BA95]/5 border border-[#C8BA95]/20 rounded-3xl p-8 md:p-10 backdrop-blur-md relative overflow-hidden group hover:bg-[#C8BA95]/10 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 transform group-hover:scale-110">
              <Terminal size={180} />
            </div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-black"><Sparkles className="text-black" size={28} /> My Journey</h3>
            <div className="space-y-5 text-black leading-relaxed relative z-10 text-lg">
              <p>
                I am a dedicated Data Analyst with a deep-rooted background in Computer Science and Statistics. My journey began with a fundamental curiosity about how data shapes our modern world, naturally guiding me to specialize in transforming convoluted datasets into sharp, actionable business strategies.
              </p>
              <p>
                Throughout my career, I've collaborated with diverse, cross-functional teams to engineer data-driven solutions that heavily optimize performance and catalyze scalable growth. I firmly believe that every single data point contributes to a larger narrative, and my mission is to continuously decode those stories into meaningful, real-world impact.
              </p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-[#C8BA95]/10 to-[#94a679]/10 border border-[#C8BA95]/20 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#C8BA95]/40 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#94a679]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#E3D8BC] to-[#94a679] group-hover:from-[#C8BA95] group-hover:to-[#94a679] transition-all duration-500">5+</span>
              <h4 className="text-xl font-semibold mt-4 text-black">Years of Experience</h4>
              <p className="text-black mt-2 text-sm leading-relaxed">Transforming raw data into strategic, high-value assets.</p>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div variants={cardVariants} className="bg-[#C8BA95]/5 border border-[#C8BA95]/20 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-[#C8BA95]/10 transition-all duration-500 shadow-xl">
            <h3 className="text-xl font-bold mb-8 text-black border-b border-[#C8BA95]/20 pb-4">Core Focus</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="p-3 bg-[#94a679]/20 rounded-xl text-black shadow-inner"><Database size={24} /></div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Data Architecture</h4>
                  <p className="text-sm text-black mt-1 leading-relaxed">Designing robust, scalable pipelines & warehousing.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-3 bg-[#94a679]/20 rounded-xl text-black shadow-inner"><LineChart size={24} /></div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Advanced Analytics</h4>
                  <p className="text-sm text-black mt-1 leading-relaxed">Predictive modeling & interactive BI visualization.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Interests Card */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-[#C8BA95]/5 border border-[#C8BA95]/20 rounded-3xl p-8 md:p-10 backdrop-blur-md flex flex-col md:flex-row items-center gap-10 hover:bg-[#C8BA95]/10 transition-all duration-500 shadow-xl group">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3 text-black"><BrainCircuit className="text-black" size={28} /> Beyond the Spreadsheets</h3>
              <p className="text-black leading-relaxed text-lg">
                When I'm not writing complex SQL queries or building Python automation scripts, I am constantly exploring the bleeding edge of AI technology. I actively contribute to open-source data visualization libraries and love experimenting with new machine learning frameworks to push the boundaries of what's possible with data.
              </p>
            </div>
            <div className="w-full md:w-2/5 aspect-[4/3] bg-gradient-to-tr from-[#94a679]/20 to-transparent rounded-2xl border border-[#C8BA95]/20 overflow-hidden relative shadow-2xl">
               <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f633c] via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center gap-2 text-sm font-mono text-[#4f633c] bg-[#C8BA95]/90 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
                    <Code2 size={16} /> <span className="font-bold">Always Learning</span>
                  </div>
                </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
