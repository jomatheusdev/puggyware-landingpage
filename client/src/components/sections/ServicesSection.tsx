export default function ServicesSection() {
  return (
    <section id="servicos" className="w-screen h-screen bg-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde desenvolvimento web até inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Desenvolvimento Web</h3>
            <p className="text-gray-600 mb-6">Sites e aplicações web modernas, responsivas e otimizadas para performance.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js & React</li>
              <li>• Node.js & APIs</li>
              <li>• Design Responsivo</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Inteligência Artificial</h3>
            <p className="text-gray-600 mb-6">Soluções de IA personalizadas para automatizar e otimizar seus processos.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Machine Learning</li>
              <li>• Processamento de Linguagem</li>
              <li>• Automação Inteligente</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Consultoria Tech</h3>
            <p className="text-gray-600 mb-6">Orientação estratégica para transformação digital e modernização tecnológica.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Arquitetura de Software</li>
              <li>• Otimização de Performance</li>
              <li>• Estratégia Digital</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
