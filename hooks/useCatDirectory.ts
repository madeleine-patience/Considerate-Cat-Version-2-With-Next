'use client';

import { useState } from 'react';
import { Cat, TarotCard } from '../types/database';
import { CatInformationModalProps } from '../components/catInformationModal/CatInformationModal';

const initialCatDataProps: Cat = {
  id: 0,
  tarot_card: 0,
  cat_name: '',
  cat_story: '',
  cat_main_image: '',
  alt_text: '',
  cat_friends: [],
  associated_cards: []
};

const initialCatInformationProps: CatInformationModalProps = {
  isOpen: false,
  selectedCat: initialCatDataProps,
  allCatData: [],
  tarotDeck: [],
  onClick: () => {}
};

export const useCatDirectory = () => {
  const [showCatInformationModal, setShowCatInformationModal] = useState(false);
  const [catInformationProps, setCatInformationProps] = useState(
    initialCatInformationProps
  );

  const closeCatInformationModal = () => {
    setShowCatInformationModal(false);
  };

  const openCatInformationModal = (
    data: Cat,
    allCatData: Cat[],
    tarotDeck: TarotCard[]
  ) => {
    setCatInformationProps({
      isOpen: true,
      onClick: closeCatInformationModal,
      allCatData: allCatData,
      tarotDeck: tarotDeck,
      selectedCat: {
        id: data.id,
        associated_cards: data.associated_cards,
        cat_name: data.cat_name,
        cat_story: data.cat_story,
        cat_main_image: data.cat_main_image,
        tarot_card: data.tarot_card,
        alt_text: data.alt_text,
        cat_friends: data.cat_friends
      }
    });
    setShowCatInformationModal(true);
  };

  return {
    catInformationProps,
    openCatInformationModal,
    showCatInformationModal
  };
};
