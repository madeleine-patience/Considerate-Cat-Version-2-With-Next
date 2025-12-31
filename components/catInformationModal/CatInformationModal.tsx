import { Box, Typography } from '@mui/material';
import { Cat } from '../../types/database';
import { Modal } from '../modal';
import Purrlaroid from '../purrlaroid';

export interface CatInformationModalProps {
  selectedCat: Cat;
  allCatData: Cat[];
  isOpen: boolean;
  onClick: () => void;
}

export const CatInformationModal = ({
  isOpen,
  selectedCat,
  allCatData,
  onClick
}: CatInformationModalProps) => {
  if (!selectedCat) return null;

  function getCatFriends(cat: Cat, allCats: Cat[]): Cat[] {
    return (cat.cat_friends ?? [])
      .map((id) => allCats.find((c) => c.id === id))
      .filter((c): c is Cat => Boolean(c));
  }

  const catPals = getCatFriends(selectedCat, allCatData);

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
      </Box>
    </Modal.Root>
  );
};
