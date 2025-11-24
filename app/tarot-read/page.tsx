/**
 * Server Component - runs on server only
 */
import { supabase } from '../../supabase';
import TarotReadClient from './TarotReadClient';

export default async function TarotReadPage() {
  const { data, error } = await supabase
    .from('tarotCardInformation')
    .select()
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching tarot deck:', error);
    return <TarotReadClient tarotDeck={[]} />;
  }

  return <TarotReadClient tarotDeck={data || []} />;
}
