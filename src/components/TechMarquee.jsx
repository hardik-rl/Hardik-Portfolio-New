import React from 'react';
import { techStack } from '../data/portfolioData';

export default function TechMarquee() {
  // Duplicate list to create a seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section id="skills" className="py-8 md:py-14 border-y border-neutral-200/80 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Technical Expertise
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mt-1">
              Tech Stack & Toolkit
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500">
            7+ years of building with modern front-end frameworks & tools
          </p>
        </div>
      </div>

      {/* Marquee Container with side fade gradients */}
      <div className="relative overflow-hidden w-full py-2">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10"></div>
        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10"></div>

        {/* Scrolling items */}
        <div className="animate-marquee flex gap-4 sm:gap-6 px-6 cursor-grab active:cursor-grabbing select-none">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-[220px] sm:w-[250px] group transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5 px-3 py-3 rounded-xl border border-neutral-200 bg-white hover:border-orange-300 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: tech.svg }}
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-neutral-900 truncate">
                      {tech.name}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 truncate mt-0.5 font-medium">
                    {tech.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
