import React from 'react';
import { CheckCircle, CreditCard, Heart, MapPin, Award, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { advantagesData } from '../../data/mock';

const iconMap = {
  CheckCircle,
  CreditCard,
  Heart,
  MapPin,
  Award,
  Star
};

export const AdvantagesSection = () => {
  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-testid="advantages-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
            Por que escolher o Studio Batisteli?
          </h2>
          <p className="text-xl text-gray-600 font-montserrat-light max-w-3xl mx-auto">
            Excelência, comodidade e resultados garantidos
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesData.map((advantage) => {
            const IconComponent = iconMap[advantage.icon];
            return (
              <Card key={advantage.id} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6">
                    <IconComponent size={28} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-montserrat font-medium text-navy mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat-light leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
