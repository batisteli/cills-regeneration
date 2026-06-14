import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { contactInfo } from '../data/mock';

const MaintenancePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    contactType: 'whatsapp'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hero images
  const heroImages = {
    manBefore: "/images/hero/stbt-man-before.webp",
    manAfter: "/images/hero/stbt-man-after.webp",
    womanBefore: "/images/hero/stbt-woman-before.webp.webp",
    womanAfter: "/images/hero/stbt-woman-after.webp.webp"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/maintenance-contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          contact_type: formData.contactType,
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(contactInfo.whatsapp);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background - Hero Section Composition */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-start h-full">
            {/* Text Content - Left Side */}
            <div className="flex flex-col justify-start pt-10">
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
              <p className="text-base text-gray-600 font-montserrat-light leading-relaxed">
                O Protocolo CILLS (Cell Induction & Localized Stimulation System) combina indução celular controlada, estimulação vascular e ativos bioestimulantes para reativar o ambiente do folículo e apoiar o crescimento progressivo de fios mais fortes — no cabelo, barba e sobrancelhas.
              </p>
            </div>
            
            {/* Image Grid - Right Side */}
            <div className="relative flex flex-col items-center justify-start pt-10">
              <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-navy mb-6 text-center">
                Resultados Reais
              </h3>
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 h-[200px]">
                  <img 
                    src={heroImages.manBefore} 
                    alt="Resultado tratamento masculino" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 h-[200px]">
                  <img 
                    src={heroImages.manAfter} 
                    alt="Resultado tratamento masculino" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 h-[200px]">
                  <img 
                    src={heroImages.womanBefore} 
                    alt="Resultado tratamento feminino" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gold/40 h-[200px]">
                  <img 
                    src={heroImages.womanAfter} 
                    alt="Resultado tratamento feminino" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Black Overlay 80% */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Maintenance Content - Foreground */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 flex flex-col items-center">
        {/* Logo - 70% bigger */}
        <div className="mb-10">
          <img 
            src="https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/78rw88ra_stbt-logo-hz-1.png" 
            alt="Studio Batisteli Logo" 
            className="drop-shadow-2xl"
            style={{ height: '136px' }}
          />
        </div>
        
        {/* Message */}
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-montserrat font-medium uppercase text-center">
          Estamos fora de serviço. Voltaremos em breve.
        </h1>
        <p className="text-gold text-lg md:text-xl font-montserrat font-medium mt-[20px] mb-10 text-center">
          Deixe o seu contato para informá-lo
        </p>
        
        {!submitted ? (
          <>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 font-montserrat focus:outline-none focus:border-gold backdrop-blur-sm"
                required
              />
              
              <div className="flex gap-4 w-full">
                <select
                  value={formData.contactType}
                  onChange={(e) => setFormData({...formData, contactType: e.target.value})}
                  className="px-4 py-4 rounded-lg bg-white/10 border border-white/30 text-white font-montserrat focus:outline-none focus:border-gold backdrop-blur-sm"
                >
                  <option value="whatsapp" className="text-black">WhatsApp</option>
                  <option value="email" className="text-black">E-mail</option>
                </select>
                
                <input
                  type={formData.contactType === 'email' ? 'email' : 'tel'}
                  placeholder={formData.contactType === 'email' ? 'seu@email.com' : '(11) 99999-9999'}
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 font-montserrat focus:outline-none focus:border-gold backdrop-blur-sm"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR CONTATO'}
              </button>
            </form>
            
            {/* Direct Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Phone size={20} />
                WhatsApp Direto
              </button>
              
              <a
                href="mailto:studiobatisteli@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors border border-white/30 backdrop-blur-sm"
              >
                <Mail size={20} />
                Enviar E-mail
              </a>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="w-full bg-green-600/20 border border-green-500 rounded-lg p-8 backdrop-blur-sm text-center">
            <p className="text-green-400 text-xl font-montserrat font-medium mb-2">
              ✓ Contato recebido com sucesso!
            </p>
            <p className="text-white/80 font-montserrat-light">
              Entraremos em contato assim que retornarmos às atividades.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaintenancePage;
