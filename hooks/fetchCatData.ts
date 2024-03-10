import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const useFetchCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTarotCards = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("catData").select("*");
        console.log(data);
        if (error) {
          throw error;
        }

        setCats(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchTarotCards();
  }, []);

  return { cats, loading };
};

export default useFetchCats;
