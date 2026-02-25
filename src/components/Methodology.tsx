import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Estratégia', desc: 'Definição do problema, público e modelo de negócio.' },
  { num: '02', title: 'Arquitetura', desc: 'Desenho técnico, stack e fluxo de usuário.' },
  { num: '03', title: 'Construção', desc: 'Desenvolvimento ágil focado em entrega de valor.' },
  { num: '04', title: 'Publicação', desc: 'Deploy em produção (Web e Play Store).' },
  { num: '05', title: 'Escala', desc: 'Growth, iteração e otimização contínua.' },
];

export function Methodology() {
  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nosso Método</h2>
          <p className="text-webato-muted text-lg max-w-2xl">
            Um processo validado para transformar ideias em produtos reais e escaláveis.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0F172A] border-2 border-white/10 flex items-center justify-center mb-6 group-hover:border-webato-accent group-hover:text-webato-accent transition-colors">
                  <span className="text-xl font-bold font-mono">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-webato-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
