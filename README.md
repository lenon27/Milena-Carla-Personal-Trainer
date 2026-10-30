# Milena Carla | Personal Trainer

Uma landing page premium e institucional desenvolvida para apresentar a marca, posicionar a profissional no mercado e converter visitantes em clientes por meio do WhatsApp. O projeto foi construído com React + Vite e foi pensado para transmitir confiança, autoridade e clareza na proposta de valor.

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-00C851?style=for-the-badge" alt="Status" />
</p>

## 📌 Visão geral

Este projeto é uma solução de marketing digital e presença online para uma personal trainer que deseja vender mais do que apenas treinos: vende transformação, confiança e acompanhamento estratégico. A interface foi construída para comunicar valor, reforçar a identidade da marca e facilitar ações de conversão, especialmente por WhatsApp.

A plataforma reúne:

- narrativa clara e emocional da marca
- apresentação do método e diferencial profissional
- áreas de autoridade e prova social
- comunicação com foco em conversão
- atendimento e contato direto em poucos cliques
- estrutura fácil de manutenção e evolução

## ✨ O que foi desenvolvido

O site inclui as seguintes seções e elementos:

- Header com navegação interna e CTA principal
- Hero section com proposta de valor e chamariz para ação
- Seção de especialidades e diferenciais
- Filosofia de trabalho e abordagem humanizada
- Consultoria online
- Benefícios e bônus para clientes
- Método de treino e acompanhamento
- Galeria de transformações
- Histórias de clientes
- Depoimentos e social proof
- Sobre a profissional
- Localizações e atendimento
- Planos e investimentos
- Grid de Instagram
- CTA final para conversão
- Botão flutuante de WhatsApp
- Rodapé com branding e contato

## 🧩 Tecnologias utilizadas

- React 18
- TypeScript
- Vite
- GSAP para animações
- Lenis para scroll suave
- CSS personalizado para identidade visual e layouts

## 🗂️ Estrutura do projeto

```bash
milena-carla/
├─ public/
│  └─ ... arquivos públicos e recursos estáticos
├─ src/
│  ├─ assets/
│  │  └─ images/
│  ├─ components/
│  │  ├─ About.tsx
│  │  ├─ Bonus.tsx
│  │  ├─ FinalCTA.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Instagram.tsx
│  │  ├─ Locations.tsx
│  │  ├─ Method.tsx
│  │  ├─ OnlineConsulting.tsx
│  │  ├─ Philosophy.tsx
│  │  ├─ Photo.tsx
│  │  ├─ Plans.tsx
│  │  ├─ Specialties.tsx
│  │  ├─ Stories.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ Transformations.tsx
│  │  ├─ WaLink.tsx
│  │  ├─ WhatsAppButton.tsx
│  │  └─ ...
│  ├─ data/
│  │  ├─ stories.ts
│  │  ├─ testimonials.ts
│  │  └─ transformations.ts
│  ├─ hooks/
│  │  └─ useAnimations.ts
│  ├─ styles/
│  │  └─ global.css
│  ├─ App.tsx
│  ├─ config.ts
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ index.html
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ vite.config.ts
├─ README.md
├─ dist/
└─ public/
```

## 🚀 Como instalar e rodar o projeto

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. A versão recomendada é 18 ou superior.

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd milena-carla
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em:

```bash
http://localhost:5173
```

Se a porta não abrir automaticamente, verifique o terminal e acesse a URL indicada pelo Vite.

## 🏗️ Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Essa ação cria a pasta `dist` com os arquivos prontos para deploy.

### Preview local da build

```bash
npm run preview
```

## ⚙️ Personalização do site

A maior parte do conteúdo e configuração pode ser ajustada em arquivos específicos do projeto.

### Arquivo de configuração central
`src/config.ts`

Nesse arquivo você pode editar:

- número de WhatsApp
- mensagem padrão do botão de contato
- link do Instagram
- links do Google Maps
- imagens principais
- URLs de posts do Instagram

### Dados e conteúdo estruturado
Pastas e arquivos em `src/data/`:

- `stories.ts`
- `testimonials.ts`
- `transformations.ts`

Esses arquivos centralizam depoimentos, histórias e resultados, facilitando manutenção e atualização de conteúdo.

### Componentes visuais
Os componentes em `src/components/` representam cada seção do site. Esse é o ponto principal para modificar textos, layouts, botões e blocos estruturais da landing page.

## 🧪 Scripts disponíveis

No arquivo `package.json`, o projeto possui os seguintes comandos:

```bash
npm run dev
npm run build
npm run preview
```

## ✅ Observações importantes

- O site foi pensado para conversão de leads e agendamento por WhatsApp.
- A estratégia visual prioriza apresentação premium, confiança e clareza.
- A estrutura foi organizada para facilitar manutenção, evolução e novas campanhas.
- A pasta `dist` é gerada automaticamente na build final.

## 💡 Dicas para manter o projeto atualizado

1. Atualize fotos e textos conforme a identidade visual da marca.
2. Ajuste a mensagem de WhatsApp para dialogar diretamente com o público-alvo.
3. Revise depoimentos, stories e transformações periodicamente.
4. Atualize redes sociais e mapas para refletir canais ativos de atendimento.

## 🏁 Conclusão

Este projeto representa uma landing page premium para personal trainer, com foco em posicionamento profissional, autoridade e conversão. Ele foi construído para ser visualmente impactante, funcional e fácil de adaptar conforme o crescimento da marca e os serviços oferecidos.

Se você quiser, posso continuar e criar também:

- uma versão do README com foco em deploy no Vercel
- uma versão destinada a clientes/portfolio
- uma documentação mais técnica para manutenção do código
- um README com badges, screenshots e estrutura mais profissional para GitHub
