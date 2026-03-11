import React from 'react';
import { CheckCircle } from 'lucide-react';
import { protocolData } from '../../data/mock';

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
            <div className="space-y-4">
  {protocolData.benefits.map((benefit, index) => (
    <div key={index} className="flex items-start">
      <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
      <p className="text-gray-700 font-montserrat">{benefit}</p>
    </div>
  ))}
</div>
            {/* CTA - Reservar via WhatsApp */}
<div className="mt-6">
  <a
    href="https://wa.me/5511978273924?text=Ol%C3%A1!%20Quero%20reservar%20uma%20avalia%C3%A7%C3%A3o%20do%20Protocolo%20CILLS.%20Pode%20me%20informar%20a%20pr%C3%B3xima%20disponibilidade%20e%20a%20unidade%20mais%20conveniente%3F"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:opacity-90"
  >
    Reservar avaliação no WhatsApp
  </a>
  <p className="mt-2 text-sm opacity-80">
    Resposta mais rápida por WhatsApp.
  </p>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
