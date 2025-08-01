"use client";

import LogoImage from "@/components/ui/LogoImage";

export default function Header() {
  const scrollToTop = () => {
    document.getElementById('inicio')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="brand-group" onClick={scrollToTop}>
          <LogoImage size="md" interactive={true} />
          <span className="text-2xl font-bold text-secondary brand-name">PuggyWare</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('inicio')} className="text-secondary hover:text-primary transition-colors">Início</button>
          <button onClick={() => scrollToSection('sobre')} className="text-secondary hover:text-primary transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('servicos')} className="text-secondary hover:text-primary transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('contato')} className="text-secondary hover:text-primary transition-colors">Contato</button>
        </div>

        <button 
          onClick={() => scrollToSection('contato')}
          className="bg-primary text-white px-6 py-2 rounded-full hover-secondary font-medium"
        >
          Começar Projeto
        </button>
      </nav>
    </header>
  );
}
