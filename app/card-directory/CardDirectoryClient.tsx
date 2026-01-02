'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DisplayTarotCards } from '../../components/displayTarotCards';
import { useCardDirectory } from '../../hooks/useCardDirectory';
import { useTarotCard } from '../../hooks/useTarotCard';
import { TarotCard } from '../../types/database';
import Image from 'next/image';
import TarotInformationModal from '../../components/tarotInformationModal/TarotInformationModal';
import PageContainer from '../../components/pageContainer/PageContainer';
import RaisedButton from '../../components/raisedButton/RaisedButton';
import ToggleButton from '../../components/toggleButton/ToggleButton';
import type { ReactElement } from 'react';
import { CatCircleIcon } from '../../components/elmerCircleIcon';

export type CardSuitTypes = 'Major' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';

interface CardDirectoryClientProps {
  tarotDeck: TarotCard[];
}

export default function CardDirectoryClient({
  tarotDeck
}: CardDirectoryClientProps) {
  const theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  const { displayCardBySuit, displayFilteredData, tarotSuitDescription } =
    useTarotCard(tarotDeck);

  const {
    dialogProps,
    showTarotInformationModal,
    openTarotInformationModal,
    setCurrentCard,
    displayCardSuitButtonData,
    setShowCards,
    showThreeCards,
    isGridView,
    setIsGridView
  } = useCardDirectory();

  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGridView(event.target.checked);
  };

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
      openTarotInformationModal(selectedCard);
    }
  }

  const shouldShowThreeCards: boolean = !isSmallScreen && showThreeCards;

  const mappedDisplayGetCardsBySuitButton: ReactElement[] =
    displayCardSuitButtonData.map(
      ({ buttonLabel }, index: number): ReactElement => (
        <RaisedButton
          key={index}
          buttonLabel={buttonLabel}
          onClick={() => displayCards(buttonLabel)}
        />
      )
    );

  return (
    <PageContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          p: 8
        }}
      >
        <CatCircleIcon catType='elmer' />
        <Typography variant='body1' fontStyle='italic' textAlign='center'>
          {tarotSuitDescription}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: 'inherit'
          }}
        >
          <Box sx={{ display: 'flex', gap: 4, p: 4 }}>
            {mappedDisplayGetCardsBySuitButton}
          </Box>
        </Box>
        {!showThreeCards && (
          <ToggleButton onChange={switchHandler} sx={{ margin: 'auto' }} />
        )}
        {!showThreeCards && (
          <DisplayTarotCards
            isGridView={isGridView}
            onClick={handleCardClick}
            tarotCardData={displayFilteredData}
          />
        )}
        {shouldShowThreeCards && (
          <Box position='relative' sx={{ height: '400px', width: '600px' }}>
            <Box
              sx={{
                position: 'absolute',
                transform: 'rotate(-14.4deg)',
                top: '25px',
                right: '375px',
                width: '200px',
                height: '350px',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow:
                  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
              }}
            >
              <Image
                src='/image/tarot-cards/the-devil.webp'
                alt='The Devil tarot card'
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                zIndex: 2,
                left: '200px',
                width: '200px',
                height: '350px',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow:
                  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
              }}
            >
              <Image
                src='/image/tarot-cards/the-hierophant.webp'
                alt='The Hierophant tarot card'
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                transform: 'rotate(14.4deg)',
                top: '25px',
                left: '375px',
                width: '200px',
                height: '350px',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow:
                  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
              }}
            >
              <Image
                src='/image/tarot-cards/the-chariot.webp'
                alt='The Chariot tarot card'
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        )}
        {showTarotInformationModal && (
          <TarotInformationModal {...dialogProps} />
        )}
      </Box>
    </PageContainer>
  );
}
