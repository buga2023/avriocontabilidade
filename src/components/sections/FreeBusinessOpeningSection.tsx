import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';

/**
 * Seção promocional para abertura gratuita de empresa
 */
export const FreeBusinessOpeningSection: React.FC = () => {
  const handleAberturaGratisClick = () => {
    try {
      const message = encodeURIComponent('Olá! Gostaria de abrir minha empresa gratuitamente com a Ávrio.');
      window.open(`https://wa.me/5571390115577?text=${message}`, '_blank');
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error);
    }
  };

  return (
    <section id="abertura-gratuita" className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Seção Promocional - Abertura de Empresa Grátis */}
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border border-border/30 relative overflow-hidden">
            {/* Background pattern interno */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 border border-accent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border border-primary rounded-full"></div>
            </div>
            
            <div className="text-center space-y-8 relative z-10">
              
              {/* Ícone com animação */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-accent/30">
                  <Building2 className="w-10 h-10 text-accent" />
                </div>
              </div>

              {/* Título Principal */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Abra sua empresa
                  <span className="block text-primary font-extrabold">
                    100% grátis
                  </span>
                </h2>
                <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
                  <span className="text-primary text-xl md:text-2xl font-bold">
                    Sem pagamento de honorários na abertura
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                Nós cuidamos de toda a burocracia para você iniciar seu negócio sem custos. 
                <span className="text-foreground font-semibold"> Processo 100% digital e seguro.</span>
              </p>

              {/* Benefícios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
                <div className="flex items-center justify-center space-x-3 bg-accent/5 p-4 rounded-xl border border-accent/10">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Abertura em até 5 dias</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Suporte especializado</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-secondary/20 p-4 rounded-xl border-2 border-secondary">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground font-medium">Documentação completa</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <Button
                  onClick={handleAberturaGratisClick}
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0"
                >
                  Quero abrir grátis agora
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  Fale com nossos especialistas via WhatsApp
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};