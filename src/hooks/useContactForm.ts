import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';
import { 
  contactFormSchema, 
  ContactFormData, 
  validateAndSanitizeContactForm,
  contactRateLimiter 
} from '@/lib/validation';

/**
 * Custom hook para gerenciar formulário de contato com validação e saneamento
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));

    // Limpa erro de validação quando o usuário digita
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [validationErrors]);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setValidationErrors({});
  }, []);

  const submitForm = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});

    try {
      // Rate limiting
      const userIdentifier = formData.email || 'anonymous';
      if (!contactRateLimiter.isAllowed(userIdentifier)) {
        const remainingTime = Math.ceil(contactRateLimiter.getRemainingTime(userIdentifier) / 1000);
        throw new Error(`Muitas tentativas. Tente novamente em ${remainingTime} segundos.`);
      }

      // Validação e sanitização
      const validatedData = validateAndSanitizeContactForm(formData);

      // Aqui você faria a chamada para sua API
      // await apiService.submitContact(validatedData);
      
      toast({
        title: "Mensagem enviada!",
        description: `Obrigado, ${validatedData.name}! Entraremos em contato em breve.`,
        variant: "default"
      });

      resetForm();
    } catch (error) {
      if (error instanceof Error && error.message.includes('validation')) {
        // Erros de validação do Zod
        const zodError = error as any;
        if (zodError.errors) {
          const newErrors: Record<string, string> = {};
          zodError.errors.forEach((err: any) => {
            if (err.path) {
              newErrors[err.path[0]] = err.message;
            }
          });
          setValidationErrors(newErrors);
        }
      } else {
        toast({
          title: "Erro ao enviar",
          description: error instanceof Error ? error.message : "Tente novamente mais tarde",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    isSubmitting,
    validationErrors,
    handleInputChange,
    submitForm,
    resetForm
  };
};