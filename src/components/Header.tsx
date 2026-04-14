import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">PowerPortfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
