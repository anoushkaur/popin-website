
'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How far in advance should I book my session?",
      answer: "We recommend booking at least 2-3 weeks in advance to ensure availability, especially for weekends or busy seasons. However, we can accommodate last-minute bookings depending on our schedule."
    },
    {
      question: "How can I book a photography session?",
      answer: "You can book a session through our website by clicking the 'PopIn Now' button, calling us directly, or sending us an email. We'll work with you to find the perfect time and location."
    },
    {
      question: "What types of photography services do you offer?",
      answer: "We offer portrait photography, event photography, corporate headshots, family sessions, and special occasion photography. Each session is customized to meet your specific needs."
    },
    {
      question: "Do you provide photo editing services?",
      answer: "Yes, all our photography packages include professional photo editing and retouching. We enhance colors, adjust lighting, and ensure each photo meets our high-quality standards."
    },
    {
      question: "How long will it take to receive my photos after the session?",
      answer: "You can expect to receive your edited photos within 7-14 business days after your session. Rush delivery options are available for an additional fee if needed sooner."
    },
    {
      question: "What is included in the photography packages?",
      answer: "Our packages typically include the photography session, professional editing, high-resolution digital images, and an online gallery for easy sharing. Specific inclusions vary by package."
    },
    {
      question: "What should I wear for my photo session?",
      answer: "We recommend wearing clothes that make you feel confident and comfortable. Solid colors work well, and we suggest avoiding busy patterns. We'll provide a detailed style guide upon booking."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          {/* Removed the faq-tag span completely */}
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-contact">
            <button className="contact-btn">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="faq-grid">
          <div className="faq-column">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <div className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => {
              const actualIndex = index + Math.ceil(faqData.length / 2);
              return (
                <div key={actualIndex} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(actualIndex)}
                  >
                    <span>{faq.question}</span>
                    <div className={`faq-icon ${openIndex === actualIndex ? 'open' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {openIndex === actualIndex && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}