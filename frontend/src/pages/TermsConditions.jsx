import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const TermsConditions = () => {
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
            Termos e Condições de Serviço
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
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Ao contratar os serviços do Studio Batisteli, você concorda com estes Termos e Condições. 
              Leia atentamente antes de iniciar qualquer tratamento. Caso não concorde com qualquer 
              disposição, não contrate nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              2. Identificação do Prestador de Serviços
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-montserrat"><strong>Razão Social:</strong> Studio Batisteli</p>
              <p className="text-gray-700 font-montserrat-light"><strong>CPF:</strong> 076.903.788-70</p>
              <p className="text-gray-700 font-montserrat-light"><strong>Endereço Sede:</strong> Rua Amália de Noronha, 151 - Pinheiros, São Paulo/SP - CEP: 05410-010</p>
              <p className="text-gray-700 font-montserrat-light"><strong>E-mail:</strong> studiobatisteli@gmail.com</p>
              <p className="text-gray-700 font-montserrat-light"><strong>WhatsApp:</strong> (11) 97827-3924</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              3. Serviços Prestados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              O Studio Batisteli oferece serviços especializados em regeneração capilar não cirúrgica 
              através do Protocolo Cills, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li>Regeneração de Sobrancelhas</li>
              <li>Regeneração de Barba</li>
              <li>Regeneração Capilar (couro cabeludo)</li>
            </ul>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mt-4">
              Todos os tratamentos são realizados por profissionais qualificados e certificados 
              no Protocolo Cills.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              4. Avaliação Inicial Gratuita
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Oferecemos avaliação inicial gratuita onde:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mt-4">
              <li>Analisamos sua condição capilar</li>
              <li>Verificamos contraindicações</li>
              <li>Explicamos o protocolo de tratamento</li>
              <li>Fornecemos orçamento personalizado</li>
              <li>Não há compromisso de contratação</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              5. Agendamento de Sessões
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>5.1. Horários de Atendimento:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mb-4">
              <li>Segunda a Sexta-feira: 09:00 às 18:00</li>
              <li>Sábado: 09:00 às 14:00 (apenas unidade Vila Madalena)</li>
              <li>Cada unidade opera em um dia específico da semana</li>
            </ul>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>5.2. Confirmação:</strong> Todas as sessões devem ser agendadas com antecedência 
              e serão confirmadas por WhatsApp ou telefone.
            </p>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              <strong>5.3. Pontualidade:</strong> Solicitamos pontualidade. Atrasos superiores a 15 minutos 
              podem resultar em remarcação da sessão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              6. Política de Cancelamento e Reagendamento
            </h2>
            
            <div className="bg-yellow-50 border-l-4 border-gold p-6 rounded mb-4">
              <p className="text-gray-700 font-montserrat font-medium mb-2">
                <strong>6.1. Prazo para Cancelamento/Reagendamento:</strong>
              </p>
              <p className="text-gray-700 font-montserrat-light">
                O cliente deve cancelar ou reagendar com <strong>no mínimo 48 horas de antecedência</strong> 
                do horário agendado, através do WhatsApp (11) 97827-3924 ou telefone.
              </p>
            </div>

            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>6.2. Cancelamento Fora do Prazo:</strong> Cancelamentos realizados com menos de 
              48 horas de antecedência não serão reembolsados.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="text-gray-700 font-montserrat font-medium mb-2">
                <strong>6.3. No-Show (Não Comparecimento):</strong>
              </p>
              <p className="text-gray-700 font-montserrat-light">
                O não comparecimento sem aviso prévio resultará em cobrança integral da sessão perdida. 
                A sessão será considerada realizada para fins contratuais.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              7. Formas de Pagamento
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>7.1. Meios Aceitos:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mb-4">
              <li>Cartão de Crédito</li>
              <li>PIX</li>
            </ul>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>7.2. Parcelamento:</strong> Oferecemos parcelamento em até 10 vezes no cartão de crédito, 
              com juros aplicados pela operadora do cartão.
            </p>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>7.3. Pagamento Antecipado:</strong> Pacotes completos de tratamento podem exigir 
              pagamento antecipado ou sinal.
            </p>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              <strong>7.4. Multas e Juros:</strong> Não aplicamos multas ou juros por atraso, pois o 
              pagamento é realizado exclusivamente por cartão ou PIX no momento do serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              8. Garantias e Resultados
            </h2>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>8.1. Sobre os Resultados:</strong>
            </p>
            <div className="bg-blue-50 border-l-4 border-navy p-6 rounded mb-4">
              <p className="text-gray-700 font-montserrat-light leading-relaxed">
                O Studio Batisteli não pode garantir resultados específicos, pois cada organismo reage 
                de maneira diferente ao tratamento. Porém, <strong>em 99% dos casos</strong>, os clientes 
                apresentam satisfação com a regeneração obtida.
              </p>
            </div>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>8.2. Política de Insatisfação:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mb-4">
              <li>Será realizada comparação fotográfica entre o início das sessões e 15 dias após a sessão final</li>
              <li>Caso o cliente não esteja satisfeito mesmo após a análise fotográfica, o caso será submetido a uma Comissão Técnica</li>
              <li>A Comissão Técnica responderá em até 48 horas úteis com as próximas medidas</li>
              <li>Possíveis soluções incluem: sessões complementares, ajuste no protocolo ou revisão do caso</li>
            </ul>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              <strong>8.3. Fatores que Influenciam Resultados:</strong> Idade, saúde geral, adesão aos 
              cuidados pós-procedimento, estilo de vida e características genéticas podem afetar os resultados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              9. Responsabilidades do Cliente
            </h2>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>9.1. Guia de Cuidados Pós-Procedimento:</strong>
            </p>
            <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 rounded mb-4">
              <p className="text-gray-700 font-montserrat-light leading-relaxed">
                Na primeira sessão, o cliente receberá um <strong>Guia de Cuidados Pós-Procedimento</strong> 
                que deverá ser seguido rigorosamente para garantir o resultado do Protocolo Cills. 
                O não cumprimento das orientações pode comprometer os resultados.
              </p>
            </div>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>9.2. Informações Precisas:</strong> O cliente deve fornecer informações médicas 
              completas e precisas durante a avaliação inicial.
            </p>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              <strong>9.3. Comunicação de Efeitos Adversos:</strong> Qualquer reação adversa deve ser 
              imediatamente comunicada ao Studio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              10. Contraindicações
            </h2>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>10.1. Contraindicações Absolutas:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mb-4">
              <li>Glaucoma</li>
              <li>Doenças autoimunes ativas</li>
            </ul>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>10.2. Casos que Requerem Autorização Médica:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2 mb-4">
              <li>Diabetes (controlado ou não)</li>
              <li>Câncer em remissão</li>
              <li>Gestação e lactação</li>
              <li>Distúrbios psiquiátricos</li>
            </ul>
            
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              O Studio Batisteli se reserva o direito de recusar o tratamento caso identifique 
              riscos à saúde do cliente ou falta de autorização médica adequada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              11. Registro Fotográfico
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Para acompanhamento clínico e comparação de resultados, o Studio Batisteli realiza 
              registro fotográfico antes, durante e após o tratamento. Essas imagens são armazenadas 
              de forma segura e utilizadas exclusivamente para fins clínicos, salvo autorização expressa 
              do cliente para uso em divulgação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              12. Privacidade e Proteção de Dados
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              O tratamento de seus dados pessoais é regido por nossa Política de Privacidade, 
              disponível em <Link to="/privacy-policy" className="text-gold hover:underline">studiobatisteli.com/privacidade</Link>, 
              em conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              13. Limitações de Responsabilidade
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              O Studio Batisteli não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 font-montserrat-light space-y-2">
              <li>Resultados insatisfatórios decorrentes do não cumprimento das orientações pós-procedimento</li>
              <li>Reações adversas a produtos utilizados, desde que devidamente informadas durante a avaliação</li>
              <li>Interrupção do tratamento por iniciativa do cliente</li>
              <li>Condições de saúde preexistentes não informadas pelo cliente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              14. Rescisão Contratual
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              <strong>14.1. Por Parte do Cliente:</strong> O cliente pode solicitar rescisão a qualquer momento. 
              Sessões já realizadas serão cobradas proporcionalmente. Valores de sessões não realizadas 
              em pacotes pré-pagos serão reembolsados, deduzindo possíveis descontos aplicados.
            </p>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              <strong>14.2. Por Parte do Studio:</strong> Reservamo-nos o direito de rescindir o contrato 
              em caso de desrespeito às normas, falta de pagamento ou comportamento inadequado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              15. Alterações nos Termos
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              O Studio Batisteli pode atualizar estes Termos e Condições periodicamente. Clientes 
              serão notificados sobre alterações significativas. O uso continuado dos serviços após 
              modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              16. Legislação Aplicável e Foro
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed">
              Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de 
              São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-medium text-navy mb-4">
              17. Contato
            </h2>
            <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
              Para dúvidas, sugestões ou reclamações sobre estes Termos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-montserrat"><strong>Studio Batisteli</strong></p>
              <p className="text-gray-700 font-montserrat-light">WhatsApp: (11) 97827-3924</p>
              <p className="text-gray-700 font-montserrat-light">E-mail: studiobatisteli@gmail.com</p>
              <p className="text-gray-700 font-montserrat-light">Horário de atendimento: Segunda a Sexta, 09h às 18h</p>
            </div>
          </section>

          <div className="bg-navy text-white p-6 rounded-lg mt-8">
            <p className="font-montserrat font-medium mb-2">
              Declaração de Consentimento
            </p>
            <p className="font-montserrat-light leading-relaxed">
              Ao contratar os serviços do Studio Batisteli, você declara ter lido, compreendido 
              e concordado com todos os termos e condições aqui estabelecidos, bem como com nossa 
              Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;