import React, { useState, useEffect } from 'react';
import RollingButton from './RollingButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'projects', 'experience', 'services', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Portfolio', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'py-3.5 md:py-4 bg-[#fbfbfb]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 py-1.5 px-2 rounded-full hover:bg-neutral-100/70 transition-colors"
          >
            <div className="relative">
              {!imgError && personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  onError={() => setImgError(true)}
                  className="w-9 h-9 rounded-full object-cover border border-neutral-200"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-bold text-sm flex items-center justify-center shadow-inner">
                  HK
                </div>
              )}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-900 text-sm font-bold tracking-tight leading-none">
                Hardik Kothiya
              </span>
              <span className="text-neutral-500 text-[11px] font-medium tracking-tight mt-0.5">
                Full-Stack Developer/ Front-End Expert
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-neutral-200/70 shadow-sm rounded-full p-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-orange-600 hover:bg-neutral-100/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-neutral-600 hover:text-orange-600 px-3.5 py-2 rounded-full border border-neutral-200/80 hover:border-orange-300 transition-colors"
            >
              Resume
            </button> */}
            <RollingButton
              href={personalInfo.whatsapp}
              target="_blank"
              variant="primary"
            >
              Hire Me
            </RollingButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <RollingButton
              href={personalInfo.whatsapp}
              target="_blank"
              variant="primary"
              className="!px-3.5 !py-2 !text-xs md:hidden"
            >
              Hire Me
            </RollingButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-neutral-200 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-50 text-orange-600 font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="opacity-50" />
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-neutral-800 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                View Full Resume
              </button>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-colors"
              >
                Chat on WhatsApp (+91 8469974919)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
