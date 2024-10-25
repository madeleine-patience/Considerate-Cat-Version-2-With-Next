import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RaisedButton from '../raisedButton/RaisedButton';
import SingleTarotCard from '../singleTarotCardWithFlip/SingleTarotCardWithFlip';

interface HomepageWelcomeProps {
  sx?: SxProps;
}

const HomepageWelcome = ({ sx }: HomepageWelcomeProps) => {
  const router = useRouter();
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
      sx={{
        p: 4,
        borderRadius: 3,
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'alignItems',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: isSmallScreen ? 'column' : 'row'
        }}
      >
        <Box>
          <Box
            onClick={() => petTheCat()}
            component='img'
            src={butters}
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant='h6'>
            Considerate Cat is a tarot deck that was published in 2018, brought
            to life by a community of folks on Kickstarter. Since then, the deck
            has been brought into many inspiring people&apos;s homes, featuring
            stories of rescue cats from across the world. Now, we are bringing
            the deck to life online! Here, you can have your cards read, learn
            about the cats that inspired the deck, and dive deeper into the
            artwork
          </Typography>
          <Typography variant='h6'>
            Also, Butters is patiently waiting to have his cards read. Click him
            to give him the reading he&apos;s been waiting for!
          </Typography>
          <RaisedButton
            buttonLabel='Get My Own Tarot Read!'
            onClick={() => {
              router.push('/TarotReadPage');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomepageWelcome;
