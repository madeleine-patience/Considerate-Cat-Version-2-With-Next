import { Box, useTheme } from "@mui/material";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import GenericButton from "../components/genericButton/GenericButton";
import useFetchTarotDeck from "../hooks/fetchTarotDeck";
import { useTarotCard } from "../hooks/useTarotCard";
import DisplayTarotCards from "../components/displayTarotCards/DisplayTarotCards";
import ElmerIcon from "../components/elmerCircleIcon/ElmerCircleIcon";
import ThreeCardSpread from "../components/threeCardSpread/ThreeCardSpread";
import { TarotDeckContext } from "../context/TarotDeckContext";
import HompeageHeader from "../components/homepageHeader/HomepageHeader";

const homePageMainImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/homepageImage.png";

export default function Home() {
  const { tarotCards, loading } = useFetchTarotDeck();

  const { tarotCardData, displayCardBySuit, displayFilteredData } =
    useTarotCard(tarotCards);

  const { palette } = useTheme();

  if (loading) return <p>Loading...</p>;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ backgroundColor: palette.primary.main }}
      >
        <HompeageHeader />
        <Box sx={{ p: 8 }}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              component="img"
              src={homePageMainImage}
              width="800px"
              sx={{
                borderRadius: 4,
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            />
            <Box sx={{ position: "absolute", top: "300px", right: "-50px" }}>
              <ThreeCardSpread
                card1={tarotCards[12].image_link}
                card2={tarotCards[13].image_link}
                card3={tarotCards[14].image_link}
              />
            </Box>
          </Box>

          <Box mx="auto">
            <DisplayTarotCards width="248px" data={displayFilteredData} />
          </Box>
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
