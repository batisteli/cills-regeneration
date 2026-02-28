import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const ContactSection = () => {
  const WHATSAPP_PHONE_DISPLAY = "(11) 97827-3924";
  const WHATSAPP_PHONE_WA = "5511978273924";

  const waText = encodeURIComponent(
    "Olá! Quero agendar uma avaliação do Protocolo CILLS (cabelo/barba/sobrancelhas). Pode me informar a próxima disponibilidade e a unidade mais indicada?"
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE_WA}?text=${waText}`;
  const email = "studiobatisteli@gmail.com";
  const instagram = "@sbatistei";
  const instagramLink = "https://www.instagram.com/sbatistei/";

  return (
    <section id="contato" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Entre em contato</h2>
          <p className="mt-2 text-sm opacity-80">
            Atendimento sob marcação. Para resposta mais rápida, fale conosco no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5" />
                <div className="flex-1">
                  <div className="font-semibold">WhatsApp</div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block underline underline-offset-4"
                  >
                    {WHATSAPP_PHONE_DISPLAY}
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#D4AF37] px-5 py-3 font-semibold text-black hover:opacity-90"
                  >
                    Agendar no WhatsApp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6">
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

            <Card className="bg-white">
              <CardContent className="p-6">
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
                      {instagram}
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
