import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import RollingButton from './RollingButton';

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry from ' + form.name
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-neutral-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">
              Get in Touch
            </span>
            <h3 className="text-xl font-extrabold mt-0.5">Let's discuss your project</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Message Draft Prepared!</h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Your email client was opened. You can also chat directly on WhatsApp for an immediate response.
              </p>
              <div className="pt-3">
                <RollingButton
                  href={personalInfo.whatsapp}
                  target="_blank"
                  variant="primary"
                >
                  Open WhatsApp Chat
                </RollingButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, role, or timelines..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex max-md:flex-wrap items-center justify-between gap-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <MessageCircle size={16} />
                  WhatsApp instead
                </a>

                <RollingButton variant="primary">
                  Send Message
                </RollingButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
