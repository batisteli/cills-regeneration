import React from 'react';
import {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  ProtocolSection,
  AdvantagesSection,
  LocationsSection,
  ResultsSection,
  TestimonialsSection,
  FAQSection,
  ContactSection
} from '../components/sections';
import CTASection from '../components/CTASection';

export const HomePage = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      <Header scrollToContact={scrollToContact} />

      <HeroSection scrollToContact={scrollToContact} />

      <ServicesSection />

      <CTASection 
        title="Descubra qual Tratamento é Ideal para Você" 
        subtitle="Agende agora a sua avaliação com um especialista. 
      />

      <ProtocolSection />

      <AdvantagesSection />

      <LocationsSection scrollToContact={scrollToContact} />

      <ResultsSection />

      <CTASection 
        title="Esses Resultados Podem Ser Seus Também!" 
        subtitle="Agende A Sua Avaliação Já!" 
      />

      <TestimonialsSection />

      <CTASection 
        title="Junte-se aos Nossos Clientes Satisfeitos!" 
        subtitle="A sua Transformação Começa Agora. Agende a sua consulta" 
      />

      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default HomePage;
