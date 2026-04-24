import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const certs = [
    { title: 'Google Data Analytics Professional', issuer: 'Coursera / Google', date: '2023' },
    { title: 'Data Scientist Associate', issuer: 'Datacamp', date: '2023' },
    { title: 'Advanced SQL Certification', issuer: 'HackerRank', date: '2022' },
    { title: 'Python for Data Science', issuer: 'IBM', date: '2022' },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-white/60 font-semibold mb-2">Recognition</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 shadow-sm"
            >
              <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center text-[#FFD700] shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                <p className="text-slate-300">{cert.issuer} • {cert.date}</p>
              </div>
              <div className="ml-auto">
                <CheckCircle2 className="text-emerald-500" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
