import { Meta, StoryFn } from '@storybook/react';
import TarotSpread, { TarotSpreadProps } from './TarotSpread';
import { CardLayout } from '../tarotSpreadSelectionBox/getLayout';
import getLayout from '../tarotSpreadSelectionBox/getLayout';
import getLayoutStyles from '../tarotSpreadSelectionBox/getLayoutStyles';
import Box from '@mui/material/Box';
import React from 'react';

export default {
  title: 'Components/TarotSpread',
  component: TarotSpread,
  argTypes: {
    amountOfCards: {
      control: {
        type: 'select'
      },
      options: [1, 3, 5, 7]
    },
    tilt: {
      control: {
        type: 'number'
      },
      min: 0,
      max: 360
    },
    tiltDelta: { control: { type: 'number', min: 0, max: 5 } },
    tiltHovered: { control: { type: 'number', min: 0, max: 10 } },
    tiltDeltaHovered: { control: { type: 'number', min: 0, max: 5 } },
    scaleHovered: { control: { type: 'number', min: 1, max: 2, step: 0.1 } },
    gridTemplateColumns: { control: { type: 'text' } },
    gridHover: { control: { type: 'text' } },
    gridVerticalOffset: { control: { type: 'text' } },
    gridVerticalOffsetHovered: { control: { type: 'text' } },
    verticalCardSpacing: { control: { type: 'object' } },
    verticalCardSpacingHovered: { control: { type: 'object' } },
    isHovered: { control: { type: 'boolean' } }
  }
} as Meta<typeof TarotSpread>;

interface StorybookProps extends TarotSpreadProps, CardLayout {
  isHovered: boolean;
}

const Template: StoryFn<StorybookProps> = (args: StorybookProps) => {
  const {
    amountOfCards,
    tilt,
    tiltDelta,
    tiltHovered,
    tiltDeltaHovered,
    scaleHovered,
    gridTemplateColumns,
    gridHover,
    gridVerticalOffset,
    gridVerticalOffsetHovered,
    verticalCardSpacing,
    verticalCardSpacingHovered,
    isHovered
  } = args;

  const layoutDefaults = getLayout(amountOfCards);

  const mergedLayout: CardLayout = {
    images: layoutDefaults.images,
    gridTemplateColumns:
      gridTemplateColumns ?? layoutDefaults.gridTemplateColumns,
    gridHover: gridHover ?? layoutDefaults.gridHover,
    verticalCardSpacing:
      verticalCardSpacing ?? layoutDefaults.verticalCardSpacing,
    verticalCardSpacingHovered:
      verticalCardSpacingHovered ?? layoutDefaults.verticalCardSpacingHovered,
    tilt: tilt ?? layoutDefaults.tilt,
    tiltDelta: tiltDelta ?? layoutDefaults.tiltDelta,
    tiltHovered: tiltHovered ?? layoutDefaults.tiltHovered,
    tiltDeltaHovered: tiltDeltaHovered ?? layoutDefaults.tiltDeltaHovered,
    scaleHovered: scaleHovered ?? layoutDefaults.scaleHovered,
    gridVerticalOffset: gridVerticalOffset ?? layoutDefaults.gridVerticalOffset,
    gridVerticalOffsetHovered:
      gridVerticalOffsetHovered ?? layoutDefaults.gridVerticalOffsetHovered,
    styles: layoutDefaults.styles // Keep the default styles from `getLayout`
  };

  // Now apply the merged layout to `getLayoutStyles` to manage hover transitions
  const cardLayout = getLayoutStyles(amountOfCards, '400ms', isHovered);

  // Override `cardLayout` properties with the merged layout
  cardLayout.gridTemplateColumns = mergedLayout.gridTemplateColumns;
  cardLayout.gridHover = mergedLayout.gridHover;
  cardLayout.verticalCardSpacing = mergedLayout.verticalCardSpacing;
  cardLayout.verticalCardSpacingHovered =
    mergedLayout.verticalCardSpacingHovered;
  cardLayout.tilt = mergedLayout.tilt;
  cardLayout.tiltDelta = mergedLayout.tiltDelta;
  cardLayout.tiltHovered = mergedLayout.tiltHovered;
  cardLayout.tiltDeltaHovered = mergedLayout.tiltDeltaHovered;
  cardLayout.scaleHovered = mergedLayout.scaleHovered;
  cardLayout.gridVerticalOffset = mergedLayout.gridVerticalOffset;
  cardLayout.gridVerticalOffsetHovered = mergedLayout.gridVerticalOffsetHovered;

  const cardTransitionTime = '400ms';
  const gridTransitionTime = '400ms';

  return (
    <>
      <Box
        sx={{
          borderRadius: '20px',
          cursor: 'pointer',
          transition: `
          box-shadow ${gridTransitionTime},
          transform ${gridTransitionTime}
        `
        }}
      >
        <Box
          sx={{
            padding: '80px 0'
          }}
        >
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
            <TarotSpread
              amountOfCards={amountOfCards}
              cardLayout={cardLayout}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  amountOfCards: 3,
  tilt: 4,
  tiltDelta: 3,
  tiltHovered: 2,
  tiltDeltaHovered: 1,
  scaleHovered: 1.1,
  gridTemplateColumns: '50px 50px 50px 50px 50px 50px 50px 50px',
  gridHover: '50px 50px 50px 50px 50px 50px 50px 50px',
  gridVerticalOffset: '10px',
  gridVerticalOffsetHovered: '15px',
  verticalCardSpacing: [0, 0, 0, 0, 0, 0, 0, 0],
  verticalCardSpacingHovered: [5, 5, 5, 5, 5, 5, 5],
  isHovered: false
};
