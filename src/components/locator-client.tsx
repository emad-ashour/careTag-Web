'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Star, Tag, SlidersHorizontal, Sparkles } from 'lucide-react';
import { translations, Locale } from '@/lib/translations';

export interface Agency {
  id: string;
  name: string;
  location: string;
  subscription_status: string;
  created_at: string;
}

export interface EnrichedAgency extends Agency {
  rating: number;
  operatingHours: string;
  promotion: string;
  phone: string;
}

interface LocatorClientProps {
  initialAgencies: Agency[];
  locale?: Locale;
}

// Deterministically enrich agency data
const enrichAgencies = (agencies: Agency[], locale: Locale): EnrichedAgency[] => {
  return agencies.map((agency) => {
    let rating = 4.7;
    let operatingHours = locale === 'ar' ? '٨:٠٠ ص - ٦:٠٠ م' : '8:00 AM - 6:00 PM';
    let promotion = locale === 'ar' 
      ? 'سجل في CareTag مجاناً مع أي خدمة تغيير زيت كاملة' 
      : 'Free CareTag Registration With Any Full Oil Change';
    let phone = '+971 4 123 4567';

    if (agency.name.toLowerCase().includes('premium')) {
      rating = 4.9;
      operatingHours = locale === 'ar' ? '٨:٠٠ ص - ٩:٠٠ م' : '8:00 AM - 9:00 PM';
      promotion = locale === 'ar' ? 'خصم ١٠٪ على استبدال زيت الفرامل' : '10% Off Brake Fluid Replacements';
      phone = '+971 4 999 8888';
    } else if (agency.name.toLowerCase().includes('quick fix')) {
      rating = 4.6;
      operatingHours = locale === 'ar' ? '٧:٣٠ ص - ٦:٠٠ م' : '7:30 AM - 6:00 PM';
      promotion = locale === 'ar' 
        ? 'سجل في CareTag مجاناً مع أي خدمة تغيير زيت كاملة' 
        : 'Free CareTag Registration With Any Full Oil Change';
      phone = '+971 2 555 4433';
    } else {
      // Deterministic generation for new entries
      const charCodeSum = agency.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      rating = +(4.5 + (charCodeSum % 5) * 0.1).toFixed(1);
      
      if (locale === 'ar') {
        operatingHours = charCodeSum % 2 === 0 ? '٨:٠٠ ص - ٦:٠٠ م' : '٩:٠٠ ص - ٧:٠٠ م';
        promotion = charCodeSum % 3 === 0 
          ? 'فحص مجاني لمكيف الهواء مع أي خدمة كاملة' 
          : 'خصم ١٥٪ على زيارتك الأولى مع CareTag';
      } else {
        operatingHours = charCodeSum % 2 === 0 ? '8:00 AM - 6:00 PM' : '9:00 AM - 7:00 PM';
        promotion = charCodeSum % 3 === 0 
          ? 'Free AC Diagnostic with any full service' 
          : '15% Off Your First Visit with CareTag';
      }
      
      phone = `+971 ${50 + (charCodeSum % 5)} ${(1000000 + (charCodeSum % 8999999)).toString().replace(/(\d{3})(\d{4})/, '$1 $2')}`;
    }

    return {
      ...agency,
      rating,
      operatingHours,
      promotion,
      phone,
    };
  });
};

