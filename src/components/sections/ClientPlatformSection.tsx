import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Building2 } from 'lucide-react';

const ClientPlatformSection = () => {
  const handleEnviarClick = () => {
    window.open('https://seu-dominio.com/envio', '_blank');
  };

  const handleAberturaGratisClick = () => {
    window.open('https://seu-dominio.com/abertura-gratis', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Botão Enviar */}
          <div className="text-center">
            <Button
              onClick={handleEnviarClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Enviar
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Seção Promocional - Abertura de Empresa Grátis */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border/50">
            <div className="text-center space-y-6">
              
              {/* Ícone */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Título Principal */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Abra sua empresa grátis
                </h2>
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent text-lg md:text-xl font-semibold">
                    Sem pagamento de honorários na abertura
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Nós cuidamos de toda a burocracia para você iniciar seu negócio sem custos.
              </p>

              {/* Call to Action */}
              <div className="pt-4">
                <Button
                  onClick={handleAberturaGratisClick}
                  variant="secondary"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Quero abrir grátis
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Elementos decorativos */}
              <div className="flex justify-center space-x-4 pt-8 opacity-60">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientPlatformSection;