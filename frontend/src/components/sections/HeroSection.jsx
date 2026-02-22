import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData, contactInfo } from '../../data/mock';

export const HeroSection = ({ scrollToContact }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  // Hero images
  const heroImages = {
    manAfter: "https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/o6ouq4yw_stbt-img-man-after.png",
    manBefore: "https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/1bbxniod_stbt-img-man-before.png",
    clinic: "https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/cnht8w2c_stbt-img-tecnica-examinando.png",
    woman1: "https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/k01vufh0_stbt-woman-4.png",
    woman2: "https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/r54mshag_stbt-woman-5.png"
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
          
          {/* Elegant Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[550px]">
              {/* Main clinic image - larger, spans more area */}
              <div className="col-span-7 row-span-4 relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/30 group">
                <img 
                  src={heroImages.clinic} 
                  alt="Tratamento Protocolo CILLS" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
              </div>
              
              {/* Man before - top right */}
              <div className="col-span-5 row-span-3 relative overflow-hidden rounded-2xl shadow-lg border-2 border-gold/30 group">
                <img 
                  src={heroImages.manBefore} 
                  alt="Antes do tratamento" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-navy/80 text-white text-xs px-2 py-1 rounded font-montserrat">
                  Antes
                </div>
              </div>
              
              {/* Man after - middle right */}
              <div className="col-span-5 row-span-3 relative overflow-hidden rounded-2xl shadow-lg border-2 border-gold/30 group">
                <img 
                  src={heroImages.manAfter} 
                  alt="Depois do tratamento" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-gold/90 text-navy text-xs px-2 py-1 rounded font-montserrat font-medium">
                  Depois
                </div>
              </div>
              
              {/* Woman 1 - bottom left */}
              <div className="col-span-4 row-span-2 relative overflow-hidden rounded-2xl shadow-lg border-2 border-gold/30 group">
                <img 
                  src={heroImages.woman1} 
                  alt="Cliente satisfeita" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Woman 2 - bottom center */}
              <div className="col-span-3 row-span-2 relative overflow-hidden rounded-2xl shadow-lg border-2 border-gold/30 group">
                <img 
                  src={heroImages.woman2} 
                  alt="Confiança renovada" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-navy rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
