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
  title="Esses resultados podem ser seus também!"
  subtitle="Agende a sua avaliação já!"
/>

<CTASection
  title="Junte-se aos nossos clientes satisfeitos!"
  subtitle="A sua transformação começa agora. Agende a sua avaliação."
/>
      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default HomePage;
