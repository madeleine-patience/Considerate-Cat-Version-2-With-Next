'use client';

import { ReactElement, useState } from 'react';
import { TarotSpreadSelectionBoxList } from '../../components/tarotSpreadSelectionBoxList';
import { TarotSpreadSelectionProps } from '../../components/tarotSpreadSelectionBox';
import { useTarotCard } from '../../hooks/useTarotCard';
import { TarotCard } from '../../types/database';
import { Box, Typography } from '@mui/material';
import DisplayTarotCardsWithFlip from '../../components/displayTarotCardsWithFlip/DisplayTarotCardsWithFlip';
import PageContainer from '../../components/pageContainer/PageContainer';
import RaisedButton from '../../components/raisedButton/RaisedButton';
import { CatCircleIcon } from '../../components/elmerCircleIcon';

interface TarotReadClientProps {
  tarotDeck: TarotCard[];
  shuffledDeck: TarotCard[];
}

export default function TarotReadClient({
  tarotDeck,
  shuffledDeck
}: TarotReadClientProps): ReactElement {
  const [isFlipped, setIsFlipped] = useState(false);
  const [areSpreadChoicesVisible, setAreIsSpreadChoicesVisible] =
    useState(true);
  const [isTarotReadVisible, setIsTarotReadVisible] = useState(false);
  const { displaySomeCards, displayFilteredData } = useTarotCard(
    tarotDeck,
    shuffledDeck
  );

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
    <PageContainer>
      {areSpreadChoicesVisible && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            p: 8
          }}
        >
          <CatCircleIcon catType='louie' />
          <Typography variant='body1' textAlign='center'>
            Here you get get a tarot reading with the Considerate Cat Tarot
            deck. Be careful, readings may be extremely accurate. Select an
            option below depending on your spiritual needs.
          </Typography>
        </Box>
      )}
      {areSpreadChoicesVisible && (
        <TarotSpreadSelectionBoxList data={tarotSpreadSelectionBoxes} />
      )}
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          p: 8
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
    </PageContainer>
  );
}
