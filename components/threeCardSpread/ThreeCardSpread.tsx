import { Box } from '@mui/material';
import { useContext } from 'react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import type { TarotCard } from '../../types/database';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';

export interface ThreeCardSpreadProps {
  card1: TarotCard;
  card2: TarotCard;
  card3: TarotCard;
}

export const ThreeCardSpread = ({
  card1,
  card2,
  card3
}: ThreeCardSpreadProps) => {
  const tarotDeckData: TarotCard[] = useContext(TarotDeckContext);
  return (
    <Box>
      {tarotDeckData.length > 0 && (
        <Box position='relative'>
          <SingleTarotCard
            sx={{
              position: 'relative',
              transform: 'rotate(-.04turn)',
              top: '25px',
              right: '-75px'
            }}
            image={card1.image_link}
            altText={card1.alt_text}
          />
          <SingleTarotCard
            sx={{ position: 'relative', zIndex: 2 }}
            image={card2.image_link}
            altText={card2.alt_text}
          />
          <SingleTarotCard
            sx={{
              position: 'relative',
              transform: 'rotate(.04turn)',
              top: '25px',
              right: '75px'
            }}
            image={card3.image_link}
            altText={card3.alt_text}
          />
        </Box>
      )}
    </Box>
  );
};

export default ThreeCardSpread;
