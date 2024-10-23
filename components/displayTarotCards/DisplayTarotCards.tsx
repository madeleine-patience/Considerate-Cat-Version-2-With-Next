import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { TarotCard } from '../../hooks/fetchTarotDeck';
import type { Theme } from '@mui/system';

interface DisplayTarotCardsProps {
  data: TarotCard[];
  width: string;
  onClick?: (_param: number) => void;
}

export const DisplayTarotCards = ({
  data,
  width,
  onClick
}: DisplayTarotCardsProps) => {
  const theme: Theme = useTheme();
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box
        margin='auto'
        width='fit-content'
        display={isSmallScreen ? 'flex' : 'grid'}
        flexDirection='column'
        gap={4}
        p={4}
        gridTemplateColumns='auto auto auto auto auto'
      >
        {data.map(({ id, image_link, alt_text }: TarotCard) => (
          <Box key={id}>
            <Box
              key={id}
              onClick={() => onClick(id)}
              width={width}
              borderRadius={2}
              component='img'
              src={image_link}
              alt={alt_text}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
