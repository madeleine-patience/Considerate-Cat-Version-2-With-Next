import { TarotCard } from '../types/database';

const card1 = '/image/tarot-cards/temperance.webp';
const card2 = '/image/tarot-cards/three-of-cups.webp';
const card3 = '/image/tarot-cards/three-of-pentacles.webp';

const threeOfPentalces: TarotCard = {
  id: 39,
  card_name: 'Three Of Pentacles',
  card_suit: 'Pentalces',
  description: 'Three of Pentalces is...',
  image_link: card3,
  alt_text:
    'A tarot card with the text, “Three of Pentacles.” The artwork depicts a green-walled room with a view of a tree, a table with an artist’s palette, and two cats—one playing with the paint-covered palette, and another napping on the chair. Three sheets of painted pentacles are on the desk',
  key_words: ['creation', 'starting something new', 'artistic spirit']
};

const threeOfCups: TarotCard = {
  id: 25,
  card_name: 'Three Of Cups',
  card_suit: 'Cups',
  description: 'Three of cups is...',
  image_link: card2,
  alt_text:
    'Three of Cups.” The artwork depicts two friendly cats wearing birthday hats, leaning on each other at a table with waffles and strawberries. Three wine glasses are on the table.',
  key_words: ['Celebration', 'friendship', 'happiness']
};

const temperance: TarotCard = {
  id: 15,
  card_name: 'Temperance',
  card_suit: 'Major',
  description: 'Teperance is...',
  image_link: card1,
  alt_text:
    'A tarot card with the text, “Temperance.” The artwork depicts a cat lying on the floor with a pillow, looking through flowers.',
  key_words: ['peace', 'tranquility', 'growth']
};
const defaultSpread = [threeOfCups, threeOfPentalces, temperance];

export const tarotSpreadMocks = {
  defaultSpread
};
