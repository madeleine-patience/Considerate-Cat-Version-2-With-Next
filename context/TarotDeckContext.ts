import { createContext } from 'react';
import { TarotDeckData } from '../types/tarotDeckData';

export const TarotDeckContext = createContext<TarotDeckData | undefined>(
  undefined
);
