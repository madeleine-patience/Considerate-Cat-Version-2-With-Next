import { TarotInformationModalProps } from './TarotInformationModal';

const defaultTarotCard: TarotInformationModalProps = {
  cardTitle: 'Temperance',
  suit: 'Major Arcana',
  image: '/image/19.jpg',
  description:
    'Your future is bright, you will experience no merge conflicts, no issues with upgrading dependancies and no toxic coworkers. All of your PRs will be approved with excitement and you will receive a 25k raise by the end of the year.',
  keyWords: [],
  isOpen: true,
  onClick: () => {},
  handleClickAway: () => {}
};

export const tarotInformationModalMocks = {
  defaultTarotCard
};
