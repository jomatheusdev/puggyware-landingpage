export default function AboutSection() {
  return (
    <section id="sobre" className="h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Sobre a PuggyWare
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos uma empresa de tecnologia que combina criatividade canina com inteligência artificial. 
            Nossa missão é desenvolver soluções que não apenas funcionam, mas que encantam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Foco no Cliente</h3>
            <p className="text-gray-600">Cada projeto é único e merece atenção personalizada para atender suas necessidades específicas.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Inovação Constante</h3>
            <p className="text-gray-600">Sempre em busca das tecnologias mais avançadas para entregar soluções de ponta.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Parceria Sólida</h3>
            <p className="text-gray-600">Construímos relacionamentos duradouros baseados em confiança e resultados excepcionais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
