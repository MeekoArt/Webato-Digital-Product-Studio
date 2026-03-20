import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Clock, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Crie croquis em segundos',
    description: 'Transforme descrições de texto ou ideias em croquis técnicos detalhados instantaneamente.',
    icon: <Zap size={32} strokeWidth={1.5} />,
  },
  {
    title: 'Economize tempo',
    description: 'Pule a etapa de rascunho manual e vá direto para a validação e refinamento do seu projeto.',
    icon: <Clock size={32} strokeWidth={1.5} />,
  },
  {
    title: 'Valide ideias rapidamente',
    description: 'Apresente conceitos visuais para clientes ou equipe antes de investir horas no design final.',
    icon: <CheckCircle2 size={32} strokeWidth={1.5} />,
  },
];

export function CroquiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Recruitment */}
      <section id="croqui-hero" className="relative flex items-center justify-center pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 leading-[1.15] text-white">
              Transforme ideias em<br/>
              croquis com<br/>
              <span className="text-brand">inteligência artificial</span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-6 max-w-lg">
              Estamos liberando acesso antecipado para 20 usuários testarem o Croqui.IA.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-medium mb-10">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Apenas 20 vagas disponíveis
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mb-8 w-full">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTu50yM4cUoZlXwcu85eIWawnSZP2yAKSXdxPu1ZSk7BYMhw/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg transition-all hover:bg-brand-2 shadow-[0_0_20px_var(--color-glow)] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                🚀 Quero participar do teste
              </a>
              <p className="text-sm text-muted font-medium">🔥 Já temos 7/20 vagas preenchidas</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="croqui" className="py-24 relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6 text-white">O que é o Croqui.IA?</h2>
            <p className="text-muted text-lg md:text-xl">
              Uma ferramenta inteligente projetada para arquitetos, designers e criativos que precisam validar ideias rapidamente e focar no que realmente importa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center p-10 rounded-2xl transition-all duration-300 bg-surface border border-border hover:border-brand/50 hover:bg-surface-2"
              >
                <div className="mb-6 flex items-center justify-center text-brand">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Services */}
      <section id="recrutamento" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6 text-white">🚀 Acesso Antecipado</h2>
          <p className="text-muted text-lg md:text-xl mb-12">
            Estamos liberando o Croqui.IA para um grupo fechado de usuários.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-white mb-2">Testar antes</h3>
              <p className="text-sm text-muted">Tenha acesso exclusivo antes do lançamento oficial.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-white mb-2">Dar feedback</h3>
              <p className="text-sm text-muted">Comunicação direta com os desenvolvedores.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold text-white mb-2">Influenciar</h3>
              <p className="text-sm text-muted">Ajude a moldar o futuro da ferramenta.</p>
            </div>
          </div>
          
          <p className="text-brand font-medium mb-8">👉 Em troca, queremos apenas sua opinião honesta.</p>
          
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTu50yM4cUoZlXwcu85eIWawnSZP2yAKSXdxPu1ZSk7BYMhw/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg transition-all hover:bg-brand-2 shadow-[0_0_20px_var(--color-glow)]"
          >
            Preencher Formulário de Acesso
          </a>
        </div>
      </section>
    </div>
  );
}
