import React from 'react';
import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand mb-12">Manifesto</h2>
          
          <div className="space-y-8 text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-16">
            <p className="text-white">
              Não seguimos tendências.<br/>
              <span className="text-muted">Construímos ativos digitais.</span>
            </p>
            <p className="text-white">
              Não vendemos promessas.<br/>
              <span className="text-muted">Entregamos sistemas.</span>
            </p>
            <p className="text-white">
              Acreditamos que tecnologia é produto.<br/>
              <span className="text-brand">E produto é crescimento.</span>
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Quer um produto assim?</h3>
            <a
              href="#contato"
              className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-brand to-brand-2 hover:from-brand-2 hover:to-brand text-white font-medium transition-all shadow-[0_0_20px_var(--color-glow)]"
            >
              Fale com a WebAto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
