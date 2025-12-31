import { Box, Typography } from '@mui/material';
import { Cat, TarotCard } from '../../types/database';
import { Modal } from '../modal';
import Purrlaroid from '../purrlaroid';
import SingleTarotCard from '../singleTarotCardWithFlip/SingleTarotCardWithFlip';

export interface CatInformationModalProps {
  selectedCat: Cat;
  allCatData: Cat[];
  tarotDeck: TarotCard[];
  isOpen: boolean;
  onClick: () => void;
}

export const CatInformationModal = ({
  isOpen,
  selectedCat,
  allCatData,
  onClick,
  tarotDeck
}: CatInformationModalProps) => {
  if (!selectedCat) return null;

  function getCatFriends(cat: Cat, allCats: Cat[]): Cat[] {
    return (cat.cat_friends ?? [])
      .map((id) => allCats.find((cat) => cat.id === id))
      .filter((c): c is Cat => Boolean(c));
  }

  function getAssociatedTarotCards(
    deck: TarotCard[],
    selectedCatAssociatedCards: number[]
  ) {
    return (deck ?? []).filter((card) => {
      return (selectedCatAssociatedCards ?? []).includes(card.id);
    });
  }

  const catPals = getCatFriends(selectedCat, allCatData);

  const associatedCards = getAssociatedTarotCards(
    tarotDeck,
    selectedCat.associated_cards!
  );
  console.log(associatedCards);
  return (
    <Modal.Root open={isOpen} setIsOpen={onClick} color='pink'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'inherit'
        }}
      >
        <Purrlaroid
          catImage={selectedCat.cat_main_image}
          altText={selectedCat.alt_text}
          isAnimated={false}
        />

        <Modal.Title>{selectedCat.cat_name}</Modal.Title>
        <Typography variant='body1'>{selectedCat.cat_story}</Typography>

        {catPals.length > 0 && (
          <>
            <Typography variant='body2'>Friends</Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              {catPals.map((friend) => (
                <Purrlaroid
                  size='small'
                  key={friend.id}
                  catImage={friend.cat_main_image}
                  altText={friend.alt_text}
                  isAnimated={false}
                />
              ))}
            </Box>
          </>
        )}
        {associatedCards.length > 0 && (
          <>
            <Typography variant='h5'>
              You will find {selectedCat.cat_name} on the following cards:
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              {associatedCards.map((card) => (
                <SingleTarotCard
                  key={card.id}
                  image={card.image_link}
                  size='small'
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Modal.Root>
  );
};
