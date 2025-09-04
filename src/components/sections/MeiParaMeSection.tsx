import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building2, Calculator, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Maior Faturamento',
    description: 'Possibilidade de faturar milhões por ano, muito além do limite MEI.'
  },
  {
    icon: Users,
    title: 'Mais Funcionários',
    description: 'Contrate mais funcionários e expanda sua equipe sem limitações.'
  },
  {
    icon: Building2,
    title: 'Credibilidade',
    description: 'Maior credibilidade no mercado e facilidade de obtenção de crédito e parcerias estratégicas.'
  },
  {
    icon: Calculator,
    title: 'Benefícios Fiscais',
    description: 'Acesso a regimes tributários mais vantajosos como Simples Nacional.'
  }
];

const process = [
  {
    step: '1',
    title: 'Análise da Situação',
    description: 'Avaliamos sua situação atual e identificamos as necessidades da migração.'
  },
  {
    step: '2',
    title: 'Documentação',
    description: 'Preparamos todos os documentos necessários para a transição.'
  },
  {
    step: '3',
    title: 'Migração',
    description: 'Realizamos todo o processo de migração de MEI para ME.'
  },
  {
    step: '4',
    title: 'Acompanhamento',
    description: 'Oferecemos suporte contínuo após a migração.'
  }
];

export const MeiParaMeSection: React.FC = () => {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      'Olá! Gostaria de saber mais sobre a migração de MEI para ME.'
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="mei-para-me" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Migração de <span className="text-primary">MEI para ME</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seu negócio cresceu e chegou a hora de evoluir! Fazemos toda a migração de MEI para Microempresa de forma rápida e segura.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Vantagens da Migração
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Como Funciona o Processo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Criteria */}
        <div className="mb-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                Quando Migrar para ME?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Faturamento anual acima de R$ 81.000,00</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Necessidade de contratar funcionários</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Busca por mais credibilidade no mercado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Desejo de expandir atividades</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Necessidade de emitir notas fiscais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Acesso a linhas de crédito empresariais</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Fazer a Migração?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossos especialistas cuidam de todo o processo para você. Migração rápida, segura e sem complicações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={handleWhatsAppContact}
                className="bg-white text-primary hover:bg-white/90"
              >
                Falar com Especialista
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};