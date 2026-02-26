import React from 'react';
import { motion } from 'motion/react';
import { MonitorPlay, Feather, Box } from 'lucide-react';

const products = [
  {
    name: 'Croqui.IA',
    description: 'Geração automatizada\nde croquis tecnicos',
    platforms: 'Android + Web',
    icon: <MonitorPlay size={40} strokeWidth={1.5} />,
    buttonText: 'Ver Produto',
    buttonStyle: 'outline-brand',
    highlight: false,
    titleColor: 'text-white',
    platformColor: 'text-brand',
  },
  {
    name: 'StoryVerse\nForge',
    description: 'Web App',
    platforms: 'Atualização: 02/03/2024',
    icon: <Feather size={48} strokeWidth={1.5} className="text-brand drop-shadow-[0_0_15px_var(--color-brand)]" />,
    buttonText: 'Ver Produto',
    buttonStyle: 'outline-brand',
    highlight: true,
    badge: 'NOVO ITEM',
    titleColor: 'text-white',
    platformColor: 'text-muted-2',
  },
  {
    name: 'AI Builder',
    subtitle: '(Em breve)',
    description: 'Construtor interno de\naplicativos com IA',
    platforms: 'Em desenvolvimento',
    icon: <Box size={40} strokeWidth={1.5} />,
    buttonText: 'Em breve',
    buttonStyle: 'outline-muted',
    highlight: false,
    titleColor: 'text-brand',
    platformColor: 'text-muted-2',
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-white">Nossos Produtos</h2>
          <p className="text-muted text-lg md:text-xl">
            Da ideia ao lançamento, aqui estão nossos produtos digitais —<br className="hidden md:block"/> desenvolvidos para escalar e evoluir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col items-center text-center p-10 rounded-2xl transition-all duration-300 ${
                product.highlight 
                  ? 'bg-surface border border-brand shadow-[0_0_30px_var(--color-glow-strong)] transform md:-translate-y-2' 
                  : 'bg-surface border border-border hover:border-brand/50 hover:bg-surface-2'
              }`}
            >
              {product.highlight && (
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-brand/10 to-transparent rounded-2xl pointer-events-none"></div>
              )}
              
              {product.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand text-[8px] font-bold text-white tracking-wider">
                  {product.badge}
                </div>
              )}

              <div className={`mb-6 flex items-center justify-center text-brand`}>
                {product.icon}
              </div>
              
              <h3 className={`text-3xl font-heading font-bold mb-2 whitespace-pre-line ${product.titleColor}`}>{product.name}</h3>
              {product.subtitle && <p className="text-muted mb-4">{product.subtitle}</p>}
              
              <p className={`mb-6 whitespace-pre-line text-muted`}>
                {product.description}
              </p>
              
              <div className="mt-auto w-full">
                <p className={`text-sm mb-8 ${product.platformColor}`}>{product.platforms}</p>
                
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  product.buttonStyle === 'outline-brand' 
                    ? 'bg-transparent border border-brand text-white hover:bg-brand/10' 
                    : 'bg-transparent border border-border text-muted hover:border-muted-2'
                }`}>
                  {product.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
