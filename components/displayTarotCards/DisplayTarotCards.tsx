import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { Theme } from '@mui/system';
import type { TarotCard } from '../../hooks/fetchTarotDeck';

interface DisplayTarotCardsProps {
  tarotCardData: TarotCard[];
  width: string;
  isGridView: boolean;
  onClick?: (_param: number) => void;
}

export const DisplayTarotCards = ({
  tarotCardData,
  width,
  onClick,
  isGridView
}: DisplayTarotCardsProps) => {
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  /**
   * TODO Replace components with role="button"
   */
  return (
    <Box>
      <Box
        margin='auto'
        display={isSmallScreen ? 'flex' : 'grid'}
        flexDirection='column'
        gap={4}
        p={4}
        gridTemplateColumns={isGridView ? 'auto auto auto auto auto' : ''}
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
                <Box
                  key={id}
                  onClick={() => onClick(id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onClick(id);
                    }
                  }}
                  role='button'
                  tabIndex={0}
                  width={width}
                  borderRadius={2}
                  component='img'
                  src={image_link}
                  alt={alt_text}
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
    </Box>
  );
};
