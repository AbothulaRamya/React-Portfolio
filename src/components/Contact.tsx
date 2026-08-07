import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan">Contact</p>
        <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Let's Connect</h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          I'm actively looking for <span className="text-slate-900 dark:text-white font-semibold">Data Analyst, Business Intelligence, and Data Engineering opportunities</span>.
          If you have an opportunity, a project collaboration, or just want to connect and talk about data, analytics, or technology —
          <span className="text-slate-900 dark:text-white font-semibold"> my inbox is always open</span>.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan hover:bg-cyan/90 text-slate-950 font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan text-slate-950 dark:text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan text-slate-950 dark:text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
