import React from "react";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const ContactSection = () => {
  const PHONE_DISPLAY = "(11) 97827-3924";
  const PHONE_TEL = "+5511978273924";
  const PHONE_WA = "5511978273924";

  const waText = encodeURIComponent(
    "Olá! Quero agendar uma avaliação do Protocolo CILLS (cabelo/barba/sobrancelhas). Pode me informar a próxima disponibilidade e a unidade mais indicada?"
  );
  const whatsappLink = `https://wa.me/${PHONE_WA}?text=${waText}`;

  const email = "studiobatisteli@gmail.com";
  const instagramHandle = "@sbatistei.regeneracaocapilar";
  const instagramLink = "https://www.instagram.com/sbatistei.regeneracaocapilar/";

  // Estilo “glass” em cima do azul escuro
  const cardClass =
    "bg-white/10 border border-white/10 shadow-sm backdrop-blur-md text-white";
  const titleClass = "text-base font-semibold";
  const linkClass = "underline underline-offset-4 text-white/90 hover:text-white";

  return (
    <section id="contato" className="py-12" style={{ backgroundColor: "#000068" }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Entre em contato
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/80">
            Atendimento sob marcação. Para resposta mais rápida, fale conosco no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card Telefone */}
          <Card className={cardClass}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-white" />
                <div>
                  <div className={titleClass}>Telefone</div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className={`${linkClass} mt-1 inline-block`}
                    aria-label="Ligar para o Studio Batisteli"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="mt-2 text-sm text-white/70">
                    Se preferir, ligue diretamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card WhatsApp */}
          <Card className={cardClass}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 h-5 w-5 text-white" />
                <div className="flex-1">
                  <div className={titleClass}>WhatsApp</div>
                  <p className="mt-1 text-sm text-white/70">
                    Agende sua avaliação com atendimento mais rápido.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:opacity-90"
                  >
                    Agendar no WhatsApp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card E-mail */}
          <Card className={cardClass}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-white" />
                <div>
                  <div className={titleClass}>E-mail</div>
                  <a
                    href={`mailto:${email}`}
                    className={`${linkClass} mt-1 inline-block`}
                  >
                    {email}
                  </a>
                  <p className="mt-2 text-sm text-white/70">
                    Ideal para dúvidas e informações detalhadas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card Instagram */}
          <Card className={cardClass}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Instagram className="mt-1 h-5 w-5 text-white" />
                <div>
                  <div className={titleClass}>Instagram</div>
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} mt-1 inline-block`}
                  >
                    {instagramHandle}
                  </a>
                  <p className="mt-2 text-sm text-white/70">
                    Veja resultados, bastidores e novidades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
