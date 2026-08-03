import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[32px] border border-slate-200/20 dark:border-white/10 bg-slate-50/90 dark:bg-white/5 p-6 shadow-glow shadow-slate-700/10 dark:shadow-blue-500/10 backdrop-blur-xl md:p-10 transition-colors duration-300">
      <div className="absolute inset-0 bg-hero-gradient dark:opacity-100 opacity-50" aria-hidden="true" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan">
            Data Analyst | Insights | Business Intelligence
          </span>
          <div className="space-y-4 lg:max-w-xl">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl">
              RamyaAbothula
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              I transform raw data into clear insights through analytics, visualization, and storytelling that support smarter business decisions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan/90"
            >
              View My Projects
            </a>
            <a
              href={siteConfig.resume}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-transparent dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-transparent dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              Contact Me
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
        >
          {/* Floating animation container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan/40 via-blue-500/30 to-cyan/40 blur-2xl" />
            
            {/* Main container with gradient border and shadow */}
            <div className="relative aspect-square overflow-hidden rounded-full bg-slate-950/90 p-1 shadow-2xl shadow-blue-500/20">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Profile image */}
              <img
                src="/images/profile.jpg"
                alt="Ramya Abothula"
                loading="eager"
                className="relative z-10 h-full w-full rounded-full object-cover ring-2 ring-cyan/20"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
