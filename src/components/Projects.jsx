import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import RollingButton from './RollingButton';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'ReactJS', 'Next.js', 'Enterprise'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'ReactJS') return p.tech.includes('ReactJS') || p.tech.includes('React.js');
    if (activeFilter === 'Next.js') return p.tech.includes('Next.js');
    if (activeFilter === 'Enterprise') return p.category.includes('Enterprise') || p.category.includes('Corporate');
    return true;
  });

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Selected Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mt-1">
              My Latest Work
            </h2>
            <p className="text-neutral-500 text-sm md:text-base mt-1">
              Here is what I have been engineering and deploying lately.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-100/80 p-1.5 rounded-full w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 overflow-hidden hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header & Preview Frame */}
              <div className="p-3 bg-neutral-50/60 border-b border-neutral-100">
                
                {/* Browser Window Header Mockup */}
                <div className="flex items-center justify-between px-2 py-1.5 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[170px]">
                    {project.id}.hardik.dev
                  </span>
                  <div className="w-5"></div>
                </div>

                {/* Simulated Screen / Visual Graphic */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden cursor-pointer shadow-inner bg-gradient-to-br from-neutral-900 to-neutral-800"
                >
                  {/* Dynamic Graphic Mockup */}
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    
                    {/* Background Pattern */}
                    <div className="absolute -right-8 -bottom-8 opacity-20 w-44 h-44 rounded-full border-8 border-white pointer-events-none"></div>
                    <div className="absolute right-10 top-4 opacity-15 w-24 h-24 rounded-2xl border-4 border-white pointer-events-none"></div>

                    {/* Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase">
                        {project.company.split(' ')[0]}
                      </span>
                      <span className="text-[11px] text-white/80 font-mono">
                        {project.tech[0]}
                      </span>
                    </div>

                    {/* Middle Graphic Preview */}
                    <div className="space-y-1.5 my-auto">
                      <h4 className="text-lg font-extrabold leading-snug line-clamp-2">
                        {project.title.split('—')[0]}
                      </h4>
                      <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-white/90">
                      <span>Production Ready</span>
                      <span className="flex items-center gap-1 font-semibold underline decoration-white/50">
                        Details <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay "View Project" matching mukesh-yadav.vercel.app */}
                  <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={14} className="text-orange-600" />
                      View Project Details
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Body Details */}
              <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5 font-medium">
                    <span>{project.company}</span>
                    <span className="text-orange-600 font-semibold">{project.category}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-[13px] line-clamp-3 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold text-neutral-900 hover:text-orange-600 flex items-center gap-1 transition-colors"
                  >
                    View Details <ChevronRight size={14} />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Looking for more code samples & repositories?</h3>
            <p className="text-sm text-neutral-400">
              Explore my GitHub profile for open-source contributions, component libraries, and frontend sandboxes.
            </p>
          </div>
          <RollingButton
            href="https://github.com/hardik-rl"
            target="_blank"
            variant="white"
            className="shrink-0"
          >
            Explore GitHub (hardik-rl)
          </RollingButton>
        </div>

      </div>
    </section>
  );
}
