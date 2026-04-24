import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent/30 text-slate-200">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="py-10 text-center border-t border-secondary-light dark:border-secondary-dark">
        <p className="text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Alex Doe. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
