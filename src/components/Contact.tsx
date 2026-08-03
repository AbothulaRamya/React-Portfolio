import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-cyan font-semibold mb-3">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I'm actively looking for <span className="text-slate-900 dark:text-white font-semibold">Data Analyst, Business Intelligence, and Data Engineering opportunities</span>.
          If you have an opportunity, a project collaboration, or just want to connect and talk about data, analytics, or technology —
          <span className="text-slate-900 dark:text-white font-semibold"> my inbox is always open</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan hover:bg-cyan/90 text-slate-950 font-semibold transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan text-slate-950 dark:text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-cyan text-slate-950 dark:text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
