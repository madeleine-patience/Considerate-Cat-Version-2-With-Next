import { Meta, StoryFn } from '@storybook/react';
import {
  CardLayout,
  getLayout,
  getLayoutStyles
} from '../tarotSpreadSelectionBox';
import { TarotSpread, TarotSpreadProps } from './TarotSpread';

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
  return {
    ...source,
    ...Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(layout).filter(([_, value]) => value !== undefined)
    )
  } as CardLayout;
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
      tilt: { control: { type: 'number', min: 0, max: 360 } },
      tiltDelta: { control: { type: 'number', min: 0, max: 360 } },
      tiltHovered: { control: { type: 'number', min: 0, max: 360 } },
      tiltDeltaHovered: { control: { type: 'number', min: 0, max: 90 } },
      scaleHovered: { control: { type: 'number', min: 1, max: 10, step: 0.1 } }
    }
  }
} as Meta<typeof TarotSpread>;

interface StorybookProps extends TarotSpreadProps, CardLayout {
  isHovered: boolean;
  layout: CardLayout;
}

const Template: StoryFn<StorybookProps> = ({
  amountOfCards = 3,
  isHovered,
  layout
}: StorybookProps) => {
  layout = getLayoutStyles(amountOfCards, '400ms', isHovered, layout);

  return (
    <TarotSpread
      amountOfCards={amountOfCards}
      cardLayout={layout}
      isHovered={isHovered}
      sx={{
        marginTop: '100px'
      }}
    />
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

export const OneCardSpread = createSpread(1);
export const ThreeCardSpread = createSpread(3);
export const FourCardSpread = createSpread(4);
export const FiveCardSpread = createSpread(5);
export const SevenCardSpread = createSpread(7);
