export default function CTASection() {
  return (
    <section className="h-screen gradient-primary flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
          Pronto para Inovar?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Vamos conversar sobre como podemos transformar suas ideias em realidade tecnológica.
        </p>
        <button className="bg-white text-secondary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-2xl hover:scale-110 active:scale-95 active:shadow-lg transition-all duration-300 transform shadow-lg cursor-pointer">
          Iniciar Conversa
        </button>
      </div>
    </section>
  );
}
