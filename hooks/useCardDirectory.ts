import { useState } from 'react';
import { TarotInformationModalProps } from '../components/tarotInformationModal';
import type { CardSuitTypes } from '../pages/CardDirectoryPage';
import type { TarotCard } from '../types/database';

const initialDialogProps: TarotInformationModalProps = {
  isOpen: false,
  cardTitle: '',
  suit: '',
  image: '',
  description: '',
  keyWords: [],
  onClick: () => {},
  handleClickAway: () => {}
};

export const useCardDirectory = () => {
  const [showTarotInformationModal, setShowTarotInformationModal] =
    useState(false);
  const [dialogProps, setDialogProps] = useState(initialDialogProps);
  const [currentCard, setCurrentCard] = useState({});
  const [showThreeCards, setShowCards] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const displayCardSuitButtonData: { buttonLabel: CardSuitTypes }[] = [
    { buttonLabel: 'Major' },
    { buttonLabel: 'Cups' },
    { buttonLabel: 'Pentacles' },
    { buttonLabel: 'Swords' },
    { buttonLabel: 'Wands' }
  ];

  const openTarotInformationModal = (tarotCard: TarotCard) => {
    setDialogProps({
      isOpen: true,
      cardTitle: tarotCard.card_name,
      suit: tarotCard.card_suit,
      image: tarotCard.image_link,
      description: tarotCard.description,
      keyWords: tarotCard.key_words,
      onClick: closeTarotInformationModal,
      handleClickAway: closeTarotInformationModal
    });
    setShowTarotInformationModal(true);
  };

  const closeTarotInformationModal = () => {
    setShowTarotInformationModal(false);
  };

  return {
    dialogProps,
    showTarotInformationModal,
    currentCard,
    openTarotInformationModal,
    closeTarotInformationModal,
    setShowTarotInformationModal,
    setCurrentCard,
    displayCardSuitButtonData,
    setShowCards,
    showThreeCards,
    isGridView,
    setIsGridView
  };
};
