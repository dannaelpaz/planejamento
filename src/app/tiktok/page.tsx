import Link from 'next/link';

export default function TikTokPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-nerdium-purple py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Estratégia para TikTok
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Desenvolvimento de uma presença eficaz na plataforma priorizada, com foco em conteúdo que gere engajamento e conversão.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Análise da Plataforma</h2>
            <p className="text-lg mb-6">
              O TikTok é uma plataforma ideal para a NerdiumLabs 3D por diversos motivos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Público-alvo presente</h3>
                <p className="text-gray-700">
                  Grande parte do público nerd, geek e colecionador (16-45 anos) está ativo na plataforma
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Formato visual</h3>
                <p className="text-gray-700">
                  Permite mostrar produtos em ação e processos de criação de forma dinâmica
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Algoritmo favorável</h3>
                <p className="text-gray-700">
                  Conteúdo de nicho pode viralizar mesmo com contas pequenas
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Tendências de impressão 3D</h3>
                <p className="text-gray-700">
                  Já existem hashtags populares como #impressao3d e #3dprinting com milhões de visualizações
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Conteúdo */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-nerdium-purple">Pilares de Conteúdo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pilar 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-nerdium-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">30%</span>
                </div>
                <h3 className="text-xl font-bold text-nerdium-copper">Processo de Criação</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Timelapse de impressões:</span> Mostrar o processo de impressão acelerado de produtos populares</li>
                <li><span className="font-medium">Bastidores:</span> Revelar o processo criativo, desde a modelagem até o produto final</li>
                <li><span className="font-medium">Transformações:</span> Vídeos "antes e depois" mostrando o filamento se transformando em produtos incríveis</li>
                <li><span className="font-medium">Falhas e soluções:</span> Compartilhar erros de impressão e como foram resolvidos (humaniza a marca)</li>
              </ul>
            </div>
            
            {/* Pilar 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-nerdium-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">30%</span>
                </div>
                <h3 className="text-xl font-bold text-nerdium-copper">Produtos em Destaque</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Unboxing reverso:</span> Mostrar o produto final e depois revelar como foi feito</li>
                <li><span className="font-medium">Demonstrações funcionais:</span> Exibir produtos em uso (dados rolando, props de cosplay em ação)</li>
                <li><span className="font-medium">Comparações:</span> Contrastar produtos impressos em 3D com alternativas convencionais</li>
                <li><span className="font-medium">Novos lançamentos:</span> Anunciar novos produtos com vídeos de "reveal" dramáticos</li>
              </ul>
            </div>
            
            {/* Pilar 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-nerdium-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">20%</span>
                </div>
                <h3 className="text-xl font-bold text-nerdium-copper">Educação e Curiosidades</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Dicas rápidas:</span> Compartilhar conhecimentos sobre impressão 3D e cultura nerd</li>
                <li><span className="font-medium">Curiosidades:</span> Fatos interessantes sobre personagens e universos representados nos produtos</li>
                <li><span className="font-medium">Tutoriais simples:</span> Ensinar pequenas técnicas de customização ou manutenção</li>
                <li><span className="font-medium">Explicações técnicas:</span> Simplificar conceitos de impressão 3D para iniciantes</li>
              </ul>
            </div>
            
            {/* Pilar 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 steampunk-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-nerdium-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">20%</span>
                </div>
                <h3 className="text-xl font-bold text-nerdium-copper">Engajamento com a Comunidade</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Desafios:</span> Criar hashtags próprios como #DesafioNerdium ou #PrintNerd</li>
                <li><span className="font-medium">Perguntas e respostas:</span> Responder dúvidas comuns em formato de vídeo</li>
                <li><span className="font-medium">Reações:</span> Reagir a tendências da cultura pop relacionadas aos produtos</li>
                <li><span className="font-medium">Colaborações:</span> Parcerias com criadores de conteúdo do nicho nerd/geek</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia de Hashtags */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Estratégia de Hashtags</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border mt-8">
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Hashtags Principais (usar em todos os vídeos)</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-nerdium-purple text-white px-3 py-1 rounded-full">#NerdiumLabs3D</span>
                <span className="bg-nerdium-purple text-white px-3 py-1 rounded-full">#Impressao3D</span>
                <span className="bg-nerdium-purple text-white px-3 py-1 rounded-full">#3DPrinting</span>
                <span className="bg-nerdium-purple text-white px-3 py-1 rounded-full">#CulturaNerd</span>
                <span className="bg-nerdium-purple text-white px-3 py-1 rounded-full">#GeekBrasil</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Hashtags por Categoria de Produto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold mb-2">Bustos:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#BustosColecionaveis</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#Colecionaveis</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#FigurasDeAcao</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">RPG:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#RPGBrasil</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#DadosRPG</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#DnDBrasil</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#RPGProps</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Cosplay:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#CosplayBrasil</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#PropsMaker</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#CosplayProps</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Decoração:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#DecorGeek</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#DecorNerd</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full">#HomeDecor</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Hashtags de Tendência</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Monitorar e utilizar hashtags em alta relacionadas à cultura pop</li>
                <li>Aproveitar lançamentos de filmes, séries e jogos com hashtags específicas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendário e Formatos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Calendário de Postagem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Frequência Ideal</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-nerdium-purple rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-bold">Fase inicial (3 meses)</p>
                      <p>3-4 vídeos por semana para construir biblioteca de conteúdo</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-nerdium-purple rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold">Fase de crescimento</p>
                      <p>5-7 vídeos por semana, incluindo respostas a comentários</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-nerdium-purple rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-bold">Horários ideais</p>
                      <p>12h-14h e 18h-21h (horários de maior engajamento)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Datas Estratégicas</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Lançamentos de filmes/séries de cultura pop</li>
                  <li>Eventos de RPG e cultura nerd (CCXP, Comic Con, etc.)</li>
                  <li>Datas comemorativas do universo nerd (Dia do Orgulho Nerd, Dia do Geek)</li>
                  <li>Black Friday e datas promocionais</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Formatos de Vídeo de Alto Desempenho</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Vídeos "Satisfatórios"</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Timelapse de impressão com música relaxante</li>
                  <li>Processos de acabamento e pintura detalhados</li>
                  <li>Revelações de produtos com iluminação dramática</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Vídeos de Transformação</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>"Olha o que consegui fazer com minha impressora 3D"</li>
                  <li>Comparações antes/depois de produtos customizados</li>
                  <li>Restaurações de itens usando peças impressas em 3D</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Vídeos de Reação</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Reações de clientes ao receberem produtos</li>
                  <li>Reações do Forjão (mascote) a novidades da cultura pop</li>
                  <li>"Testes de resistência" dramáticos com produtos</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-3 text-nerdium-copper">Vídeos Educativos Rápidos</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>"Você sabia?" sobre curiosidades de impressão 3D</li>
                  <li>Dicas rápidas de 15 segundos sobre cuidados com produtos</li>
                  <li>Explicações sobre materiais e tecnologias</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação entre seções */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <Link href="/produtos" className="text-nerdium-purple hover:text-nerdium-copper mb-4 md:mb-0">
              ← Voltar para Produtos
            </Link>
            <Link href="/logistica" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
              Próximo: Soluções Logísticas →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
