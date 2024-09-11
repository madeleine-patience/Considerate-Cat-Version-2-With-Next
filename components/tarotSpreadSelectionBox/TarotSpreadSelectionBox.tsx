import React, { useContext, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import SingleTarotCard from '../singleTarotCard/SingleTarotCard';
import getLayout from './getLayout';

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
  amountOfCards,
  title,
  backgroundColor,
  zIndex,
  description,
  onClick
}) => {
  const tarotDeckData = useContext(TarotDeckContext);
  const { palette } = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardTransitionTime = '300ms';
  const gridTransitionTime = '120ms';
  const layout = getLayout(
    tarotDeckData,
    amountOfCards,
    cardTransitionTime,
    isHovered
  );

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '320px',
        backgroundColor: palette.secondary.main,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: `all ${gridTransitionTime}`,
        boxShadow: isHovered ? '8' : '2',
        transform: isHovered ? 'scale(1.025) ' : '',
        zIndex: zIndex
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          padding: '50px 0',
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
            isHovered ? layout.gridHover : layout.gridTemplateColumns
          }
          sx={{
            position: 'relative',
            bottom: layout.gridVerticalOffset,
            transition: `grid ${cardTransitionTime}`
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
          fontSize='30px'
          fontWeight={700}
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
