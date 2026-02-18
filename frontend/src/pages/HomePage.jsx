import React, { useState } from 'react';
import { 
  Sparkles, User, Zap, CheckCircle, CreditCard, Heart, 
  MapPin, Award, Star, Phone, Instagram, Send, Menu, X 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { toast } from 'sonner';
import {
  heroData,
  protocolData,
  servicesData,
  advantagesData,
  locationsData,
  beforeAfterData,
  testimonialsData,
  faqData,
  contactInfo,
  formOptions
} from '../data/mock';

const iconMap = {
  Sparkles,
  User,
  Zap,
  CheckCircle,
  CreditCard,
  Heart,
  MapPin,
  Award,
  Star
};

export const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: ''
    });
  };

  const scrollToContact = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar minha avaliação gratuita no Studio Batisteli.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_b266a66b-ea52-4f2f-aa90-40c1e4e5fce9/artifacts/opzjbdhi_LOGO01.png" 
                alt="Studio Batisteli Logo" 
                className="h-20 md:h-24"
              />
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#protocolo" className="text-gray-700 hover:text-navy transition-colors font-montserrat">Protocolo</a>
              <a href="#beneficios" className="text-gray-700 hover:text-navy transition-colors font-montserrat">Benefícios</a>
              <a href="#localidades" className="text-gray-700 hover:text-navy transition-colors font-montserrat">Localidades</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-navy transition-colors font-montserrat">Depoimentos</a>
              <Button 
                onClick={scrollToContact}
                className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium"
              >
                Agendar Avaliação
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4 border-t">
              <a href="#protocolo" className="block text-gray-700 hover:text-navy transition-colors font-montserrat">Protocolo</a>
              <a href="#beneficios" className="block text-gray-700 hover:text-navy transition-colors font-montserrat">Benefícios</a>
              <a href="#localidades" className="block text-gray-700 hover:text-navy transition-colors font-montserrat">Localidades</a>
              <a href="#depoimentos" className="block text-gray-700 hover:text-navy transition-colors font-montserrat">Depoimentos</a>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium"
              >
                Agendar Avaliação
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
                  onClick={scrollToContact}
                  className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
                >
                  {heroData.ctaText}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-montserrat font-medium text-lg px-8 py-6"
                >
                  <Phone className="mr-2" size={20} />
                  WhatsApp
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              Nossos Tratamentos
            </h2>
            <p className="text-xl text-gray-600 font-montserrat-light max-w-3xl mx-auto">
              Soluções personalizadas para cada necessidade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent size={32} className="text-gold" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-medium text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-montserrat-light leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocolo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={protocolData.image} 
                alt="Protocolo Cills" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
                {protocolData.title}
              </h2>
              <p className="text-xl text-gold font-montserrat font-medium mb-6">
                {protocolData.subtitle}
              </p>
              <p className="text-lg text-gray-700 font-montserrat-light mb-8 leading-relaxed">
                {protocolData.description}
              </p>
              <div className="space-y-4">
                {protocolData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                    <p className="text-gray-700 font-montserrat">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              Por que escolher o Studio Batisteli?
            </h2>
            <p className="text-xl text-gray-600 font-montserrat-light max-w-3xl mx-auto">
              Excelência, comodidade e resultados garantidos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantagesData.map((advantage) => {
              const IconComponent = iconMap[advantage.icon];
              return (
                <Card key={advantage.id} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6">
                      <IconComponent size={28} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-montserrat font-medium text-navy mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 font-montserrat-light leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="localidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">
              Atendimento em 6 Localidades
            </h2>
            <p className="text-xl text-gold font-montserrat-light">
              Escolha a unidade mais próxima de você
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationsData.map((location) => (
              <Card key={location.id} className="bg-white bg-opacity-10 border-gold border hover:bg-opacity-20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin size={28} className="text-gold mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-montserrat font-medium mb-3">
                        {location.name}
                      </h3>
                      <div className="space-y-2 text-gray-200 font-montserrat-light">
                        <p className="text-sm">
                          {location.street}, {location.number}
                        </p>
                        <p className="text-sm">
                          {location.neighborhood} - CEP: {location.cep}
                        </p>
                        <p className="text-sm text-gold font-medium mt-3">
                          {location.schedule}
                        </p>
                        <p className="text-sm">
                          {location.hours}
                        </p>
                        <p className="text-sm text-gray-300 mt-3">
                          <Phone size={14} className="inline mr-1" />
                          {location.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-montserrat-light mb-6">
              Atendimento personalizado com hora marcada
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg px-8 py-6"
            >
              Escolher Minha Unidade
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              Resultados Reais
            </h2>
            <p className="text-xl text-gray-600 font-montserrat-light">
              Transformações que inspiram e renovam a autoestima
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterData.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.treatment} 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-lg font-montserrat text-sm font-medium shadow-lg">
                      Antes & Depois
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-montserrat font-medium text-navy mb-2">
                      {item.treatment}
                    </h3>
                    <p className="text-gray-600 font-montserrat-light">
                      {item.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 font-montserrat-light">
              Histórias reais de transformação e renovação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-montserrat font-medium text-navy text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-montserrat-light">
                        {testimonial.age} anos
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-montserrat-light leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-gold font-montserrat">
                    {testimonial.treatment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-navy mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 font-montserrat-light">
              Tire suas dúvidas sobre o Protocolo Cills
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-white border-2 border-gray-100 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-montserrat font-medium text-navy hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 font-montserrat-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white">
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
              <div className="space-y-6">
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-montserrat font-medium text-lg justify-start"
                >
                  <Phone className="mr-3" size={24} />
                  <div className="text-left">
                    <div className="text-sm opacity-80">WhatsApp</div>
                    <div>{contactInfo.whatsappFormatted}</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-montserrat font-medium text-lg justify-start"
                >
                  <Send className="mr-3" size={24} />
                  <div className="text-left">
                    <div className="text-sm opacity-80">E-mail</div>
                    <div>{contactInfo.email}</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  onClick={() => window.open(contactInfo.instagramUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-montserrat font-medium text-lg justify-start"
                >
                  <Instagram className="mr-3" size={24} />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Instagram</div>
                    <div>{contactInfo.instagram}</div>
                  </div>
                </Button>
              </div>
            </div>
            <Card className="bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="border-gray-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
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
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 font-montserrat-light">
              © 2024 Studio Batisteli. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <Phone size={28} />
      </button>
    </div>
  );
};

export default HomePage;
