'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What kind of jewelry photos do I need to provide?',
      answer: 'We work with standard product photos taken on smartphone or render images from CAD. The clearer and higher resolution your original photos, the better our AI can preserve the details.'
    },
    {
      question: 'Is it safe to use AI-generated images on social media?',
      answer: 'Luxury lifestyle and fashion brands are already making AI promo, and the industry is growing rapidly. AI gives you freedom to have total creative control on your jewelry photography while maintaing realism.'
    },
    {
      question: 'How does the "unlimited revisions" process work?',
      answer: 'For Collection package customers, we refine the outputs until you\'re completely satisfied. We work through your dedicated communication channel to understand your feedback and make adjustments to achieve the exact look you want.'
    },
    {
      question: 'Do you offer larger, custom packages?',
      answer: 'Yes! We are already working with a few Shopify and eBay jewelry retailers, creating 100s of product images for their listing. Surely, we have both the capacity and capability to fulfil your requirements, please get in touch with us for custom orders.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI jewelry photography service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={false}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white border-amber-200 shadow-lg shadow-amber-100/50' 
                  : 'bg-white border-gray-200 hover:border-amber-200/50'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-lg font-semibold transition-colors ${
                  openIndex === index ? 'text-amber-900' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-amber-100 text-amber-600 rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed pt-2 border-t border-amber-50/50">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you understand how AI can transform your jewelry marketing.
              </p>
              <a 
                href="https://wa.me/447727727748"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
