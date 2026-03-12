import { openWhatsApp } from "../../utils/whatsapp";
import React from "react";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { contactInfo } from "../../data/mock";
export const ContactSection = () => {
  const PHONE_DISPLAY = "(11) 97827-3924";
  const PHONE_TEL = "+5511978273924";
  const email = "studiobatisteli@gmail.com";
  const instagramHandle = "@sbatistei.regeneracaocapilar";
  const instagramLink = "https://www.instagram.com/sbatistei.regeneracaocapilar/";

  // Estilo “glass” em cima do azul escuro
   const cardClass = "bg-navy/80 border border-gold/30 shadow-lg text-white rounded-2xl";
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

                  <button
  type="button"
  onClick={() => openWhatsApp(contactInfo.whatsapp)}
  className="mt-4 inline-flex items-center justify-center rounded-lg ..."
>
  Agendar no WhatsApp
</button>
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
