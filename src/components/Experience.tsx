import { motion } from 'framer-motion';
import { experience } from '../data/siteConfig';

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan">
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
        Experience
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
      </div>

      <div className="space-y-8">
        {experience.map((job) => (
          <motion.article
            key={job.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[28px] border border-slate-200/80 bg-slate-50/90 p-6 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {job.company} · {job.duration}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
