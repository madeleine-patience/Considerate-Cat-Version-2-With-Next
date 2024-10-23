import { ReactElement } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DisplayTarotCards } from '../components/displayTarotCards';
import ElmerCircleIcon from '../components/elmerCircleIcon/ElmerCircleIcon';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import HompeageHeader from '../components/header/Header';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import RaisedButton from '../components/raisedButton/RaisedButton';
import TarotDialog from '../components/tarotDialog/TarotDialog';
import ThreeCardSpread from '../components/threeCardSpread/ThreeCardSpread';
import { TarotDeckContext } from '../context/TarotDeckContext';
import useFetchTarotDeck from '../hooks/fetchTarotDeck';
import { useCardDirectory } from '../hooks/useCardDirectory';
import { useTarotCard } from '../hooks/useTarotCard';
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
        <HompeageHeader />

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
              card1={tarotDeck[15].image_link}
              card2={tarotDeck[5].image_link}
              card3={tarotDeck[7].image_link}
            />
          )}
        </Box>
        {displayTarotDialog && <TarotDialog {...dialogProps} />}
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
