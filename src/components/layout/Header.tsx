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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início', href: '/' },
    { id: 'mei-me', label: 'MEI para ME', href: '/mei-para-me' },
    { id: 'services', label: 'Serviços', href: '#' },
    { id: 'contact', label: 'Contato', href: '/contato' }
  ];

  const serviceItems = [
    { label: 'Auditoria tributária', href: '/servicos/auditoria-tributaria', targetId: 'service-auditoria' },
    { label: 'Consultoria tributária', href: '/servicos/consultoria-tributaria', targetId: 'service-consultoria' },
    { label: 'Departamento Contábil', href: '/servicos/departamento-contabil', targetId: 'service-contabil' },
    { label: 'Departamento de pessoal', href: '/servicos/departamento-de-pessoal', targetId: 'service-pessoal' },
    { label: 'Departamento societário', href: '/servicos/departamento-societario', targetId: 'service-consultoria' },
    { label: 'Departamento Fiscal', href: '/servicos/departamento-fiscal', targetId: 'service-fiscal' },
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
            {/* Menu Hambúrguer (Mobile à esquerda) */}
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

            {/* Logo */}
            <a 
              href="/" 
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
                  <li 
                    key={item.id} 
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocusCapture={() => setServicesOpen(true)}
                    onBlurCapture={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background rounded-md"
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {/* Dropdown */}
                    <div
                      id="services-menu"
                      className={`${servicesOpen ? 'block' : 'hidden'} group-hover:block group-focus-within:block absolute left-0 mt-2 z-[60] min-w-[240px] rounded-lg border border-border bg-background/95 backdrop-blur-sm shadow-lg`}
                      role="menu"
                    >
                      <ul className="py-2">
                        {serviceItems.map((service) => (
                          <li key={service.targetId}>
                            <a
                              href={service.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const el = service.targetId ? document.getElementById(service.targetId) : null;
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                  window.location.href = service.href;
                                }
                              }}
                              className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
                              role="menuitem"
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
                      onClick={(e) => {
                        if (item.id === 'home' || item.id === 'contact' || item.id === 'mei-me') {
                          e.preventDefault();
                          let targetId = '';
                          if (item.id === 'home') targetId = 'home';
                          else if (item.id === 'contact') targetId = 'contact';
                          else if (item.id === 'mei-me') targetId = 'mei-para-me';
                          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-foreground hover:text-primary transition-colors relative group py-2.5"
                      aria-label={`Ir para ${item.label}`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full" />
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
              {menuItems.filter(mi => mi.id !== 'services').map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.id === 'home' || item.id === 'contact' || item.id === 'mei-me') {
                        e.preventDefault();
                        handleMenuItemClick();
                        let targetId = '';
                        if (item.id === 'home') targetId = 'home';
                        else if (item.id === 'contact') targetId = 'contact';
                        else if (item.id === 'mei-me') targetId = 'mei-para-me';
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        handleMenuItemClick();
                      }
                    }}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
                    aria-label={`Ir para ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Serviços - lista dobrável */}
              <li>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary text-foreground"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span>Serviços</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul
                  id="mobile-services-menu"
                  className={`overflow-hidden transition-all ${mobileServicesOpen ? 'max-h-96 mt-1' : 'max-h-0'} space-y-1`}
                >
                  {serviceItems.map((service) => (
                    <li key={service.targetId}>
                      <a
                        href={service.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuItemClick();
                          const el = service.targetId ? document.getElementById(service.targetId) : null;
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.location.href = service.href;
                          }
                        }}
                        className="block px-6 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-secondary/80 rounded-md transition-colors"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
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