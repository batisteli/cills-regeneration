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
    <section className="pt-[140px] pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="pt-[40px]">
            <h1 className="text-3xl md:text-4xl font-montserrat font-medium mb-6" style={{ color: '#0E1A24' }}>
              Falhas, afinamento e queda não precisam definir sua imagem
            </h1>
            <p className="text-3xl md:text-4xl text-gold font-montserrat font-medium mb-2">
              Regeneração Capilar
            </p>
            <p className="text-2xl md:text-3xl text-gold font-montserrat font-medium mb-6">
              + Autoestima + Confiança
            </p>
            <p className="text-lg text-gray-700 font-montserrat-light mb-6 leading-relaxed">
              Recupere densidade onde o fio está falhando — com um protocolo não cirúrgico de estimulação biológica.
            </p>
            <p className="text-base text-gray-600 font-montserrat-light mb-8 leading-relaxed">
              O Protocolo CILLS (Cell Induction & Localized Stimulation System) combina indução celular controlada, estimulação vascular e ativos bioestimulantes para reativar o ambiente do folículo e apoiar o crescimento progressivo de fios mais fortes — no cabelo, barba e sobrancelhas.
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
