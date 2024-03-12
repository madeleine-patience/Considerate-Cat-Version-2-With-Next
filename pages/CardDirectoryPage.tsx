import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import ElmerCircleIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import { Box, Typography } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import { CardSuitTypes } from "../types/cardSuitTypes";
import HompeageHeader from "../components/header/Header";
import { DisplayTarotCards } from "../components/displayTarotCards";
import ThreeCardSpread from "../components/threeCardSpread/ThreeCardSpread";
import { LoadingPage } from "../components/loadingPage/LoadingPage";

export default function FirstPost() {
  const { tarotCards, loading } = useFetchTarotDeck();
  const {
    tarotCardData,
    displayCardBySuit,
    displayFilteredData,
    tarotSuitDescription,
  } = useTarotCard(tarotCards);

  const displayCardSuitButtonData: { buttonLabel: CardSuitTypes }[] = [
    { buttonLabel: "Major" },
    { buttonLabel: "Cups" },
    { buttonLabel: "Pentacles" },
    { buttonLabel: "Swords" },
    { buttonLabel: "Wands" },
  ];

  const mappedDisplayGetCardsBuySuitButton = displayCardSuitButtonData.map(
    (item, index) => {
      return (
        <GenericButton
          key={index}
          buttonLabel={item.buttonLabel}
          onClick={() => displayCardBySuit(item.buttonLabel)}
        />
      );
    }
  );

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <HompeageHeader />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
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
          <DisplayTarotCards width="248px" data={displayFilteredData} />
          <ThreeCardSpread
            card1={tarotCards[15].image_link}
            card2={tarotCards[5].image_link}
            card3={tarotCards[7].image_link}
          />
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
