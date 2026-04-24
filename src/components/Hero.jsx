import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';


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
      hover: 'hover:text-white hover:bg-white/10 hover:border-white/30',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nav-sharma/',
      label: 'LinkedIn',
      hover: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      hover: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/50',
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Hi, I'm{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #FFD700 0%, #FFC200 30%, #FFE566 60%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px rgba(255,215,0,0.45))',
              }}
            >
              Nav Sharma
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white/40 tracking-widest uppercase mb-8">
            Data Analyst
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-0.5 mx-auto mb-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #FFD700, #FFC200)',
            boxShadow: '0 0 12px 2px rgba(255,215,0,0.4)',
          }}
        />

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Turning complex datasets into clear, actionable insights. Specializing in{' '}
          <span className="text-white/80">predictive modeling</span>,{' '}
          <span className="text-white/80">statistical analysis</span>, and{' '}
          <span className="text-white/80">data visualization</span>.
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
            className="group px-8 py-4 bg-white text-[#0B1220] rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-white/10 hover:shadow-white/20 transition-all duration-300"
          >
            View My Work
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 bg-white/5 border border-white/15 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
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
              className={`w-11 h-11 rounded-full flex items-center justify-center text-white/50 bg-white/5 border border-white/10 ${hover} transition-all duration-200`}
            >
              <Icon size={18} />
            </motion.a>
          ))}

          <span className="w-px h-6 bg-white/15 mx-2" />

          {stats.map(({ value, label }) => (
            <div key={label} className="text-center px-3">
              <p
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFC200)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
