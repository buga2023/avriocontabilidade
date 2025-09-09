import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

/**
 * Seção de Depoimentos de Clientes
 */
export const TestimonialsSection: React.FC = () => {
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
      comment: 'Migramos para a Ávrio em janeiro de 2022 e de lá cá recebemos todo o suporte necessário, inclusive, com ajustes no nosso enquadramento tributário que nos fez economizar em impostos. Toda a equipe é solícita e responde nossas consultas rapidamente, incluindo por ligação, o que é fundamental para nós. A Ávrio vem superando nossas expectativas e por isso indicamos a todos que nos perguntam.',
      avatar: 'TY',
      avatarUrl: '/lovable-uploads/74fdd057-010a-4aee-84f2-082a0266c775.png'
    },
    {
      id: 3,
      name: 'Cândida Santos',
      company: 'Kimukeka Express',
      role: 'Sócia',
      rating: 5,
      comment: 'Desde que abrimos nossas lojas do Kimukeka Express, a Avrio está com a gente. Mais do que uma empresa de contabilidade, eles se tornaram verdadeiros parceiros. Sempre atentos, modernos e muito competentes, nos passam segurança em cada etapa. Em contabilidade, parceria faz toda diferença e a Avrio entrega isso com excelência e cuidado.',
      avatar: 'CS',
      avatarUrl: '/lovable-uploads/18e39902-f615-40c7-a0a9-9cc1ef722474.png'
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
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    {review.avatarUrl ? (
                      <AvatarImage 
                        src={review.avatarUrl} 
                        alt={review.name}
                        className="object-cover object-center"
                      />
                    ) : (
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {review.avatar}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-sm font-medium text-primary">{review.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};