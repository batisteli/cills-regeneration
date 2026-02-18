import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { locationsData, contactInfo } from '../../data/mock';

export const LocationsSection = ({ scrollToContact }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="localidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white" data-testid="locations-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Atendimento em 6 Localidades
          </h2>
          <p className="text-xl text-gold font-montserrat-light">
            Escolha a unidade mais próxima de você
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((location) => (
            <Card key={location.id} className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-montserrat font-medium mb-3 text-gold">
                      {location.name}
                    </h3>
                    <div className="space-y-2 text-gray-200 font-montserrat-light">
                      <p className="text-sm">
                        {location.street}, {location.number}
                      </p>
                      <p className="text-sm">
                        {location.neighborhood} - CEP: {location.cep}
                      </p>
                      <p className="text-sm text-gold font-medium mt-3">
                        {location.schedule}
                      </p>
                      <p className="text-sm">
                        {location.hours}
                      </p>
                      <p className="text-sm text-gray-300 mt-3">
                        <Phone size={14} className="inline mr-1" />
                        {location.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg font-montserrat-light mb-6">
            Atendimento personalizado com hora marcada
          </p>
          <Button 
            size="lg"
            onClick={openWhatsApp}
            data-testid="locations-cta-btn"
            className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
          >
            <Phone className="mr-2" size={20} />
            Escolher Minha Unidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
