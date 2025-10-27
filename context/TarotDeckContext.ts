import { createContext } from 'react';
import type { TarotCard } from '../hooks/fetchTarotDeck';

/**
 * TarotDeckContext
 * Provides tarot deck data with a default empty array.
 * Consumers can use the array immediately without null checks.
 */
export const TarotDeckContext = createContext<TarotCard[]>([]);
