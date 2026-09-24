import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Code, ExternalLink } from 'lucide-react';
import { personalInfo, experience, projects, techStack, awards, education } from '../data/portfolioData';
import RollingButton from './RollingButton';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-900">Curriculum Vitae Preview</span>
            <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2.5 py-0.5 rounded-full">
              Hardik Kothiya
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-700 hover:text-orange-600 hover:border-orange-300 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-neutral-200">
            <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-bold text-orange-600 tracking-wider uppercase mt-1">
              {personalInfo.title}
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600 mt-4">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={13} className="text-orange-600" />
                {personalInfo.phone}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} className="text-orange-600" />
                {personalInfo.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-orange-600" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink size={13} className="text-orange-600" />
                github.com/hardik-rl
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-2 border-b border-neutral-200 pb-1">
              Summary
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-2 border-b border-neutral-200 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-neutral-800">
              <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold block text-neutral-900">Languages:</span>
                JavaScript (ES6+), HTML5, CSS3
              </div>
              <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold block text-neutral-900">Frameworks:</span>
                ReactJS, Next.js, Redux, Zustand
              </div>
              <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold block text-neutral-900">UI & Styling:</span>
                TailwindCSS, Bootstrap, Material UI (MUI)
              </div>
              <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold block text-neutral-900">Tools & Integrations:</span>
                Socket.io, Razorpay, Strapi CMS, Figma
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-200 pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-neutral-900">{exp.role} — <span className="text-orange-600">{exp.company}</span></span>
                    <span className="text-xs font-semibold text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-200 pb-1">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 4).map((proj, i) => (
                <div key={i} className="text-xs">
                  <div className="flex items-center justify-between font-bold text-neutral-900 mb-0.5">
                    <span>{proj.title}</span>
                    <span className="text-neutral-500 font-normal">{proj.tech.join(', ')}</span>
                  </div>
                  <p className="text-neutral-600 mb-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Education Row */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-200">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-2">
                Awards & Honors
              </h2>
              <div className="space-y-2 text-xs">
                {awards.map((a, i) => (
                  <div key={i}>
                    <span className="font-bold text-neutral-900">{a.year} — {a.title}</span>
                    <p className="text-neutral-600">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-2">
                Education
              </h2>
              <div className="text-xs">
                <span className="font-bold text-neutral-900">{education.degree}</span>
                <p className="text-neutral-700">{education.institution} ({education.period})</p>
                <p className="text-neutral-500 mt-0.5">{education.description}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
          <p className="text-xs text-neutral-500">
            Available immediately for full-time or contract engagements.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
