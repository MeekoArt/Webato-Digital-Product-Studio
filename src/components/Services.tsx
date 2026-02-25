import React from 'react';
import { motion } from 'motion/react';
import { Layers, Rocket, BrainCircuit, Target } from 'lucide-react';

const services = [
  {
    title: 'Product Development',
    description: 'MVPs, Apps, SaaS e sistemas sob medida construídos com arquitetura moderna e escalável.',
    icon: <Layers size={28} />,
  },
  {
    title: 'Launch & Growth',
    description: 'Publicação na Play Store, estruturação de planos, integração de pagamentos e monetização.',
    icon: <Rocket size={28} />,
  },
  {
    title: 'AI Applied',
    description: 'Automação, IA generativa e ferramentas inteligentes integradas ao seu modelo de negócio.',
    icon: <BrainCircuit size={28} />,
  },
  {
    title: 'Estratégia Digital',
    description: 'Posicionamento de mercado, branding técnico e construção de autoridade para produtos digitais.',
    icon: <Target size={28} />,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">O Que Fazemos</h2>
          <p className="text-webato-muted text-lg">
            A Webato é um estúdio de produtos digitais focado em engenharia, crescimento e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-webato-secondary/20 text-webato-accent flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-webato-muted leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
