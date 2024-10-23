import { Box, useMediaQuery, useTheme } from '@mui/material';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import Header from '../components/header/Header';
import HomepageWelcome from '../components/homepageWelcome/HomepageWelcome';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import { MagicCatReload } from '../components/magicCatAnimation/magicCatReload/MagicCatReload';
import { TarotDeckContext } from '../context/TarotDeckContext';
import useFetchTarotDeck from '../hooks/fetchTarotDeck';
import { useTarotCard } from '../hooks/useTarotCard';
import type { Theme } from '@mui/system';
import type { ReactElement } from 'react';

const homePageMainImage = '/image/homepageImage.webp';

export default function Home(): ReactElement {
  const { tarotDeck, loading } = useFetchTarotDeck();
  const { tarotCardData } = useTarotCard(tarotDeck);
  const { palette } = useTheme();
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <MagicCatReload />
      <Box
        sx={{
          minHeight: '100vh',
          width: 'fit-content%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: palette.pinks.main
        }}
      >
        <Header />
        <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
          <Box display='flex' justifyContent='center' position='relative'>
            <Box
              component='img'
              src={homePageMainImage}
              width='100%'
              sx={{
                display: isSmallScreen ? 'none' : undefined,
                mb: 10,
                borderRadius: 4,
                position: 'relative',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
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
