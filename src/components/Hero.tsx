import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Code2, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-webato-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-webato-accent mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-webato-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-webato-accent"></span>
            </span>
            Digital Product & Growth Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Construímos Produtos Digitais <span className="text-transparent bg-clip-text bg-gradient-to-r from-webato-secondary to-webato-accent">Que Crescem</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-webato-muted mb-10 max-w-2xl mx-auto"
          >
            Apps, SaaS e soluções com IA — do conceito ao lançamento na Play Store e Web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#produtos"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-webato-secondary hover:bg-blue-500 text-white font-medium transition-all flex items-center justify-center gap-2 group"
            >
              Ver Produtos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center justify-center"
            >
              Falar com a Webato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Smartphone className="text-webato-muted" size={24} />
              <span className="text-sm font-medium text-webato-light">Produtos em Produção</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Rocket className="text-webato-muted" size={24} />
              <span className="text-sm font-medium text-webato-light">Publicação Play Store</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Code2 className="text-webato-muted" size={24} />
              <span className="text-sm font-medium text-webato-light">Growth e Monetização</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
