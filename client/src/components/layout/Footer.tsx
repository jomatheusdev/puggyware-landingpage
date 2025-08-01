import LogoImage from "@/components/ui/LogoImage";

export default function Footer() {
  return (
    <footer id="contato" className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoImage size="sm" />
              <span className="text-xl font-bold">PuggyWare</span>
            </div>
            <p className="text-white/80">
              Soluções tecnológicas inteligentes que fazem a diferença no seu negócio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-white/80">
              <p>📧 contato@puggyware.com</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo, SP</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="space-y-2 text-white/80">
              <p>🔗 LinkedIn</p>
              <p>📘 GitHub</p>
              <p>📸 Instagram</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 PuggyWare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
