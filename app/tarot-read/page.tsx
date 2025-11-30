/**
 * Server Component - runs on server only
 */
import { getTarotDeck } from '../../lib/data';
import TarotReadClient from './TarotReadClient';

/**
 * Revalidate this page every hour
 */
export const revalidate = 3600;

export default async function TarotReadPage() {
  const tarotDeck = await getTarotDeck();

  return <TarotReadClient tarotDeck={tarotDeck} />;
}
