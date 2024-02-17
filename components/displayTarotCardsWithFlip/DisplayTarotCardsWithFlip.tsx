import { useContext } from "react";
import { TarotDeckData } from "../../types/tarotDeckData";
import { Typography, Box, SxProps } from "@mui/material";
import { TarotDeckContext } from "../../context/TarotDeckContext";
import SingleTarotCardWithFlip from "../../components/singleTarotCardWithFlip/SingleTarotCardWithFlip";

interface DisplayTarotCardsProps {
  data: TarotDeckData[];
  width: string;
  isFlipped: boolean;
  onClick: () => void;
}

const DisplayTarotCardsWithFlip = ({
  data,
  isFlipped,
  onClick,
}: DisplayTarotCardsProps) => {
  const getDelaysArr = (amountOfElements: number) => {
    const pageAnimationTime =
      amountOfElements < 4 ? 1000 : amountOfElements < 6 ? 2000 : 8000;
    const result = [];
    const delta = pageAnimationTime / (amountOfElements - 1);
    let current = 0;

    for (let i = 1; i <= amountOfElements; i++) {
      result.push((current / amountOfElements) * 2).toFixed(3);
      current += delta;
    }

    return result;
  };

  const arrayOfDelays = getDelaysArr(data.length);

  return (
    <Box>
      <Box
        margin="auto"
        width="fit-content"
        display="grid"
        gap={4}
        p={4}
        gridTemplateColumns="auto auto auto auto "
      >
        {data.map((card, index) => (
          <Box key={card.id}>
            <SingleTarotCardWithFlip
              image={card.image_link}
              isCardFlipped={isFlipped}
              onClick={onClick}
              transitionDelay={`${arrayOfDelays[index]}ms`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DisplayTarotCardsWithFlip;
