import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Cat } from '../types/database';

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
      } catch (err) {
        if (err instanceof Error) {
          setFetchError(err.message);
          console.error('Error caught in fetchCats:', err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCats();
  }, []);

  return { cats, loading, fetchError };
}

export default useFetchCats;
