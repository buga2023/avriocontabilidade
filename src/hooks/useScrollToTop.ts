import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook para controlar o botão "voltar ao topo"
 * @param threshold - Distância do scroll para mostrar o botão (padrão: 300px)
 * @returns {boolean} showBackToTop - Se deve mostrar o botão
 * @returns {function} scrollToTop - Função para voltar ao topo
 */
export const useScrollToTop = (threshold: number = 300) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  return { showBackToTop, scrollToTop };
};