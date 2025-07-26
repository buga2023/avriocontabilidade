import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, TrendingUp, Shield } from 'lucide-react';

// Lazy loading de imagem com fallback
const LazyHeroImage = React.lazy(() => 
  import('@/components/ui/optimized-image').then(module => ({ default: module.OptimizedImage }))
);

/**
 * Seção Hero otimizada para conversão e SEO
 * Implementa lazy loading e schema markup para SEO
 */
export const HeroSection: React.FC = () => {
  const benefits = [
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Gestão fiscal e tributária especializada'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Estratégica',
      description: 'Orientação para crescimento sustentável'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Conformidade total com legislação'
    }
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="text-center max-w-4xl">
            <h1 
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Contabilidade que{' '}
              <span className="text-accent-foreground bg-accent px-3 py-1 rounded-lg inline-block">
                Impulsiona
              </span>{' '}
              seu Negócio
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Especialistas em soluções contábeis para empresas que buscam crescimento 
              sustentável e conformidade fiscal completa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Avrio Contabilidade",
            "description": "Especialistas em soluções contábeis para empresas que buscam crescimento sustentável",
            "url": "https://avrio.com.br",
            "logo": "https://avrio.com.br/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-3456-7890",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            }
          })
        }}
      />
    </section>
  );
};