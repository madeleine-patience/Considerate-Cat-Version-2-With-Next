import { Box } from '@mui/material';
import { useState } from 'react';
import SingleTarotCard from '../singleTarotCardWithFlip/SingleTarotCardWithFlip';

const CatCardFlipper = () => {
  const [petCount, setPetCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const petTheCat = () => {
    setPetCount((prev) => prev + 1);

    if (petCount >= 0) {
      setIsFlipped(true);
    }
  };

  return (
    <Box
      onClick={() => petTheCat()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          petTheCat();
        }
      }}
      role='button'
      tabIndex={0}
      sx={{ width: 'fit-content' }}
    >
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <SingleTarotCard
          image='/image/welcome-cards/three-of-pentacles.webp'
          altText='A tarot card with the text, “Three of Pentacles.” The artwork depicts a green-walled room with a view of a tree, a table with an artist’s palette, and two cats—one playing with the paint-covered palette, and another napping on the chair. Three sheets of painted pentacles are on the desk.'
          isCardFlipped={isFlipped}
          size='small'
        />
        <SingleTarotCard
          image='/image/welcome-cards/the-emperor.webp'
          altText='A tarot card with the text, “The Emperor.” The artwork depicts a cat wearing a large crown.'
          isCardFlipped={isFlipped}
          size='small'
        />
        <SingleTarotCard
          image='/image/welcome-cards/three-of-cups.webp'
          altText='A tarot card with the text, “Three of Cups.” The artwork depicts two friendly cats wearing birthday hats, leaning on each other at a table with waffles and strawberries. Three wine glasses are on the table.'
          isCardFlipped={isFlipped}
          size='small'
        />
      </Box>
    </Box>
  );
};

export default CatCardFlipper;
