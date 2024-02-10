import { Box } from "@mui/material";
import SingleTarotCard from "../singleTarotCard/SingleTarotCard";
import { TarotDeckContext } from "../../context/TarotDeckContext";
import { useContext } from "react";

export interface ThreeCardSpreadProps {
  card1: string;
  card2: string;
  card3: string;
}
export const ThreeCardSpread = ({
  card1,
  card2,
  card3,
}: ThreeCardSpreadProps) => {
  const tarotDeckData = useContext(TarotDeckContext);
  return (
    <Box p={16}>
      {tarotDeckData.length > 0 && (
        <Box position="relative">
          <SingleTarotCard
            sx={{
              transform: "rotate(-0.04turn)",
              top: -40,
            }}
            image={card1}
          />
          <SingleTarotCard
            sx={{ position: "relative", zIndex: 2, top: -50, right: 75 }}
            image={card2}
          />
          <SingleTarotCard
            sx={{
              position: "relative",
              transform: "rotate(.04turn)",
              top: -10,
              right: 175,
            }}
            image={card3}
          />
        </Box>
      )}
    </Box>
  );
};

export default ThreeCardSpread;
