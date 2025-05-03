import Link from 'next/link';

export default function ProdutosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-nerdium-purple py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Produtos com Maior Potencial de Vendas
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Identificação dos produtos com maior potencial de conversão baseados nas tendências atuais do mercado nerd e de impressão 3D.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Com base na pesquisa de tendências do mercado nerd e de impressão 3D para 2025, identificamos seis categorias de produtos com maior potencial de vendas e conversão para a NerdiumLabs 3D.
            </p>
            <p className="text-lg mb-6">
              Estas categorias foram selecionadas considerando as tendências tecnológicas emergentes, o público-alvo da empresa (nerds, geeks, RPGistas, colecionadores e cosplayers de 16 a 45 anos) e o potencial de margem de lucro.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-nerdium-purple">Categorias de Produtos Recomendadas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Categoria 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">1. Produtos Colecionáveis Coloridos</h3>
              <p className="text-gray-700 mb-4">
                A pesquisa mostrou que 2025 será o "Ano das Impressoras 3D Coloridas", com diversas empresas lançando impressoras capazes de produzir peças em múltiplas cores.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Bustos colecionáveis de personagens de RPGs populares com detalhes coloridos</li>
                <li>Miniaturas de monstros e criaturas míticas para jogadores de RPG</li>
                <li>Dioramas de cenas icônicas de filmes e séries de cultura pop</li>
              </ul>
            </div>
            
            {/* Categoria 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">2. Acessórios para RPG Personalizados</h3>
              <p className="text-gray-700 mb-4">
                Os dados e porta-dados místicos já fazem parte do catálogo da NerdiumLabs 3D, mas podem ser aprimorados com as novas tecnologias de impressão colorida e materiais especiais.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Dados personalizados com efeitos especiais (brilho no escuro, multicoloridos)</li>
                <li>Torres de dados temáticas baseadas em diferentes universos de fantasia</li>
                <li>Porta-dados com mecanismos articulados</li>
                <li>Miniaturas personalizadas para representar personagens de jogadores</li>
              </ul>
            </div>
            
            {/* Categoria 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">3. Props para Cosplay com Tecnologia Avançada</h3>
              <p className="text-gray-700 mb-4">
                A pesquisa mostrou que a impressão 3D está avançando em termos de materiais especiais e técnicas de produção, permitindo criar peças mais resistentes e realistas.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Armas e acessórios de personagens com detalhes coloridos embutidos</li>
                <li>Peças de armaduras leves e resistentes</li>
                <li>Máscaras e capacetes com sistemas de encaixe aprimorados</li>
                <li>Acessórios com partes articuladas e móveis</li>
              </ul>
            </div>
            
            {/* Categoria 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">4. Itens Decorativos Funcionais</h3>
              <p className="text-gray-700 mb-4">
                A pesquisa mostrou grande interesse em itens decorativos que também possuem funcionalidade, combinando estética nerd com utilidade prática.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Suportes para fones de ouvido em formato de personagens</li>
                <li>Organizadores de mesa temáticos (porta-canetas, porta-controles)</li>
                <li>Luminárias temáticas com efeitos especiais</li>
                <li>Vasos e cachepots inspirados em jogos e filmes</li>
              </ul>
            </div>
            
            {/* Categoria 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">5. Acessórios de Moda Geek</h3>
              <p className="text-gray-700 mb-4">
                A pesquisa revelou uma tendência crescente de acessórios de moda impressos em 3D, como bolsas e calçados, que podem ser adaptados para o público nerd.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Pingentes e joias inspirados em símbolos de jogos e séries</li>
                <li>Fivelas de cinto temáticas</li>
                <li>Broches e pins colecionáveis</li>
                <li>Acessórios para cabelo com temas geek</li>
              </ul>
            </div>
            
            {/* Categoria 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <h3 className="text-xl font-bold mb-3 text-nerdium-copper">6. Produtos com Tecnologia 4D</h3>
              <p className="text-gray-700 mb-4">
                A pesquisa indicou que a impressão 4D (objetos que reagem a estímulos externos) será uma tendência para 2025, o que pode criar produtos únicos e diferenciados.
              </p>
              <h4 className="font-bold mb-2">Exemplos específicos:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Itens decorativos que mudam de cor com temperatura</li>
                <li>Acessórios que brilham no escuro ou reagem à luz UV</li>
                <li>Peças que mudam de forma quando expostas a determinadas condições</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia de Lançamento */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Estratégia de Lançamento</h2>
            <p className="text-lg mb-6">
              Para maximizar o potencial de vendas destes produtos, recomendamos a seguinte estratégia de lançamento:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border mt-8">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nerdium-copper rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Lançamento Gradual</h4>
                    <p>Começar com 2-3 produtos de cada categoria para testar a receptividade do mercado</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nerdium-copper rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Conteúdo no TikTok</h4>
                    <p>Criar vídeos demonstrando o processo de criação e os detalhes dos produtos</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nerdium-copper rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Edições Limitadas</h4>
                    <p>Criar séries limitadas para gerar senso de urgência e exclusividade</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nerdium-copper rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Personalização</h4>
                    <p>Oferecer opções de personalização para aumentar o valor percebido</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nerdium-copper rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Parcerias</h4>
                    <p>Buscar parcerias com criadores de conteúdo, streamers e influenciadores do nicho nerd</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação entre seções */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <Link href="/" className="text-nerdium-purple hover:text-nerdium-copper mb-4 md:mb-0">
              ← Voltar para Início
            </Link>
            <Link href="/tiktok" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
              Próximo: Estratégia para TikTok →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
