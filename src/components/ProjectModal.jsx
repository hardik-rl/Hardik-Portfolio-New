import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Briefcase, Sparkles } from 'lucide-react';
import RollingButton from './RollingButton';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
            <span>{project.company}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold pr-8 leading-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-white/90 mt-2 max-w-2xl font-medium">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <Layers size={16} className="text-orange-600" />
              Project Brief & Description
            </h3>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                <Briefcase size={16} className="text-orange-600" />
                Key Roles & Responsibilities
              </h3>
              <ul className="space-y-2.5">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-800 text-xs sm:text-sm font-semibold">
              <Sparkles size={16} className="text-orange-600 shrink-0" />
              <span>Highlights: {project.metrics}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50/70 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <RollingButton
                href={project.liveUrl}
                target="_blank"
                variant="primary"
              >
                Visit Live Site
              </RollingButton>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
