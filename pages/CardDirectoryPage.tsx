import Link from "next/link";
import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import ElmerCircleIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import { Box, Typography } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import DisplayTarotCards from "../components/displayTarotCards/DisplayTarotCards";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import { CardSuitTypes } from "../types/cardSuitTypes";

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
  // : instead of {button: string} as const makes it recognize the literal string values

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

  if (loading) return <p>Loading...</p>;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          maxWidth="1000px"
          margin="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <ElmerCircleIcon />
          <Typography variant="h5" fontStyle="italic" py={4}>
            {tarotSuitDescription}
          </Typography>
          <Box display="flex" flexDirection="row" mx="auto" gap={4}>
            {mappedDisplayGetCardsBuySuitButton}
          </Box>
          <Box mx="auto">
            <DisplayTarotCards width="248px" data={displayFilteredData} />
          </Box>
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
