import { TarotDeckData } from "../../types/tarotDeckData";
import { Box } from "@mui/material";

interface DisplayTarotCardActionProps {
  onClick?: (card) => void;
}

interface DisplayTarotCardsProps extends DisplayTarotCardActionProps {
  data: TarotDeckData[];
  width: string;
}
export const DisplayTarotCards = ({
  data,
  width,
  onClick,
}: DisplayTarotCardsProps) => {
  console.log(data);
  return (
    <Box>
      <Box
        margin="auto"
        width="fit-content"
        display="grid"
        gap={4}
        p={4}
        gridTemplateColumns="auto auto auto auto auto"
      >
        {data.map((card) => (
          <Box key={card.id}>
            {/* <Typography variant="h2">{card.card_name}</Typography>
          <Typography>Suit: {card.card_suit}</Typography> */}
            {/* <Typography>Description: {card.description}</Typography> */}
            <Box
              onClick={() => onClick(card)}
              width={width}
              borderRadius={2}
              component="img"
              src={card.image_link}
              alt={card.card_name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
