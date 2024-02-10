import { TarotDeckData } from "../../types/tarotDeckData";
import { Typography, Box, SxProps } from "@mui/material";

interface DisplayTarotCardsProps {
  data: TarotDeckData[];
  width: string;
}
const DisplayTarotCards = ({ data, width }: DisplayTarotCardsProps) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {data.map((card) => (
        <Box p={2} key={card.id}>
          {/* <Typography variant="h2">{card.card_name}</Typography>
          <Typography>Suit: {card.card_suit}</Typography> */}
          {/* <Typography>Description: {card.description}</Typography> */}
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
