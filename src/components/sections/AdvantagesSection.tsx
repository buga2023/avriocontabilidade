import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import secaoFiscalImage from '@/assets/secao_fiscal.png';
import secaoPessoasImage from '@/assets/secao_pessoas.png';
import secaoContabilImage from '@/assets/secao_contabil.png';


/**
 * Seção de Vantagens dos Departamentos
 */
export const AdvantagesSection: React.FC = () => {
  const sections = [
    {
      id: 'fiscal',
      title: 'Quais as vantagens do Departamento Fiscal?',
      image: secaoFiscalImage,
      items: [
        'Segurança no cumprimento das obrigações fiscais',
        'Redução de Carga tributária em conformidade com a legislação',
        'Prevenção de erros e multas',
        'Maior alinhamento entre contabilidade e gestão',
        'Processos otimizados'
      ]
    },
    {
      id: 'pessoas',
      title: 'Quais as vantagens do Departamento Pessoal?',
      image: secaoPessoasImage,
      items: [
        'Processos de admissão simplificados e seguros',
        'Folha de pagamento precisa e confiável',
        'Cumprimento rigoroso da legislação trabalhista',
        'Gestão eficiente de férias, benefícios e rescisões'
      ]
    },
    {
      id: 'contabil',
      title: 'Quais as vantagens do Departamento Contábil?',
      image: secaoContabilImage,
      items: [
        'Demonstrações contábeis confiáveis',
        'Transparência e credibilidade',
        'Base sólida para decisões estratégicas',
        'Cumprimento das exigências legais'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Coluna da Imagem */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="relative overflow-hidden rounded-2xl border-0 shadow-lg">
                  <div className="relative">
                    <img
                      src={section.image}
                      alt={`Departamento ${section.id}`}
                      className="w-full h-[300px] lg:h-[400px] object-cover"
                    />
                    {/* Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        background: 'rgba(0, 51, 102, 0.2)' 
                      }}
                    />
                  </div>
                </Card>
              </div>

              {/* Coluna do Conteúdo */}
              <div className={`bg-white p-8 rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 
                  className="text-2xl lg:text-3xl font-semibold mb-8"
                  style={{ 
                    fontFamily: 'Nunito, sans-serif',
                    color: '#003366',
                    fontSize: '26px'
                  }}
                >
                  {section.title}
                </h2>
                
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                        style={{ 
                          borderColor: '#00AEEF',
                          backgroundColor: 'transparent'
                        }}
                      >
                        <Check 
                          className="w-4 h-4" 
                          style={{ color: '#00AEEF' }}
                        />
                      </div>
                      <span 
                        className="text-lg"
                        style={{ 
                          fontFamily: 'Nunito, sans-serif',
                          color: '#333333',
                          fontSize: '18px'
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};