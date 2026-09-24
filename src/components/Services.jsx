import React from 'react';
import { services } from '../data/portfolioData';
import RollingButton from './RollingButton';
import { personalInfo } from '../data/portfolioData';

export default function Services({ onOpenContact }) {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-4 items-center mb-8 md:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Services & Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mt-1">
              What I Do
            </h2>
            <p className="text-neutral-500 text-sm md:text-base mt-1">
              Roles & Front-End Engineering Specializations
            </p>
          </div>

          <div className="md:ml-auto">
            <RollingButton
              href={personalInfo.whatsapp}
              target="_blank"
              variant="primary"
            >
              Discuss a Project
            </RollingButton>
          </div>
        </div>

        {/* 2x2 Services Grid matching mukesh-yadav.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/90 hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 font-extrabold flex items-center justify-center text-sm mb-1">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-neutral-900 leading-snug">
                  {service.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-5">
                <ul className="grid grid-cols-1 gap-y-2.5">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700"
                    >
                      <div className="min-w-[14px] mt-0.5">
                        {/* Green Arrow Dash icon matching reference */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path>
                          <path d="M4 9v6"></path>
                        </svg>
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
