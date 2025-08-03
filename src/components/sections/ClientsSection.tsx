import React from 'react';
import { Card } from '@/components/ui/card';
import techCorpLogo from '@/assets/client-techcorp.png';
import globalLogo from '@/assets/client-global.png';
import innovateLogo from '@/assets/client-innovate.png';
import primeLogo from '@/assets/client-prime.png';
import apexLogo from '@/assets/client-apex.png';
import summitLogo from '@/assets/client-summit.png';

/**
 * Seção de Clientes Notórios
 */
export const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: 'TechCorp Solutions',
      logo: techCorpLogo,
      sector: 'Tecnologia'
    },
    {
      name: 'Global Industries',
      logo: globalLogo,
      sector: 'Indústria'
    },
    {
      name: 'Innovate Group',
      logo: innovateLogo,
      sector: 'Consultoria'
    },
    {
      name: 'Prime Enterprises',
      logo: primeLogo,
      sector: 'Finanças'
    },
    {
      name: 'Apex Holdings',
      logo: apexLogo,
      sector: 'Investimentos'
    },
    {
      name: 'Summit Corporation',
      logo: summitLogo,
      sector: 'Imobiliário'
    }
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