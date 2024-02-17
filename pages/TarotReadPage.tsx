import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { Box } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import { useState } from "react";
import DisplayTarotCardsWithFlip from "../components/displayTarotCardsWithFlip/DisplayTarotCardsWithFlip";
import HompeageHeader from "../components/homepageHeader/HomepageHeader";
import TarotSpreadBox from "../components/tarotSpreadBox/TarotSpreadBox";

export default function FirstPost() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [areSpreadChoicesVisible, setAreIsSpreadChoicesVisible] =
    useState(true);
  const [isTarotReadVisible, setIsTarotReadVisible] = useState(false);
  const { tarotCards } = useFetchTarotDeck();
  const { tarotCardData, displaySomeCards, displayFilteredData } =
    useTarotCard(tarotCards);

  const displayTarotSpread = (lengthOfSpread: number) => {
    displaySomeCards(lengthOfSpread);
    setIsTarotReadVisible(true);
    setIsFlipped(false);
    setAreIsSpreadChoicesVisible(false);
  };

  const resetAndViewTarotSpreads = () => {
    setAreIsSpreadChoicesVisible(true);
    setIsFlipped(false);
    setIsTarotReadVisible(false);
  };

  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <HompeageHeader />
      {areSpreadChoicesVisible && (
        <Box display="flex" justifyContent="center" gap={10} p={10}>
          <TarotSpreadBox
            onClick={() => displayTarotSpread(1)}
            title="Vibe Check"
            amountOfCards={1}
            description="Single Card Pull. Good for yes or no questions."
          />
          <TarotSpreadBox
            onClick={() => displayTarotSpread(3)}
            title="Three Card Spread"
            amountOfCards={3}
            description="Past, Present and Future."
          />
          <TarotSpreadBox
            onClick={() => displayTarotSpread(5)}
            title="Five Card Spread"
            amountOfCards={5}
            description="Past, Present and Future with guides to move you forward."
          />
        </Box>
      )}

      {isTarotReadVisible && (
        <DisplayTarotCardsWithFlip
          width="248px"
          data={displayFilteredData}
          isFlipped={isFlipped}
          onClick={() => setIsFlipped(true)}
        />
      )}
      {isFlipped && (
        <Box display="flex" justifyContent="center">
          <GenericButton
            buttonLabel="Get Another Read"
            onClick={() => resetAndViewTarotSpreads()}
          />
        </Box>
      )}
    </TarotDeckContext.Provider>
  );
}
