import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { Theme } from '@mui/system';
import type { ReactElement } from 'react';
import { DisplayTarotCards } from '../components/displayTarotCards';
import ElmerCircleIcon from '../components/elmerCircleIcon/ElmerCircleIcon';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import { Header } from '../components/header';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import RaisedButton from '../components/raisedButton/RaisedButton';
import TarotDialog from '../components/tarotDialog/TarotDialog';
import ThreeCardSpread from '../components/threeCardSpread/ThreeCardSpread';
import { TarotDeckContext } from '../context/TarotDeckContext';
import useFetchTarotDeck, { TarotCard } from '../hooks/fetchTarotDeck';
import { useCardDirectory } from '../hooks/useCardDirectory';
import { useTarotCard } from '../hooks/useTarotCard';

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

  function findCardById(deck: TarotCard[], id: number): TarotCard | undefined {
    return deck.find((element) => element.id === id);
  }

  function handleCardClick(cardId: number): void {
    setCurrentCard(cardId);
    const selectedCard = findCardById(tarotDeck, cardId);
    if (selectedCard) {
      openTarotDialog(selectedCard);
    }
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
