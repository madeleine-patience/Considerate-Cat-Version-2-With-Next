import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export interface Cat {
  id: number;
  created_at: string;
  tarot_card: number;
  cat_name: string;
  cat_story: string;
  cat_main_image: string;
  alt_text: string;
  cat_additional_images: string | null;
  cat_friends: string | null;
}

export interface CatProps {
  cats: Cat[];
  loading: boolean;
  fetchError: string | null;
}

function useFetchCats(): CatProps {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect((): void => {
    async function fetchCats(): Promise<void> {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('catData').select();

        if (error) {
          setFetchError(error.message);
          console.error('Server error: ', error.message);
        }

        if (data) {
          setCats(data);
        }
      } catch (error) {
        setFetchError((error as Error).message);
        console.error('Error caught in fetchCatData.ts: ', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCats();
  }, []);

  return { cats, loading, fetchError };
}

export default useFetchCats;
