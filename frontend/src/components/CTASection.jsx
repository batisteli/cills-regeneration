import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Phone } from 'lucide-react';

export const CTASection = ({ title, subtitle }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/5511978273924?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent py-12 px-4 sm:px-6 lg:px-8 my-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
            <Sparkles size={32} className="text-navy" />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-navy mb-4">
          {title || "Pronto para Transformar sua Vida?"}
        </h3>
        <p className="text-xl text-gray-700 font-montserrat-light mb-8 max-w-2xl mx-auto">
          {subtitle || "Agende sua avaliação gratuita e descubra como o Protocolo Cills pode ajudá-lo"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={openWhatsApp}
            data-testid="cta-whatsapp-btn"
            className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="mr-2" size={24} />
            AGENDE SUA AVALIAÇÃO GRATUITA
          </Button>
        </div>
        <p className="text-sm text-gray-500 font-montserrat-light mt-4">
          ✓ Atendimento personalizado  ✓ Próximo ao metrô
        </p>
      </div>
    </div>
  );
};

export default CTASection;