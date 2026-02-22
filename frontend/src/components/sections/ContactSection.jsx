import React, { useState } from 'react';
import { Phone, Send, Instagram } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';
import { contactInfo, formOptions } from '../../data/mock';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const API_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${API_URL}/api/schedule-evaluation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }
      
      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white" data-testid="contact-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
            Agende Sua Avaliação Gratuita
          </h2>
          <p className="text-xl text-gold font-montserrat-light">
            O primeiro passo para sua transformação começa aqui
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-montserrat font-medium mb-6">
              Entre em Contato
            </h3>
            <p className="text-gray-200 font-montserrat-light mb-8 leading-relaxed">
              Preencha o formulário ao lado ou entre em contato diretamente pelo WhatsApp. 
              Nossa equipe está pronta para atendê-lo e responder todas as suas dúvidas.
            </p>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.')}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="flex items-center p-4 rounded-xl border-2 border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                  <Phone className="text-gold" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gold font-montserrat font-medium">WhatsApp</div>
                  <div className="text-white font-montserrat">{contactInfo.whatsappFormatted}</div>
                </div>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                data-testid="contact-email-btn"
                className="flex items-center p-4 rounded-xl border-2 border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                  <Send className="text-gold" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gold font-montserrat font-medium">E-mail</div>
                  <div className="text-white font-montserrat">{contactInfo.email}</div>
                </div>
              </a>
              
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-instagram-btn"
                className="flex items-center p-4 rounded-xl border-2 border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                  <Instagram className="text-gold" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gold font-montserrat font-medium">Instagram</div>
                  <div className="text-white font-montserrat">{contactInfo.instagram}</div>
                </div>
              </a>
            </div>
          </div>
          <Card className="bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    data-testid="input-name"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    data-testid="input-phone"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    Tratamento de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    data-testid="select-service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold font-montserrat"
                  >
                    <option value="">Selecione um tratamento</option>
                    {formOptions.services.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    Unidade Preferida
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    data-testid="select-location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold font-montserrat"
                  >
                    <option value="">Selecione uma localidade</option>
                    {formOptions.locations.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-medium mb-2">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos um pouco sobre sua necessidade..."
                    rows={4}
                    data-testid="textarea-message"
                    className="border-gray-300"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  data-testid="submit-form-btn"
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
