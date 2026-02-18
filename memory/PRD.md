# PRD - Studio Batisteli Landing Page

**Data de Criação:** 17 de Dezembro de 2024
**Última Atualização:** 18 de Fevereiro de 2025

## Problema Original
Criar uma landing page premium para o Studio Batisteli de regeneração capilar não cirúrgica, especializada no Protocolo Cills. A página deve ter design sofisticado com identidade visual específica (Navy Blue + Gold) e copy emocional focada em conversão.

## Identidade Visual
- **Cores:**
  - Navy Blue: #202a44 (autoridade)
  - Gold Metálico: #d4af37 (premium)
  - Branco e Preto (textos)

- **Fontes:**
  - Montserrat Medium: "STUDIO"
  - Cinzel Bold: "BATISTELI"
  - Montserrat Light/Regular: textos

## Informações de Contato
- WhatsApp: (11) 97827-3924
- Instagram: @sbatisteli.regeneracaocapilar

## Localidades com Endereços Completos

### 1. Vila Mariana
- Endereço: Rua Domingos de Morais, 2781
- Bairro: Vila Mariana
- CEP: 04035-001
- Atendimento: Segunda-Feira, 09:00 às 18:00

### 2. Moema
- Endereço: Av. Ibirapuera, 2120
- Bairro: Indianópolis
- CEP: 04028-001
- Atendimento: Terça-Feira, 09:00 às 18:00

### 3. Tatuapé
- Endereço: Rua Bom Sucesso, 220
- Bairro: Cidade Mãe do Céu
- CEP: 03305-000
- Atendimento: Quarta-feira, 09:00 às 18:00

### 4. Perdizes
- Endereço: Av. Antártica, 675
- Bairro: Água Branca
- CEP: 05003-020
- Atendimento: Quinta-Feira, 09:00 às 18:00

### 5. Paulista
- Endereço: Rua Manuel da Nóbrega, 354
- Bairro: Jd. Paulista
- CEP: 04001-001
- Atendimento: Sexta-feira, 09:00 às 18:00

### 6. Vila Madalena
- Endereço: Rua Amália de Noronha, 151
- Bairro: Pinheiros
- CEP: 05410-010
- Atendimento: Sábado, 09:00 às 14:00

## Estrutura Implementada

### ✅ Seções Completas
1. **Header Fixo** - Logo, menu responsivo, CTA
2. **Hero Section** - Slogan, imagem, 2 CTAs
3. **Serviços** - 3 cards (Sobrancelhas, Barba, Cabelo)
4. **CTA Section** - Botão dourado para WhatsApp
5. **Protocolo Cills** - Descrição e benefícios
6. **Benefícios** - 6 cards de vantagens
7. **Localidades** - 6 unidades com nomes em dourado
8. **Resultados** - Antes/Depois
9. **Depoimentos** - Carrossel
10. **FAQ** - Accordion
11. **Formulário de Contato** - Conectado ao backend
12. **Footer** - Links e contatos

### ✅ Backend Implementado
- `POST /api/schedule-evaluation` - Salva agendamentos no MongoDB
- `GET /api/schedule-evaluations` - Lista agendamentos
- `GET /api/schedule-evaluations/{id}` - Busca por ID

### ✅ SEO Implementado
- Title, Description, Keywords
- Open Graph (Facebook)
- Twitter Cards
- Canonical URL

## Tecnologias
- **Frontend:** React + Tailwind CSS + Shadcn UI
- **Backend:** FastAPI + Motor (MongoDB async)
- **Fontes:** Google Fonts (Montserrat, Cinzel)

## Arquitetura Refatorada
```
/app/frontend/src/components/sections/
├── index.js           # Exports
├── HeroSection.jsx
├── ServicesSection.jsx
├── ProtocolSection.jsx
├── AdvantagesSection.jsx
├── LocationsSection.jsx
├── ResultsSection.jsx
├── TestimonialsSection.jsx
├── FAQSection.jsx
├── ContactSection.jsx
└── Layout.jsx         # Header + Footer
```

## Status Atual
🟢 **MVP Completo** - Landing page funcional com backend para formulário de contato.

## Próximas Fases

### P1 - Melhorias
- [ ] Google Maps com pins das 6 localidades
- [ ] Galeria expandida de resultados (lightbox)
- [ ] Integração com Google Analytics/Meta Pixel

### P2 - Funcionalidades Avançadas
- [ ] Chat ao vivo
- [ ] Blog sobre protocolo Cills
- [ ] Área de depoimentos em vídeo
- [ ] Sistema de cupons/promoções
