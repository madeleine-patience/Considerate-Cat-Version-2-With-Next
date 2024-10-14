import { Meta, StoryFn } from '@storybook/react';
import TarotSpread, { TarotSpreadProps } from './TarotSpread';
import getLayout, { CardLayout } from '../tarotSpreadSelectionBox/getLayout';
import getLayoutStyles from '../tarotSpreadSelectionBox/getLayoutStyles';
import Box from '@mui/material/Box';
import React from 'react';
import { AnnotatedStoryFn } from '@storybook/types';

const layoutTemplate: CardLayout = {
  images: [],
  gridTemplateColumns: '',
  gridHover: '',
  verticalCardSpacing: [],
  verticalCardSpacingHovered: [],
  gridVerticalOffset: '',
  gridVerticalOffsetHovered: '',
  tilt: 0,
  tiltHovered: 0,
  tiltDelta: 0,
  tiltDeltaHovered: 0,
  scaleHovered: 0,
  styles: []
};

function merge(layout: CardLayout, source: CardLayout): CardLayout {
  const result = { ...layout };

  for (const key in source) {
    if (!layout.hasOwnProperty(key)) {
      result[key] = source[key];
    }
  }

  return result;
}

function getCardLayout(amountOfCards: number): CardLayout {
  return merge(
    getLayoutStyles(amountOfCards, '400ms', false, getLayout(amountOfCards)),
    layoutTemplate
  );
}

export default {
  title: 'Components/TarotSpread',
  component: TarotSpread,
  argTypes: {
    isHovered: { control: { type: 'boolean' } },
    amountOfCards: {
      table: {
        readonly: true // Works in storybook 8 but not 7 (current)
      }
    },
    layout: {
      gridTemplateColumns: { control: { type: 'text' } },
      gridHover: { control: { type: 'text' } },
      verticalCardSpacing: { control: { type: 'object' } },
      verticalCardSpacingHovered: { control: { type: 'object' } },
      gridVerticalOffset: { control: { type: 'text' } },
      gridVerticalOffsetHovered: { control: { type: 'text' } },
      tilt: { control: { type: 'number', min: 0, max: 5 } },
      tiltDelta: { control: { type: 'number', min: 0, max: 5 } },
      tiltHovered: { control: { type: 'number', min: 0, max: 10 } },
      tiltDeltaHovered: { control: { type: 'number', min: 0, max: 5 } },
      scaleHovered: { control: { type: 'number', min: 1, max: 2, step: 0.1 } }
    }
  }
} as Meta<typeof TarotSpread>;

interface StorybookProps extends TarotSpreadProps, CardLayout {
  isHovered: boolean;
  layout: CardLayout;
}

const Template: StoryFn<StorybookProps> = ({
  amountOfCards,
  isHovered,
  layout
}: StorybookProps) => {
  const cardTransitionTime = '400ms';
  const gridTransitionTime = '400ms';

  layout = getLayoutStyles(amountOfCards, '400ms', isHovered, layout);

  console.log(layout);

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
            <TarotSpread amountOfCards={amountOfCards} cardLayout={layout} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

function createSpread(amountOfCards: number): StoryFn<StorybookProps> {
  const spread = Template.bind({});
  spread.args = {
    isHovered: false,
    amountOfCards,
    layout: getCardLayout(amountOfCards)
  };
  return spread;
}

export const OneCardSpread: AnnotatedStoryFn = createSpread(1);
export const ThreeCardSpread: AnnotatedStoryFn = createSpread(3);
export const FiveCardSpread: AnnotatedStoryFn = createSpread(5);
export const SevenCardSpread: AnnotatedStoryFn = createSpread(7);
