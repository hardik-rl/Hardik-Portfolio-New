import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Services from './components/Services';
import AwardsEducation from './components/AwardsEducation';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Ensure body scroll is never locked on initial load
  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#1a1a1a] flex flex-col font-['Manrope',sans-serif] selection:bg-[#ffedd5] selection:text-[#ea580c]">
      {/* Sticky Header with Navigation and Hire Me CTA */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow pt-20 md:pt-24">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <TechMarquee />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Experience />
        <Services
          onOpenContact={() => setIsContactOpen(true)}
        />
        <AwardsEducation />
        <Faq />
      </main>

      {/* Dark Footer matching reference site */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals - conditionally mounted */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

      {isContactOpen && (
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </div>
  );
}
