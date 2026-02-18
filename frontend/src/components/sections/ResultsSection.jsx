import React from 'react';
import { Card, CardContent } from '../ui/card';
import { beforeAfterData } from '../../data/mock';

export const ResultsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-testid="results-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
            Resultados Reais
          </h2>
          <p className="text-xl text-gray-600 font-montserrat-light">
            Transformações que inspiram e renovam a autoestima
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterData.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.treatment} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-lg font-montserrat text-sm font-medium shadow-lg">
                    Antes & Depois
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-montserrat font-medium text-navy mb-2">
                    {item.treatment}
                  </h3>
                  <p className="text-gray-600 font-montserrat-light">
                    {item.duration}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
