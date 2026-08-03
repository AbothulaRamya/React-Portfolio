import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl md:p-10">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
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
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              RamyaAbothula
            </h1>
            <p className="text-xl leading-8 text-slate-300">
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
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
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
          className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center overflow-hidden rounded-full bg-slate-950/90 p-1 sm:max-w-[420px]"
        >
          <img
            src="/images/profile.jpg"
            alt="Ramya Abothula"
            loading="eager"
            className="h-full w-full rounded-full object-cover ring-2 ring-cyan/30"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
