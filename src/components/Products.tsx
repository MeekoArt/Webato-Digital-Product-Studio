import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Smartphone, Globe, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Croqui.IA',
    description: 'Geração automatizada de croquis técnicos. Automação técnica para geração de croquis profissionais.',
    status: 'Em produção',
    platforms: ['Android', 'Web'],
    icon: <Smartphone size={24} />,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-cyan-500/50',
  },
  {
    name: 'StoryVerse Forge',
    description: 'Plataforma criativa com IA para criação de histórias. Transforme ideias em narrativas imersivas.',
    status: 'MVP',
    platforms: ['Web App'],
    icon: <Globe size={24} />,
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/50',
  },
  {
    name: 'AI Builder',
    description: 'Construtor interno de aplicativos com IA. Acelere o desenvolvimento de soluções personalizadas.',
    status: 'Em desenvolvimento',
    platforms: ['Web'],
    icon: <Sparkles size={24} />,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'group-hover:border-emerald-500/50',
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nossos Produtos</h2>
            <p className="text-webato-muted text-lg">
              Não criamos apenas presença digital. Criamos produtos que operam no mundo real.
            </p>
          </div>
          <a href="#todos" className="hidden md:inline-flex items-center gap-2 text-webato-accent hover:text-cyan-300 font-medium transition-colors">
            Ver todos os produtos <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300 ${product.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-webato-light">
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-webato-muted mb-6 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-webato-light">
                    Status: {product.status}
                  </span>
                  {product.platforms.map(platform => (
                    <span key={platform} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-webato-muted">
                      {platform}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-colors flex items-center justify-center gap-2">
                  Ver Produto
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="#todos" className="inline-flex items-center gap-2 text-webato-accent font-medium">
            Ver todos os produtos <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
