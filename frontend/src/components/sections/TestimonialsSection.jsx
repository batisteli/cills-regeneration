import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { testimonialsData } from '../../data/mock';

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 font-montserrat-light">
            Histórias reais de transformação e renovação
          </p>
        </div>

        <p style={{ fontSize: 12, opacity: 0.7 }}>
  DEBUG testimonialsData: {Array.isArray(testimonialsData) ? testimonialsData.length : "not-array"}
</p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-montserrat font-medium text-navy text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 font-montserrat-light">
                          {testimonial.age} anos
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm text-gold font-montserrat">
                      {testimonial.treatment}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        <div className="text-center mt-8">
          <p className="text-gray-500 font-montserrat-light text-sm">
            ← Deslize para ver mais depoimentos →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
