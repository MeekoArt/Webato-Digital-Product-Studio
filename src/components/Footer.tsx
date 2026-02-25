import React from 'react';

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0A0F1C] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-webato-secondary to-webato-accent flex items-center justify-center">
                <span className="text-white text-lg font-black">W</span>
              </div>
              <span>Webato</span>
            </a>
            <p className="text-webato-muted max-w-sm mb-6">
              Digital Product Studio. Construindo o futuro através de produtos digitais escaláveis e IA.
            </p>
            <a 
              href="mailto:contato@webatoagency.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-colors"
            >
              contato@webatoagency.com
            </a>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-3 text-webato-muted">
              <li><a href="#" className="hover:text-webato-light transition-colors">Croqui.IA</a></li>
              <li><a href="#" className="hover:text-webato-light transition-colors">StoryVerse Forge</a></li>
              <li><a href="#" className="hover:text-webato-light transition-colors">AI Builder (Em breve)</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-3 text-webato-muted">
              <li><a href="#servicos" className="hover:text-webato-light transition-colors">Serviços</a></li>
              <li><a href="#metodo" className="hover:text-webato-light transition-colors">Método</a></li>
              <li><a href="#roadmap" className="hover:text-webato-light transition-colors">Roadmap</a></li>
              <li><a href="#manifesto" className="hover:text-webato-light transition-colors">Manifesto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-webato-muted">
          <p>© {new Date().getFullYear()} Webato Digital Product Studio. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-webato-light transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-webato-light transition-colors">Instagram</a>
            <a href="#" className="hover:text-webato-light transition-colors">Play Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
