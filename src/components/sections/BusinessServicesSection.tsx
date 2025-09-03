import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Building2, Users, RefreshCw } from 'lucide-react';

const services = [
  {
    id: 'endereco-fiscal',
    title: 'Endereço Fiscal',
    description: 'Sua sede em um endereço comercial confiável.',
    icon: FileText,
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 'abertura',
    title: 'Constituição Empresarial',
    description: 'Orientação completa para definir o melhor tipo societário, regime de tributação ideal e estrutura empresarial eficiente',
    icon: Building2,
    color: 'bg-emerald-500/10 text-emerald-600',
    featured: true
  },
  {
    id: 'alteracao',
    title: 'Alteração',
    description: 'Representa mudanças que devem ser feitas nos contratos social com o objetivo de alterar alguma cláusula ou razão da mudança na situação do negócio.',
    icon: RefreshCw,
    color: 'bg-orange-500/10 text-orange-600'
  },
  {
    id: 'consultoria',
    title: 'Consultoria',
    description: 'Orientação especializada para tomada de decisões estratégicas, otimização fiscal e crescimento sustentável do seu negócio.',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-600'
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
      // Scroll para a seção MEI para ME
      document.getElementById('mei-para-me')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções contábeis inteligentes para empresas de todos os portes, com tecnologia de ponta e uma equipe preparada para transformar números em resultados.
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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};