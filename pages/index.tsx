import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { Theme } from '@mui/system';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import CatCardFlipper from '../components/catCardFlipper/CatCardFlipper';
import EmailSignUpToaster from '../components/emailSignupToaster/EmailSignupToaster';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import { Header } from '../components/header';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import { MagicCatReload } from '../components/magicCatAnimation/magicCatReload/MagicCatReload';
import RaisedButton from '../components/raisedButton/RaisedButton';
import { TarotDeckContext } from '../context/TarotDeckContext';
import useFetchTarotDeck from '../hooks/fetchTarotDeck';
import { useTarotCard } from '../hooks/useTarotCard';

const homePageMainImage = '/image/homepageImage.webp';

export default function Home(): ReactElement {
  const router = useRouter();
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: palette.pinks.main
        }}
      >
        <Header.Root>
          <Header.Title> Considerate Cat</Header.Title>
          <Header.Animation />
          <Header.Navigation />
        </Header.Root>
        <Box sx={{ maxWidth: '1200px', margin: 'auto', p: 4 }}>
          <Box display='flex' justifyContent='center' position='relative'>
            <Box
              component='img'
              src={homePageMainImage}
              alt='A whimsical illustration of a friendly cat seated at a kitchen table, performing a tarot reading from the Considerate Cat Tarot deck with a glass of hot tea nearby. The scene is framed by a cozy kitchen, with a lovely night sky visible through a window in the background.'
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
          <Box
            sx={{
              p: 4,
              borderRadius: 3
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'alignItems',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: isSmallScreen ? 'column' : 'row'
              }}
            >
              <CatCardFlipper />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant='h6'>
                  Considerate Cat is a tarot deck that was published in 2018,
                  brought to life by a community of folks on Kickstarter. Since
                  then, the deck has been brought into many inspiring
                  people&apos;s homes, featuring stories of rescue cats from
                  across the world. Now, we are bringing the deck to life
                  online! Here, you can have your cards read, learn about the
                  cats that inspired the deck, and dive deeper into the artwork
                </Typography>
                <Typography variant='h6'>
                  Also, Butters is patiently waiting to have his cards read.
                  Click him to give him the reading he&apos;s been waiting for!
                </Typography>
                <RaisedButton
                  buttonLabel='Get My Own Tarot Read!'
                  onClick={() => {
                    router.push('/TarotReadPage');
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <FlowerFooter />
        <EmailSignUpToaster />
      </Box>
    </TarotDeckContext.Provider>
  );
}
