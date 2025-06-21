# Portfolio Gustavo Bucker

Um portfólio profissional desenvolvido com Next.js 13, Sanity CMS e TypeScript, apresentando projetos de roteiro, direção, atuação e stand-up comedy.

## 🚀 Sobre o Projeto

Este é o portfólio pessoal de Gustavo Bucker, um profissional da área de entretenimento com foco em comédia, roteiro e direção. O projeto foi desenvolvido como uma plataforma moderna e responsiva para exibir trabalhos e projetos de forma profissional.

### Tecnologias Principais

- **Next.js 13** - Framework React com App Router
- **Sanity CMS** - Sistema de gerenciamento de conteúdo headless
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Puppeteer** - Geração de PDFs
- **Vercel Analytics** - Análise de métricas

## 📁 Estrutura do Projeto

```
portfolio-gbucker/
├── app/                          # App Router do Next.js 13
│   ├── (site)/                   # Grupo de rotas do site principal
│   │   ├── (main)/              # Página inicial e projetos
│   │   ├── (linktree)/          # Página de links estilo Linktree
│   │   ├── (subpages)/          # Blog e páginas de projetos
│   │   └── lab/                 # Página do laboratório de comédia
│   ├── (studio)/                # Sanity Studio (CMS)
│   ├── api/                     # API Routes
│   └── components/              # Componentes React reutilizáveis
├── sanity/                      # Configuração do Sanity CMS
│   ├── config/
│   └── schemas/                 # Schemas de dados
├── types/                       # Definições TypeScript
└── public/                      # Arquivos estáticos
```

## ✨ Funcionalidades Implementadas

### 🎯 Páginas Principais
- **Página Inicial** - Exibição de projetos com filtros por categoria
- **Linktree** - Página de links com design responsivo e datas programadas
- **Blog** - Sistema de blog com posts em Portable Text
- **Projetos Individuais** - Páginas detalhadas para cada projeto
- **Laboratório de Comédia** - Landing page para curso de comédia

### 🎨 Componentes
- **ProjectsList** - Lista de projetos com filtros por categoria
- **GradientText/GradientLink** - Componentes com efeitos visuais
- **SpotifyComponent** - Embed de músicas do Spotify
- **YoutubeComponent** - Embed de vídeos do YouTube
- **FlickeringText** - Texto com efeito de flickering
- **PageToPdfButton** - Botão para gerar PDF da página

### 🔧 Funcionalidades Técnicas
- **Sistema de Filtros** - Filtros por categoria (Roteiro, Direção, Atuação, Stand-Up)
- **Geração de PDF** - API para converter páginas em PDF usando Puppeteer
- **Responsividade** - Design adaptável para mobile, tablet e desktop
- **SEO Otimizado** - Metadados dinâmicos para cada página
- **CMS Integrado** - Sanity Studio para gerenciamento de conteúdo

### 📱 Recursos de UX/UI
- **Animações Hover** - Efeitos de escala e transições suaves
- **Navegação Intuitiva** - Estrutura clara e navegação fácil
- **Carregamento Otimizado** - Imagens com lazy loading e priorização
- **Design Moderno** - Interface limpa com Tailwind CSS

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Sanity.io

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd portfolio-gbucker
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto com:
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu-api-token
```

**⚠️ Importante:** 
- Nunca commite o arquivo `.env.local` no repositório
- O arquivo `.env.local` já está no `.gitignore`
- Obtenha suas credenciais do Sanity em: https://www.sanity.io/manage

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

5. Acesse o Sanity Studio:
```bash
npm run dev
# Acesse: http://localhost:3000/admin
```

## 🔒 Segurança

O projeto foi configurado seguindo as melhores práticas de segurança:

- ✅ **Variáveis de ambiente** para todas as chaves do Sanity
- ✅ **Project ID** não exposto no código
- ✅ **API Token** protegido em variáveis de ambiente
- ✅ **Arquivos .env** no .gitignore

## 📊 Schemas do Sanity

O projeto utiliza os seguintes schemas de dados:

- **Project** - Projetos com imagens, descrições e tags
- **Post** - Posts do blog com conteúdo em Portable Text
- **Link** - Links para o Linktree com datas programadas
- **Page** - Páginas dinâmicas
- **Design** - Elementos de design

## 🚧 Funcionalidades a Implementar

### 🔮 Melhorias Planejadas

#### Performance e SEO
- [ ] Implementar ISR (Incremental Static Regeneration) para melhor performance
- [ ] Adicionar sitemap.xml automático
- [ ] Implementar Open Graph tags para redes sociais
- [ ] Adicionar schema.org markup para SEO

#### Funcionalidades de Conteúdo
- [ ] Sistema de comentários no blog
- [ ] Busca avançada de projetos
- [ ] Galeria de imagens com lightbox
- [ ] Sistema de tags mais robusto
- [ ] Integração com redes sociais (Instagram, Twitter)

#### Experiência do Usuário
- [ ] Modo escuro/claro
- [ ] Animações de entrada mais elaboradas
- [ ] Loading states melhorados
- [ ] Página 404 personalizada
- [ ] Breadcrumbs para navegação

#### Funcionalidades Avançadas
- [ ] Sistema de newsletter
- [ ] Analytics mais detalhados
- [ ] Cache inteligente com Redis
- [ ] Sistema de backup automático
- [ ] Integração com calendário para eventos

#### Desenvolvimento
- [ ] Testes unitários com Jest
- [ ] Testes E2E com Playwright
- [ ] CI/CD pipeline
- [ ] Docker para containerização
- [ ] Monitoramento de performance

#### Acessibilidade
- [ ] Melhorar navegação por teclado
- [ ] Adicionar alt texts descritivos
- [ ] Implementar ARIA labels
- [ ] Testes de acessibilidade

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são bem-vindas através de issues e pull requests.

## 📄 Licença

Este projeto é de uso pessoal e não possui licença pública.

## 👨‍💻 Autor

**Gustavo Bucker** - Desenvolvedor e profissional da área de entretenimento

---

*Desenvolvido com ❤️ usando Next.js e Sanity CMS*

