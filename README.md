# Avrio Contabilidade - Website Refatorado

Uma aplicação React profissional e acessível para escritório de contabilidade, seguindo as melhores práticas de desenvolvimento web moderno.

## 🚀 Características Principais

### ✅ Estrutura e Arquitetura
- **Componentes Modulares**: Separação clara de responsabilidades
- **Hooks Customizados**: Lógica reutilizável e testável
- **Lazy Loading**: Carregamento otimizado de componentes
- **Code Splitting**: Divisão automática do código para melhor performance

### ♿ Acessibilidade (WCAG 2.1)
- **Skip Links**: Navegação rápida para conteúdo principal
- **ARIA Labels**: Atributos semânticos corretos
- **Foco Visível**: Indicadores claros para navegação por teclado
- **Contraste**: Paleta de cores que atende aos padrões de acessibilidade

### 📱 Responsividade
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Grid/Flexbox**: Layout flexível e adaptável
- **Breakpoints**: Pontos de quebra semânticos
- **Imagens Responsivas**: Otimização automática para diferentes telas

### ⚡ Performance
- **React.lazy**: Carregamento assíncrono de componentes
- **Suspense**: Loading states elegantes
- **Memoização**: Otimização de re-renderizações
- **Imagens Otimizadas**: Lazy loading e fallbacks

### 🔍 SEO e Meta Tags
- **Meta Tags Dinâmicas**: Otimização para motores de busca
- **Schema.org**: Dados estruturados para SEO
- **Open Graph**: Compartilhamento otimizado em redes sociais
- **Canonical URLs**: Prevenção de conteúdo duplicado

### 🔒 Segurança
- **Sanitização de Inputs**: Prevenção contra XSS
- **DOMPurify**: Limpeza segura de conteúdo
- **CSP Headers**: Content Security Policy
- **HTTPS Enforcement**: Redirecionamento seguro

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal com hooks modernos
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Framework de estilização utilitário
- **Shadcn/UI**: Componentes acessíveis e customizáveis
- **Lucide React**: Ícones SVG otimizados
- **React Router**: Navegação client-side
- **AOS**: Animações on scroll
- **DOMPurify**: Sanitização de conteúdo

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Footer.tsx       # Rodapé com informações
│   │   └── BackToTop.tsx    # Botão voltar ao topo
│   ├── sections/            # Seções da página
│   │   ├── HeroSection.tsx  # Seção principal
│   │   ├── ServicesSection.tsx # Serviços oferecidos
│   │   └── ContactSection.tsx  # Formulário de contato
│   └── ui/                  # Componentes UI base
│       ├── button.tsx       # Botões customizados
│       ├── card.tsx         # Cards responsivos
│       ├── input.tsx        # Inputs acessíveis
│       └── optimized-image.tsx # Imagens otimizadas
├── hooks/                   # Hooks customizados
│   ├── useScrollToTop.ts    # Controle de scroll
│   ├── useContactForm.ts    # Formulário de contato
│   └── use-mobile.tsx       # Detecção mobile
├── lib/                     # Utilitários
│   └── utils.ts             # Funções auxiliares
├── pages/                   # Páginas da aplicação
│   ├── Index.tsx            # Página principal
│   └── NotFound.tsx         # Página de erro 404
└── assets/                  # Assets estáticos
    └── hero-accounting.jpg  # Imagem principal
```

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue para o diretório
cd avrio-contabilidade

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:8080
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
```

## 🎨 Design System

### Cores Principais
```css
--primary: 215 84% 20%     /* Azul profissional */
--accent: 187 85% 35%      /* Verde-azulado */
--success: 142 71% 35%     /* Verde sucesso */
--secondary: 215 16% 96%   /* Cinza claro */
```

### Tipografia
- **Família**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Hierarquia**: Responsiva e acessível

### Componentes
- **Botões**: Variantes primary, accent, outline
- **Cards**: Design profissional com hover states
- **Inputs**: Validação visual e acessibilidade
- **Layout**: Grid responsivo mobile-first

## 🔧 Configuração de Performance

### Lazy Loading
```typescript
// Componentes carregados sob demanda
const HeroSection = React.lazy(() => 
  import('@/components/sections/HeroSection')
);
```

### Otimização de Imagens
```typescript
// Fallbacks e loading states
<OptimizedImage
  src="/image.jpg"
  alt="Descrição acessível"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Memoização
```typescript
// Otimização de re-renderizações
const memoizedComponent = React.memo(Component);
const memoizedValue = useMemo(() => expensiveCalculation(), [deps]);
```

## 🔒 Implementações de Segurança

### Sanitização de Inputs
```typescript
import DOMPurify from 'isomorphic-dompurify';

const sanitizedValue = DOMPurify.sanitize(userInput);
```

### Headers de Segurança
```html
<!-- Configurado no index.html -->
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta http-equiv="X-Frame-Options" content="DENY" />
<meta http-equiv="X-XSS-Protection" content="1; mode=block" />
```

### Validação de Formulários
```typescript
// Validação client-side robusta
const validateForm = (data) => {
  // Sanitização e validação de campos
  return {
    isValid: boolean,
    errors: string[]
  };
};
```

## 📈 SEO e Analytics

### Meta Tags Dinâmicas
```html
<!-- Otimizado para motores de busca -->
<title>Avrio Contabilidade - Soluções Contábeis Profissionais</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
```

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avrio Contabilidade",
  "description": "...",
  "contactPoint": { ... }
}
```

## 🌐 Deploy

### Build de Produção
```bash
npm run build
```

### Otimizações de Deploy
- **Compressão Gzip**: Configurada automaticamente
- **Cache Headers**: Configuração recomendada
- **CDN**: Compatível com serviços populares
- **HTTPS**: Obrigatório para produção

### Variáveis de Ambiente
```env
# Configurações de produção
VITE_API_URL=https://api.avrio.com.br
VITE_ANALYTICS_ID=GA_TRACKING_ID
```

## ♿ Guia de Acessibilidade

### Navegação por Teclado
- **Tab**: Navegação entre elementos
- **Enter/Space**: Ativação de botões
- **Escape**: Fechar modais/menus

### Leitores de Tela
- **ARIA Labels**: Descrições claras
- **Roles**: Semântica correta
- **Live Regions**: Atualizações dinâmicas

### Contraste de Cores
- **AA**: Mínimo 4.5:1 para texto normal
- **AAA**: 7:1 para texto pequeno
- **Teste**: Use ferramentas como Colour Contrast Analyser

## 🐛 Debugging

### Console Logs
```typescript
// Logs estruturados para desenvolvimento
console.group('Form Submission');
console.log('Data:', formData);
console.log('Validation:', isValid);
console.groupEnd();
```

### Error Boundaries
```typescript
// Captura de erros em produção
<ErrorBoundary fallback={<ErrorFallback />}>
  <App />
</ErrorBoundary>
```

## 📞 Suporte

Para dúvidas técnicas ou melhorias:
- **Email**: dev@avrio.com.br
- **Documentação**: Comentários inline no código
- **Issues**: Use o sistema de issues do repositório

---

**Desenvolvido com ❤️ seguindo as melhores práticas de acessibilidade e performance web.**