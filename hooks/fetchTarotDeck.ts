import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export interface TarotCard {
  id: number;
  card_name: string;
  card_suit: string;
  description: string;
  image_link: string;
  alt_text: string;
  key_words: string[];
}

export interface TarotDeckProps {
  tarotDeck: TarotCard[];
  loading: boolean;
}

function useFetchTarotDeck(): TarotDeckProps {
  const [tarotDeck, setTarotDeck] = useState<TarotCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTarotDeck(): Promise<void> {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('tarotCardInformation')
          .select()
          .order('id', { ascending: true });
        if (error) {
          setFetchError(error.message);
          console.error('Server error: ', fetchError);
        }

        if (data) {
          setTarotDeck(data);
        }
      } catch (error) {
        setFetchError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchTarotDeck();
  }, []);

  return { tarotDeck, loading };
}

export default useFetchTarotDeck;
