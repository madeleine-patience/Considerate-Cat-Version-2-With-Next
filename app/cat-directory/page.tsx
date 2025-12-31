/**
 * Server Component - runs on server only
 */
import { getCats, getTarotDeck } from '../../lib/data';
import CatDirectoryClient from './CatDirectoryClient';

/**
 * Revalidate this page cache every hour
 */
export const revalidate = 3600;

export default async function CardDirectoryPage() {
  const cats = await getCats();
  const tarotDeck = await getTarotDeck();

  return <CatDirectoryClient cats={cats} tarotDeck={tarotDeck} />;
}
