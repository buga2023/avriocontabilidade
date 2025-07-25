import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

/**
 * Schema de validação para formulário de contato
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
    
  email: z
    .string()
    .email('E-mail inválido')
    .max(100, 'E-mail deve ter no máximo 100 caracteres'),
    
  company: z
    .string()
    .max(100, 'Nome da empresa deve ter no máximo 100 caracteres')
    .optional(),
    
  message: z
    .string()
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres')
    .optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Sanitização avançada de inputs
 */
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Remove todas as tags HTML
    ALLOWED_ATTR: [], // Remove todos os atributos
    KEEP_CONTENT: true, // Mantém o conteúdo textual
  }).trim();
};

/**
 * Validação e sanitização combinadas
 */
export const validateAndSanitizeContactForm = (data: unknown) => {
  // Primeiro sanitiza os dados
  const sanitizedData = typeof data === 'object' && data !== null
    ? Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          typeof value === 'string' ? sanitizeInput(value) : value
        ])
      )
    : data;

  // Depois valida com Zod
  return contactFormSchema.parse(sanitizedData);
};

/**
 * Rate limiting simples no frontend
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 3, windowMs = 60000) { // 3 tentativas por minuto
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove tentativas antigas
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Adiciona nova tentativa
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length < this.maxAttempts) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const timeLeft = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, timeLeft);
  }
}

export const contactRateLimiter = new RateLimiter();