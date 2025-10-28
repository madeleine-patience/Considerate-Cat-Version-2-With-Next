import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { TarotCard } from '../../hooks/fetchTarotDeck';
import SingleTarotCard from '../singleTarotCardWithFlip/SingleTarotCardWithFlip';
import TarotInformationTile from '../tarotInformationTile/TarotInformationTile';

interface DisplayTarotCardsProps {
  tarotCardData: TarotCard[];
  isGridView: boolean;
  onClick?: (_param: number) => void;
}

export const DisplayTarotCards = ({
  tarotCardData,
  onClick,
  isGridView
}: DisplayTarotCardsProps) => {
  const theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display={isSmallScreen ? 'flex' : 'grid'}
      flexDirection='column'
      gap={4}
      p={4}
      gridTemplateColumns={isGridView ? ' auto auto auto auto' : ''}
    >
      {tarotCardData.map(
        ({
          id,
          card_name,
          image_link,
          alt_text,
          description,
          key_words
        }: TarotCard) => (
          <Box key={id}>
            {isGridView ? (
              <SingleTarotCard
                altText={alt_text}
                image={image_link}
                key={id}
                onClick={() => onClick?.(id)}
              />
            ) : (
              <TarotInformationTile
                image={image_link}
                name={card_name}
                description={description}
                keywords={key_words}
              />
            )}
          </Box>
        )
      )}
    </Box>
  );
};
