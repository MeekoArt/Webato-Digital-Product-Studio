import React from 'react';
import { ArrowUpRight, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-bg py-12 border-t border-border relative overflow-hidden mt-24">
      {/* Curved line above footer */}
      <svg className="absolute top-0 left-0 w-full h-24 pointer-events-none -mt-24" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 Q50,0 100,100" fill="none" stroke="var(--color-brand)" strokeWidth="0.2" className="opacity-30" style={{ filter: 'drop-shadow(0 0 2px var(--color-brand))' }} />
      </svg>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <a href="#home" className="flex flex-col group">
            <div className="flex items-center text-3xl font-heading font-bold tracking-tighter text-white">
              WEBAT<span className="relative">O<ArrowUpRight className="absolute -top-1 -right-4 text-brand" size={24} strokeWidth={3} /></span>
            </div>
            <span className="text-[0.65rem] tracking-[0.3em] text-brand uppercase mt-0">STUDIO</span>
          </a>
          
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white">
            <li><a href="#home" className="hover:text-brand transition-colors">Home</a></li>
            <li><a href="#produtos" className="hover:text-brand transition-colors">Produtos</a></li>
            <li><a href="#roadmap" className="hover:text-brand transition-colors">Roadmap</a></li>
            <li><a href="#sobre" className="hover:text-brand transition-colors">Sobre</a></li>
            <li><a href="#contato" className="hover:text-brand transition-colors">Contato</a></li>
          </ul>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-end gap-4 text-sm text-muted">
          <div className="flex items-center gap-4">
            <span>© 2026 Webato</span>
            <span className="text-border">|</span>
            <a href="mailto:contato@webatoagency.com" className="hover:text-brand transition-colors">contato@webatoagency.com</a>
            <div className="flex gap-3 ml-4">
              <a href="#" className="text-brand hover:text-brand-2 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="text-brand hover:text-brand-2 transition-colors"><Instagram size={16} /></a>
              <a href="#" className="text-brand hover:text-brand-2 transition-colors"><Mail size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
