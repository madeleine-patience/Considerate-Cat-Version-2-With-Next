import { useState } from "react";
import { TarotDialogProps } from "../components/tarotDialog/TarotDialog";
import { TarotDeckData } from "../types/tarotDeckData";

const initialDialogProps: TarotDialogProps = {
  isOpen: false,
  card: "",
  suit: "",
  image: "",
  description: "",
  onClick: () => {},
};

export const useCardDirectory = () => {
  const [displayTarotDialog, setDisplayTarotDialog] = useState(false);
  const [dialogProps, setDialogProps] = useState(initialDialogProps);
  const [currentCard, setCurrentCard] = useState({});

  const openTarotDialog = (tarotCard: TarotDeckData) => {
    setDialogProps({
      isOpen: true,
      card: tarotCard.card_name,
      suit: tarotCard.card_suit,
      image: tarotCard.image_link,
      description: tarotCard.description,
      onClick: closeTarotDialog,
    });
    setDisplayTarotDialog(true);
  };

  const closeTarotDialog = () => {
    setDisplayTarotDialog(false);
  };

  return {
    dialogProps,
    displayTarotDialog,
    currentCard,
    openTarotDialog,
    closeTarotDialog,
    setDisplayTarotDialog,
    setCurrentCard,
  };
};
