import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useContactForm } from '@/hooks/useContactForm';
import Map from '@/components/ui/Map';
const specialistImage = '/lovable-uploads/04a01107-3769-4c11-900a-64d6b5ffd288.png';

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

  const clientReviews = [
    {
      id: 1,
      name: 'Michel',
      company: 'ME Logística',
      role: 'Diretor',
      rating: 5,
      comment: `Ser cliente da Ávrio Contabilidade tem sido uma experiência incrível para mim e para o meu negócio. Eles sempre estão prontos para responder às minhas dúvidas e me fornecer a orientação necessária. O que mais me impressiona é a dedicação da Ávrio em tornar a contabilidade uma experiência descomplicada e eficiente.`,
      avatar: 'MI',
      avatarUrl: '/lovable-uploads/d52417dc-4955-4c5d-9add-d6d231b30a52.png'
    },
    {
      id: 2,
      name: 'Tiago e Yan',
      company: 'KOG Construtora',
      role: 'Diretores',
      rating: 5,
      comment: 'A Ávrio vem superando nossas expectativas e por isso indicamos a todos que nos perguntam.',
      avatar: 'TY',
      avatarUrl: '/lovable-uploads/74fdd057-010a-4aee-84f2-082a0266c775.png'
    },
    {
      id: 3,
      name: 'Carla Souza',
      company: 'Restaurante KI-MUKEKA',
      role: 'Gerente',
      rating: 5,
      comment: 'Atendimento rápido e consultoria assertiva que impactou positivamente nossa operação.',
      avatar: 'CS'
    },
    {
      id: 4,
      name: 'Renata Lima',
      company: 'Amazon Temper Salvador-Bahia',
      role: 'Coordenadora Financeira',
      rating: 5,
      comment: 'Excelente parceria na gestão fiscal e contábil, gerando economia e segurança.',
      avatar: 'RL'
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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="xl:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 lg:gap-6 mb-8">
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

          {/* Location Info - Expanded */}
          <div className="xl:col-span-2">
            <Card className="card-professional h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Nossa Localização
                </CardTitle>
                <p className="text-muted-foreground">
                  Estamos localizados no coração de Salvador, em uma das regiões mais acessíveis da cidade.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Endereço Completo */}
                <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Endereço Completo</h3>
                  <div className="space-y-2">
                    <p className="text-foreground">Caminho das Árvores, Salvador, BA</p>
                    <p className="text-muted-foreground">CEP: 41820-021</p>
                    <p className="text-muted-foreground">Região: Caminho das Árvores</p>
                    <p className="text-muted-foreground">Bairro: Salvador</p>
                  </div>
                </div>

                {/* Pontos de Referência */}
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Pontos de Referência</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Shopping Iguatemi</p>
                        <p className="text-sm text-muted-foreground">5 minutos de distância</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Salvador Shopping</p>
                        <p className="text-sm text-muted-foreground">10 minutos de distância</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Av. Tancredo Neves</p>
                        <p className="text-sm text-muted-foreground">Fácil acesso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Estacionamento</p>
                        <p className="text-sm text-muted-foreground">Disponível no local</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => window.open('https://maps.app.goo.gl/pFiEbJjWtDZcNHQt5', '_blank')}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Abrir no Google Maps
                  </Button>
                  
                  <Button
                    onClick={() => window.open('https://www.google.com/maps/dir//Caminho+das+Árvores,+Salvador+-+BA', '_blank')}
                    variant="outline"
                    className="flex-1"
                  >
                    Ver Rotas
                  </Button>
                </div>

                {/* Informações de Transporte */}
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Como Chegar</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">🚗</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">De Carro</p>
                        <p className="text-sm text-muted-foreground">Acesso fácil pela Av. Tancredo Neves</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">🚌</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Transporte Público</p>
                        <p className="text-sm text-muted-foreground">Várias linhas de ônibus passam pela região</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Reviews Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os depoimentos de empresários que confiam na Avrio para suas necessidades contábeis.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clientReviews.map((review, index) => (
            <Card 
              key={review.id}
              className="card-professional relative overflow-hidden group hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{review.comment}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    {review.avatarUrl ? (
                      <AvatarImage src={review.avatarUrl} alt={review.name} />
                    ) : (
                      <AvatarImage src="" alt={review.name} />
                    )}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-sm text-primary font-medium">{review.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se aos nossos clientes satisfeitos
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};