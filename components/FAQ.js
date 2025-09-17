'use client';
import { useState } from 'react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('main');
  const [openIndex, setOpenIndex] = useState(null);

  const faqTabs = {
    main: {
      title: 'Main',
      faqs: [
        {
          question: "What is PopIn and how does it help with networking?",
          answer: "PopIn is a networking platform designed to help professionals make meaningful connections at events. By entering your skills, interests, and the specific people you're looking to meet, PopIn curates a list of matches based on shared goals and backgrounds. This means you can spend less time wandering around and more time engaging in valuable conversations."
        },
        {
          question: "How do I get started with PopIn?",
          answer: "Getting started with PopIn is simple! Just connect your LinkedIn profile, create a brief intro about yourself, and add your skills, interests, and preferences for the event. PopIn will automatically suggest the best matches for you to connect with, making networking easy and efficient."
        },
        {
          question: "Do I need to download an app to use PopIn?",
          answer: "No, there's no need to download an app. PopIn is a web-based platform that can be accessed directly through its website. This makes it convenient and easy to use without requiring any additional downloads on your device."
        },
        {
          question: "Can I use PopIn at any event?",
          answer: "PopIn is available for events that have partnered with the platform. This includes business conferences, industry seminars, and professional meetups. You can check if your event supports PopIn on our website."
        },
        {
          question: "How secure is my data on PopIn?",
          answer: "PopIn takes your privacy seriously. We securely store your data and only share the information you choose with other attendees. Your personal data is never shared without your permission, and you control how much information you display."
        }
      ]
    },
    getting_started: {
      title: 'Getting Started',
      faqs: [
        {
          question: "What information is needed to create my PopIn account?",
          answer: "To create an account, you need to provide your name, email, and a brief summary of your skills and interests. You'll also need to specify what kind of connections you are looking for, such as industry professionals, mentors, or clients. The more information you provide, the more accurate your matches will be."
        },
        {
          question: "Can I use PopIn to prepare for an event beforehand?",
          answer: "Yes, you can! PopIn allows you to start networking even before the event begins. Once you've registered for an event that supports PopIn, you can log in, set up your profile, and start exploring potential connections. This helps you plan your networking strategy and schedule meetings in advance."
        },
        {
          question: "Can I edit my PopIn profile after I set it up?",
          answer: "Yes, you can update your PopIn profile at any time. This includes changing your skills, interests, or preferences for the type of people you want to meet. Keeping your profile updated ensures that your matches remain relevant and aligned with your current networking goals."
        }
      ]
    },
    using_popin: {
      title: 'Using PopIn',
      faqs: [
        {
          question: "What should I include in my PopIn profile to get the best matches?",
          answer: "For the best results, make sure your profile is complete and detailed. Include your key skills, professional background, and interests, as well as what type of connections you are seeking. The more precise you are, the easier it will be for PopIn to find and suggest productive networking aligned with your goals."
        },
        {
          question: "Can I specify what type of people I want to meet on PopIn?",
          answer: "Yes, PopIn allows you to set specific criteria for the kind of people you want to connect with. Whether you're looking for investors, mentors, industry professionals, or potential business partners, you can specify your preferences."
        },
        {
          question: "How do I find and connect with my matches during an event?",
          answer: "During a curated event, you can use PopIn to see a list of your curated matches who are also attending. Each match will have a profile you can view, and you can initiate a connection request directly through the platform."
        },
        {
          question: "How does PopIn differ from apps like WhatsApp or Slack groups?",
          answer: "Unlike traditional networking apps that rely on large group chats, PopIn streamlines the process by focusing on one-on-one connections. Group chats can be noisy and overwhelming, making it difficult to find the right people. With PopIn, you receive curated matches and can choose to connect via LinkedIn, Instagram, or Twitter."
        }
      ]
    },
    other: {
      title: 'Other Questions',
      faqs: [
        {
          question: "Can PopIn be used for networking after the event is over?",
          answer: "Yes, you can continue to use PopIn even after the event ends by choosing your preferred platform (LinkedIn, Instagram, or Twitter) to follow up with your matches. This way, you can maintain ongoing communication and explore further collaborations."
        },
        {
          question: "Can PopIn help me discover events that match my interests?",
          answer: "PopIn currently partners with a variety of events across different industries. You can explore the upcoming events list on the PopIn website, where events are categorized by industry and focus."
        },
        {
          question: "Can PopIn help if I'm shy or anxious about networking?",
          answer: "Yes, PopIn is especially helpful for those who find networking intimidating. By providing a curated list of matches based on your preferences, it removes the pressure of approaching strangers and helps you focus on connecting with the right people."
        },
        {
          question: "How do I know if an event is supported by PopIn?",
          answer: "Events that have integrated with PopIn will typically mention it in their event details or registration information. You can also visit the PopIn website to see a list of upcoming supported events."
        }
      ]
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setOpenIndex(null); // Close any open FAQ when switching tabs
  };

  const currentFaqs = faqTabs[activeTab].faqs;

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
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

        {/* FAQ Tabs */}
        <div className="faq-tabs">
          {Object.entries(faqTabs).map(([key, tab]) => (
            <button
              key={key}
              className={`faq-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTabChange(key)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        <div className="faq-grid">
          <div className="faq-column">
            {currentFaqs.slice(0, Math.ceil(currentFaqs.length / 2)).map((faq, index) => (
              <div key={`${activeTab}-${index}`} className="faq-item">
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
            {currentFaqs.slice(Math.ceil(currentFaqs.length / 2)).map((faq, index) => {
              const actualIndex = index + Math.ceil(currentFaqs.length / 2);
              return (
                <div key={`${activeTab}-${actualIndex}`} className="faq-item">
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