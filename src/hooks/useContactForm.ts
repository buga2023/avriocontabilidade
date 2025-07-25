import { useState, useCallback } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { toast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  message?: string;
}

/**
 * Custom hook para gerenciar formulário de contato com validação e saneamento
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Saneamento básico do input para prevenir XSS
    const sanitizedValue = DOMPurify.sanitize(value);
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: sanitizedValue 
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
  }, []);

  const submitForm = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação adicional
      if (!formData.email || !formData.name) {
        throw new Error('Nome e email são obrigatórios');
      }

      // Aqui você faria a chamada para sua API
      // await apiService.submitContact(formData);
      
      toast({
        title: "Mensagem enviada!",
        description: `Obrigado, ${formData.name}! Entraremos em contato em breve.`,
        variant: "default"
      });

      resetForm();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    isSubmitting,
    handleInputChange,
    submitForm,
    resetForm
  };
};