'use server';

import { revalidateTag, revalidatePath } from 'next/cache';

/**
 * Server Actions for cache revalidation
 * These can be called to invalidate cache on-demand
 *
 * https://nextjs.org/docs/app/api-reference/functions/revalidateTag
 */

/**
 * Revalidate the tarot deck cache
 */
export async function revalidateTarotDeck() {
  revalidateTag('tarot-deck');
  revalidatePath('/tarot-read');
  revalidatePath('/card-directory');
}

/**
 * Revalidate the cats cache
 */
export async function revalidateCats() {
  revalidateTag('cats');
  revalidatePath('/cat-directory');
}

/**
 * Revalidate all cached data
 */
export async function revalidateAllData() {
  revalidateTag('tarot-deck');
  revalidateTag('cats');
  revalidatePath('/');
  revalidatePath('/tarot-read');
  revalidatePath('/card-directory');
  revalidatePath('/cat-directory');
}
