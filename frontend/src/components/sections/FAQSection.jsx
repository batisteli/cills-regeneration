import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqData } from '../../data/mock';

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-testid="faq-section">
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
  );
};

export default FAQSection;
