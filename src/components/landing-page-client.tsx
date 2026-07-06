'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Database,
  Lock,
  Zap,
  FileCode2,
  ExternalLink,
  Mail,
  Globe
} from 'lucide-react';
import { translations, Locale } from '@/lib/translations';
import LocatorClient, { Agency } from './locator-client';
import ContactForm from './contact-form';

interface LandingPageClientProps {
  initialAgencies: Agency[];
  errorMsg?: string;
}

export default function LandingPageClient({ initialAgencies, errorMsg }: LandingPageClientProps) {
  const [locale, setLocale] = useState<Locale>('ar'); // Default is Arabic first

  const t = translations[locale];

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div 
      dir={locale === 'ar' ? 'rtl' : 'ltr'} 
      className={`flex flex-col min-h-screen text-slate-dark relative bg-white ${locale === 'ar' ? 'lang-ar' : ''}`}
    >

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-forest-green flex items-center justify-center shadow-sm">
              <Zap className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-dark font-mono">
              Care<span className="text-forest-green">Tag</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-muted">
            <a href="#how-it-works" className="hover:text-forest-green transition-colors">{t.navHowItWorks}</a>
            <a href="#ecosystem" className="hover:text-forest-green transition-colors">{t.navEcosystem}</a>
            <a href="#locator" className="hover:text-forest-green transition-colors">{t.navFindShop}</a>
            <a href="#pricing" className="hover:text-forest-green transition-colors">{t.navPricing}</a>
            <a href="#contact" className="hover:text-forest-green transition-colors">{t.navOnboarding}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Selector Button */}
            <button 
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-dark hover:text-forest-green bg-white hover:bg-surface-gray border border-slate-200 rounded-full transition-all cursor-pointer"
              title={locale === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
            >
              <Globe className="w-4 h-4 text-forest-green" />
              <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex px-5 py-2 text-xs font-bold text-forest-green hover:bg-mint-light border border-forest-green rounded-full transition-all"
            >
              {t.navShopPortal}
            </a>
            <a 
              href="#locator" 
              className="px-5 py-2 bg-forest-green hover:bg-[#0A6233] text-white text-xs font-bold rounded-full transition-all hover:shadow-sm"
            >
              {t.navFindAgencyButton}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">

        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-start relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint-light border border-forest-green/20 text-forest-green rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.heroBadge}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-dark mb-6 leading-[1.15]">
                  {t.heroTitlePart1} <br />
                  <span className="text-forest-green">
                    {t.heroTitlePart2}
                  </span>
                </h1>
                
                <p className="text-slate-muted text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 max-w-2xl">
                  {t.heroSubheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#locator" 
                    className="px-8 py-4 bg-forest-green hover:bg-[#0A6233] text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all text-base"
                  >
                    <span>{t.heroCtaPrimary}</span>
                    <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-white hover:bg-surface-gray text-slate-dark border border-border-slate font-bold rounded-full flex items-center justify-center transition-all text-base"
                  >
                    <span>{t.heroCtaSecondary}</span>
                  </a>
                </div>

                {/* Subtext info */}
                <div className="flex items-center gap-6 mt-12 text-xs text-slate-muted font-medium border-t border-border-slate pt-6 w-full">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-forest-green" />
                    <span>{t.heroFooterSecure}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-forest-green" />
                    <span>{t.heroFooterSync}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-forest-green" />
                    <span>{t.heroFooterNfc}</span>
                  </div>
                </div>
              </div>

              {/* Hero Mockup */}
              <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto flex justify-center lg:justify-end">
                <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[500px]">
                  <div className="relative border border-border-slate rounded-3xl p-3 bg-white overflow-hidden">
                    <Image
                      src="/hero-visual.png"
                      alt="CareTag Vehicle Door Jamb NFC Tag & Mobile Service History Ledger Mockup"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 2. How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-28 border-t border-border-slate bg-surface-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-dark mb-4">
                {t.howTitle}
              </h2>
              <p className="text-slate-muted text-sm sm:text-base font-medium">
                {t.howSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-mint-light border border-forest-green/20 text-forest-green flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-forest-green group-hover:text-white transition-all">
                  {t.step1Num}
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">{t.step1Title}</h3>
                <p className="text-slate-muted text-sm font-medium leading-relaxed">
                  {t.step1Desc}
                </p>
              </div>

              {/* Step 2 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-mint-light border border-forest-green/20 text-forest-green flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-forest-green group-hover:text-white transition-all">
                  {t.step2Num}
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">{t.step2Title}</h3>
                <p className="text-slate-muted text-sm font-medium leading-relaxed">
                  {t.step2Desc}
                </p>
              </div>

              {/* Step 3 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-mint-light border border-forest-green/20 text-forest-green flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-forest-green group-hover:text-white transition-all">
                  {t.step3Num}
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">{t.step3Title}</h3>
                <p className="text-slate-muted text-sm font-medium leading-relaxed">
                  {t.step3Desc}
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* 3. The Cooperative Ecosystem Section */}
        <section id="ecosystem" className="py-20 md:py-28 border-t border-border-slate bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-dark mb-4">
                {t.ecoTitle}
              </h2>
              <p className="text-slate-muted text-sm sm:text-base font-medium">
                {t.ecoSub}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* For Car Owners */}
              <div className="glassmorphism rounded-3xl p-8 border-t-4 border-t-forest-green relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-mint-light border border-forest-green/20 text-forest-green px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    {t.ecoB2cBadge}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-dark mb-4">
                    {t.ecoB2cTitle}
                  </h3>
                  <p className="text-slate-muted text-sm font-medium leading-relaxed mb-6">
                    {t.ecoB2cDesc}
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2cItem1}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2cItem2}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2cItem3}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border-slate flex items-center justify-between">
                  <span className="text-xs text-slate-muted font-medium">{t.ecoB2cFooter}</span>
                  <a href="#locator" className="text-xs font-bold text-forest-green hover:text-[#0A6233] flex items-center gap-1.5">
                    <span>{t.ecoB2cAction}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>

              {/* For Partner Shops */}
              <div className="glassmorphism rounded-3xl p-8 border-t-4 border-t-forest-green relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-mint-light border border-forest-green/20 text-forest-green px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    {t.ecoB2bBadge}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-dark mb-4">
                    {t.ecoB2bTitle}
                  </h3>
                  <p className="text-slate-muted text-sm font-medium leading-relaxed mb-6">
                    {t.ecoB2bDesc}
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2bItem1}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2bItem2}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-muted text-sm font-medium">
                      <div className="w-5 h-5 rounded-md bg-mint-light border border-forest-green/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-green" />
                      </div>
                      <span>{t.ecoB2bItem3}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border-slate flex items-center justify-between">
                  <span className="text-xs text-slate-muted font-medium">{t.ecoB2bFooter}</span>
                  <a href="#contact" className="text-xs font-bold text-forest-green hover:text-[#0A6233] flex items-center gap-1.5">
                    <span>{t.ecoB2bAction}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 4. Interactive Agency Locator Section */}
        <section id="locator" className="py-20 md:py-28 border-t border-border-slate bg-surface-gray relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-dark mb-4">
                {t.locTitle}
              </h2>
              <p className="text-slate-muted text-sm sm:text-base font-medium">
                {t.locSub}
              </p>
            </div>

            {/* Offline Database Warning notice */}
            {errorMsg && (
              <div className="mb-6 text-xs text-forest-green bg-mint-light px-4 py-2 rounded-xl border border-forest-green/20 font-bold text-center max-w-lg mx-auto">
                {t.locOfflineNote}
              </div>
            )}

            {/* Render Locator Client Component directly */}
            <LocatorClient initialAgencies={initialAgencies} locale={locale} />

          </div>
        </section>


        {/* 5. Subscription & Partner Tiers */}
        <section id="pricing" className="py-20 md:py-28 border-t border-border-slate bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-dark mb-4">
                {t.prTitle}
              </h2>
              <p className="text-slate-muted text-sm sm:text-base font-medium">
                {t.prSub}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1: Driver Tier */}
              <div className="glassmorphism rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-dark mb-2">{t.prDriverTitle}</h3>
                  <p className="text-xs text-slate-muted font-medium mb-6">{t.prDriverSub}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-slate-dark">{t.prDriverPrice}</span>
                    <span className="text-sm text-slate-muted font-medium">{t.prDriverPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prDriverItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prDriverItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prDriverItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prDriverItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#locator" 
                  className="w-full py-3 bg-white hover:bg-surface-gray text-forest-green border border-forest-green rounded-full text-center text-sm font-bold transition-all mt-auto"
                >
                  {t.prDriverAction}
                </a>
              </div>

              {/* Card 2: Core Partner Tier */}
              <div className="glassmorphism rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-dark mb-2">{t.prPartnerTitle}</h3>
                  <p className="text-xs text-slate-muted font-medium mb-6">{t.prPartnerSub}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-slate-dark">{t.prPartnerPrice}</span>
                    <span className="text-sm text-slate-muted font-medium">{t.prPartnerPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prPartnerItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prPartnerItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prPartnerItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prPartnerItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-white hover:bg-surface-gray text-forest-green border border-forest-green rounded-full text-center text-sm font-bold transition-all mt-auto"
                >
                  {t.prPartnerAction}
                </a>
              </div>

              {/* Card 3: Pro Shop Management */}
              <div className="glassmorphism rounded-3xl p-8 border-2 border-forest-green flex flex-col justify-between relative overflow-hidden">
                <div className={`absolute top-0 ${locale === 'ar' ? 'left-0 rounded-br-xl' : 'right-0 rounded-bl-xl'} bg-forest-green text-white font-extrabold text-[10px] px-3 py-1 uppercase tracking-wider`}>
                  {t.prPopularBadge}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-dark mb-2 flex items-center gap-2">
                    <span>{t.prProTitle}</span>
                    <Sparkles className="w-4 h-4 text-forest-green" />
                  </h3>
                  <p className="text-xs text-forest-green font-bold mb-6">{t.prProSub}</p>
                  
                  <div className="flex flex-col gap-1 mb-8">
                    <span className="text-3xl font-extrabold text-slate-dark">{t.prProPrice}</span>
                    <span className="text-xs text-slate-muted font-medium block mt-1">{t.prProPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prProItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prProItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prProItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-muted text-sm font-medium">
                      <Check className="w-4 h-4 text-forest-green shrink-0" />
                      <span>{t.prProItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-forest-green hover:bg-[#0A6233] text-white rounded-full text-center text-sm font-bold transition-all mt-auto"
                >
                  {t.prProAction}
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* 6. Contact Us Form */}
        <section id="contact" className="py-20 md:py-28 border-t border-border-slate bg-surface-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Form Info */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-dark mb-6">
                  {t.conTitle}
                </h2>
                <p className="text-slate-muted text-sm sm:text-base font-medium leading-relaxed mb-8">
                  {t.conDesc}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-mint-light border border-forest-green/20 text-forest-green flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-muted">{t.conPartnerInquiries}</h4>
                      <p className="text-sm text-slate-dark font-medium">partners@caretag.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-mint-light border border-forest-green/20 text-forest-green flex items-center justify-center shrink-0">
                      <FileCode2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-muted">{t.conApiDocs}</h4>
                      <p className="text-sm text-slate-dark font-medium">developers.caretag.io</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form Component */}
              <div className="lg:col-span-7">
                <ContactForm locale={locale} />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-surface-gray border-t border-slate-100 py-12 md:py-16 text-slate-muted text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Logo Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-forest-green flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-dark font-mono">
                  Care<span className="text-forest-green">Tag</span>
                </span>
              </div>
              <p className="text-xs text-slate-muted leading-relaxed mb-6">
                {t.footDesc}
              </p>
            </div>

            {/* Badges Column */}
            <div>
              <h4 className="text-xs font-bold text-slate-dark uppercase tracking-wider mb-4">{t.footApps}</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-forest-green/20 hover:bg-surface-gray px-4 py-2.5 rounded-full transition-all text-slate-dark hover:text-forest-green text-xs font-semibold w-fit">
                  <span>{t.footAppStore}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-forest-green/20 hover:bg-surface-gray px-4 py-2.5 rounded-full transition-all text-slate-dark hover:text-forest-green text-xs font-semibold w-fit">
                  <span>{t.footGooglePlay}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Developer Links */}
            <div>
              <h4 className="text-xs font-bold text-slate-dark uppercase tracking-wider mb-4">{t.footDevs}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#dev" className="hover:text-forest-green transition-colors">{t.footApiSpecs}</a></li>
                <li><a href="#dev" className="hover:text-forest-green transition-colors">{t.footNfcSdk}</a></li>
                <li><a href="#dev" className="hover:text-forest-green transition-colors">{t.footWebhooks}</a></li>
                <li><a href="#dev" className="hover:text-forest-green transition-colors">{t.footGithub}</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold text-slate-dark uppercase tracking-wider mb-4">{t.footLegal}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#legal" className="hover:text-forest-green transition-colors">{t.footPrivacy}</a></li>
                <li><a href="#legal" className="hover:text-forest-green transition-colors">{t.footTerms}</a></li>
                <li><a href="#legal" className="hover:text-forest-green transition-colors">{t.footNfcSpecs}</a></li>
                <li><a href="#legal" className="hover:text-forest-green transition-colors">{t.footSla}</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} CareTag SaaS Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="font-mono text-[10px] bg-mint-light text-forest-green px-3 py-1 rounded-full border border-forest-green/10">{t.footVersion}</span>
              <span className="font-mono text-[10px] bg-mint-light text-forest-green px-3 py-1 rounded-full border border-forest-green/10">{t.footSecured}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
