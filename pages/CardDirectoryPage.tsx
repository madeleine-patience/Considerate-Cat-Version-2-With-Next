import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { ReactElement } from 'react';
import { DisplayTarotCards } from '../components/displayTarotCards';
import ElmerCircleIcon from '../components/elmerCircleIcon/ElmerCircleIcon';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import PageContainer from '../components/pageContainer/PageContainer';
import RaisedButton from '../components/raisedButton/RaisedButton';
import TarotInformationModal from '../components/tarotInformationModal/TarotInformationModal';
import ThreeCardSpread from '../components/threeCardSpread/ThreeCardSpread';
import ToggleButton from '../components/toggleButton/ToggleButton';
import useFetchTarotDeck, { TarotCard } from '../hooks/fetchTarotDeck';
import { useCardDirectory } from '../hooks/useCardDirectory';
import { useTarotCard } from '../hooks/useTarotCard';

export type CardSuitTypes = 'Major' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';

export default function FirstPost() {
  const { tarotDeck, loading } = useFetchTarotDeck();
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
  if (loading) return <LoadingPage />;
  return (
    <PageContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'inherit'
        }}
      >
        <ElmerCircleIcon />
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
        {
          <DisplayTarotCards
            isGridView={isGridView}
            onClick={handleCardClick}
            tarotCardData={displayFilteredData}
          />
        }
        {shouldShowThreeCards && (
          <ThreeCardSpread
            card1={tarotDeck[15]}
            card2={tarotDeck[5]}
            card3={tarotDeck[7]}
          />
        )}
        {showTarotInformationModal && (
          <TarotInformationModal {...dialogProps} />
        )}
      </Box>
    </PageContainer>
  );
}
