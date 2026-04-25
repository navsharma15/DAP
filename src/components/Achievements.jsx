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
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-black font-semibold mb-2">Recognition</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Certifications & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-[#dacba9]/5 border border-[#dacba9]/20 backdrop-blur-md rounded-3xl hover:bg-[#dacba9]/10 transition-all duration-500 shadow-xl group"
            >
              <div className="w-16 h-16 bg-[#4f633c] rounded-2xl flex items-center justify-center text-black shrink-0 border border-[#dacba9]/20 shadow-inner">
                <Award size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black group-hover:text-[#F5F5F0] transition-colors">{cert.title}</h4>
                <p className="text-black">{cert.issuer} • {cert.date}</p>
              </div>
              <div className="ml-auto">
                <CheckCircle2 className="text-[#94a679]" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
