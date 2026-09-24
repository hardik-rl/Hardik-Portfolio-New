import React from 'react';
import RollingButton from './RollingButton';
import { personalInfo } from '../data/portfolioData';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer id="contact" className="bg-[#0b0c10] text-white pt-14 pb-8 md:pt-20 md:pb-12 mt-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Big CTA Column matching mukesh-yadav.vercel.app */}
          <div className="lg:col-span-2 flex flex-col gap-4 items-start">
            <span className="text-orange-500 text-sm md:text-base font-bold tracking-wide uppercase">
              Start a Conversation
            </span>
            <p className="text-sm md:text-lg text-neutral-300">
              Have a project or team opening in mind?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Let's work together.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-1 leading-relaxed">
              Available for full-time front-end engineering positions, architecture consulting, and high-quality web applications.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <RollingButton
                href={personalInfo.whatsapp}
                target="_blank"
                variant="white"
                className="!text-orange-600 font-bold"
              >
                Let's Connect
              </RollingButton>
              <RollingButton
                href={`mailto:${personalInfo.email}`}
                variant="outline"
                className="!text-white !border-neutral-700 hover:!border-orange-500 hover:!bg-white/10"
              >
                Send an Email
              </RollingButton>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:ml-auto">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Connect Directly
            </h3>

            <div className="flex flex-col gap-4 text-sm">
              {/* WhatsApp */}
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-emerald-600 flex items-center justify-center transition-colors text-white">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="font-semibold block leading-tight">WhatsApp</span>
                  <span className="text-xs text-neutral-400">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-orange-600 flex items-center justify-center transition-colors text-white">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="font-semibold block leading-tight">Phone Call</span>
                  <span className="text-xs text-neutral-400">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-orange-600 flex items-center justify-center transition-colors text-white">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="font-semibold block leading-tight">Email</span>
                  <span className="text-xs text-neutral-400">{personalInfo.email}</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors text-white">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div>
                  <span className="font-semibold block leading-tight">GitHub</span>
                  <span className="text-xs text-neutral-400">github.com/hardik-rl</span>
                </div>
              </a>

              {/* Location */}
              <div className="inline-flex items-center gap-3 text-neutral-400 pt-2 border-t border-white/10 text-xs">
                <MapPin size={15} className="text-orange-500 shrink-0" />
                <span>{personalInfo.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Hardik Kothiya. All rights reserved.</p>
          <p className="font-mono text-neutral-400 flex items-center gap-1.5">
            Crafted with ReactJS & TailwindCSS • <span className="text-orange-400 font-bold">&lt;Hardik Kothiya&gt;</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
