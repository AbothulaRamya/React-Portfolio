import { motion } from 'framer-motion';
import { skills } from '../data/siteConfig';

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan">
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
        Skills
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[28px] border border-slate-200/80 bg-slate-50/90 p-6 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {category.items.map((skill) => (
                <li key={skill} className="inline-flex items-center gap-2 rounded-2xl bg-slate-100/80 px-3 py-2 text-sm dark:bg-slate-800/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
