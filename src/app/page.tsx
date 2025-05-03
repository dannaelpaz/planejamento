import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Plano Estratégico de Crescimento
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transformando paixões em realidade física através da impressão 3D
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <Link href="/produtos" className="bg-nerdium-copper hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Ver Produtos Potenciais
            </Link>
            <Link href="/tiktok" className="bg-white text-nerdium-purple hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all">
              Estratégia para TikTok
            </Link>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Sobre a NerdiumLabs 3D</h2>
            <p className="text-lg mb-6">
              A NerdiumLabs 3D é uma empresa de impressão 3D especializada em produtos para o público nerd, geek e de cultura pop. 
              Com o propósito de "Forjar paixões. Materializar sonhos", a empresa busca criar uma ponte entre o imaginário e o mundo real, 
              entregando produtos exclusivos, personalizados e inspiradores.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border mt-8">
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Identidade da Marca</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Visão</h4>
                  <p>Ser referência nacional em produtos criativos de impressão 3D para o público geek, nerd e de fantasia, reconhecidos pela inovação, originalidade e qualidade.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Missão</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Oferecer produtos personalizados de alta qualidade</li>
                    <li>Encantar o público nerd/geek com itens inovadores</li>
                    <li>Fortalecer a presença digital com comunicação criativa</li>
                    <li>Expandir a comunidade NerdiumLabs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares do Plano */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-nerdium-purple">Os 4 Pilares do Plano Estratégico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-nerdium-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Produtos com Potencial</h3>
              <p className="text-gray-600 mb-4">Identificação dos produtos com maior potencial de conversão baseados nas tendências atuais do mercado nerd e de impressão 3D.</p>
              <div className="text-center mt-4">
                <Link href="/produtos" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
                  Saiba mais →
                </Link>
              </div>
            </div>
            
            {/* Pilar 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-nerdium-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Estratégia para TikTok</h3>
              <p className="text-gray-600 mb-4">Desenvolvimento de uma presença eficaz na plataforma priorizada, com foco em conteúdo que gere engajamento e conversão.</p>
              <div className="text-center mt-4">
                <Link href="/tiktok" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
                  Saiba mais →
                </Link>
              </div>
            </div>
            
            {/* Pilar 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-nerdium-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Soluções Logísticas</h3>
              <p className="text-gray-600 mb-4">Estruturação de um sistema eficiente para embalagem e envio de produtos frágeis, garantindo a satisfação do cliente.</p>
              <div className="text-center mt-4">
                <Link href="/logistica" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
                  Saiba mais →
                </Link>
              </div>
            </div>
            
            {/* Pilar 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="w-16 h-16 bg-nerdium-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Plano Financeiro</h3>
              <p className="text-gray-600 mb-4">Projeções detalhadas e estratégias de precificação para atingir a meta de lucro mensal de R$5.000 até o final de 2025.</p>
              <div className="text-center mt-4">
                <Link href="/financeiro" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Financeira */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple">Meta Financeira</h2>
            <div className="bg-gray-50 p-8 rounded-lg steampunk-border">
              <p className="text-lg mb-4">Lucro líquido mensal de</p>
              <p className="text-5xl font-bold text-nerdium-copper mb-4">R$ 5.000</p>
              <p className="text-lg">até o final de 2025</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow-sm">
                  <p className="font-bold text-nerdium-purple">Fase 1</p>
                  <p className="text-2xl font-bold">R$ 3.792</p>
                  <p className="text-sm text-gray-500">Meses 1-3</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <p className="font-bold text-nerdium-purple">Fase 2</p>
                  <p className="text-2xl font-bold">R$ 5.934</p>
                  <p className="text-sm text-gray-500">Meses 4-6</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <p className="font-bold text-nerdium-purple">Fase 3</p>
                  <p className="text-2xl font-bold">R$ 8.789</p>
                  <p className="text-sm text-gray-500">Meses 7-12</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/financeiro" className="inline-block bg-nerdium-purple hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all">
                Ver Plano Financeiro Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implemente este plano estratégico e alcance o próximo nível com a NerdiumLabs 3D.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/produtos" className="bg-nerdium-copper hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Começar pelos Produtos
            </Link>
            <Link href="/tiktok" className="bg-white text-nerdium-purple hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all">
              Começar pelo TikTok
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
