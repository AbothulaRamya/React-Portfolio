import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold text-cyan">About Me</p>
              <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                I build analytics systems that make data easy to understand.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I am a Data Analyst who enjoys turning complex datasets into clear, trustworthy insights. My work focuses on cleaning data, building repeatable processes, and creating dashboards that help teams make decisions with confidence.
              </p>
              <p>
                I blend technical rigor with business context to solve problems across reporting, customer analytics, and operational performance. I am especially comfortable working with SQL, Python, Power BI, and storytelling through visual dashboards.
              </p>
              <p>
                My recent projects include customer interaction analytics, automated document extraction and translation, and a data-driven interview preparation tool. I aim to deliver work that is both meaningful to stakeholders and easy for teams to adopt.
              </p>
              <p>
                Outside of projects, I am learning new analytics tools, refining my reporting workflows, and sharing insights through GitHub while staying ready for the next data opportunity.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid h-full gap-4 sm:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Location</p>
              <p className="font-semibold text-slate-900 dark:text-white">Parvathipuram Manyam, Andhra Pradesh</p>
            </div>
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="break-all font-semibold text-slate-900 dark:text-white">{siteConfig.email}</p>
            </div>
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Degree</p>
              <p className="font-semibold text-slate-900 dark:text-white">B.Tech — Information Technology</p>
            </div>
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">CGPA</p>
              <p className="font-semibold text-slate-900 dark:text-white">8.6 / 10</p>
            </div>
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6 sm:col-span-2">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Availability</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">Open to opportunities</p>
            </div>
            <div className="flex h-full flex-col justify-between rounded-[32px] border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/50 p-6 sm:col-span-2">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">GitHub</p>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="font-semibold text-cyan hover:text-cyan/80 dark:text-cyan-300 dark:hover:text-white">
                @AbothulaRamya
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
