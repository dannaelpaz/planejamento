import Link from 'next/link';

export default function FinanceiroPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-nerdium-purple py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plano Financeiro
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Projeções detalhadas e estratégias de precificação para atingir a meta de lucro mensal de R$5.000 até o final de 2025.
          </p>
        </div>
      </section>

      {/* Meta Financeira */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Meta Financeira</h2>
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
          </div>
        </div>
      </section>

      {/* Análise de Custos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Análise de Custos e Receitas</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Custos de Produção por Categoria</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Dados e Acessórios para RPG</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Material (filamento/resina): R$5-15</li>
                        <li>Energia: R$0,50-2,00</li>
                        <li>Tempo médio: 1-3 horas</li>
                        <li>Acabamento: R$2-5</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-nerdium-purple">Custo total de produção:</p>
                      <p className="text-xl font-bold">R$7,50-22,00 por peça</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Bustos Colecionáveis Pequenos (até 15cm)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Material: R$15-30</li>
                        <li>Energia: R$3-6</li>
                        <li>Tempo médio: 5-10 horas</li>
                        <li>Acabamento: R$10-20</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-nerdium-purple">Custo total de produção:</p>
                      <p className="text-xl font-bold">R$28-56 por peça</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Bustos Colecionáveis Grandes (acima de 15cm)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Material: R$30-60</li>
                        <li>Energia: R$6-12</li>
                        <li>Tempo médio: 10-20 horas</li>
                        <li>Acabamento: R$20-40</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-nerdium-purple">Custo total de produção:</p>
                      <p className="text-xl font-bold">R$56-112 por peça</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Props para Cosplay</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Material: R$40-100</li>
                        <li>Energia: R$8-20</li>
                        <li>Tempo médio: 15-30 horas</li>
                        <li>Acabamento: R$30-60</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-nerdium-purple">Custo total de produção:</p>
                      <p className="text-xl font-bold">R$78-180 por peça</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg steampunk-border">
                  <h4 className="font-bold mb-3">Itens Decorativos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Material: R$10-30</li>
                        <li>Energia: R$2-5</li>
                        <li>Tempo médio: 3-8 horas</li>
                        <li>Acabamento: R$5-15</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-bold text-nerdium-purple">Custo total de produção:</p>
                      <p className="text-xl font-bold">R$17-50 por peça</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Custos Fixos Mensais</h3>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Aluguel de espaço: <span className="font-bold">R$800</span></li>
                      <li>Internet e telefone: <span className="font-bold">R$150</span></li>
                      <li>Manutenção de equipamentos: <span className="font-bold">R$300</span></li>
                      <li>Assinaturas de software: <span className="font-bold">R$200</span></li>
                      <li>Marketing básico: <span className="font-bold">R$500</span></li>
                      <li>Outros custos fixos: <span className="font-bold">R$200</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-nerdium-purple">Total de custos fixos mensais:</p>
                      <p className="text-2xl font-bold">R$2.150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Custos Variáveis</h3>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Embalagem: <span className="font-bold">5-10% do valor do produto</span></li>
                  <li>Frete (parcialmente repassado): <span className="font-bold">10-15% do valor do produto</span></li>
                  <li>Taxas de marketplace/processamento: <span className="font-bold">5-10% do valor do produto</span></li>
                </ul>
                <div className="mt-4 bg-gray-50 p-3 rounded">
                  <p className="font-bold text-nerdium-purple">Total de custos variáveis:</p>
                  <p className="text-xl font-bold">20-35% do valor do produto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia de Precificação */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Estratégia de Precificação</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border mb-10">
              <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Fórmula de Precificação Recomendada</h3>
              <div className="bg-white p-4 rounded text-center">
                <p className="text-lg font-bold">Preço de Venda = (Custo de Produção / (1 - Margem Desejada - % Custos Variáveis))</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-nerdium-copper">Margens de Lucro Recomendadas por Categoria</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h4 className="font-bold mb-3">Dados e Acessórios para RPG</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Custo médio de produção: <span className="font-bold">R$15</span></li>
                      <li>Margem bruta recomendada: <span className="font-bold">70%</span></li>
                      <li>Custos variáveis estimados: <span className="font-bold">25%</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold">Preço de venda recomendado:</p>
                    <p className="text-xl font-bold text-nerdium-purple">R$300</p>
                    <p className="font-bold mt-2">Lucro líquido por peça:</p>
                    <p className="text-lg font-bold text-nerdium-copper">R$210</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h4 className="font-bold mb-3">Bustos Colecionáveis Pequenos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Custo médio de produção: <span className="font-bold">R$42</span></li>
                      <li>Margem bruta recomendada: <span className="font-bold">65%</span></li>
                      <li>Custos variáveis estimados: <span className="font-bold">25%</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold">Preço de venda recomendado:</p>
                    <p className="text-xl font-bold text-nerdium-purple">R$420</p>
                    <p className="font-bold mt-2">Lucro líquido por peça:</p>
                    <p className="text-lg font-bold text-nerdium-copper">R$273</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h4 className="font-bold mb-3">Bustos Colecionáveis Grandes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Custo médio de produção: <span className="font-bold">R$84</span></li>
                      <li>Margem bruta recomendada: <span className="font-bold">60%</span></li>
                      <li>Custos variáveis estimados: <span className="font-bold">25%</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold">Preço de venda recomendado:</p>
                    <p className="text-xl font-bold text-nerdium-purple">R$560</p>
                    <p className="font-bold mt-2">Lucro líquido por peça:</p>
                    <p className="text-lg font-bold text-nerdium-copper">R$336</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h4 className="font-bold mb-3">Props para Cosplay</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Custo médio de produção: <span className="font-bold">R$129</span></li>
                      <li>Margem bruta recomendada: <span className="font-bold">55%</span></li>
                      <li>Custos variáveis estimados: <span className="font-bold">25%</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold">Preço de venda recomendado:</p>
                    <p className="text-xl font-bold text-nerdium-purple">R$645</p>
                    <p className="font-bold mt-2">Lucro líquido por peça:</p>
                    <p className="text-lg font-bold text-nerdium-copper">R$355</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h4 className="font-bold mb-3">Itens Decorativos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Custo médio de produção: <span className="font-bold">R$33</span></li>
                      <li>Margem bruta recomendada: <span className="font-bold">65%</span></li>
                      <li>Custos variáveis estimados: <span className="font-bold">25%</span></li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold">Preço de venda recomendado:</p>
                    <p className="text-xl font-bold text-nerdium-purple">R$330</p>
                    <p className="font-bold mt-2">Lucro líquido por peça:</p>
                    <p className="text-lg font-bold text-nerdium-copper">R$214</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeção de Vendas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Projeção de Vendas Mensais</h2>
            
            <div className="space-y-10">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Cenário Inicial (Meses 1-3)</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Produto</th>
                        <th className="p-2 text-right">Quantidade</th>
                        <th className="p-2 text-right">Preço</th>
                        <th className="p-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Dados e Acessórios</td>
                        <td className="p-2 text-right">15</td>
                        <td className="p-2 text-right">R$300</td>
                        <td className="p-2 text-right font-bold">R$4.500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Pequenos</td>
                        <td className="p-2 text-right">5</td>
                        <td className="p-2 text-right">R$420</td>
                        <td className="p-2 text-right font-bold">R$2.100</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Grandes</td>
                        <td className="p-2 text-right">2</td>
                        <td className="p-2 text-right">R$560</td>
                        <td className="p-2 text-right font-bold">R$1.120</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Props para Cosplay</td>
                        <td className="p-2 text-right">2</td>
                        <td className="p-2 text-right">R$645</td>
                        <td className="p-2 text-right font-bold">R$1.290</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Itens Decorativos</td>
                        <td className="p-2 text-right">8</td>
                        <td className="p-2 text-right">R$330</td>
                        <td className="p-2 text-right font-bold">R$2.640</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2 font-bold">Receita Bruta Total</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2 text-right font-bold">R$11.650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Custos de Produção:</span>
                        <span className="font-bold">R$2.796</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Variáveis (25%):</span>
                        <span className="font-bold">R$2.912</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Fixos:</span>
                        <span className="font-bold">R$2.150</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-nerdium-purple text-white p-4 rounded flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold">Lucro Líquido:</p>
                      <p className="text-2xl font-bold">R$3.792</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Cenário Intermediário (Meses 4-6)</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Produto</th>
                        <th className="p-2 text-right">Quantidade</th>
                        <th className="p-2 text-right">Preço</th>
                        <th className="p-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Dados e Acessórios</td>
                        <td className="p-2 text-right">20</td>
                        <td className="p-2 text-right">R$300</td>
                        <td className="p-2 text-right font-bold">R$6.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Pequenos</td>
                        <td className="p-2 text-right">7</td>
                        <td className="p-2 text-right">R$420</td>
                        <td className="p-2 text-right font-bold">R$2.940</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Grandes</td>
                        <td className="p-2 text-right">3</td>
                        <td className="p-2 text-right">R$560</td>
                        <td className="p-2 text-right font-bold">R$1.680</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Props para Cosplay</td>
                        <td className="p-2 text-right">3</td>
                        <td className="p-2 text-right">R$645</td>
                        <td className="p-2 text-right font-bold">R$1.935</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Itens Decorativos</td>
                        <td className="p-2 text-right">10</td>
                        <td className="p-2 text-right">R$330</td>
                        <td className="p-2 text-right font-bold">R$3.300</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2 font-bold">Receita Bruta Total</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2 text-right font-bold">R$15.855</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Custos de Produção:</span>
                        <span className="font-bold">R$3.807</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Variáveis (25%):</span>
                        <span className="font-bold">R$3.964</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Fixos:</span>
                        <span className="font-bold">R$2.150</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-nerdium-purple text-white p-4 rounded flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold">Lucro Líquido:</p>
                      <p className="text-2xl font-bold">R$5.934</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Cenário Avançado (Meses 7-12)</h3>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Produto</th>
                        <th className="p-2 text-right">Quantidade</th>
                        <th className="p-2 text-right">Preço</th>
                        <th className="p-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Dados e Acessórios</td>
                        <td className="p-2 text-right">25</td>
                        <td className="p-2 text-right">R$300</td>
                        <td className="p-2 text-right font-bold">R$7.500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Pequenos</td>
                        <td className="p-2 text-right">10</td>
                        <td className="p-2 text-right">R$420</td>
                        <td className="p-2 text-right font-bold">R$4.200</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Bustos Grandes</td>
                        <td className="p-2 text-right">4</td>
                        <td className="p-2 text-right">R$560</td>
                        <td className="p-2 text-right font-bold">R$2.240</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Props para Cosplay</td>
                        <td className="p-2 text-right">4</td>
                        <td className="p-2 text-right">R$645</td>
                        <td className="p-2 text-right font-bold">R$2.580</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-2">Itens Decorativos</td>
                        <td className="p-2 text-right">15</td>
                        <td className="p-2 text-right">R$330</td>
                        <td className="p-2 text-right font-bold">R$4.950</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2 font-bold">Receita Bruta Total</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2 text-right font-bold">R$21.470</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Custos de Produção:</span>
                        <span className="font-bold">R$5.163</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Variáveis (25%):</span>
                        <span className="font-bold">R$5.368</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Custos Fixos:</span>
                        <span className="font-bold">R$2.150</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-nerdium-purple text-white p-4 rounded flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold">Lucro Líquido:</p>
                      <p className="text-2xl font-bold">R$8.789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plano de Crescimento */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Plano de Crescimento Mensal</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-nerdium-copper">Fase 1: Estabelecimento (Meses 1-3)</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Foco em produtos de menor custo e maior margem (dados e itens decorativos)</li>
                  <li>Investimento em marketing no TikTok para gerar visibilidade</li>
                  <li>Meta de lucro líquido: <span className="font-bold">R$3.500-4.000/mês</span></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-nerdium-copper">Fase 2: Crescimento (Meses 4-6)</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Aumento gradual da produção de bustos colecionáveis</li>
                  <li>Introdução de produtos premium e edições limitadas</li>
                  <li>Implementação do sistema de assinaturas mensais</li>
                  <li>Meta de lucro líquido: <span className="font-bold">R$5.000-6.000/mês</span></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-nerdium-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-nerdium-copper">Fase 3: Consolidação (Meses 7-12)</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Expansão da linha de produtos com base nos mais vendidos</li>
                  <li>Aumento da produção de itens de maior valor (props e bustos grandes)</li>
                  <li>Parcerias com influenciadores e eventos de cultura nerd</li>
                  <li>Meta de lucro líquido: <span className="font-bold">R$7.000-9.000/mês</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimentos e KPIs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Investimentos Necessários</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Curto Prazo (Próximos 3 meses)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Marketing no TikTok:</span>
                    <span className="font-bold">R$1.500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Materiais para novos produtos:</span>
                    <span className="font-bold">R$3.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Embalagens personalizadas:</span>
                    <span className="font-bold">R$1.000</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">R$5.500</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="text-xl font-bold mb-4 text-nerdium-copper">Médio Prazo (3-6 meses)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Upgrade de equipamentos:</span>
                    <span className="font-bold">R$5.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Desenvolvimento de site próprio:</span>
                    <span className="font-bold">R$3.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Participação em eventos:</span>
                    <span className="font-bold">R$2.000</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">R$10.000</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Indicadores-Chave de Desempenho (KPIs)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="font-bold mb-3">Margem de Lucro Bruto</h3>
                <p className="text-gray-700 mb-2">Meta: Manter acima de 60%</p>
                <p className="text-gray-700">Frequência: Semanal</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="font-bold mb-3">Ticket Médio</h3>
                <p className="text-gray-700 mb-2">Meta: Aumentar de R$300 para R$400 em 6 meses</p>
                <p className="text-gray-700">Frequência: Mensal</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="font-bold mb-3">Custo de Aquisição de Cliente</h3>
                <p className="text-gray-700 mb-2">Meta: Manter abaixo de R$50</p>
                <p className="text-gray-700">Frequência: Mensal</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="font-bold mb-3">Taxa de Conversão de Vendas</h3>
                <p className="text-gray-700 mb-2">Meta: Aumentar de 2% para 5% em 6 meses</p>
                <p className="text-gray-700">Frequência: Semanal</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg steampunk-border">
                <h3 className="font-bold mb-3">Retorno sobre Investimento em Marketing</h3>
                <p className="text-gray-700 mb-2">Meta: Manter acima de 300%</p>
                <p className="text-gray-700">Frequência: Mensal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nerdium-purple section-title">Conclusão</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg steampunk-border">
              <p className="text-lg mb-4">
                Este plano financeiro demonstra que a meta de lucro líquido mensal de R$5.000 é alcançável dentro do prazo estabelecido (até o fim de 2025), desde que:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-6">
                <li>A estratégia de marketing no TikTok seja implementada conforme planejado</li>
                <li>As soluções logísticas propostas sejam adotadas para garantir entregas seguras</li>
                <li>O mix de produtos seja ajustado continuamente com base na performance de vendas</li>
                <li>As margens de lucro sejam mantidas conforme recomendado</li>
              </ol>
              <p className="text-lg font-bold text-nerdium-purple">
                Com a execução disciplinada deste plano, a NerdiumLabs 3D tem potencial não apenas para atingir a meta de R$5.000 de lucro mensal, mas para superar significativamente este valor a partir do sétimo mês de operação otimizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação entre seções */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <Link href="/logistica" className="text-nerdium-purple hover:text-nerdium-copper mb-4 md:mb-0">
              ← Voltar para Logística
            </Link>
            <Link href="/" className="text-nerdium-purple hover:text-nerdium-copper font-medium">
              Voltar para Início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
