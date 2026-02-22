import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, contactInfo } from '../../data/mock';

export const HeroSection = ({ scrollToContact }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="font-montserrat text-navy block">STUDIO</span>
              <span className="font-cinzel text-navy block">BATISTELI</span>
            </h1>
            <p className="text-3xl md:text-4xl text-gold font-montserrat font-medium mb-6">
              {heroData.slogan}
            </p>
            <p className="text-lg text-gray-700 font-montserrat-light mb-8 leading-relaxed">
              {heroData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={openWhatsApp}
                data-testid="hero-cta-btn"
                className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
              >
                <Phone className="mr-2" size={20} />
                {heroData.ctaText}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-gold">
              <img 
                src={heroData.heroImage} 
                alt="Transformação Studio Batisteli" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
