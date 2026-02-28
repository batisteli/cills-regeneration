import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const ContactSection = () => {
  const PHONE_DISPLAY = "(11) 97827-3924";
  const PHONE_TEL = "+5511978273924"; // para ligação telefónica
  const PHONE_WA = "5511978273924";   // para wa.me

  const waText = encodeURIComponent(
    "Olá! Quero agendar uma avaliação do Protocolo CILLS (cabelo/barba/sobrancelhas). Pode me informar a próxima disponibilidade e a unidade mais indicada?"
  );
  const whatsappLink = `https://wa.me/${PHONE_WA}?text=${waText}`;

  const email = "studiobatisteli@gmail.com";
  const instagramHandle = "@sbatistei.regeneracaocapilar";
  const instagramLink = "https://www.instagram.com/sbatistei.regeneracaocapilar/";

  return (
    <section id="contato" className="py-12 bg-[#FAFAFA]">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Entre em contato
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Atendimento sob marcação. Para resposta mais rápida, fale conosco no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card principal: telefone + CTA WhatsApp */}
          <Card className="bg-white border border-black/5 shadow-sm lg:col-span-2">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Telefone (sem título WhatsApp e sem link para WA) */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-base font-semibold underline underline-offset-4"
                    aria-label="Ligar para o Studio Batisteli"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Botão natural (não full width) */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:opacity-90"
                >
                  Agendar no WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Coluna direita: Email + Instagram */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-white border border-black/5 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5" />
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 inline-block underline underline-offset-4"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-black/5 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <Instagram className="mt-1 h-5 w-5" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block underline underline-offset-4"
                    >
                      {instagramHandle}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
