import React from 'react';
import { Card } from '@/components/ui/card';

/**
 * Seção de Clientes Notórios
 */
export const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'Restaurante KI-MUKEKA', logo: '/lovable-uploads/c502354d-c018-4699-95c5-91007d7e5348.png', sector: 'Restaurante' },
    { name: 'Maíra Gentil', logo: '/lovable-uploads/5152d090-9ea7-48f5-9a4a-a94b5382d367.png', sector: 'Fonoaudiologia' },
    { name: 'VS Salão de Beleza', logo: '/lovable-uploads/9d07c6e3-8256-41b1-a7c0-a5f40a5889a6.png', sector: 'Beleza & Estética' },
    { name: 'Daniela Cavalcanti - Clínica Médica', logo: '/lovable-uploads/4ccd0dea-a767-41b0-a579-fa890f3d9752.png', sector: 'Saúde' },
    { name: 'Amazon Temper Salvador-Bahia', logo: '/lovable-uploads/a3a92e97-b955-469c-8dff-f333e6a00ab2.png', sector: 'Indústria' },
    { name: 'KOG Construtora', logo: '/lovable-uploads/ecf746d9-cb9b-45bc-b99b-1fb3c28a58d9.png', sector: 'Construção' },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Clientes Notórios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Temos o orgulho de atender empresas de diversos setores, oferecendo soluções contábeis personalizadas que impulsionam o crescimento e o sucesso dos nossos parceiros.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <Card
              key={client.name}
              className="group hover:shadow-lg transition-all duration-300 bg-background border-border hover:border-primary/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center bg-background rounded-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {client.sector}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Faça Parte dos Nossos Cases de Sucesso
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a essas empresas que confiam na Ávrio para gerenciar suas demandas contábeis e fiscais com excelência e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma proposta para os serviços contábeis da Ávrio.', '_blank')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                Solicitar Proposta
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                Conhecer Serviços
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};