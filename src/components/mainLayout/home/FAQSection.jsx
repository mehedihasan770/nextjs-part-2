"use client";

import Title from '@/components/sheared/Title';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What file formats do you support?",
      answer: "We support all major 3D formats including FBX, OBJ, GLTF, BLEND, MA, and MAX. Each model comes with multiple format options for compatibility."
    },
    {
      question: "Can I use the models for commercial projects?",
      answer: "Yes! All models come with a commercial license that allows you to use them in games, animations, architectural visualizations, and other commercial projects."
    },
    {
      question: "How does the download process work?",
      answer: "After purchase, you get instant access to download the files. You can download them multiple times and access updates if available. Files are delivered in a ZIP package."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div>
        <Title>
          Asked Questions
        </Title>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#7c3aed]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;