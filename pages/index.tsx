import { Box, useTheme } from "@mui/material";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import GenericButton from "../components/genericButton/GenericButton";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { useTarotCard } from "../hooks/useTarotCard";
import ElmerIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import ThreeCardSpread from "../components/threeCardSpread/ThreeCardSpread";
import { TarotDeckContext } from "../context/TarotDeckContext";
import Header from "../components/header/Header";
import { DisplayTarotCards } from "../components/displayTarotCards";
import HomepageWelcome from "../components/homepageWelcome/HomepageWelcome";
import { LoadingPage } from "../components/loadingPage/LoadingPage";
import Head from "next/head";
import { MagicCatReload } from "../components/magicCatAnimation/magicCatReload/MagicCatReload";

const homePageMainImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/homepageImage.png";

export default function Home() {
  const { tarotCards, loading } = useFetchTarotDeck();

  const { tarotCardData, displayFilteredData } = useTarotCard(tarotCards);

  const { palette } = useTheme();

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <MagicCatReload />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: palette.pinks.main,
        }}
      >
        <Header isHomepage={true} />
        <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
          <Box display="flex" justifyContent="center" position="relative">
            <Box
              component="img"
              src={homePageMainImage}
              width="100%"
              sx={{
                mb: 10,
                borderRadius: 4,
                position: "relative",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            />
          </Box>
          <HomepageWelcome />
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
