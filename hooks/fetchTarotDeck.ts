import { useState, useEffect } from "react";
import { supabase } from "../supabase"; // Adjust the path as necessary

const useFetchTarotDeck = () => {
  const [tarotCards, setTarotCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTarotCards = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("tarotCardInformation")
          .select("*");

        if (error) {
          throw error;
        }

        setTarotCards(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchTarotCards();
  }, []);

  return { tarotCards, loading };
};

export default useFetchTarotDeck;
