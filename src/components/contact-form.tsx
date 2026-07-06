'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { translations, Locale } from '@/lib/translations';

interface ContactFormProps {
  locale?: Locale;
}

export default function ContactForm({ locale = 'ar' }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    agencyName: '',
    inquiryType: 'onboarding',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = translations[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({
      name: '',
      email: '',
      agencyName: '',
      inquiryType: 'onboarding',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="glassmorphism rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[400px] border border-border-slate relative overflow-hidden">
        <CheckCircle2 className="w-16 h-16 text-forest-green mb-4" />
        <h3 className="text-2xl font-bold text-slate-dark mb-2">{t.conSuccessTitle}</h3>
        <p className="text-slate-muted font-medium max-w-sm mb-6 text-sm">
          {t.conSuccessDesc}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 bg-white border border-border-slate hover:bg-surface-gray text-slate-dark rounded-full text-sm font-bold transition-all"
        >
          {t.conSuccessBtn}
        </button>
      </div>
    );
  }

  return (
    <div className="glassmorphism rounded-xl p-6 md:p-8 relative overflow-hidden">
      <h3 className="text-xl font-bold text-slate-dark mb-2">{t.conGetInTouch}</h3>
      <p className="text-slate-muted font-medium text-sm mb-6">
        {t.conGetInTouchSub}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelName}</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder={t.conPlaceholderName}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelEmail}</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder={t.conPlaceholderEmail}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-inquiry" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelInquiry}</label>
            <select
              id="contact-inquiry"
              name="inquiryType"
              value={formState.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm cursor-pointer"
            >
              <option value="onboarding">{t.conOptOnboarding}</option>
              <option value="tags">{t.conOptTags}</option>
              <option value="support">{t.conOptSupport}</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-agency" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelAgency}</label>
            <input
              type="text"
              id="contact-agency"
              name="agencyName"
              value={formState.agencyName}
              onChange={handleChange}
              placeholder={t.conPlaceholderAgency}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelMessage}</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={formState.message}
            onChange={handleChange}
            placeholder={t.conPlaceholderMessage}
            className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-3 bg-forest-green hover:bg-[#0A6233] text-white rounded-full font-bold flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all text-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.conBtnSubmitting}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t.conBtnSubmit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
