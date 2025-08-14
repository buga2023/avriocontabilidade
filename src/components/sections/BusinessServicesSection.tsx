import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Building2, Users, RefreshCw } from 'lucide-react';

const services = [
  {
    id: 'endereco-fiscal',
    title: 'Endereço Fiscal',
    description: 'Soluções de contabilidade constituídas por profissionais com larga experiência nas áreas de gestão empresarial.',
    icon: FileText,
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 'abertura',
    title: 'Abertura',
    description: 'A abertura de empresas serve para resolução de todas as etapas burocráticas do processo, permitindo você focar nas estratégias de crescimento do seu negócio.',
    icon: Building2,
    color: 'bg-emerald-500/10 text-emerald-600',
    featured: true
  },
  {
    id: 'mei-para-me',
    title: 'MEI para ME',
    description: 'O negócio cresceu e empreendedor, você faturou mais do que tinha imaginado. A hora é boa, temos a solução para seu negócio.',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-600',
    featured: true
  },
  {
    id: 'alteracao',
    title: 'Alteração',
    description: 'Representa mudanças que devem ser feitas nos contratos social com o objetivo de alterar alguma cláusula ou razão da mudança na situação do negócio.',
    icon: RefreshCw,
    color: 'bg-orange-500/10 text-orange-600'
  }
];

export const BusinessServicesSection: React.FC = () => {
  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'abertura') {
      // WhatsApp link para abertura gratuita
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
        'Olá! Gostaria de saber mais sobre a abertura gratuita de empresa.'
      )}`;
      window.open(whatsappUrl, '_blank');
    } else if (serviceId === 'mei-para-me') {
      // WhatsApp link para MEI para ME
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
        'Olá! Gostaria de saber mais sobre a migração de MEI para ME.'
      )}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Seu Contador Online te acompanha em{' '}
            <span className="text-primary">todas as fases da sua empresa!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para cada etapa do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 ${
                  service.featured 
                    ? 'border-primary/20 shadow-primary/10 ring-2 ring-primary/20' 
                    : 'border-border hover:border-primary/30'
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {service.featured && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        ⭐ Destaque
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary font-medium bg-primary/10 inline-block px-6 py-2 rounded-full border border-primary/20">
            📱 Clique nos cards para mais informações via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};