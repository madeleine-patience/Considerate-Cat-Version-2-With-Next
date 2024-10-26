import { ReactElement, useState } from 'react';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import { Box, useTheme } from '@mui/material';
import { useTarotCard } from '../hooks/useTarotCard';
import { TarotDeckContext } from '../context/TarotDeckContext';
import { TarotSpreadSelectionProps } from '../components/tarotSpreadSelectionBox';
import { TarotSpreadSelectionBoxList } from '../components/tarotSpreadSelectionBoxList';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import RaisedButton from '../components/raisedButton/RaisedButton';
import HompeageHeader from '../components/header/Header';
import useFetchTarotDeck from '../hooks/fetchTarotDeck';
import DisplayTarotCardsWithFlip from '../components/displayTarotCardsWithFlip/DisplayTarotCardsWithFlip';

export default function FirstPost(): ReactElement {
  const { palette } = useTheme();

  const [isFlipped, setIsFlipped] = useState(false);
  const [areSpreadChoicesVisible, setAreIsSpreadChoicesVisible] =
    useState(true);
  const [isTarotReadVisible, setIsTarotReadVisible] = useState(false);
  const { tarotDeck, loading } = useFetchTarotDeck();
  const { tarotCardData, displaySomeCards, displayFilteredData } =
    useTarotCard(tarotDeck);

  const displayTarotSpread = (lengthOfSpread: number) => {
    displaySomeCards(lengthOfSpread);
    setIsTarotReadVisible(true);
    setIsFlipped(false);
    setAreIsSpreadChoicesVisible(false);
  };

  const resetAndViewTarotSpreads = () => {
    setAreIsSpreadChoicesVisible(true);
    setIsFlipped(false);
    setIsTarotReadVisible(false);
  };
  if (loading) return <LoadingPage />;

  const tarotSpreadSelectionBoxes: TarotSpreadSelectionProps[] = [
    {
      onClick: () => displayTarotSpread(1),
      title: 'Vibe Check',
      amountOfCards: 1,
      description: 'Single Card Pull. Good for yes or no questions.'
    },
    {
      onClick: () => displayTarotSpread(3),
      title: 'Three Card Spread',
      amountOfCards: 3,
      description: 'Past, Present and Future.'
    },
    {
      onClick: () => displayTarotSpread(4),
      title: 'Four Card Spread',
      amountOfCards: 4,
      description: 'Self Love Spread'
    },
    {
      onClick: () => displayTarotSpread(5),
      title: 'Five Card Spread',
      amountOfCards: 5,
      description: 'Past, Present and Future with guides to move you forward.'
    },
    {
      onClick: () => displayTarotSpread(7),
      title: 'Horse Shoe Spread',
      amountOfCards: 7,
      description:
        'A spread useful for when the querent needs to make a decison.'
    }
  ];

  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <Box
        minHeight='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        sx={{ backgroundColor: palette.pinks.main }}
      >
        <HompeageHeader />
        {areSpreadChoicesVisible && (
          <TarotSpreadSelectionBoxList data={tarotSpreadSelectionBoxes} />
        )}

        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }}
        >
          {isTarotReadVisible && (
            <DisplayTarotCardsWithFlip
              tarotDeck={displayFilteredData}
              isFlipped={isFlipped}
              onClick={() => setIsFlipped(true)}
            />
          )}
          <Box display='flex' justifyContent='center'>
            <RaisedButton
              disabled={!isFlipped}
              buttonLabel='Get Another Read'
              onClick={() => resetAndViewTarotSpreads()}
            />
          </Box>
        </Box>
        <FlowerFooter />
      </Box>
    </TarotDeckContext.Provider>
  );
}
