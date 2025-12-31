/**
 * Server Component - runs on server only
 */
import { getTarotDeck } from '../../lib/data';
import TarotReadClient from './TarotReadClient';
import type { TarotCard } from '../../types/database';

/**
 * Revalidate this page every hour
 */
export const revalidate = 3600;

/**
 * We need to "shuffle" on the server so we don't get a hydration mismatch
 */
function shuffleDeck(deck: TarotCard[]): TarotCard[] {
  return [...deck].sort(() => Math.random() - 0.5);
}

export default async function TarotReadPage() {
  const tarotDeck = await getTarotDeck();
  const shuffledDeck = shuffleDeck(tarotDeck);

  return <TarotReadClient tarotDeck={tarotDeck} shuffledDeck={shuffledDeck} />;
}
