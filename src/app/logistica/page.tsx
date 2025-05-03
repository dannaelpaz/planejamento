import Link from 'next/link';

export default function LogisticaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-nerdium-purple py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Logísticas
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estruturação de um sistema eficiente para embalagem e envio de produtos frágeis, garantindo a satisfação do cliente e otimizando custos.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              A NerdiumLabs 3D enfrenta o desafio de enviar produtos de impressão 3D que são, por natureza, frágeis e muitas vezes possuem detalhes delicados. Para atingir a meta de lucro líquido de R$5.000 mensais até o fim do ano, é fundamental estabelecer um sistema logístico eficiente.
            </p>
            <p className="text-lg mb-6">
              Nesta seção, apresentamos estratégias de embalagem, comparativo de transportadoras, política de frete e processo operacional de envio para garantir que os produtos cheguem em perfeitas condições aos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Estratégias de Embalagem */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Estratégias de Embalagem</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Embalagens Primárias (em contato direto com o produto)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Plástico-Bolha Biodegradável</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Utilizar Bio Pack, alternativa sustentável</li>
                    <li>Ideal para produtos pequenos</li>
                    <li>Custo: R$0,50 a R$1,50 por produto</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Espuma Personalizada</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Para produtos premium ou muito frágeis</li>
                    <li>Possibilidade de usar impressão 3D para criar moldes</li>
                    <li>Custo: R$2,00 a R$5,00 por produto</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Papel Kraft com Enchimento</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Opção sustentável e de baixo custo</li>
                    <li>Para produtos menos frágeis</li>
                    <li>Custo: R$0,30 a R$0,80 por produto</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Embalagens Secundárias (externas)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Caixas de Papelão Personalizadas</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Com identidade visual da NerdiumLabs 3D</li>
                    <li>Tamanhos padronizados:
                      <ul className="pl-5 space-y-1">
                        <li>P (15x10x5cm): para dados e acessórios</li>
                        <li>M (20x15x10cm): para bustos pequenos</li>
                        <li>G (30x20x15cm): para bustos maiores e props</li>
                      </ul>
                    </li>
                    <li>Custo: R$1,50 a R$4,00 por caixa</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Envelopes de Papelão Rígido</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Para produtos planos ou de baixo volume</li>
                    <li>Proteção contra dobras e amassados</li>
                    <li>Custo: R$0,80 a R$1,50 por envelope</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Elementos Adicionais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Etiquetas de Manuseio</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>"Frágil" e "Este Lado para Cima"</li>
                    <li>Essenciais para orientar o manuseio</li>
                    <li>Custo: R$0,10 por produto</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Cartão de Agradecimento</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Instruções de cuidado com o produto</li>
                    <li>QR Code para vídeo no TikTok</li>
                    <li>Custo: R$0,30 por cartão</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Lacre Personalizado</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Adesivo com o logo da NerdiumLabs 3D</li>
                    <li>Reforça identidade da marca</li>
                    <li>Custo: R$0,20 por lacre</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo de Transportadoras */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Comparativo de Transportadoras</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-nerdium-purple text-white">
                    <th className="p-3 text-left">Transportadora</th>
                    <th className="p-3 text-left">Vantagens</th>
                    <th className="p-3 text-left">Desvantagens</th>
                    <th className="p-3 text-left">Custo Médio (Produto Médio)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-bold">Correios</td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Maior capilaridade nacional</li>
                        <li>Opções econômicas para produtos leves</li>
                        <li>Integração fácil com e-commerce</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Prazos mais longos para algumas regiões</li>
                        <li>Maior índice de extravios</li>
                        <li>Limitações de tamanho e peso</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <p>PAC: R$25-35</p>
                      <p>SEDEX: R$40-60</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-bold">Jadlog</td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Bom custo-benefício para médio porte</li>
                        <li>Rastreamento eficiente</li>
                        <li>Menor índice de avarias</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Menor capilaridade em cidades pequenas</li>
                        <li>Prazos mais longos para Norte/Nordeste</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <p>.Package: R$22-32</p>
                      <p>.Com: R$35-55</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Loggi</td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Entregas rápidas em capitais</li>
                        <li>Rastreamento em tempo real</li>
                        <li>Menor índice de avarias</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Cobertura limitada a grandes centros</li>
                        <li>Custos mais elevados para distâncias maiores</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <p>Econômico: R$25-35</p>
                      <p>Expresso: R$40-60</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border mt-8">
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Recomendação</h3>
              <p className="mb-4">Utilizar o Melhor Envio como plataforma principal para gerenciamento de fretes, permitindo comparar preços entre transportadoras e obter descontos de até 30% nos valores de tabela.</p>
              <p>Custo mensal: Plano básico gratuito / Plano profissional R$99/mês (com funcionalidades avançadas)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia de Frete */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Estratégia de Frete Recomendada</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="w-12 h-12 bg-nerdium-copper rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Frete Grátis Estratégico</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Para compras acima de R$250</li>
                  <li>Utilizar PAC ou .Package</li>
                  <li>Aumento estimado de 25-30% no ticket médio</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="w-12 h-12 bg-nerdium-copper rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Frete Econômico</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Para compras abaixo de R$250</li>
                  <li>Utilizar PAC ou .Package</li>
                  <li>Cobrar custo real com desconto de 10%</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="w-12 h-12 bg-nerdium-copper rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Frete Expresso</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Opção premium para recebimento rápido</li>
                  <li>Utilizar SEDEX, .Com ou Loggi Expresso</li>
                  <li>Cobrar custo real do frete</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg steampunk-border">
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Seguro de Envio</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Contratar seguro para todos os envios acima de R$150</li>
                <li>Custo aproximado: 1-2% do valor declarado</li>
                <li>Benefício: proteção contra extravios e avarias, garantindo a satisfação do cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Operacional */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Processo Operacional de Envio</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg steampunk-border flex-grow">
                  <h3 className="text-lg font-bold mb-2">Preparação do Produto</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Inspeção final de qualidade</li>
                    <li>Limpeza com ar comprimido para remover resíduos</li>
                    <li>Aplicação de selante protetor (quando necessário)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg steampunk-border flex-grow">
                  <h3 className="text-lg font-bold mb-2">Embalagem</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Envolver o produto na proteção primária adequada</li>
                    <li>Posicionar estrategicamente em caixa com tamanho apropriado</li>
                    <li>Preencher espaços vazios para evitar movimentação</li>
                    <li>Incluir cartão de agradecimento</li>
                    <li>Lacrar e etiquetar a embalagem</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg steampunk-border flex-grow">
                  <h3 className="text-lg font-bold mb-2">Geração de Etiquetas</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Utilizar Melhor Envio para comparar preços e gerar etiquetas</li>
                    <li>Imprimir duas cópias: uma para a embalagem, outra para controle interno</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg steampunk-border flex-grow">
                  <h3 className="text-lg font-bold mb-2">Postagem</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Estabelecer dias fixos para postagem (ex: segundas, quartas e sextas)</li>
                    <li>Para volumes maiores, solicitar coleta domiciliar</li>
                    <li>Para volumes menores, utilizar agências ou pontos de coleta próximos</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg steampunk-border flex-grow">
                  <h3 className="text-lg font-bold mb-2">Rastreamento e Acompanhamento</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Enviar código de rastreio automaticamente para o cliente</li>
                    <li>Monitorar status das entregas diariamente</li>
                    <li>Intervir proativamente em caso de atrasos ou problemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação entre seções */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <Link href="/tiktok" className="text-nerdium-purple hover:text-nerdium-copper mb-4 md:mb-0">
              ← Voltar para TikTok
            </Link>
            <Link href="/financeiro" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
              Próximo: Plano Financeiro →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
