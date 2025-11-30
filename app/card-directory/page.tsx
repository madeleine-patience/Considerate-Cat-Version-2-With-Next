/**
 * Server Component - runs on server only
 */
import CardDirectoryClient from './CardDirectoryClient';
import { supabase } from '../../supabase';

export default async function CardDirectoryPage() {
  const { data, error } = await supabase
    .from('tarotCardInformation')
    .select()
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching tarot deck:', error);
    return <CardDirectoryClient tarotDeck={[]} />;
  }

  return <CardDirectoryClient tarotDeck={data || []} />;
}
