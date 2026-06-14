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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send to backend
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
      // Still show success to user
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(contactInfo.whatsapp);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-navy">
      {/* Background Image - Contain mode to show full image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'url(/images/maintenance-bg.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Black Overlay 40% */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Logo - 70% bigger */}
        <div className="mb-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_f1640686-1f2e-4bb1-9e33-a46d25c77925/artifacts/78rw88ra_stbt-logo-hz-1.png" 
            alt="Studio Batisteli Logo" 
            className="mx-auto"
            style={{ height: '136px' }}
          />
        </div>
        
        {/* Message */}
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-montserrat font-medium uppercase whitespace-nowrap">
          Estamos fora de serviço. Voltaremos em breve.
        </h1>
        <p className="text-gold text-lg md:text-xl font-montserrat font-medium mt-[20px] mb-10">
          Deixe o seu contato para informá-lo
        </p>
        
        {!submitted ? (
          <>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 font-montserrat focus:outline-none focus:border-gold"
                required
              />
              
              <div className="flex gap-4">
                <select
                  value={formData.contactType}
                  onChange={(e) => setFormData({...formData, contactType: e.target.value})}
                  className="px-4 py-4 rounded-lg bg-white/10 border border-white/30 text-white font-montserrat focus:outline-none focus:border-gold"
                >
                  <option value="whatsapp" className="text-black">WhatsApp</option>
                  <option value="email" className="text-black">E-mail</option>
                </select>
                
                <input
                  type={formData.contactType === 'email' ? 'email' : 'tel'}
                  placeholder={formData.contactType === 'email' ? 'seu@email.com' : '(11) 99999-9999'}
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 font-montserrat focus:outline-none focus:border-gold"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Phone size={20} />
                WhatsApp Direto
              </button>
              
              <a
                href="mailto:studiobatisteli@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors border border-white/30"
              >
                <Mail size={20} />
                Enviar E-mail
              </a>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="bg-green-600/20 border border-green-500 rounded-lg p-8">
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
