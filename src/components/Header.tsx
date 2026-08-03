import { useEffect, useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="text-lg font-semibold tracking-[0.12em] text-white transition hover:text-cyan">
          <span>RamyaAbothula.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#hero" className="text-sm text-slate-300 transition hover:text-white">Home</a>
          <a href="#about" className="text-sm text-slate-300 transition hover:text-white">About</a>
          <a href="#skills" className="text-sm text-slate-300 transition hover:text-white">Skills</a>
          <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">Projects</a>
          <a href="#experience" className="text-sm text-slate-300 transition hover:text-white">Experience</a>
          <a href="#certifications" className="text-sm text-slate-300 transition hover:text-white">Certifications</a>
          <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-100 transition hover:border-cyan hover:text-cyan"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-100 transition hover:border-cyan hover:text-cyan md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            <a href="#hero" className="text-sm text-slate-200">Home</a>
            <a href="#about" className="text-sm text-slate-200">About</a>
            <a href="#skills" className="text-sm text-slate-200">Skills</a>
            <a href="#projects" className="text-sm text-slate-200">Projects</a>
            <a href="#experience" className="text-sm text-slate-200">Experience</a>
            <a href="#certifications" className="text-sm text-slate-200">Certifications</a>
            <a href="#contact" className="text-sm text-slate-200">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
