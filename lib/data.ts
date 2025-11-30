import { unstable_cache } from 'next/cache';
import { supabase } from '../supabase';
import type { TarotCard, Cat } from '../types/database';

/**
 * Fetch tarot deck and cache it
 * Unstable_cache persists across requests with (1 hour revalidation)
 * The cache key is "tarot-deck" and "cats"
 *
 * Next.js 15+ uses "use_cache" so if we update at some point we'll need to refactor from "unstable_cache"
 *
 * https://nextjs.org/docs/app/api-reference/functions/unstable_cache
 */
export const getTarotDeck = unstable_cache(
  async (): Promise<TarotCard[]> => {
    const { data, error } = await supabase
      .from('tarotCardInformation')
      .select()
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching tarot deck:', error);
      return [];
    }

    return data || [];
  },
  ['tarot-deck'],
  {
    revalidate: 3600,
    tags: ['tarot-deck']
  }
);

export const getCats = unstable_cache(
  async (): Promise<Cat[]> => {
    const { data, error } = await supabase.from('catData').select();

    if (error) {
      console.error('Error fetching cats:', error);
      return [];
    }

    return data || [];
  },
  ['cats'],
  {
    revalidate: 3600,
    tags: ['cats']
  }
);
