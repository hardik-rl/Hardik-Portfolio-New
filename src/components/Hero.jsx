import React, { useState } from 'react';
import RollingButton from './RollingButton';
import { personalInfo, stats } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenResume, onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-8 pb-12 md:pt-14 md:pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
          
          {/* Main Huge Typography Headline */}
          <div className="space-y-3">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Front-End & ReactJS Roles
            </div> */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-neutral-900 tracking-tight leading-[1.08] max-w-5xl">
              Full-Stack Developer/ Front-End Expert. 
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">Next JS, React JS, Tailwind, MUI, Strapi CMS.</p>
          </div>

          {/* Profile & About Grid */}
          <div className="grid lg:grid-cols-[62%_34%] xl:grid-cols-[55%_38%] justify-between gap-y-10 gap-x-8 items-start">
            
            {/* Left Column: Photo & Story */}
            <div className="grid sm:grid-cols-[200px_1fr] md:grid-cols-[220px_1fr] gap-6 items-start">
              
              {/* Profile Card / Avatar matching mukesh-yadav.vercel.app */}
              <div className="relative group">
                <div className="relative w-full aspect-square sm:w-[200px] md:w-[220px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md">
                  {!imgError && personalInfo.avatarUrl ? (
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-orange-950 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-extrabold text-3xl shadow-inner mb-2">
                        HK
                      </div>
                      <h3 className="text-white font-bold text-sm leading-tight">Hardik Kothiya</h3>
                      <p className="text-orange-300 text-[11px] font-medium mt-0.5">7+ Years Experience</p>
                      <div className="mt-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] text-neutral-200 border border-white/10">
                        <MapPin size={10} className="text-orange-400" />
                        <span>Ahmedabad, India</span>
                      </div>
                    </div>
                  )}
                  {/* Subtle location badge */}
                  {!imgError && (
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-neutral-200 border border-white/10 flex items-center justify-center gap-1.5 shadow-sm">
                      <MapPin size={11} className="text-orange-400" />
                      <span>Ahmedabad, India</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bio & Resume CTA */}
              <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                      Hey, I'm Hardik Kothiya
                    </h2>
                    <p className="text-neutral-500 text-sm font-semibold tracking-wide mt-0.5">
                      Senior Full-Stack Developer/ Front-End Expert / ReactJS & Next.js
                    </p>
                  </div>
                  <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {/* <RollingButton onClick={onOpenResume} variant="primary">
                    Download Resume
                  </RollingButton> */}
                  {/* <a href={`https://your-domain.com/${personalInfo.resumeUrl}.pdf`} target="_blank" rel="noopener noreferrer">
                    <RollingButton variant="primary">
                      Download Resume
                    </RollingButton>
                  </a> */}
                  <RollingButton onClick={onOpenContact} variant="outline">
                    Contact Me
                  </RollingButton>
                  {/* <RollingButton
                    href={personalInfo.whatsapp}
                    target="_blank"
                    variant="outline"
                  >
                    Quick WhatsApp
                  </RollingButton> */}
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Quick Links */}
            <div className="flex flex-col gap-6 lg:items-end lg:text-right bg-neutral-50/70 lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-neutral-100 lg:border-0">
              <div>
                <p className="text-neutral-500 text-sm font-medium">Got a project or opportunity? Let's talk.</p>
                <div className="mt-1.5 flex items-center lg:justify-end gap-2 group">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="relative overflow-hidden inline-block text-base sm:text-lg font-bold text-neutral-900 hover:text-orange-600 transition-colors"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-[110%]">
                      {personalInfo.email}
                    </span>
                    <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-[110%] text-orange-600">
                      {personalInfo.email}
                    </span>
                  </a>
                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded-md hover:bg-neutral-200/70 text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-emerald-600 font-medium">Email copied to clipboard!</span>
                )}
              </div>

              <div>
                <p className="text-neutral-500 text-sm font-medium">Direct Line:</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-neutral-900 font-semibold text-sm hover:text-orange-600 transition-colors block mt-1"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div>
                <p className="text-neutral-500 text-sm font-medium mb-2.5">Social Profiles:</p>
                <div className="flex items-center gap-2.5 lg:justify-end">
                  {/* GitHub Icon */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-neutral-300/80 bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 text-neutral-700 shadow-xs"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-neutral-300/80 bg-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 text-neutral-700 shadow-xs"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  {/* WhatsApp Icon */}
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-neutral-300/80 bg-white hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 text-neutral-700 shadow-xs"
                    aria-label="WhatsApp Chat"
                  >
                    <MessageCircle size={18} />
                  </a>
                  {/* Email Icon */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2.5 rounded-full border border-neutral-300/80 bg-white hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 text-neutral-700 shadow-xs"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Row */}
          <div className="pt-8 border-t border-neutral-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-neutral-800 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-neutral-500 mt-0.5 hidden sm:block">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
