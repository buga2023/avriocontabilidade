import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/hooks/useContactForm';
import Map from '@/components/ui/Map';

/**
 * Seção de Contato com formulário seguro e informações de contato
 */
export const ContactSection: React.FC = () => {
  const { formData, isSubmitting, handleInputChange, submitForm } = useContactForm();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 3456-7890',
      description: 'Seg a Sex, 8h às 17h',
      href: 'tel:+551134567890'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@avrio.com.br',
      description: 'Respondemos em até 2h',
      href: 'mailto:contato@avrio.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Caminho das Árvores',
      description: 'Salvador, BA - CEP 41820-021',
      href: 'https://maps.app.goo.gl/pFiEbJjWtDZcNHQt5'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Segunda a Sexta',
      description: '8h às 17h',
      href: null
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-secondary/30"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="contact-title"
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa com soluções contábeis personalizadas. 
            Entre em contato e solicite uma proposta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" aria-hidden="true" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={submitForm} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Seu nome completo"
                      aria-describedby="name-error"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="seu@email.com"
                      aria-describedby="email-error"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full resize-none"
                    placeholder="Conte-nos sobre suas necessidades contábeis..."
                    aria-describedby="message-error"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Campos obrigatórios. Seus dados estão protegidos pela nossa política de privacidade.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <Card 
                    key={index}
                    className="card-professional group hover:bg-primary/5 transition-colors"
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                  >
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.href ? (
                  <a 
                    key={index}
                    href={info.href}
                    className="block hover:scale-105 transition-transform"
                    aria-label={`${info.title}: ${info.value}`}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : content;
              })}
            </div>

            {/* Interactive Map */}
            <Card className="card-professional overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Map className="w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};