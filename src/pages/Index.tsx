import React, { useEffect, Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';

// Lazy loading dos componentes de seção para melhor performance
const HeroSection = React.lazy(() => 
  import('@/components/sections/HeroSection').then(module => ({ default: module.HeroSection }))
);
const ServicesSection = React.lazy(() => 
  import('@/components/sections/ServicesSection').then(module => ({ default: module.ServicesSection }))
);
const ContactSection = React.lazy(() => 
  import('@/components/sections/ContactSection').then(module => ({ default: module.ContactSection }))
);

/**
 * Componente principal da aplicação - Avrio Contabilidade
 * 
 * Refatorado seguindo melhores práticas de:
 * - Acessibilidade (WCAG 2.1)
 * - Performance (lazy loading, code splitting)
 * - SEO (meta tags, structured data)
 * - Segurança (sanitização de inputs)
 * - Responsividade (mobile-first)
 */
const Index: React.FC = () => {
  // Inicialização de bibliotecas externas
  useEffect(() => {
    // Configuração do AOS (Animate On Scroll) de forma assíncrona
    const initializeAOS = async () => {
      try {
        const AOS = await import('aos');
        await import('aos/dist/aos.css');
        
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-cubic',
          offset: 100
        });
      } catch (error) {
        console.warn('Falha ao carregar AOS:', error);
      }
    };

    initializeAOS();
  }, []);

  return (
    <>
      {/* Skip link para acessibilidade */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Pular para o conteúdo principal"
      >
        Pular para o conteúdo
      </a>

      {/* Header com navegação */}
      <Header />

      {/* Conteúdo principal */}
      <main id="main-content" role="main">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        }>
          <HeroSection />
        </Suspense>

        <Suspense fallback={
          <div className="py-20 flex justify-center">
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        }>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={
          <div className="py-20 flex justify-center">
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        }>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão voltar ao topo */}
      <BackToTop />
    </>
  );
};

export default Index;
