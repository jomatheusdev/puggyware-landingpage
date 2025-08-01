"use client";

import LogoImage from "@/components/ui/LogoImage";

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="inicio" className="h-screen gradient-primary flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="select-none">
            <LogoImage size="xl" className="mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6">
              PuggyWare
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transformamos ideias em soluções tecnológicas inteligentes.
            Desenvolvimento de software, IA e inovação digital para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToServices}
              className="bg-white text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-md transition-all duration-200 transform cursor-pointer"
            >
              Nossos Serviços
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-md transition-all duration-200 transform cursor-pointer"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}