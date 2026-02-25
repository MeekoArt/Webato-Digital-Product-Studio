import React from 'react';
import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-webato-secondary/10 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-webato-accent mb-12">Manifesto</h2>
          
          <div className="space-y-8 text-2xl md:text-4xl font-medium tracking-tight leading-tight">
            <p className="text-white">
              Não seguimos tendências.<br/>
              <span className="text-webato-muted">Construímos ativos digitais.</span>
            </p>
            <p className="text-white">
              Não vendemos promessas.<br/>
              <span className="text-webato-muted">Entregamos sistemas.</span>
            </p>
            <p className="text-white">
              Acreditamos que tecnologia é produto.<br/>
              <span className="text-webato-accent">E produto é crescimento.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
