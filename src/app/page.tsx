import React from 'react';
import { supabase } from '@/lib/supabase';
import LandingPageClient from '@/components/landing-page-client';
import { Agency } from '@/components/locator-client';

export const revalidate = 10; // Revalidate every 10 seconds

export default async function Home() {
  let agencies: Agency[] = [];
  let errorMsg = '';

  try {
    const { data, error } = await supabase
      .from('agencies')
      .select('id, name, location, subscription_status, created_at')
      .or('subscription_status.eq.active,subscription_status.eq.ACTIVE');

    if (error) {
      console.error('Supabase query error:', error);
      errorMsg = error.message;
    } else if (data) {
      agencies = data as Agency[];
    }
  } catch (err) {
    const error = err as Error;
    console.error('Database connection failed:', error);
    errorMsg = error.message || 'Failed to connect to database';
  }

  // Fallback seed data in case Supabase is completely unavailable (e.g., during offline build or when local environment is stopped)
  if (agencies.length === 0) {
    agencies = [
      {
        id: '11111111-1111-1111-1111-111111111111',
        name: 'Premium Auto Care',
        location: 'Dubai, UAE',
        subscription_status: 'active',
        created_at: new Date().toISOString(),
      },
      {
        id: '11111111-1111-1111-1111-111111111112',
        name: 'Quick Fix Mechanics',
        location: 'Abu Dhabi, UAE',
        subscription_status: 'active',
        created_at: new Date().toISOString(),
      },
    ];
  }

  return (
    <LandingPageClient initialAgencies={agencies} errorMsg={errorMsg || undefined} />
  );
}
