# PRD - Studio Batisteli Landing Page

**Data de Criação:** 17 de Dezembro de 2024
**Última Atualização:** 17 de Dezembro de 2024

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

### ✅ Seções Completas (Frontend com Mock Data)
1. **Header Fixo**
   - Logo em destaque (h-20 md:h-24)
   - Menu de navegação responsivo
   - CTA "Agendar Avaliação"

2. **Hero Section**
   - Slogan: "Regeneração capilar que transforma vidas"
   - Imagem principal: Foto profissional Studio Batisteli
   - Descrição emocional do protocolo
   - 2 CTAs: "Agende sua Avaliação Gratuita" + WhatsApp
   - Imagem circular com borda gold

3. **Serviços**
   - 3 cards: Sobrancelhas, Barba, Cabelo
   - Ícones Lucide React (sem emojis)
   - Hover effects premium

4. **Protocolo Cills**
   - Descrição científica
   - 4 benefícios principais
   - Layout grid com imagem

5. **Benefícios (6 cards)**
   - Avaliação Gratuita
   - Pagamento Facilitado
   - Atendimento Personalizado
   - 6 Localidades
   - Profissionais Especializados
   - Resultados Comprovados

6. **Localidades com Endereços Completos**
   - 6 cards com informações completas:
     * Endereço completo (rua, número, bairro, CEP)
     * Dia de atendimento específico
     * Horário de funcionamento
     * Telefone de contato
   - Background navy com cards dourados
   - Layout responsivo em grid

7. **Resultados (Antes/Depois)**
   - 5 imagens reais fornecidas pelo cliente:
     * 2 sobrancelhas
     * 2 cabelo
     * 1 barba
   - Layout em grid 3 colunas
   - Badge "Antes & Depois" em gold

8. **Depoimentos**
   - 3 cards com avaliações 5 estrelas
   - Fotos, nomes, idades
   - Tratamento realizado

9. **FAQ (Accordion)**
   - 6 perguntas frequentes
   - Animação smooth

10. **Formulário de Contato**
    - Campos: nome, email, telefone, tratamento, localidade (com dias), mensagem
    - Seletor de unidade mostra dia de atendimento
    - Botões WhatsApp e Instagram integrados
    - Toast notifications

11. **Footer**
    - Logo, localidades, contatos
    - Copyright

12. **Floating WhatsApp Button**
    - Fixo no canto inferior direito

## Assets Utilizados
- Logo oficial Studio Batisteli (aumentado)
- Imagem hero: Foto profissional Studio Batisteli
- 5 imagens reais de resultados (fornecidas pelo cliente)
- 2 imagens profissionais Unsplash (protocolo e ambiente)
- Ícones Lucide React

## Tecnologias
- **Frontend:** React + Tailwind CSS
- **Componentes:** Shadcn UI (Button, Card, Input, Textarea, Accordion, Toast)
- **Fontes:** Google Fonts (Montserrat, Cinzel)
- **Notificações:** Sonner

## Funcionalidades Implementadas (Frontend Only)
- ✅ Navegação suave (smooth scroll)
- ✅ Menu mobile responsivo
- ✅ Formulário funcional com validação
- ✅ WhatsApp direct link com mensagem pré-preenchida
- ✅ Instagram redirect
- ✅ Toast notifications
- ✅ Hover effects e micro-animations
- ✅ Layout totalmente responsivo
- ✅ Cards de localidades com endereços completos e horários
- ✅ Formulário com dias de atendimento por unidade

## Próximas Fases

### P0 - Backend (Não implementado)
- [ ] Endpoint para salvar leads do formulário no MongoDB
- [ ] Integração com WhatsApp Business API (opcional)
- [ ] Analytics e tracking de conversão

### P1 - Melhorias
- [ ] Google Maps com pins das 6 localidades
- [ ] Galeria expandida de resultados (lightbox)
- [ ] Sistema de agendamento online integrado
- [ ] Integração com Google Analytics/Meta Pixel

### P2 - Funcionalidades Avançadas
- [ ] Chat ao vivo
- [ ] Blog sobre protocolo Cills
- [ ] Área de depoimentos em vídeo
- [ ] Sistema de cupons/promoções

## Status Atual
🟢 **MVP Frontend Completo** - Landing page totalmente funcional com design premium, copy emocional, todas as seções solicitadas, endereços completos das 6 unidades com horários específicos de atendimento.

## Observações Técnicas
- Formulário salva dados localmente (toast confirmation)
- Todas as imagens otimizadas para web
- SEO-friendly structure
- Performance otimizada
- Cada unidade tem dia específico de atendimento visível no formulário
