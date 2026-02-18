import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-gold mb-4">
              <ArrowLeft className="mr-2" size={20} />
              Voltar para Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-white">
            Política de Privacidade
          </h1>
          <p className="text-gray-300 font-montserrat-light mt-2">
            Última atualização: Dezembro de 2024
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              1. Introdução
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              O Studio Batisteli, com sede na Rua Amália de Noronha, 151 - Pinheiros, São Paulo/SP, 
              inscrito sob o CPF 076.903.788-70, está comprometido com a proteção da privacidade e 
              dos dados pessoais de seus clientes, em conformidade com a Lei Geral de Proteção de 
              Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
              suas informações pessoais quando você utiliza nossos serviços de regeneração capilar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              2. Dados Coletados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Coletamos os seguintes tipos de dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li><strong>Dados de Identificação:</strong> nome completo, CPF, RG, data de nascimento</li>
              <li><strong>Dados de Contato:</strong> endereço, telefone, e-mail</li>
              <li><strong>Dados de Saúde:</strong> histórico médico relevante, condições de saúde, alergias, medicamentos em uso</li>
              <li><strong>Dados Fotográficos:</strong> fotografias do antes e depois dos tratamentos para acompanhamento clínico</li>
              <li><strong>Dados Financeiros:</strong> informações de pagamento (processadas por operadoras de cartão de crédito)</li>
              <li><strong>Dados de Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas em nosso site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              3. Finalidade do Tratamento dos Dados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Seus dados pessoais são utilizados para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li>Prestação dos serviços de regeneração capilar contratados</li>
              <li>Agendamento e confirmação de consultas</li>
              <li>Avaliação de saúde e adequação do tratamento</li>
              <li>Acompanhamento clínico e registro de evolução do tratamento</li>
              <li>Processamento de pagamentos</li>
              <li>Comunicação sobre seus agendamentos e tratamentos</li>
              <li>Envio de lembretes, confirmações e informações importantes</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Melhoria contínua de nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              4. Base Legal para o Tratamento
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li><strong>Consentimento:</strong> ao fornecer seus dados e aceitar esta política</li>
              <li><strong>Execução de Contrato:</strong> para prestação dos serviços contratados</li>
              <li><strong>Legítimo Interesse:</strong> para melhoria de nossos serviços</li>
              <li><strong>Obrigação Legal:</strong> para cumprimento de exigências legais e sanitárias</li>
              <li><strong>Proteção à Vida:</strong> em situações de emergência médica</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Seus dados pessoais podem ser compartilhados com:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li><strong>Profissionais de Saúde:</strong> médicos e especialistas quando necessário</li>
              <li><strong>Processadores de Pagamento:</strong> para transações financeiras</li>
              <li><strong>Prestadores de Serviços:</strong> que nos auxiliam na operação (ex: sistema de agendamento)</li>
              <li><strong>Autoridades Legais:</strong> quando exigido por lei ou ordem judicial</li>
            </ul>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mt-4">
              Todos os terceiros são contratualmente obrigados a manter a confidencialidade 
              e segurança de seus dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              6. Armazenamento e Segurança
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Implementamos medidas técnicas e administrativas de segurança, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li>Criptografia de dados sensíveis</li>
              <li>Controle de acesso restrito aos dados</li>
              <li>Sistemas de backup regulares</li>
              <li>Treinamento de equipe em proteção de dados</li>
              <li>Monitoramento contínuo de segurança</li>
            </ul>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mt-4">
              Seus dados são armazenados em servidores seguros localizados no Brasil, 
              pelo período necessário à prestação dos serviços e conforme exigências legais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              7. Seus Direitos como Titular de Dados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li><strong>Confirmação e Acesso:</strong> saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> solicitar correção de dados incompletos ou desatualizados</li>
              <li><strong>Anonimização ou Bloqueio:</strong> de dados desnecessários ou excessivos</li>
              <li><strong>Eliminação:</strong> de dados tratados com seu consentimento</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
              <li><strong>Revogação do Consentimento:</strong> a qualquer momento</li>
              <li><strong>Informação sobre Compartilhamento:</strong> com quais entidades seus dados foram compartilhados</li>
              <li><strong>Oposição:</strong> ao tratamento realizado sem seu consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              8. Retenção de Dados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Mantemos seus dados pessoais pelo período necessário para cumprir as finalidades 
              descritas nesta política, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mt-4">
              <li>Dados clínicos: por no mínimo 20 anos (Resolução CFM nº 1.821/2007)</li>
              <li>Dados fiscais: por 5 anos (Código Tributário Nacional)</li>
              <li>Dados de marketing: até revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              9. Cookies e Tecnologias Similares
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Nosso site utiliza cookies para melhorar sua experiência de navegação. Você pode 
              configurar seu navegador para recusar cookies, mas isso pode limitar algumas 
              funcionalidades do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              10. Alterações nesta Política
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              mudanças significativas através de nossos canais de comunicação habituais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              11. Contato e Exercício de Direitos
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-montserrat"><strong>Studio Batisteli</strong></p>
              <p className="text-gray-700 font-montserrat-light">Rua Amália de Noronha, 151 - Pinheiros</p>
              <p className="text-gray-700 font-montserrat-light">São Paulo/SP - CEP: 05410-010</p>
              <p className="text-gray-700 font-montserrat-light">E-mail: studiobatisteli@gmail.com</p>
              <p className="text-gray-700 font-montserrat-light">WhatsApp: (11) 97827-3924</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              12. Encarregado de Dados (DPO)
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Para questões específicas sobre proteção de dados, você pode entrar em contato 
              através do e-mail: studiobatisteli@gmail.com
            </p>
          </section>

          <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 rounded mt-8">
            <p className="text-navy font-montserrat font-medium">
              Ao utilizar nossos serviços, você declara ter lido, compreendido e concordado 
              com os termos desta Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;