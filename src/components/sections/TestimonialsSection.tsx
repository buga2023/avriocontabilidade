import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    company: 'TechCorp Ltda',
    role: 'Diretor Financeiro',
    rating: 5,
    comment: 'Excelente atendimento e profissionalismo. A Avrio transformou nossa gestão contábil com soluções eficientes e sempre dentro dos prazos. Recomendo!',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Maria Santos',
    company: 'Inovate Solutions',
    role: 'CEO',
    rating: 5,
    comment: 'Equipe muito competente e dedicada. Nos ajudaram a otimizar nossos processos fiscais e economizar significativamente em impostos. Parceria de longa data!',
    date: '2024-02-08'
  },
  {
    id: '3',
    name: 'Roberto Lima',
    company: 'Prime Comercial',
    role: 'Sócio-Proprietário',
    rating: 5,
    comment: 'Profissionais extremamente qualificados. A consultoria tributária da Avrio nos proporcionou uma economia substancial e maior segurança jurídica.',
    date: '2024-02-20'
  },
  {
    id: '4',
    name: 'Ana Costa',
    company: 'Global Enterprises',
    role: 'Gerente Administrativa',
    rating: 5,
    comment: 'Atendimento personalizado e soluções sob medida para nosso negócio. A Avrio entende as necessidades específicas de cada cliente.',
    date: '2024-03-05'
  },
  {
    id: '5',
    name: 'Fernando Oliveira',
    company: 'Summit Logistics',
    role: 'Diretor Executivo',
    rating: 5,
    comment: 'Transparência, eficiência e confiabilidade. A Avrio superou nossas expectativas em todos os aspectos. Equipe nota 10!',
    date: '2024-03-18'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <section 
      id="testimonials" 
      className="py-16 lg:py-24 bg-gradient-to-br from-secondary/10 to-primary/5"
      aria-label="Avaliações de clientes"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A confiança dos nossos clientes é nosso maior patrimônio. Veja os depoimentos de quem já experimentou nossos serviços.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-2xl font-bold text-foreground">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <span className="text-muted-foreground">
              {totalReviews} avaliações
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Comment */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString('pt-BR', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-6">
            Junte-se aos nossos clientes satisfeitos e transforme a gestão do seu negócio
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Solicitar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};