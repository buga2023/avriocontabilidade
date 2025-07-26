import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * Seção de Serviços com grid responsivo e cards acessíveis
 */
export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade Geral',
      description: 'Escrituração contábil completa, demonstrações financeiras e conciliações bancárias.',
      features: ['Balanços e DRE', 'Fluxo de caixa', 'Análise patrimonial'],
      popular: false
    },
    {
      icon: FileText,
      title: 'Gestão Fiscal',
      description: 'Apuração de impostos, cumprimento de obrigações acessórias e planejamento tributário.',
      features: ['ICMS, IPI, PIS/COFINS', 'Simples Nacional', 'Lucro Real/Presumido'],
      popular: true
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Empresarial',
      description: 'Análise de viabilidade, reestruturação societária e consultoria estratégica.',
      features: ['Análise de custos', 'Planejamento estratégico', 'Fusões e aquisições'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Compliance e Auditoria',
      description: 'Auditoria interna, compliance fiscal e adequação às normas regulamentares.',
      features: ['Auditoria preventiva', 'LGPD compliance', 'Certificações ISO'],
      popular: false
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Folha de pagamento, admissões, demissões e cumprimento das obrigações trabalhistas.',
      features: ['eSocial', 'FGTS e INSS', 'Rescisões e férias'],
      popular: false
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Relatórios gerenciais, dashboards executivos e análise de indicadores financeiros.',
      features: ['KPIs financeiros', 'Dashboards interativos', 'Análise preditiva'],
      popular: false
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-background"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="services-title"
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções contábeis completas para empresas de todos os portes, 
            com tecnologia avançada e equipe especializada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`
                  card-professional group hover:scale-105 transition-all duration-300 relative
                  ${service.popular ? 'ring-2 ring-accent' : ''}
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saber Mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Precisa de um Serviço Específico?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe está preparada para atender demandas específicas do seu negócio. 
            Entre em contato para uma consultoria personalizada.
          </p>
          <Button 
            size="lg"
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};