import { openWhatsApp } from "../../utils/whatsapp";
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, contactInfo } from '../../data/mock';

export const HeroSection = ({ scrollToContact }) => {
    // Hero images - using local images from public/images/hero/
  const heroImages = {
    manBefore: "/images/hero/stbt-man-before.webp",
    manAfter: "/images/hero/stbt-man-after.webp",
    womanBefore: "/images/hero/stbt-woman-before.webp.webp",
    womanAfter: "/images/hero/stbt-woman-after.webp.webp"
  };

  return (
    <section className="pt-[140px] pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Centered Vertically */}
          <div className="flex flex-col justify-center">
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
                onClick={() => openWhatsApp(contactInfo.whatsapp)}
                data-testid="hero-cta-btn"
                className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
              >
                <Phone className="mr-2" size={20} />
                {heroData.ctaText}
              </Button>
            </div>
          </div>
          
          {/* Elegant Image Collage - 2x2 Grid */}
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {/* Row 1: Before and After */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 group h-[240px]">
                <img 
                  src={heroImages.manBefore} 
                  alt="Antes do tratamento" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-navy text-white text-sm px-4 py-1.5 rounded-full font-montserrat font-medium shadow-lg">
                  Antes
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 group h-[240px]">
                <img 
                  src={heroImages.manAfter} 
                  alt="Depois do tratamento" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-gold text-navy text-sm px-4 py-1.5 rounded-full font-montserrat font-medium shadow-lg">
                  Depois
                </div>
              </div>
              
              {/* Row 2: Women Before/After */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 group h-[240px]">
                <img 
                  src={heroImages.womanBefore} 
                  alt="Antes do tratamento - Mulher" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-navy text-white text-sm px-4 py-1.5 rounded-full font-montserrat font-medium shadow-lg">
                  Antes
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 group h-[240px]">
                <img 
                  src={heroImages.womanAfter} 
                  alt="Depois do tratamento - Mulher" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-gold text-navy text-sm px-4 py-1.5 rounded-full font-montserrat font-medium shadow-lg">
                  Depois
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
