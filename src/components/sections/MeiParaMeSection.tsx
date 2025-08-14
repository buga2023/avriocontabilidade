import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building2, Calendar, MessageCircle, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumento do Faturamento',
    description: 'Fature até R$ 4.800.000,00 anuais como Microempresa'
  },
  {
    icon: Users,
    title: 'Contratação de Funcionários',
    description: 'Possibilidade de contratar até 9 funcionários'
  },
  {
    icon: Building2,
    title: 'Credibilidade Empresarial',
    description: 'Maior credibilidade no mercado e com fornecedores'
  }
];

const process = [
  {
    step: '01',
    title: 'Análise da Situação',
    description: 'Verificamos sua situação atual como MEI e analisamos a viabilidade da migração'
  },
  {
    step: '02',
    title: 'Planejamento Tributário',
    description: 'Definimos a melhor estratégia fiscal para sua nova empresa'
  },
  {
    step: '03',
    title: 'Processo de Migração',
    description: 'Realizamos toda a documentação e processos necessários'
  },
  {
    step: '04',
    title: 'Acompanhamento',
    description: 'Suporte contínuo durante todo o processo de transição'
  }
];

export const MeiParaMeSection: React.FC = () => {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      'Olá! Gostaria de saber mais sobre a migração de MEI para Microempresa (ME). Podem me ajudar?'
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="mei-para-me" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            MEI para <span className="text-primary">Microempresa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Seu negócio cresceu e chegou a hora de evoluir? Transforme seu MEI em Microempresa e 
            desbloqueie todo o potencial do seu empreendimento com nossa assessoria especializada.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Vantagens da Migração
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Como Funciona o Processo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 mt-4">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-20">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Quando Migrar de MEI para ME?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">É hora de migrar quando:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Faturamento anual ultrapassar R$ 81.000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Precisar contratar funcionários</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Quiser ter sócios no negócio</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Benefícios imediatos:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Maior limite de faturamento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Credibilidade empresarial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Possibilidade de crescimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pronto para Dar o Próximo Passo?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Nossa equipe especializada está pronta para guiá-lo em todo o processo de migração. 
                Fale conosco e descubra como podemos ajudar seu negócio a crescer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};