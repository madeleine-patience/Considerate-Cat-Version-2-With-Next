import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import ElmerCircleIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import { Box, Typography, useTheme } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import { CardSuitTypes } from "../types/cardSuitTypes";
import HompeageHeader from "../components/header/Header";
import { DisplayTarotCards } from "../components/displayTarotCards";
import ThreeCardSpread from "../components/threeCardSpread/ThreeCardSpread";
import { LoadingPage } from "../components/loadingPage/LoadingPage";
import { useState } from "react";
import TarotDialog from "../components/tarotDialog/TarotDialog";
import { useCardDirectory } from "../hooks/useCardDirectory";

export default function FirstPost() {
  const { tarotCards, loading } = useFetchTarotDeck();
  const { palette } = useTheme();

  const {
    tarotCardData,
    displayCardBySuit,
    displayFilteredData,
    tarotSuitDescription,
  } = useTarotCard(tarotCards);
  const {
    dialogProps,
    displayTarotDialog,
    openTarotDialog,
    setCurrentCard,
    displayCardSuitButtonData,
    setShowCards,
    showThreeCards,
  } = useCardDirectory();
  console.log(displayFilteredData);
  const displayCards = (cards: CardSuitTypes) => {
    setShowCards(false);
    displayCardBySuit(cards);
  };

  const handleCardClick = (cardId: number) => {
    setCurrentCard(cardId);
    openTarotDialog(tarotCardData[cardId]);
  };

  const mappedDisplayGetCardsBuySuitButton = displayCardSuitButtonData.map(
    (item, index) => {
      return (
        <GenericButton
          key={index}
          buttonLabel={item.buttonLabel}
          onClick={() => displayCards(item.buttonLabel)}
        />
      );
    }
  );

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "pink",
        }}
      >
        <HompeageHeader />

        <Box
          maxWidth="1000px"
          mx="auto"
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <ElmerCircleIcon />
          <Typography variant="h5" fontStyle="italic" py={4} textAlign="center">
            {tarotSuitDescription}
          </Typography>
          <Box display="flex" flexDirection="row" mx="auto" gap={4}>
            {mappedDisplayGetCardsBuySuitButton}
          </Box>
          {
            <DisplayTarotCards
              onClick={handleCardClick}
              width="248px"
              data={displayFilteredData}
            />
          }
          {showThreeCards && (
            <ThreeCardSpread
              card1={tarotCards[15].image_link}
              card2={tarotCards[5].image_link}
              card3={tarotCards[7].image_link}
            />
          )}
        </Box>
        {displayTarotDialog && <TarotDialog {...dialogProps} />}
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
