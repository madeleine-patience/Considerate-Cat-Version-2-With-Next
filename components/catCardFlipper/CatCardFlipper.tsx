import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import SingleTarotCard from '../singleTarotCardWithFlip/SingleTarotCardWithFlip';

const CatCardFlipper = () => {
  const theme = useTheme();
  const [petCount, setPetCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [butters, setButters] = useState(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-1.png`
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const petTheCat = () => {
    setPetCount((prev) => prev + 1);

    if (petCount >= 0) {
      setButters(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/considerate%20cat%20assets/No-Background-Butters-2.png`
      );
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
        component='img'
        src={butters}
        alt='Butters the cat, waiting to show you a tarot reading if you give pets.'
        sx={{
          top: 25,
          zIndex: 2,
          position: 'relative',
          width: isSmallScreen ? '100%' : '500px',
          filter:
            ' drop-shadow(9px 0 0 white) drop-shadow(0 9px 0 white) drop-shadow(-9px 0 0 white) drop-shadow(0 -9px 0 white)'
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          top: -50
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
