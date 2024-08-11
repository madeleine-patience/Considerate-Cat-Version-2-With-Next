import {
  Box,
  Typography,
  SxProps,
  useTheme,
  styled,
  CardMedia,
} from "@mui/material";
import { useContext, useState } from "react";
import { TarotDeckContext } from "../../context/TarotDeckContext";
import SingleTarotCard from "../singleTarotCardWithFlip/SingleTarotCardWithFlip";

interface HomepageWelcomeProps {
  sx?: SxProps;
}

// const CatContainer = styled(Box)({
//   width: "fit-content",
//   position: "relative",
//   "&:hover .MuiBox-root:not(:first-of-type)": {
//     "@keyframes cardAnimation": {
//       "0%": {},
//       "100%": {
//         transform: "rotate(20deg)  ",
//       },
//     },
//     animation: "cardAnimation 200ms linear 1 normal forwards ",
//   },
// });

const HomepageWelcome = ({ sx }: HomepageWelcomeProps) => {
  const { palette } = useTheme();
  const tarotDeckData = useContext(TarotDeckContext);
  const [catIsPet, setCatIsPet] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [butters, setButters] = useState(
    "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-3.png"
  );

  const petTheCat = () => {
    setPetCount((prev) => prev + 1);
    if (petCount > 2) {
      setCatIsPet(true);
    }
    if (petCount >= 0) {
      setButters(
        "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-1.png"
      );
      setIsFlipped(true);
    }
    if (petCount >= 1) {
      setButters(
        "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-3.png"
      );
    }
  };

  return (
    <Box
      sx={{
        w: "max-content",
        p: 4,
        borderRadius: 3,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        backgroundColor: "pink",

        ...sx,
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        fontStyle="italic"
        color={palette.pinks.dark}
        textAlign="center"
        sx={{ textShadow: " 3px 3px purple" }}
      >
        Welcome to Considerate Cat!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "alignItems",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            onClick={() => petTheCat()}
            component="img"
            src={butters}
            sx={{
              width: "500px",
              filter:
                " drop-shadow(9px 0 0 white) drop-shadow(0 9px 0 white) drop-shadow(-9px 0 0 white) drop-shadow(0 -9px 0 white)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <SingleTarotCard
              image={tarotDeckData[51].image_link}
              isCardFlipped={isFlipped}
            />
            <SingleTarotCard
              image={tarotDeckData[2].image_link}
              isCardFlipped={isFlipped}
            />
            <SingleTarotCard
              image={tarotDeckData[15].image_link}
              isCardFlipped={isFlipped}
            />
          </Box>
        </Box>
        <Typography variant="h6">
          Considerate Cat is a tarot deck that was published in 2018, brought to
          life by a community of folks on Kickstarter. Since then, the deck has
          been brought into many inspiring people's homes, featuring stories of
          rescue cats from across the world. Now, we are bringing the deck to
          life online! Here, you can have your cards read, learn about the cats
          that inspired the deck, and dive deeper into the artwork.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomepageWelcome;
