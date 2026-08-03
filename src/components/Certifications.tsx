import { motion } from 'framer-motion';
import { certifications } from '../data/siteConfig';

const Certifications = () => {
  return (
    <section id="certifications" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/90 px-6 py-10 shadow-glow shadow-slate-700/10 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 lg:px-10 lg:py-12">
      <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan">
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
        Certifications
        <span className="h-px flex-1 bg-slate-200/20 dark:bg-slate-600/40" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert) => (
          <motion.article
            key={cert}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[28px] border border-slate-200/80 bg-slate-50/90 p-6 text-sm text-slate-700 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {cert}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
