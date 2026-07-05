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
      className={`flex flex-col min-h-screen text-slate-100 relative bg-[#050811] ${locale === 'ar' ? 'lang-ar' : ''}`}
    >
      
      {/* Background Ambient Glows */}
      <div className={`absolute top-[-10%] ${locale === 'ar' ? 'right-[-10%]' : 'left-[-10%]'} w-[50%] h-[50%] glow-bg-green opacity-40 pointer-events-none`} />
      <div className={`absolute top-[20%] ${locale === 'ar' ? 'left-[-10%]' : 'right-[-10%]'} w-[50%] h-[50%] glow-bg-blue opacity-30 pointer-events-none`} />
      <div className={`absolute bottom-[20%] ${locale === 'ar' ? 'right-[-15%]' : 'left-[-15%]'} w-[60%] h-[60%] glow-bg-green opacity-20 pointer-events-none`} />
      <div className={`absolute bottom-[-10%] ${locale === 'ar' ? 'left-[-10%]' : 'right-[-10%]'} w-[50%] h-[50%] glow-bg-blue opacity-40 pointer-events-none`} />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glassmorphism border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Zap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              Care<span className="text-emerald-400">Tag</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">{t.navHowItWorks}</a>
            <a href="#ecosystem" className="hover:text-emerald-400 transition-colors">{t.navEcosystem}</a>
            <a href="#locator" className="hover:text-emerald-400 transition-colors">{t.navFindShop}</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">{t.navPricing}</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">{t.navOnboarding}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Selector Button */}
            <button 
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
              title={locale === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
            >
              {t.navShopPortal}
            </a>
            <a 
              href="#locator" 
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.heroBadge}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
                  {t.heroTitlePart1} <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    {t.heroTitlePart2}
                  </span>
                </h1>
                
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                  {t.heroSubheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#locator" 
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)] transition-all text-base"
                  >
                    <span>{t.heroCtaPrimary}</span>
                    <ArrowRight className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-bold rounded-xl flex items-center justify-center transition-all text-base"
                  >
                    <span>{t.heroCtaSecondary}</span>
                  </a>
                </div>

                {/* Subtext info */}
                <div className="flex items-center gap-6 mt-12 text-xs text-slate-500 border-t border-slate-900 pt-6 w-full">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{t.heroFooterSecure}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-slate-500" />
                    <span>{t.heroFooterSync}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-slate-500" />
                    <span>{t.heroFooterNfc}</span>
                  </div>
                </div>
              </div>

              {/* Hero Mockup */}
              <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto flex justify-center lg:justify-end">
                <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 rounded-3xl filter blur-xl opacity-40 animate-pulse" />
                  <div className="relative border border-slate-800 rounded-3xl p-3 bg-slate-950/60 backdrop-blur-md overflow-hidden shadow-2xl">
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
        <section id="how-it-works" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.howTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.howSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  {t.step1Num}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t.step1Title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.step1Desc}
                </p>
              </div>

              {/* Step 2 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  {t.step2Num}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t.step2Title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.step2Desc}
                </p>
              </div>

              {/* Step 3 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  {t.step3Num}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{t.step3Title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.step3Desc}
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* 3. The Cooperative Ecosystem Section */}
        <section id="ecosystem" className="py-20 md:py-28 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.ecoTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.ecoSub}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* For Car Owners */}
              <div className="glassmorphism rounded-3xl p-8 border-t-2 border-t-emerald-500/50 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 glow-bg-green -mr-16 -mt-16 opacity-10" />
                <div>
                  <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    {t.ecoB2cBadge}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t.ecoB2cTitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {t.ecoB2cDesc}
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span>{t.ecoB2cItem1}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span>{t.ecoB2cItem2}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span>{t.ecoB2cItem3}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{t.ecoB2cFooter}</span>
                  <a href="#locator" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5">
                    <span>{t.ecoB2cAction}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>

              {/* For Partner Shops */}
              <div className="glassmorphism rounded-3xl p-8 border-t-2 border-t-blue-500/50 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 glow-bg-blue -mr-16 -mt-16 opacity-10" />
                <div>
                  <div className="inline-block bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    {t.ecoB2bBadge}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t.ecoB2bTitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {t.ecoB2bDesc}
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span>{t.ecoB2bItem1}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span>{t.ecoB2bItem2}</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span>{t.ecoB2bItem3}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{t.ecoB2bFooter}</span>
                  <a href="#contact" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                    <span>{t.ecoB2bAction}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 4. Interactive Agency Locator Section */}
        <section id="locator" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.locTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.locSub}
              </p>
            </div>

            {/* Offline Database Warning notice */}
            {errorMsg && (
              <div className="mb-4 text-xs text-emerald-500/80 bg-emerald-500/5 px-3 py-1.5 rounded-lg border border-emerald-500/10 font-mono text-center max-w-lg mx-auto">
                {t.locOfflineNote}
              </div>
            )}

            {/* Render Locator Client Component directly */}
            <LocatorClient initialAgencies={initialAgencies} locale={locale} />

          </div>
        </section>


        {/* 5. Subscription & Partner Tiers */}
        <section id="pricing" className="py-20 md:py-28 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.prTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.prSub}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1: Driver Tier */}
              <div className="glassmorphism rounded-3xl p-8 border border-slate-900 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-300 mb-2">{t.prDriverTitle}</h3>
                  <p className="text-xs text-slate-500 mb-6">{t.prDriverSub}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white">{t.prDriverPrice}</span>
                    <span className="text-sm text-slate-400 font-medium">{t.prDriverPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prDriverItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prDriverItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prDriverItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prDriverItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#locator" 
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-center text-sm font-bold transition-all mt-auto"
                >
                  {t.prDriverAction}
                </a>
              </div>

              {/* Card 2: Core Partner Tier */}
              <div className="glassmorphism rounded-3xl p-8 border border-slate-900 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-300 mb-2">{t.prPartnerTitle}</h3>
                  <p className="text-xs text-slate-500 mb-6">{t.prPartnerSub}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white">{t.prPartnerPrice}</span>
                    <span className="text-sm text-slate-400 font-medium">{t.prPartnerPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prPartnerItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prPartnerItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prPartnerItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prPartnerItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-center text-sm font-bold transition-all mt-auto"
                >
                  {t.prPartnerAction}
                </a>
              </div>

              {/* Card 3: Pro Shop Management */}
              <div className="glassmorphism rounded-3xl p-8 border-2 border-emerald-500/40 flex flex-col justify-between relative overflow-hidden">
                <div className={`absolute top-0 ${locale === 'ar' ? 'left-0 rounded-br-xl' : 'right-0 rounded-bl-xl'} bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 uppercase tracking-wider`}>
                  {t.prPopularBadge}
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 glow-bg-green -ml-16 -mt-16 opacity-20 pointer-events-none" />
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>{t.prProTitle}</span>
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-emerald-400/70 mb-6">{t.prProSub}</p>
                  
                  <div className="flex flex-col gap-1 mb-8">
                    <span className="text-3xl font-extrabold text-white">{t.prProPrice}</span>
                    <span className="text-xs text-slate-400 font-medium block mt-1">{t.prProPeriod}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prProItem1}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prProItem2}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prProItem3}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.prProItem4}</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-center text-sm font-bold transition-all mt-auto shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  {t.prProAction}
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* 6. Contact Us Form */}
        <section id="contact" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Form Info */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                  {t.conTitle}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {t.conDesc}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.conPartnerInquiries}</h4>
                      <p className="text-sm text-slate-200">partners@caretag.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FileCode2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.conApiDocs}</h4>
                      <p className="text-sm text-slate-200">developers.caretag.io</p>
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
      <footer className="bg-slate-950 border-t border-slate-900 py-12 md:py-16 text-slate-400 text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Logo Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white font-mono">
                  Care<span className="text-emerald-400">Tag</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {t.footDesc}
              </p>
            </div>

            {/* Badges Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{t.footApps}</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-emerald-500/20 px-4 py-2.5 rounded-xl transition-all hover:text-white text-xs font-semibold w-fit">
                  <span>{t.footAppStore}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-emerald-500/20 px-4 py-2.5 rounded-xl transition-all hover:text-white text-xs font-semibold w-fit">
                  <span>{t.footGooglePlay}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Developer Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{t.footDevs}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">{t.footApiSpecs}</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">{t.footNfcSdk}</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">{t.footWebhooks}</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">{t.footGithub}</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{t.footLegal}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">{t.footPrivacy}</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">{t.footTerms}</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">{t.footNfcSpecs}</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">{t.footSla}</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <p>&copy; {new Date().getFullYear()} CareTag SaaS Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded border border-slate-950">{t.footVersion}</span>
              <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded border border-slate-950">{t.footSecured}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
