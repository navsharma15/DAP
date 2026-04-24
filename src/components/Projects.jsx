import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Forecasting Model',
      desc: 'Developed a predictive model using Python and Scikit-learn to forecast quarterly sales with 95% accuracy.',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
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
      title: 'Healthcare Data Analysis',
      desc: 'Analyzed patient recovery rates to optimize hospital resource allocation and reduce wait times.',
      tech: ['Python', 'SQL', 'Seaborn'],
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-white/60 font-semibold mb-2">Portfolio</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden border border-white/5 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.link} className="p-3 bg-white rounded-full text-slate-900 hover:bg-accent hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:bg-accent hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-300 mb-6 line-clamp-2">
                  {project.desc}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  View Case Study <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
