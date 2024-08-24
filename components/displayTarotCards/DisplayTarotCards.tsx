import { Box, useMediaQuery, useTheme } from "@mui/material";
import { TarotDeckData } from "../../types/tarotDeckData";

interface DisplayTarotCardActionProps {
  onClick?: (param: number) => void;
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
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        margin="auto"
        width="fit-content"
        display={isSmallScreen ? "flex" : "grid"}
        flexDirection="column"
        gap={4}
        p={4}
        gridTemplateColumns="auto auto auto auto auto"
      >
        {data.map((card) => (
          <Box key={card.id}>
            <Box
              key={card.id}
              onClick={() => onClick(card.id)}
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
