import { Box, Typography, SxProps, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { TarotDeckContext } from "../../context/TarotDeckContext";
import SingleTarotCard from "../singleTarotCardWithFlip/SingleTarotCardWithFlip";
import GenericButton from "../genericButton/GenericButton";
import { useRouter } from "next/router";

interface HomepageWelcomeProps {
  sx?: SxProps;
}

const HomepageWelcome = ({ sx }: HomepageWelcomeProps) => {
  const { palette } = useTheme();
  const router = useRouter();

  const tarotDeckData = useContext(TarotDeckContext);
  const [catIsPet, setCatIsPet] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [butters, setButters] = useState(
    "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-1.png"
  );

  const petTheCat = () => {
    setPetCount((prev) => prev + 1);
    if (petCount > 2) {
      setCatIsPet(true);
    }
    if (petCount >= 0) {
      setButters(
        "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-2.png"
      );
      setIsFlipped(true);
    }
  };

  return (
    <Box
      sx={{
        height: "700px",
        p: 4,
        borderRadius: 3,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
        backgroundColor: palette.greens.light,
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
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              position: "absolute",
              left: 50,
              bottom: -75,
            }}
          >
            <SingleTarotCard
              image={tarotDeckData[51].image_link}
              isCardFlipped={isFlipped}
              size="small"
            />
            <SingleTarotCard
              image={tarotDeckData[2].image_link}
              isCardFlipped={isFlipped}
              size="small"
            />
            <SingleTarotCard
              image={tarotDeckData[15].image_link}
              isCardFlipped={isFlipped}
              size="small"
            />
          </Box>
          <Box
            onClick={() => petTheCat()}
            component="img"
            src={butters}
            sx={{
              zIndex: 2,
              width: "500px",
              filter:
                " drop-shadow(9px 0 0 white) drop-shadow(0 9px 0 white) drop-shadow(-9px 0 0 white) drop-shadow(0 -9px 0 white)",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography variant="h6">
            Considerate Cat is a tarot deck that was published in 2018, brought
            to life by a community of folks on Kickstarter. Since then, the deck
            has been brought into many inspiring people's homes, featuring
            stories of rescue cats from across the world. Now, we are bringing
            the deck to life online! Here, you can have your cards read, learn
            about the cats that inspired the deck, and dive deeper into the
            artwork
          </Typography>
          <Typography variant="h6">
            Also, Butters is patiently waiting to have his cards read. Click him
            to give him the reading he's been waiting for!
          </Typography>
          <GenericButton
            buttonLabel="Get My Own Tarot Read!"
            onClick={() => {
              router.push("/TarotReadPage");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomepageWelcome;
