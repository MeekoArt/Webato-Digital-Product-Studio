import React from 'react';
import { motion } from 'motion/react';
import { FolderOpen, Play, Sparkles, Puzzle, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars/Particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_15px_var(--color-brand)]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
        
        {/* Curved Glowing lines using SVG */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10,50 Q40,30 110,70" fill="none" stroke="var(--color-brand)" strokeWidth="0.2" className="opacity-40" style={{ filter: 'drop-shadow(0 0 2px var(--color-brand))' }} />
          <path d="M-10,80 Q50,100 110,40" fill="none" stroke="var(--color-brand)" strokeWidth="0.1" className="opacity-30" style={{ filter: 'drop-shadow(0 0 2px var(--color-brand))' }} />
        </svg>
        
        {/* Large Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 leading-[1.15] text-white">
              Construímos<br/>
              <span className="text-brand">Produtos Digitais</span><br/>
              Que Crescem
            </h1>

            <p className="text-lg md:text-xl text-muted mb-10 max-w-lg">
              Apps, SAAS e soluções com IA — do conceito ao lançamento.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a
                href="#produtos"
                className="px-8 py-3.5 rounded-lg border border-brand text-white font-medium transition-all hover:bg-brand/10 text-center w-full sm:w-auto"
              >
                Ver Produtos
              </a>
              <a
                href="#contato"
                className="px-8 py-3.5 rounded-lg border border-brand text-white font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-brand/10"
              >
                <FolderOpen size={18} className="text-white" />
                Falar Conosco
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs font-medium text-muted">
                <Puzzle size={14} className="text-brand" />
                Produtos prontos para produção
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs font-medium text-brand">
                <Play size={14} className="text-brand" fill="currentColor" />
                Publicação na Play Store Ready
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs font-medium text-muted">
                <Sparkles size={14} className="text-brand" />
                IA aplicade
              </div>
            </div>
          </motion.div>

          {/* Right Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full mt-12 lg:mt-0 flex justify-center items-center"
          >
            <div className="relative flex justify-center items-center w-full">
              {/* Glow extra */}
              <div className="absolute w-[70%] h-[60%] bg-[radial-gradient(circle,rgba(255,85,0,0.55),transparent_65%)] blur-[30px] z-0 pointer-events-none"></div>
              
              <img
                src="/mockups/hero-mockup.png"
                alt="Mockups WebAto Studio"
                className="relative z-10 w-full max-w-[780px] h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.75)] animate-float"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
