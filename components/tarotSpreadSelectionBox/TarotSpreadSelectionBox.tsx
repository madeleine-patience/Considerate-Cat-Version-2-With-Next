import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useContext, useState } from 'react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import { TarotDeckData } from '../../types/tarotDeckData';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';
import getLayoutStyles from './getLayoutStyles';

interface TarotSpreadAction {
  onClick: () => void;
}

export interface TarotSpreadSelectionProps extends TarotSpreadAction {
  title: string;
  amountOfCards?: number;
  backgroundColor?: string;
  zIndex?: number;
  description: string;
  onClick: () => void;
}

const TarotSpreadSelectionBox: React.FC<TarotSpreadSelectionProps> = ({
  backgroundColor,
  amountOfCards,
  description,
  onClick,
  zIndex,
  title
}) => {
  const tarotDeckData: TarotDeckData[] = useContext(TarotDeckContext);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { palette } = useTheme();
  const cardTransitionTime = '250ms';
  const gridTransitionTime = '400ms';
  const layout = getLayoutStyles(
    tarotDeckData,
    amountOfCards,
    cardTransitionTime,
    isHovered
  );

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '340px',
        backgroundColor: palette.secondary.main,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: `
          box-shadow ${gridTransitionTime},
          transform ${gridTransitionTime}
        `,
        boxShadow: isHovered ? '3' : '1',
        transform: isHovered ? 'scale(1.025) ' : '',
        zIndex: zIndex
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          padding: '60px 0',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          backgroundColor: { backgroundColor },
          backgroundImage:
            'linear-gradient(to right bottom, #f2afda, #ffb3c2, #ffbeb0, #f7cba9, #e7d8ae)'
        }}
      >
        <Box
          display='grid'
          justifyContent='center'
          gridTemplateColumns={
            isHovered && layout.gridHover
              ? `${layout.gridHover} 0fr`
              : `${layout.gridTemplateColumns || 'auto'} 0fr`
          }
          sx={{
            position: 'relative',
            bottom: isHovered
              ? layout.gridVerticalOffsetHovered || layout.gridVerticalOffset
              : layout.gridVerticalOffset || 0,
            transition: `grid ${cardTransitionTime}, bottom ${gridTransitionTime}`
          }}
        >
          {Array.from({ length: amountOfCards }).map((_, i) => {
            const img = layout.images[i];
            const { sx } = layout.styles[i];

            return (
              <SingleTarotCard
                key={`single-tarot-card-${i}`}
                image={img}
                sx={sx}
              />
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          variant='h3'
          textAlign='center'
          fontWeight={600}
          color={palette.pinks.dark}
          p={4}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          p={4}
          pt={0}
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            fontSize: '18px',
            color: palette.pinks.dark
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default TarotSpreadSelectionBox;
