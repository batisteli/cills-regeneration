import { Button } from "../ui/button";
import { openWhatsApp } from "../../utils/whatsapp";
import React from 'react';
import { CheckCircle, Phone } from "lucide-react";
import { contactInfo, protocolData } from "../../data/mock";

export const ProtocolSection = () => {
  return (
    <section id="protocolo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-testid="protocol-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={protocolData.image} 
              alt="Protocolo Cills" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              {protocolData.title}
            </h2>
            <p className="text-xl text-gold font-montserrat font-medium mb-6">
              {protocolData.subtitle}
            </p>
            <p className="text-lg text-gray-700 font-montserrat-light mb-8 leading-relaxed">
              {protocolData.description}
            </p>
            <div className="space-y-4 mb-8">
              {protocolData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-700 font-montserrat">{benefit}</p>
                </div>
              ))}
            </div>
            <Button 
              size="lg"
              onClick={() => openWhatsApp(contactInfo.whatsapp)}
              data-testid="protocol-cta-btn"
              className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
            >
              <Phone className="mr-2" size={20} />
              AGENDE A SUA AVALIAÇÃO AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
