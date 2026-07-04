import React from 'react';
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
  Mail
} from 'lucide-react';
import AgencyLocator from '@/components/locator';
import ContactForm from '@/components/contact-form';

export const metadata = {
  title: 'CareTag — Smarter Car Maintenance Driven by a Single Tap',
  description: 'CareTag replaces lost paper receipts and guesswork with a weather-proof digital ledger attached right to your vehicle. Track service history and connect with verified mechanics instantly.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-slate-100 relative bg-[#050811]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] glow-bg-green opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] glow-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[60%] h-[60%] glow-bg-green opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] glow-bg-blue opacity-40 pointer-events-none" />

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
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
            <a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Ecosystem</a>
            <a href="#locator" className="hover:text-emerald-400 transition-colors">Find a Shop</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Onboarding</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
            >
              Shop Portal
            </a>
            <a 
              href="#locator" 
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            >
              Find Agency
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
              
              {/* Left Column: Hero Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Automotive Ledger Revolution</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                  Smarter Car Maintenance, <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    Driven by a Single Tap.
                  </span>
                </h1>
                
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                  CareTag replaces lost paper receipts and guesswork with a weather-proof digital ledger attached right to your vehicle. Track service history, receive automated reminders, and connect with verified mechanics instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#locator" 
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)] transition-all text-base"
                  >
                    <span>Find an Agency Near You</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-bold rounded-xl flex items-center justify-center transition-all text-base"
                  >
                    <span>For Shops: Become a Partner</span>
                  </a>
                </div>

                {/* Subtext info */}
                <div className="flex items-center gap-6 mt-12 text-xs text-slate-500 border-t border-slate-900 pt-6 w-full">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>PostgreSQL SECURE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-slate-500" />
                    <span>Real-time Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-slate-500" />
                    <span>Anti-Metal NFC Ready</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Mockup */}
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
                The Physical-To-Digital Ledger Loop
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                CareTag bridges physical vehicle assets with secured digital diagnostic histories in three simple checkpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Stick & Register</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Authorized technicians apply a permanent, anti-metal NFC sticker directly to the vehicle&apos;s door jamb during routine service, linking it immediately to the digital profile.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Tap & Inspect</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Mechanics simply tap their smartphone to the jamb sticker to securely load the vehicle&apos;s mechanical profile, past logs, and recommended consumable grades instantly.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glassmorphism-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Track & Remind</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The platform logs chronological service records in the cloud, pushing proactive milestone reminders directly to the car owner weeks before their next scheduled maintenance.
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
                The Cooperative Ecosystem
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                A unified, balanced platform where everyday car owners and professional automotive workshops win together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* For Car Owners */}
              <div className="glassmorphism rounded-3xl p-8 border-t-2 border-t-emerald-500/50 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 glow-bg-green -mr-16 -mt-16 opacity-10" />
                <div>
                  <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    For Car Owners (B2C)
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Full Digital Autonomy
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Take total control over your car&apos;s value and mechanical lifespan. Say goodbye to glovebox clutter, unreadable receipts, and mechanic uncertainty.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span><strong>Permanent Digital Ledger:</strong> Service records securely attached to the car, readable on any phone.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span><strong>Ownership Transfer Shield:</strong> Easily strip your personal identity and contacts while fully preserving mechanical logs to raise resale value.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span><strong>Proactive Alerts:</strong> Automated maintenance reminders customized to your exact vehicle mileage milestones.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Accessible without app download</span>
                  <a href="#locator" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5">
                    <span>Search Verified Partners</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* For Partner Shops */}
              <div className="glassmorphism rounded-3xl p-8 border-t-2 border-t-blue-500/50 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 glow-bg-blue -mr-16 -mt-16 opacity-10" />
                <div>
                  <div className="inline-block bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                    For Partner Shops (B2B)
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Enterprise Engine for Garages
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Boost retention, streamline vehicle intake, and run a digital CRM system that fills bays automatically without marketing overhead.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span><strong>Instant Consumables Intake:</strong> Instantly inspect recommended fluid weights, filter numbers, and tire parameters with one tap.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span><strong>Poach-Proof Histories:</strong> Competitor names are hidden from the public timeline, protecting your customer relationships.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/35 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span><strong>Automated Retention Tools:</strong> Push customized promotions directly to previous visitors weeks before their next service is due.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Fully compatible with generic NFC tags</span>
                  <a href="#contact" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                    <span>Order Merchant Tag Kits</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
                Interactive Agency Locator
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Find authorized local mechanical agencies to register a new CareTag, perform routine scans, or redeem exclusive service promotions.
              </p>
            </div>

            {/* Render Server Component */}
            <AgencyLocator />

          </div>
        </section>


        {/* 5. Subscription & Partner Tiers */}
        <section id="pricing" className="py-20 md:py-28 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Transparent Monetization
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Simple, predictable options tailored for everyday car owners and growing service agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1: Driver Tier */}
              <div className="glassmorphism rounded-3xl p-8 border border-slate-900 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-300 mb-2">Driver Tier</h3>
                  <p className="text-xs text-slate-500 mb-6">For vehicle owners and drivers</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white">$0</span>
                    <span className="text-sm text-slate-400 font-medium">/ month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Track up to 2 vehicles</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Automated service reminders</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Full public directory access</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Standard ledger sharing</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#locator" 
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-center text-sm font-bold transition-all mt-auto"
                >
                  Find a Workshop
                </a>
              </div>

              {/* Card 2: Core Partner Tier */}
              <div className="glassmorphism rounded-3xl p-8 border border-slate-900 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <h3 className="text-lg font-bold text-slate-300 mb-2">Core Partner</h3>
                  <p className="text-xs text-slate-500 mb-6">For independent workshops and mechanics</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white">$0</span>
                    <span className="text-sm text-slate-400 font-medium">/ month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Unlimited NFC scans & lookup</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Basic service logging (manual)</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Standard directory listing</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Verify 1 technician license</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-center text-sm font-bold transition-all mt-auto"
                >
                  Register Shop
                </a>
              </div>

              {/* Card 3: Pro Shop Management */}
              <div className="glassmorphism rounded-3xl p-8 border-2 border-emerald-500/40 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Popular
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 glow-bg-green -ml-16 -mt-16 opacity-20 pointer-events-none" />
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>Pro Shop Management</span>
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-xs text-emerald-400/70 mb-6">Complete CRM & diagnostic platform</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white">Predictable</span>
                    <span className="text-xs text-slate-400 font-medium block mt-1">Monthly Subscription</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Automated CRM Retention:</strong> Automated messages based on service cycles</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Digital Inspections (DVI):</strong> Share visual service proof with car owners</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Inventory Forecast:</strong> Predict parts demand based on local vehicle logs</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Top Placement:</strong> Boosted search ranking in public finder</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-center text-sm font-bold transition-all mt-auto shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  Contact Sales
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
                  Expand Your Reach with CareTag
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Interested in deploying CareTag at your workshop, integrating with our developers APIs, or ordering heavy-duty industrial anti-metal NFC tags? Drop us a message, and our sales team will set up your hardware packet and account credentials.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Partnership Inquiries</h4>
                      <p className="text-sm text-slate-200">partners@caretag.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FileCode2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">API Documentation</h4>
                      <p className="text-sm text-slate-200">developers.caretag.io</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form Component */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Trust Footer */}
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
                Replacing lost vehicle service papers and diagnostic guesswork with weather-proof NFC tags and secure cloud ledgers.
              </p>
            </div>

            {/* Badges Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Mobile Apps</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-emerald-500/20 px-4 py-2.5 rounded-xl transition-all hover:text-white text-xs font-semibold w-fit">
                  <span>Download on App Store</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
                <a href="#store-link" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-emerald-500/20 px-4 py-2.5 rounded-xl transition-all hover:text-white text-xs font-semibold w-fit">
                  <span>Get it on Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Developer Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Developer Tools</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">API Endpoint Specs</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">NFC Write Protocol SDK</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">Webhooks Integrations</a></li>
                <li><a href="#dev" className="hover:text-emerald-400 transition-colors">Github Source (Marketing)</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform Info</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">NFC Spec Sheets</a></li>
                <li><a href="#legal" className="hover:text-emerald-400 transition-colors">SLA Agreements</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <p>&copy; {new Date().getFullYear()} CareTag SaaS Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded border border-slate-950">v1.2.0 (Public Client)</span>
              <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded border border-slate-950">Supabase Secured</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
