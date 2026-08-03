import { motion } from 'framer-motion';
import { achievements } from '../data/siteConfig';

const Hackathons = () => {
  return (
    <section id="hackathons" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan">
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
        Hackathons & Awards
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
      </div>

      <div className="space-y-6">
        {achievements.map((item) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[28px] border border-slate-200/80 bg-slate-50/90 p-6 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/80"
          >
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">{item.year}</span>
              <span className="text-right text-slate-600 dark:text-slate-400">{item.title}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
