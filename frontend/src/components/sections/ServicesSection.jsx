import React from 'react';
import { Sparkles, User, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { servicesData } from '../../data/mock';

const iconMap = {
  Sparkles,
  User,
  Zap
};

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
            Nossos Tratamentos
          </h2>
          <p className="text-xl text-gray-600 font-montserrat-light max-w-3xl mx-auto">
            Soluções personalizadas para cada necessidade
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card key={service.id} className="border-2 border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-3">
                        <IconComponent size={24} className="text-navy" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-montserrat font-medium text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-montserrat-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
