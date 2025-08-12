import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';


interface HeaderProps {
  className?: string;
}

/**
 * Componente Header com navegação responsiva e acessível
 * Implementa WCAG 2.1 guidelines para navegação
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Menu items para navegação
  const menuItems = [
    { id: 'home', label: 'Início', href: '#home' },
    { id: 'services', label: 'Serviços', href: '#services' },
    { id: 'contact', label: 'Contato', href: '#contact' }
  ];

  const serviceItems = [
    { label: 'Auditoria tributária', targetId: 'service-auditoria' },
    { label: 'Consultoria tributária', targetId: 'service-consultoria' },
    { label: 'Departamento Contábil', targetId: 'service-contabil' },
    { label: 'Departamento de pessoal', targetId: 'service-pessoal' },
    { label: 'Departamento societário', targetId: 'service-consultoria' },
    { label: 'Departamento Fiscal', targetId: 'service-fiscal' },
  ];

  // Efeito para detectar scroll e adicionar sombra ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu ao clicar em link (mobile)
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Fecha menu ao pressionar Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-medium' : 'bg-transparent'}
        ${className}
      `}
      role="banner"
    >
      <div className="container mx-auto max-w-[1200px] px-6">
        <nav 
          className="grid grid-cols-[max-content_1fr_max-content] items-center h-16 lg:h-20 gap-4"
          aria-label="Navegação principal"
        >
          {/* Esquerda: Logo + Menu */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-primary hover:text-primary/90 transition-colors"
              aria-label="Avrio Contabilidade - Página inicial"
            >
              <img 
                src="/lovable-uploads/911f61fb-5c56-4f0e-aa6b-f46e44c69724.png" 
                alt="Logo Avrio Soluções Corporativas" 
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </a>

            {/* Menu Desktop */}
            <ul className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                item.id === 'services' ? (
                  <li key={item.id} className="relative group">
                    <button
                      type="button"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 py-2"
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 hidden group-hover:block z-[60] min-w-[240px] rounded-lg border border-primary/25 bg-background shadow-lg">
                      <ul className="py-2">
                        {serviceItems.map((service) => (
                          <li key={service.targetId}>
                            <a
                              href={`#${service.targetId}`}
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(service.targetId)?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary/60"
                            >
                              {service.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors relative group py-2"
                      aria-label={`Ir para ${item.label}`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                )
              ))}
            </ul>
          </div>

          {/* Centro: CTA principal */}
          <div className="justify-self-center">
            <Button
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Abrir sua empresa gratuitamente"
              onClick={() => document.getElementById('client-platform')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Abrir sua empresa
            </Button>
          </div>

          {/* Direita: Ações + Hambúrguer no mobile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="outline"
                className="border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://onvio.com.br', '_blank')}
                aria-label="Ir para a Plataforma do Cliente"
              >
                Plataforma do Cliente
              </Button>
              <Button 
                variant="default"
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Fale Conosco"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Menu Toggle Button Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Menu Mobile */}
        <div
          id="mobile-menu"
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
          aria-hidden={!isMenuOpen}
        >
          <div className="py-4 border-t border-border">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleMenuItemClick}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
                    aria-label={`Ir para ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 px-4">
              <p className="text-xs uppercase text-muted-foreground px-2">Serviços</p>
              <ul className="mt-1 space-y-1">
                {serviceItems.map((service) => (
                  <li key={service.targetId}>
                    <a
                      href={`#${service.targetId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuItemClick();
                        document.getElementById(service.targetId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block px-4 py-2 text-sm text-foreground/90 hover:text-foreground hover:bg-secondary rounded-md"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 px-4 space-y-3">
              <a 
                href="tel:+557139011293" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                (71) 3901-1293
              </a>
              <a 
                href="mailto:contato@avrio.com.br" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <Mail className="w-4 h-4" />
                contato@avrio.com.br
              </a>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  handleMenuItemClick();
                  window.open('https://onvio.com.br', '_blank');
                }}
              >
                Plataforma do Cliente
              </Button>
              <Button 
                variant="default"
                className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
                onClick={() => {
                  handleMenuItemClick();
                  document.getElementById('client-platform')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Abrir sua empresa
              </Button>
              <Button 
                variant="default"
                className="btn-primary w-full"
                onClick={() => {
                  handleMenuItemClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solicitar Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};