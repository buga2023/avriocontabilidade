import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * Componente BackToTop acessível
 * Aparece após scroll de 300px e oferece retorno suave ao topo
 */
export const BackToTop: React.FC = () => {
  const { showBackToTop, scrollToTop } = useScrollToTop(300);

  if (!showBackToTop) return null;

  return (
    <Button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-40
        w-12 h-12 rounded-full
        bg-primary hover:bg-primary-hover
        text-primary-foreground
        shadow-large hover:shadow-xl
        transition-all duration-300
        focus:ring-2 focus:ring-ring focus:ring-offset-2
      `}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </Button>
  );
};