export default function LocatorClient({ initialAgencies, locale = 'ar' }: LocatorClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [onlyWithPromotions, setOnlyWithPromotions] = useState(false);

  const t = translations[locale];
  const enrichedAgencies = useMemo(() => enrichAgencies(initialAgencies, locale), [initialAgencies, locale]);

  // Extract unique cities/regions from location strings (e.g., "Dubai, UAE" -> "Dubai")
  const cities = useMemo(() => {
    const citySet = new Set<string>();
    enrichedAgencies.forEach((agency) => {
      if (agency.location) {
        const parts = agency.location.split(',');
        const city = parts[0].trim();
        if (city) citySet.add(city);
      }
    });
    return Array.from(citySet);
  }, [enrichedAgencies]);

  // Filter agencies
  const filteredAgencies = useMemo(() => {
    return enrichedAgencies.filter((agency) => {
      const matchesSearch = 
        agency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (agency.location && agency.location.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCity = 
        selectedCity === 'ALL' || 
        (agency.location && agency.location.toLowerCase().startsWith(selectedCity.toLowerCase()));

      const matchesPromo = !onlyWithPromotions || !!agency.promotion;

      return matchesSearch && matchesCity && matchesPromo;
    });
  }, [enrichedAgencies, searchQuery, selectedCity, onlyWithPromotions]);

  return (
    <div className="w-full">
      {/* Search and Filters Header */}
      <div className="glassmorphism rounded-2xl p-6 mb-8 relative overflow-hidden">
        
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between relative z-10">
          {/* Search bar */}
          <div className="w-full lg:flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-forest-green w-5 h-5" />
            <input
              type="text"
              placeholder={t.locSearchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-border-slate rounded-xl text-slate-dark placeholder-slate-muted focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm"
            />
          </div>

          {/* Select City */}
          <div className="w-full lg:w-48 relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-border-slate rounded-xl text-slate-dark focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="ALL">{t.locAllLocations}</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-forest-green">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Filter options */}
          <label className="flex items-center gap-2 cursor-pointer select-none self-start lg:self-auto py-1">
            <input
              type="checkbox"
              checked={onlyWithPromotions}
              onChange={(e) => setOnlyWithPromotions(e.target.checked)}
              className="w-4 h-4 rounded border-border-slate text-forest-green focus:ring-forest-green focus:ring-offset-white bg-white"
            />
            <span className="text-sm text-slate-muted font-medium">{t.locPromotionsOnly}</span>
          </label>
        </div>
      </div>

      {/* Grid List of Agencies */}
      {filteredAgencies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map((agency) => (
            <div
              key={agency.id}
              className="glassmorphism-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h4 className="text-lg font-bold text-slate-dark group-hover:text-forest-green transition-colors">
                    {agency.name}
                  </h4>
                  <div className="flex items-center gap-1 bg-[#FEF3C7] text-[#92400E] px-2.5 py-1 rounded-lg text-xs font-bold shrink-0">
                    <Star className="w-3.5 h-3.5 fill-[#92400E] text-[#92400E]" />
                    <span>{agency.rating}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-muted font-medium text-sm mb-2">
                  <MapPin className="w-4 h-4 text-forest-green shrink-0" />
                  <span>{agency.location || 'Unknown Location'}</span>
                </div>

                {/* Operating hours */}
                <div className="flex items-center gap-2 text-slate-muted font-medium text-sm mb-4">
                  <Clock className="w-4 h-4 text-slate-muted shrink-0" />
                  <span>{agency.operatingHours}</span>
                </div>

                {/* Active promotion */}
                {agency.promotion && (
                  <div className="bg-mint-light border border-forest-green/20 rounded-xl p-3 mb-6 flex items-start gap-2.5">
                    <Tag className="w-4 h-4 text-forest-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-forest-green uppercase tracking-wide">{t.locActiveCampaign}</p>
                      <p className="text-xs text-slate-dark font-medium mt-0.5">{agency.promotion}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div className="pt-2 border-t border-border-slate flex items-center justify-between mt-auto">
                <span className="text-xs text-slate-muted font-mono font-medium">{agency.phone}</span>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-mint-light hover:bg-forest-green text-forest-green hover:text-white border border-forest-green/20 rounded-full text-xs font-bold transition-all"
                >
                  {t.locBookService}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface-gray border border-border-slate rounded-2xl">
          <Sparkles className="w-12 h-12 text-forest-green mx-auto mb-3" />
          <h4 className="text-slate-dark font-bold mb-1">{t.locNoAgencies}</h4>
          <p className="text-slate-muted text-sm font-medium max-w-md mx-auto">
            {t.locNoAgenciesDesc}
          </p>
        </div>
      )}
    </div>
  );
}
