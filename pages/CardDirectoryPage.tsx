import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DisplayTarotCards } from '../components/displayTarotCards';
import { TarotDeckContext } from '../context/TarotDeckContext';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import { useCardDirectory } from '../hooks/useCardDirectory';
import { useTarotCard } from '../hooks/useTarotCard';
import { Header } from '../components/header';
import ElmerCircleIcon from '../components/elmerCircleIcon/ElmerCircleIcon';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import RaisedButton from '../components/raisedButton/RaisedButton';
import TarotDialog from '../components/tarotDialog/TarotDialog';
import ThreeCardSpread from '../components/threeCardSpread/ThreeCardSpread';
import useFetchTarotDeck from '../hooks/fetchTarotDeck';
import type { ReactElement } from 'react';
import type { Theme } from '@mui/system';

export type CardSuitTypes = 'Major' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';

export default function FirstPost(): ReactElement {
  const { tarotDeck, loading } = useFetchTarotDeck();
  const { palette } = useTheme();
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  const {
    tarotCardData,
    displayCardBySuit,
    displayFilteredData,
    tarotSuitDescription
  } = useTarotCard(tarotDeck);

  const {
    dialogProps,
    displayTarotDialog,
    openTarotDialog,
    setCurrentCard,
    displayCardSuitButtonData,
    setShowCards,
    showThreeCards
  } = useCardDirectory();

  function displayCards(cards: CardSuitTypes): void {
    setShowCards(false);
    displayCardBySuit(cards);
  }

  function handleCardClick(cardId: number): void {
    setCurrentCard(cardId);
    openTarotDialog(tarotCardData[cardId]);
  }

  const shouldShowThreeCards: boolean = !isSmallScreen && showThreeCards;

  const mappedDisplayGetCardsBuySuitButton: ReactElement[] =
    displayCardSuitButtonData.map(
      ({ buttonLabel }, index: number): ReactElement => (
        <RaisedButton
          key={index}
          buttonLabel={buttonLabel}
          onClick={() => displayCards(buttonLabel)}
        />
      )
    );

  if (loading) return <LoadingPage />;
  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: palette.pinks.main
        }}
      >
        <Header.Root>
          <Header.Animation />
          <Header.Navigation />
        </Header.Root>
        <Box
          sx={{
            maxWidth: '1000px',
            m: 'auto',
            p: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <ElmerCircleIcon />
          <Typography variant='h5' fontStyle='italic' py={4} textAlign='center'>
            {tarotSuitDescription}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: isSmallScreen ? 'column' : 'row',
              gap: 4
            }}
          >
            {mappedDisplayGetCardsBuySuitButton}
          </Box>
          {
            <DisplayTarotCards
              onClick={handleCardClick}
              width='248px'
              data={displayFilteredData}
            />
          }
          {shouldShowThreeCards && (
            <ThreeCardSpread
              card1={tarotDeck[15]}
              card2={tarotDeck[5]}
              card3={tarotDeck[7]}
            />
          )}
        </Box>
        {displayTarotDialog && <TarotDialog {...dialogProps} />}
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
