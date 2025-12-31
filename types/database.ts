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
  tarot_card: number;
  cat_name: string;
  cat_story: string;
  cat_main_image: string;
  alt_text: string;
  cat_friends?: number[];
  associated_cards?: number[];
}
