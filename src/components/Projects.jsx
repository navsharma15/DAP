import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Forecasting Model',
      desc: 'Predictive modeling using Python and Scikit-learn to forecast quarterly sales with 95% accuracy.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Customer Segmentation',
      desc: 'Clustered 10k+ customers using K-Means to identify high-value segments for targeted marketing campaigns.',
      tech: ['SQL', 'R', 'Power BI'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Financial Dashboard',
      desc: 'Real-time financial tracking dashboard integrated with multiple APIs for live currency and stock data.',
      tech: ['Tableau', 'Excel', 'Python'],
      img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Analysis',
      desc: 'Analyzed patient recovery rates to optimize hospital resource allocation and drastically reduce wait times.',
      tech: ['Python', 'SQL', 'Seaborn'],
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl w-full mx-auto">
        
        <div className="flex items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black flex items-center justify-center gap-3 mb-3">
              <FolderOpen className="text-black" size={28} /> Featured Work
            </h2>
            <p className="text-black text-base">Interactive data models, dashboards, and analytical deep-dives.</p>
          </motion.div>
        </div>

        {/* 2x2 Desktop Grid, exactly filling a rectangular box taking up ~70% of screen height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[800px] md:min-h-[60vh] md:h-[70vh]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl bg-[#4f633c] border border-[#C8BA95]/20 w-full h-full flex flex-col"
            >
              {/* Immersive Background Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-20"
              />
              
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4f633c] via-[#4f633c]/80 to-transparent transition-opacity duration-500" />
              
              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-[#C8BA95]/10 backdrop-blur-md text-black border border-[#C8BA95]/30 text-xs font-bold rounded-full tracking-wider shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-2 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out delay-75">
                  {project.title}
                </h4>
                
                {/* Smooth Hover Reveal Description */}
                <div className="overflow-hidden">
                  <p className="text-black text-sm md:text-base leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out delay-100 mb-4 transform translate-y-4 group-hover:translate-y-0">
                    {project.desc}
                  </p>
                </div>

                {/* Smooth Hover Reveal Links */}
                <div className="flex gap-6 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 ease-out delay-150">
                   <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-black hover:text-black transition-colors">
                     <Github size={20} /> Code
                   </a>
                   <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-black hover:text-black transition-colors">
                     <ExternalLink size={20} /> Live Demo
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

export default Projects;
