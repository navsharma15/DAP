import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

/* ── Hero ──────────────────────────────────────────── */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '5+', label: 'Years Exp.' },
    { value: '40+', label: 'Projects' },
    { value: '20+', label: 'Clients' },
  ];

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/navsharma15',
      label: 'GitHub',
      hover: 'hover:text-black hover:bg-[#94a679]/30 hover:border-[#94a679]/50',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nav-sharma/',
      label: 'LinkedIn',
      hover: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      hover: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/40',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[1.08] tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="text-black">
              Nav Sharma
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-black tracking-widest uppercase mb-8">
            Data Analyst
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-0.5 mx-auto mb-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #C8BA95, #94a679)',
          }}
        />

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-black mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Turning complex datasets into clear, actionable insights. Specializing in{' '}
          <span className="text-black font-medium">predictive modeling</span>,{' '}
          <span className="text-black font-medium">statistical analysis</span>, and{' '}
          <span className="text-black font-medium">data visualization</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 bg-[#94a679] text-[#4f633c] rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-[#94a679]/20 hover:shadow-[#94a679]/40 transition-all duration-300"
          >
            View My Work
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 bg-[#C8BA95]/10 border border-[#C8BA95]/20 text-black rounded-2xl font-semibold flex items-center gap-2 hover:bg-[#C8BA95]/20 hover:border-[#C8BA95]/40 backdrop-blur-sm transition-all duration-300"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Socials + Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {socials.map(({ icon: Icon, href, label, hover }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-11 h-11 rounded-full flex items-center justify-center text-black bg-[#94a679]/10 border border-[#94a679]/20 ${hover} transition-all duration-200`}
            >
              <Icon size={18} />
            </motion.a>
          ))}

          <span className="w-px h-6 bg-[#C8BA95]/20 mx-2" />

          {stats.map(({ value, label }) => (
            <div key={label} className="text-center px-3">
              <p className="text-xl font-bold text-black">
                {value}
              </p>
              <p className="text-[10px] text-black/70 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
