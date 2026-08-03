import { siteConfig } from '../data/siteConfig';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-navy/90 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left md:px-10">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Crafted for a strong digital presence.</p>
        <p>
          Built with React, TypeScript, Tailwind, and thoughtful motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
