import { Box } from "@mui/material";
import { TarotDeckData } from "../../types/tarotDeckData";

interface DisplayTarotCardsProps {
  data: TarotDeckData[];
  width: string;
}
const DisplayTarotCards = ({ data, width }: DisplayTarotCardsProps) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {data.map((card) => (
        <Box p={2} key={card.id}>
          <Box
            width={width}
            borderRadius={2}
            component="img"
            src={card.image_link}
            alt={card.card_name}
          />
        </Box>
      ))}
    </Box>
  );
};

export default DisplayTarotCards;
