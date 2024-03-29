import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { Box, useTheme } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import { useState } from "react";
import DisplayTarotCardsWithFlip from "../components/displayTarotCardsWithFlip/DisplayTarotCardsWithFlip";
import HompeageHeader from "../components/header/Header";
import TarotSpreadSelectionBox from "../components/tarotSpreadSelectionBox/TarotSpreadSelectionBox";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import { LoadingPage } from "../components/loadingPage/LoadingPage";

export default function FirstPost() {
  const { palette } = useTheme();

  const [isFlipped, setIsFlipped] = useState(false);
  const [areSpreadChoicesVisible, setAreIsSpreadChoicesVisible] =
    useState(true);
  const [isTarotReadVisible, setIsTarotReadVisible] = useState(false);
  const { tarotCards, loading } = useFetchTarotDeck();
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
  if (loading) return <LoadingPage />;

  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ backgroundColor: palette.primary.main }}
      >
        <HompeageHeader />
        {areSpreadChoicesVisible && (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={10}
            p={10}
          >
            <TarotSpreadSelectionBox
              onClick={() => displayTarotSpread(1)}
              title="Vibe Check"
              amountOfCards={1}
              description="Single Card Pull. Good for yes or no questions."
            />
            <TarotSpreadSelectionBox
              onClick={() => displayTarotSpread(3)}
              title="Three Card Spread"
              amountOfCards={3}
              description="Past, Present and Future."
            />
            <TarotSpreadSelectionBox
              onClick={() => displayTarotSpread(4)}
              title="Four Card Spread"
              amountOfCards={4}
              description="Self Love Spread"
            />
            <TarotSpreadSelectionBox
              onClick={() => displayTarotSpread(5)}
              title="Five Card Spread"
              amountOfCards={5}
              description="Past, Present and Future with guides to move you forward."
            />
            <TarotSpreadSelectionBox
              onClick={() => displayTarotSpread(7)}
              title="Horse Shoe Spread"
              amountOfCards={7}
              description="A spread useful for when the querent needs to make a decison."
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
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
