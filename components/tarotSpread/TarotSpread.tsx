import { ReactElement } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';
import { CardLayout } from '../tarotSpreadSelectionBox/getLayout';

export interface TarotSpreadProps {
  amountOfCards?: number;
  cardLayout: CardLayout;
  isHovered?: boolean;
  cardTransitionTime?: string;
  gridTransitionTime?: string;
  sx?: SxProps;
}

function TarotSpread({
  amountOfCards = 3,
  cardLayout,
  isHovered = false,
  cardTransitionTime = '400ms',
  gridTransitionTime = '400ms',
  sx = {}
}: TarotSpreadProps): ReactElement {
  return (
    <>
      <Box sx={{ ...sx }}>
        <Box
          display='grid'
          justifyContent='center'
          gridTemplateColumns={
            isHovered && cardLayout.gridHover
              ? `${cardLayout.gridHover} 0fr`
              : `${cardLayout.gridTemplateColumns || 'auto'} 0fr`
          }
          sx={{
            position: 'relative',
            bottom: isHovered
              ? cardLayout.gridVerticalOffsetHovered ||
                cardLayout.gridVerticalOffset
              : cardLayout.gridVerticalOffset || 0,
            transition: `grid ${cardTransitionTime}, bottom ${gridTransitionTime}`
          }}
        >
          {Array.from({ length: amountOfCards }).map(
            (_: null, i: number): ReactElement => {
              const img = cardLayout.images[i];
              const { sx } = cardLayout.styles[i];

              return (
                <SingleTarotCard
                  key={`single-tarot-card-${i}`}
                  image={img}
                  sx={sx}
                />
              );
            }
          )}
        </Box>
      </Box>
    </>
  );
}

export default TarotSpread;
