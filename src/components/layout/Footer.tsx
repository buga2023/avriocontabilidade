import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useContactForm } from '@/hooks/useContactForm';

/**
 * Componente Footer profissional com newsletter e informações de contato
 * Otimizado para SEO e acessibilidade
 */
export const Footer: React.FC = () => {
  const { formData, isSubmitting, handleInputChange, submitForm } = useContactForm();

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(71) 3456-7890',
      href: 'tel:+557134567890'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'atendimento@avrio.com.br',
      href: 'mailto:atendimento@avrio.com.br'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Salvador, BA - Brasil',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/avrio',
      ariaLabel: 'Siga-nos no Facebook'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/avriosolucoes/',
      ariaLabel: 'Siga-nos no Instagram'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/avrio',
      ariaLabel: 'Conecte-se no LinkedIn'
    }
  ];

  const quickLinks = [
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Planos', href: '#plans' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contact' }
  ];

  const legalLinks = [
    { label: 'Política de Privacidade', href: '/privacy' },
    { label: 'Termos de Uso', href: '/terms' },
    { label: 'LGPD', href: '/lgpd' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Receba Dicas Contábeis
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Mantenha-se atualizado com as últimas mudanças na legislação tributária
            </p>
            
            <form onSubmit={submitForm} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                aria-label="Digite seu e-mail para newsletter"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-8"
              >
                {isSubmitting ? 'Enviando...' : 'Inscrever'}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Avrio Contabilidade</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Especialistas em contabilidade empresarial, oferecendo soluções completas 
              para o crescimento sustentável do seu negócio há mais de 15 anos.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    aria-label={`${contact.label}: ${contact.value}`}
                  >
                    <IconComponent className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{contact.value}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Avrio Contabilidade. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            CNPJ: 12.345.678/0001-90 | CRC: BA-123456/O-7
          </p>
        </div>
      </div>
    </footer>
  );
};