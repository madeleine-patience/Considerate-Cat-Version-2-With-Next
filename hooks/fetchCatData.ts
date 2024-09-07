import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const useFetchCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTarotCards = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('catData').select('*');
        if (error) {
          throw error;
        }

        setCats(data);
      } catch (error) {
        setFetchError((error as Error).message);
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchTarotCards();
  }, []);

  return { cats, loading, fetchError };
};

export default useFetchCats;
