/**
 * Server Component - runs on server only
 */
import { getTarotDeck } from '../../lib/data';
import CardDirectoryClient from './CardDirectoryClient';

/**
 * Revalidate this page cache every hour
 */
export const revalidate = 3600;

export default async function CardDirectoryPage() {
  const tarotDeck = await getTarotDeck();

  return <CardDirectoryClient tarotDeck={tarotDeck} />;
}
