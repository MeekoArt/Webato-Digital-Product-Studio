import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Roadmap Público</h2>
            <p className="text-webato-muted text-lg mb-8">
              Transparência no que estamos construindo. Acompanhe a evolução dos nossos produtos.
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-webato-accent animate-pulse" />
                Em andamento
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-webato-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-webato-light">Otimizações de performance no Croqui.IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-webato-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-webato-light">Expansão do sistema Enterprise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleDashed className="text-webato-muted shrink-0 mt-0.5" size={20} />
                  <span className="text-webato-muted">Ajustes no Play Billing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pt-12">
            <div className="p-6 rounded-2xl border border-white/10 border-dashed">
              <h3 className="text-xl font-bold mb-4 text-webato-muted">Próximos passos</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-webato-muted shrink-0 mt-0.5" />
                  <span className="text-webato-muted">Lançamento de novo produto focado em IA Generativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-webato-muted shrink-0 mt-0.5" />
                  <span className="text-webato-muted">Plataforma SaaS interna (AI Builder)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-webato-muted shrink-0 mt-0.5" />
                  <span className="text-webato-muted">Programa de parcerias B2B</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
