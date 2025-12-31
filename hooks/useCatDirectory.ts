'use client';

import { useState } from 'react';
import { Cat } from '../types/database';
import { CatInformationModalProps } from '../components/catInformationModal/CatInformationModal';

const initialCatDataProps: Cat = {
  id: 0,
  tarot_card: 0,
  cat_name: '',
  cat_story: '',
  cat_main_image: '',
  alt_text: '',
  cat_friends: []
};

const initialCatInformationProps: CatInformationModalProps = {
  isOpen: false,
  selectedCat: initialCatDataProps,
  allCatData: [],
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

  const openCatInformationModal = (data: Cat, allCatData: Cat[]) => {
    setCatInformationProps({
      isOpen: true,
      onClick: closeCatInformationModal,
      allCatData: allCatData,
      selectedCat: {
        id: data.id,
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
