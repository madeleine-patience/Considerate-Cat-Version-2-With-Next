export interface TarotCard {
  id: number;
  card_name: string;
  card_suit: string;
  description: string;
  image_link: string;
  alt_text: string;
  key_words: string[];
}

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
