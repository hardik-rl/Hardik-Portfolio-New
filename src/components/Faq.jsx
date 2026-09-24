import React, { useState } from 'react';
import { faqs } from '../data/portfolioData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-20 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[450px_1fr] gap-10 md:gap-16 items-start">
          
          {/* Sticky Left Column matching mukesh-yadav.vercel.app */}
          <div className="md:sticky md:top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-tight mt-1">
              Got questions? I've got answers.
            </h2>
            <p className="text-neutral-500 text-sm md:text-base mt-2">
              Find solutions to common queries about my front-end expertise, development workflow, and collaboration.
            </p>
            
            <div className="mt-8 p-5 rounded-2xl bg-orange-50 border border-orange-200/60 hidden md:block">
              <h4 className="text-sm font-bold text-orange-950">Have a custom inquiry?</h4>
              <p className="text-xs text-orange-800 mt-1 leading-relaxed">
                Feel free to email me directly or send a message via WhatsApp. I usually reply within a couple of hours.
              </p>
              <a
                href="https://wa.me/918469974919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs font-bold text-orange-700 hover:text-orange-900 underline"
              >
                Chat on WhatsApp (+91 8469974919) →
              </a>
            </div>
          </div>

          {/* Right Column Accordion Items */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen ? 'border-orange-300 shadow-md ring-1 ring-orange-100' : 'border-neutral-200/90 hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer transition-colors"
                  >
                    <span className="text-base font-bold text-neutral-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-orange-600 text-white rotate-45' : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Content with smooth reveal */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
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
