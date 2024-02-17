import GenericButton from "../components/genericButton/GenericButton";
import { useTarotCard } from "../hooks/useTarotCard";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { Box, Typography } from "@mui/material";
import { TarotDeckContext } from "../context/TarotDeckContext";
import { useState } from "react";
import DisplayTarotCardsWithFlip from "../components/displayTarotCardsWithFlip/DisplayTarotCardsWithFlip";
import HompeageHeader from "../components/homepageHeader/HomepageHeader";
import TarotSpreadBox from "../components/tarotSpreadBox/TarotSpreadBox";

export default function FirstPost() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { tarotCards } = useFetchTarotDeck();
  const { tarotCardData, displaySomeCards, displayFilteredData } =
    useTarotCard(tarotCards);

  const displayTarotSpread = (lengthOfSpread: number) => {
    displaySomeCards(lengthOfSpread);
    setIsFlipped(false);
  };

  const buttonInfo = [
    {
      buttonname: "Pull One card",
      cardreadLength: 1,
      cardReadDescription:
        " This is a simple and direct reading often used for daily guidance or to gain clarity on a specific question. The single card can provide a straightforward answer or highlight the energy surrounding the querent (the person asking the question).",
    },
    {
      buttonname: "Three Card Read",
      cardreadLength: 3,
      cardReadDescription:
        ": This spread provides insight into the progression of events or situations. The first card represents the past influences or the root of the issue, the second card reveals the current situation, and the third card indicates the potential future outcome or direction.",
    },
    {
      buttonname: "Five Card Read",
      cardreadLength: 5,
      cardReadDescription:
        "This spread is a bit more detailed than the previous ones. The first card outlines the present situation or the question at hand. The next two cards suggest possible actions or paths to take. The last two cards forecast the short-term and long-term outcomes of the situation if the advice is heeded.",
    },
    {
      buttonname: "Nine Card Read",
      cardreadLength: 9,
      cardReadDescription:
        "A more in-depth spread, this can be viewed as an expanded version of the three card layout. Cards can represent a variety of aspects such as past, present, future, subconscious influences, personal feelings, external influences, hopes or fears, and the outcome. The positions' meanings can vary based on the reader's system.",
    },
  ];

  const mappedTarotReadButtons = buttonInfo.map((item, index) => {
    return (
      <GenericButton
        key={index}
        buttonLabel={item.buttonname}
        onClick={() => displayTarotSpread(item.cardreadLength)}
      />
    );
  });

  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <HompeageHeader />
      <Box display="flex" justifyContent="center" gap={3} p={3}>
        {mappedTarotReadButtons}
      </Box>
      <DisplayTarotCardsWithFlip
        width="248px"
        data={displayFilteredData}
        isFlipped={isFlipped}
        onClick={() => setIsFlipped(true)}
      />
      {/* <SingleTarotCardWithFlip
        isCardFlipped={isFlipped}
        onClick={() => setIsFlipped(!isFlipped)}
        image={tarotCards[12]?.image_link}
        transitionDelay="testing"
      /> */}
      <Box display="flex" justifyContent="center" gap={10}>
        <TarotSpreadBox
          title="Vibe Check"
          amountOfCards={1}
          description="Single Card Pull. Good for yes or no questions."
        />
        <TarotSpreadBox
          title="Three Card Spread"
          amountOfCards={3}
          description="Past, Present and Future."
        />
        <TarotSpreadBox
          title="Five Card Spread"
          amountOfCards={5}
          description="Past, Present and Future with guides to move you forward."
        />
      </Box>
    </TarotDeckContext.Provider>
  );
}
