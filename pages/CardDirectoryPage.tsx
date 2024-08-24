import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DisplayTarotCards } from "../components/displayTarotCards";
import ElmerCircleIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import HompeageHeader from "../components/header/Header";
import { LoadingPage } from "../components/loadingPage/LoadingPage";
import RaisedButton from "../components/raisedButton/RaisedButton";
import TarotDialog from "../components/tarotDialog/TarotDialog";
import ThreeCardSpread from "../components/threeCardSpread/ThreeCardSpread";
import { TarotDeckContext } from "../context/TarotDeckContext";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { useCardDirectory } from "../hooks/useCardDirectory";
import { useTarotCard } from "../hooks/useTarotCard";
import { CardSuitTypes } from "../types/cardSuitTypes";

export default function FirstPost() {
  const { tarotCards, loading } = useFetchTarotDeck();
  const { palette } = useTheme();

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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
  const displayCards = (cards: CardSuitTypes) => {
    setShowCards(false);
    displayCardBySuit(cards);
  };

  const handleCardClick = (cardId: number) => {
    setCurrentCard(cardId);
    openTarotDialog(tarotCardData[cardId]);
  };

  const shouldShowThreeCards = !isSmallScreen && showThreeCards;

  const mappedDisplayGetCardsBuySuitButton = displayCardSuitButtonData.map(
    (item, index) => {
      return (
        <RaisedButton
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
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: palette.pinks.main,
        }}
      >
        <HompeageHeader />

        <Box
          sx={{
            maxWidth: "1000px",
            m: "auto",
            p: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ElmerCircleIcon />
          <Typography variant="h5" fontStyle="italic" py={4} textAlign="center">
            {tarotSuitDescription}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: isSmallScreen ? "column" : "row",
              gap: 4,
            }}
          >
            {mappedDisplayGetCardsBuySuitButton}
          </Box>
          {
            <DisplayTarotCards
              onClick={handleCardClick}
              width="248px"
              data={displayFilteredData}
            />
          }
          {shouldShowThreeCards && (
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
