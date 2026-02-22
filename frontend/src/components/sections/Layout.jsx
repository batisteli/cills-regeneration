import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Send, Instagram } from 'lucide-react';
import { Button } from '../ui/button';
import { locationsData, contactInfo } from '../../data/mock';

export const Header = ({ scrollToContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <div className="flex justify-center items-center pt-4 pb-2">
          <img 
            src="https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/78rw88ra_stbt-logo-hz-1.png" 
            alt="Studio Batisteli Logo" 
            className="h-12 md:h-14"
          />
        </div>
        
        {/* Desktop Menu - centered below logo */}
        <nav className="hidden md:flex justify-center items-center space-x-8 pb-3">
          <a href="#protocolo" className="text-gray-700 hover:text-gold transition-colors font-montserrat">Protocolo</a>
          <a href="#beneficios" className="text-gray-700 hover:text-gold transition-colors font-montserrat">Benefícios</a>
          <a href="#localidades" className="text-gray-700 hover:text-gold transition-colors font-montserrat">Localidades</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-gold transition-colors font-montserrat">Depoimentos</a>
          <a href="#contato" className="text-gray-700 hover:text-gold transition-colors font-montserrat">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center pb-2">
          <button 
            className="text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t text-center" data-testid="mobile-menu">
            <a href="#protocolo" className="block text-gray-700 hover:text-gold transition-colors font-montserrat">Protocolo</a>
            <a href="#beneficios" className="block text-gray-700 hover:text-gold transition-colors font-montserrat">Benefícios</a>
            <a href="#localidades" className="block text-gray-700 hover:text-gold transition-colors font-montserrat">Localidades</a>
            <a href="#depoimentos" className="block text-gray-700 hover:text-gold transition-colors font-montserrat">Depoimentos</a>
            <a href="#contato" className="block text-gray-700 hover:text-gold transition-colors font-montserrat">Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" data-testid="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_b266a66b-ea52-4f2f-aa90-40c1e4e5fce9/artifacts/opzjbdhi_LOGO01.png" 
                alt="Studio Batisteli Logo" 
                className="h-16 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 font-montserrat-light leading-relaxed">
                Especialistas em regeneração capilar não cirúrgica. 
                Protocolo Cills com resultados comprovados.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-medium mb-4 text-gold">
                Localidades
              </h4>
              <ul className="space-y-2 text-gray-400 font-montserrat-light">
                {locationsData.map((location) => (
                  <li key={location.id}>{location.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-medium mb-4 text-gold">
                Contato
              </h4>
              <ul className="space-y-3 text-gray-400 font-montserrat-light">
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-gold" />
                  {contactInfo.whatsappFormatted}
                </li>
                <li className="flex items-center">
                  <Send size={18} className="mr-2 text-gold" />
                  {contactInfo.email}
                </li>
                <li className="flex items-center">
                  <Instagram size={18} className="mr-2 text-gold" />
                  {contactInfo.instagram}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 font-montserrat-light mb-4 md:mb-0">
                © 2024 Studio Batisteli. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-gold font-montserrat-light transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-gold font-montserrat-light transition-colors">
                  Termos e Condições
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        data-testid="floating-whatsapp-btn"
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <Phone size={28} />
      </button>
    </>
  );
};

export default { Header, Footer };
