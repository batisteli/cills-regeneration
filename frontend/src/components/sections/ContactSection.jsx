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

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gold font-montserrat-light">
            Atendimento sob marcação. Para resposta mais rápida, fale conosco no WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card Telefone */}
          <Card className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Phone size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-montserrat font-medium mb-3 text-gold">
                    Telefone
                  </h3>
                  <div className="space-y-2 text-gray-200 font-montserrat-light">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-sm hover:text-white transition-colors underline underline-offset-4"
                      aria-label="Ligar para o Studio Batisteli"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="text-sm text-gray-300 mt-3">
                      Se preferir, ligue diretamente.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card WhatsApp */}
          <Card className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <MessageCircle size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-montserrat font-medium mb-3 text-gold">
                    WhatsApp
                  </h3>
                  <div className="space-y-2 text-gray-200 font-montserrat-light">
                    <p className="text-sm">
                      Agende sua avaliação com atendimento mais rápido.
                    </p>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(contactInfo.whatsapp)}
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium px-6 py-3 transition-colors"
                    >
                      Agendar no WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card E-mail */}
          <Card className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Mail size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-montserrat font-medium mb-3 text-gold">
                    E-mail
                  </h3>
                  <div className="space-y-2 text-gray-200 font-montserrat-light">
                    <a
                      href={`mailto:${email}`}
                      className="text-sm hover:text-white transition-colors underline underline-offset-4"
                    >
                      {email}
                    </a>
                    <p className="text-sm text-gray-300 mt-3">
                      Ideal para dúvidas e informações detalhadas.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card Instagram */}
          <Card className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Instagram size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-montserrat font-medium mb-3 text-gold">
                    Instagram
                  </h3>
                  <div className="space-y-2 text-gray-200 font-montserrat-light">
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors underline underline-offset-4"
                    >
                      {instagramHandle}
                    </a>
                    <p className="text-sm text-gray-300 mt-3">
                      Veja resultados, bastidores e novidades.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-montserrat-light">
            Estamos prontos para ajudar você a recuperar sua autoestima
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
