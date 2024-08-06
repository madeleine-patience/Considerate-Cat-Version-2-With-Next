import { useState } from "react";
import { TarotDialogProps } from "../components/tarotDialog/TarotDialog";
import { TarotDeckData } from "../types/tarotDeckData";
import { CardSuitTypes } from "../types/cardSuitTypes";

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
  const [showThreeCards, setShowCards] = useState(true);

  const displayCardSuitButtonData: { buttonLabel: CardSuitTypes }[] = [
    { buttonLabel: "Major" },
    { buttonLabel: "Cups" },
    { buttonLabel: "Pentacles" },
    { buttonLabel: "Swords" },
    { buttonLabel: "Wands" },
  ];

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
    displayCardSuitButtonData,
    setShowCards,
    showThreeCards,
  };
};
