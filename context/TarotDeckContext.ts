import { createContext, Context } from 'react';
import type { TarotCard } from '../hooks/fetchTarotDeck';

export const TarotDeckContext: Context<TarotCard[]> = createContext<
  TarotCard[] | undefined
>(undefined);
