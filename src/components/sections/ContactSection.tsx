import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/hooks/useContactForm';
import Map from '@/components/ui/Map';
import specialistImage from '@/assets/specialist-contact.jpg';

/**
 * Seção de Contato com formulário seguro e informações de contato
 */
export const ContactSection: React.FC = () => {
  const { formData, isSubmitting, handleInputChange, submitForm } = useContactForm();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(71) 3456-7890',
      description: 'Seg a Sex, 8h às 17h',
      href: 'tel:+557134567890'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'atendimento@avrio.com.br',
      description: 'Respondemos em até 2h',
      href: 'mailto:atendimento@avrio.com.br'
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
    <>
      {/* Hero Contact Section - Based on provided image */}
      <section 
        id="contact" 
        className="py-20 bg-background"
        aria-labelledby="contact-title"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Specialist */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Fale com um Especialista!
              </h2>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-accent p-4">
                    <img 
                      src={specialistImage}
                      alt="Especialista em contabilidade"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl font-semibold text-foreground">
                Estamos aqui para ajudá-lo.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                  ENVIE SUA MENSAGEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitForm} className="space-y-6" noValidate>
                  <div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 focus:border-accent"
                      placeholder="Nome:"
                    />
                  </div>
                  
                  <div>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 focus:border-accent"
                      placeholder="Nome da empresa:"
                    />
                  </div>

                  <div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 focus:border-accent"
                      placeholder="Telefone:"
                    />
                  </div>
                  
                  <div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 focus:border-accent"
                      placeholder="Email:"
                    />
                  </div>

                  <div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 resize-none focus:border-accent"
                      placeholder="Mensagem:"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover text-accent-foreground py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Enviando...' : 'ENVIAR'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Outras Formas de Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender sua empresa com soluções contábeis personalizadas.
            </p>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
          </div>

          {/* Interactive Map */}
          <div>
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
    </>
  );
};