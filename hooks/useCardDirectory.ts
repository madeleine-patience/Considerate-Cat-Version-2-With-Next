import { useState } from "react";

export const useCardDirectory = () => {
  const [displayTarotDialog, setDisplayTarotDialog] = useState(false);
  const [dialogProps, setDialogProps] = useState({});
  const [currentCard, setCurrentCard] = useState({});

  const openTarotDialog = (tarotCard: any) => {
    setCurrentCard(tarotCard);
    setDisplayTarotDialog(true);
    setDialogProps({
      card: tarotCard.card_name,
      suit: tarotCard.card_suit,
      image: tarotCard.image_link,
      description: tarotCard.description,
      isOpen: displayTarotDialog,
    });
  };

  const closeTarotDialog = () => {
    setDisplayTarotDialog(false);
  };

  return { dialogProps, displayTarotDialog, openTarotDialog, closeTarotDialog };
};
