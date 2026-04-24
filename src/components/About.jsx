import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-accent/20 to-indigo-400/20 rounded-2xl overflow-hidden shadow-xl border border-white/50 dark:border-slate-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <div className="text-center">
                  <span className="text-3xl font-bold">5+</span>
                  <p className="text-xs">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-accent font-semibold mb-2">My Story</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Passionate about discovering insights hidden in data
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a dedicated Data Analyst with a background in Computer Science and Statistics. My journey began with a curiosity about how data drives the modern world, leading me to specialize in transforming complex datasets into actionable business strategies.
              </p>
              <p>
                Throughout my career, I've worked with diverse teams to implement data-driven solutions that optimize performance and drive growth. I believe that every data point tells a story, and I've made it my mission to translate those stories into meaningful impact.
              </p>
              <p>
                When I'm not diving into spreadsheets or writing Python scripts, you can find me exploring the latest in AI or contributing to open-source data projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
