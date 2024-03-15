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

const homePageMainImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/homepageImage.png";

export default function Home() {
  const { tarotCards, loading } = useFetchTarotDeck();

  const { tarotCardData, displayFilteredData } = useTarotCard(tarotCards);

  const { palette } = useTheme();

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Head>
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-01.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-02.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-03.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-04.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-05.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-06.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-07.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-08.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-09.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-10.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-11.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-12.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-13.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/headerAnimation/heidi-14.png"
          as="image"
        />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: palette.primary.main,
        }}
      >
        <Header isHomepage={true} />
        <Box sx={{ maxWidth: "1200px", margin: "auto", pt: 20 }}>
          <Box display="flex" justifyContent="center" position="relative">
            <Box
              component="img"
              src={homePageMainImage}
              width="900px"
              sx={{
                borderRadius: 4,
                position: "relative",
                mr: 75,
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            />
            <Box sx={{ position: "absolute", right: "-200px", top: "150px" }}>
              <ThreeCardSpread
                card1={tarotCards[12].image_link}
                card2={tarotCards[13].image_link}
                card3={tarotCards[14].image_link}
              />
            </Box>
          </Box>
          <HomepageWelcome sx={{ my: 20 }} />

          <Box mx="auto">
            <DisplayTarotCards width="248px" data={displayFilteredData} />
          </Box>
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
