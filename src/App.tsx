import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize theme from localStorage on app mount
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-navy dark:text-slate-100">
      <Header />
      <main className="space-y-28 px-6 pb-20 pt-28 md:px-12 lg:px-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Hackathons />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
