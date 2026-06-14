import React, { useState } from 'react';
import { AlertTriangle, X, Phone } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';
import { contactInfo } from '../../data/mock';

export const ServiceAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('Service Alert Banner');
    openWhatsApp(contactInfo.whatsapp);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 flex-shrink-0 animate-pulse" />
            <div className="text-center md:text-left">
              <p className="font-montserrat font-semibold text-lg">
                Aviso Importante
              </p>
              <p className="font-montserrat-light text-sm md:text-base">
                O Studio Batisteli estará temporariamente fora de serviço por motivo de força maior. 
                <span className="font-medium"> Voltaremos tão breve quanto possível!</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-montserrat font-medium px-4 py-2 rounded-lg transition-colors shadow-md"
            >
              <Phone size={18} />
              <span className="whitespace-nowrap">Fale Conosco</span>
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-amber-400 rounded-full transition-colors"
              aria-label="Fechar aviso"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAlert;
