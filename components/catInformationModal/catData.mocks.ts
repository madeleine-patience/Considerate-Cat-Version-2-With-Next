import { Cat } from '../../types/database';

const buttersImg = '/image/ButtersSample.jpg';
const phaeImg = '/image/PhaedraSample.png';

const singleCat: Cat = {
  id: 1,
  tarot_card: 2,
  cat_name: 'Butters',
  cat_story: "Butters is orange, hes orange and he's orange and he's orange.",
  cat_main_image: buttersImg,
  alt_text: 'An orange cat looking very cute',
  cat_additional_images: 'test',
  cat_friends: [2]
};

const manyCats: Cat[] = [
  {
    id: 1,
    tarot_card: 2,
    cat_name: 'Butters',
    cat_story: "Butters is orange, hes orange and he's orange and he's orange.",
    cat_main_image: buttersImg,
    alt_text: 'An orange cat looking very cute',
    cat_additional_images: 'test',
    cat_friends: [2]
  },
  {
    id: 2,
    tarot_card: 3,
    cat_name: 'Phaedra',
    cat_story: 'Phadra is the best cat ive ever had',
    cat_main_image: phaeImg,
    alt_text: 'A beautiful black and orange cat, serving.',
    cat_additional_images: 'test',
    cat_friends: [1]
  }
];

export const catDataMocks = {
  singleCat,
  manyCats
};
