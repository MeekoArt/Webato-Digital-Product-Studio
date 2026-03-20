import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCroquiPage = location.pathname === '/croqui';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isCroquiPage ? [
    { name: 'Início', href: '/', active: false },
    { name: 'O que é', href: '#croqui', active: true },
    { name: 'Acesso Antecipado', href: '#recrutamento' },
  ] : [
    { name: 'Home', href: '#home', active: true },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Método', href: '#metodo' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center text-3xl font-heading font-bold tracking-tighter text-white">
            WEBAT<span className="relative">O<ArrowUpRight className="absolute -top-1 -right-4 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} strokeWidth={3} /></span>
          </div>
          <span className="text-[0.65rem] tracking-[0.3em] text-brand uppercase mt-0">STUDIO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${link.active ? 'text-white' : 'text-muted hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={isCroquiPage ? "https://docs.google.com/forms/d/e/1FAIpQLSdTu50yM4cUoZlXwcu85eIWawnSZP2yAKSXdxPu1ZSk7BYMhw/viewform?pli=1" : "https://www.instagram.com/webato_studio?igsh=cXAyeHFicXdwMjg0"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg border border-brand text-white text-sm font-medium transition-all hover:bg-brand/10"
          >
            {isCroquiPage ? "Participar do Teste" : "Falar Conosco"}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg border-b border-border p-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors ${link.active ? 'text-brand' : 'text-muted hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-2 border-t border-border">
                <a
                  href={isCroquiPage ? "https://docs.google.com/forms/d/e/1FAIpQLSdTu50yM4cUoZlXwcu85eIWawnSZP2yAKSXdxPu1ZSk7BYMhw/viewform?pli=1" : "https://www.instagram.com/webato_studio?igsh=cXAyeHFicXdwMjg0"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-lg border border-brand text-brand font-medium hover:bg-brand/10 transition-colors"
                >
                  {isCroquiPage ? "Participar do Teste" : "Falar Conosco"}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
