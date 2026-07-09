'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { translations, Locale } from '@/lib/translations';
import { supabase } from '@/lib/supabase';

interface ContactFormProps {
  locale?: Locale;
}

export default function ContactForm({ locale = 'ar' }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    garageName: '',
    phoneNumber: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = translations[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: insertError } = await supabase
        .from('leads')
        .insert([
          {
            name: formState.name,
            garage_name: formState.garageName,
            phone_number: formState.phoneNumber,
            city: formState.city,
            status: 'new',
          }
        ]);
        
      if (insertError) {
        throw new Error(insertError.message);
      }
      
      setSubmitted(true);
      setFormState({
        name: '',
        garageName: '',
        phoneNumber: '',
        city: '',
      });
    } catch (err) {
      const errorObj = err as Error;
      setError(errorObj.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="glassmorphism rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[350px] border border-border-slate relative overflow-hidden">
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

      {error && (
        <div className="mb-4 text-xs text-red-600 bg-red-50 px-4 py-2.5 rounded-xl border border-red-200 font-bold">
          {error}
        </div>
      )}

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
            <label htmlFor="contact-garage" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelGarageName}</label>
            <input
              type="text"
              id="contact-garage"
              name="garageName"
              required
              value={formState.garageName}
              onChange={handleChange}
              placeholder={t.conPlaceholderGarageName}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelPhone}</label>
            <input
              type="text"
              id="contact-phone"
              name="phoneNumber"
              required
              value={formState.phoneNumber}
              onChange={handleChange}
              placeholder={t.conPlaceholderPhone}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-city" className="block text-xs font-bold uppercase text-slate-muted mb-1">{t.conLabelCity}</label>
            <input
              type="text"
              id="contact-city"
              name="city"
              required
              value={formState.city}
              onChange={handleChange}
              placeholder={t.conPlaceholderCity}
              className="w-full px-4 py-2.5 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-3 bg-forest-green hover:bg-[#0A6233] text-white rounded-full font-bold flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all text-sm mt-4"
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
