import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-neutral-50/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Work Experience
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            7+ years of building enterprise-grade, responsive user interfaces across leading tech firms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-neutral-200">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-14 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 md:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-orange-600 shadow-xs group-hover:scale-125 transition-transform duration-200"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-neutral-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold mb-2">
                      <Briefcase size={13} />
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm text-neutral-500 gap-1 font-medium">
                    <span className="inline-flex items-center gap-1.5 bg-neutral-100 px-3 py-1 rounded-lg text-neutral-800 font-semibold">
                      <Calendar size={13} className="text-orange-600" />
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <span className="text-orange-600 font-bold text-xs">
                        {exp.duration}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-neutral-400">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-5 space-y-3">
                  {exp.highlights.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
