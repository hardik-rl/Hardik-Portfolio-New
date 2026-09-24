import React from 'react';
import { awards, education } from '../data/portfolioData';
import { Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function AwardsEducation() {
  return (
    <section className="py-12 md:py-16 bg-neutral-50/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Awards Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                <Award size={22} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Recognition
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                  Honors & Awards
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold">
                      {award.year}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {award.organization}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Academic Background
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                  Education
                </h3>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 h-fit">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center gap-1.5">
                  <Calendar size={13} />
                  {education.period}
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  Degree
                </span>
              </div>

              <h4 className="text-xl font-bold text-neutral-900 leading-snug">
                {education.degree}
              </h4>
              <p className="text-sm font-semibold text-neutral-700 mt-1">
                {education.institution}
              </p>

              <div className="mt-4 pt-4 border-t border-neutral-100">
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {education.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Computer Fundamentals", "Data Structures", "Databases", "HTML & CSS", "JavaScript", "Algorithms"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
