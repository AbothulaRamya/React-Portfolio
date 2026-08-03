import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/siteConfig';

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan">
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
        Projects
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-50/90 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 dark:border-slate-700/70 dark:bg-slate-900/80"
          >
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={project.image} alt={project.name} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium uppercase tracking-[0.22em]">{project.tech[0]}</span>
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-cyan">
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-cyan">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
