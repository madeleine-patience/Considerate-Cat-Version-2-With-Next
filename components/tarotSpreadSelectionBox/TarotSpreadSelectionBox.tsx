import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { TarotSpread } from '../tarotSpread';
import { CardLayout } from './getLayout';
import { getLayoutStyles } from './getLayoutStyles';

interface TarotSpreadAction {
  onClick: () => void;
}

export interface TarotSpreadSelectionProps extends TarotSpreadAction {
  title: string;
  amountOfCards?: number;
  zIndex?: number;
  description: string;
  onClick: () => void;
}

const TarotSpreadSelectionBox: React.FC<TarotSpreadSelectionProps> = ({
  amountOfCards = 3,
  description,
  onClick,
  zIndex,
  title
}: TarotSpreadSelectionProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { palette } = useTheme();
  const cardTransitionTime = '400ms';
  const gridTransitionTime = '400ms';
  const layout: CardLayout = getLayoutStyles(
    amountOfCards,
    cardTransitionTime,
    isHovered
  );

  /**
   * TODO Replace components with role="button"
   */
  return (
    <Box
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role='button'
      tabIndex={0}
      sx={{
        width: '340px',
        tabIndex: 1,
        backgroundColor: palette.secondary.main,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: `
          box-shadow ${gridTransitionTime},
          transform ${gridTransitionTime}
        `,
        zIndex: zIndex
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <TarotSpread
        amountOfCards={amountOfCards}
        cardLayout={layout}
        isHovered={isHovered}
        cardTransitionTime={cardTransitionTime}
        gridTransitionTime={gridTransitionTime}
        sx={{
          padding: '80px 0',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          backgroundImage:
            'linear-gradient(to right bottom, #f2afda, #ffb3c2, #ffbeb0, #f7cba9, #e7d8ae)'
        }}
      />
      <Box>
        <Typography
          variant='h2'
          textAlign='center'
          color={palette.pinks.dark}
          p={4}
        >
          {title}
        </Typography>
        <Typography
          variant='h5'
          p={4}
          pt={0}
          sx={{
            textAlign: 'center',
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
