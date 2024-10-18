import { Meta, StoryFn } from '@storybook/react';
import TarotSpreadSelectionBox, {
  TarotSpreadSelectionProps
} from './TarotSpreadSelectionBox';
import { AnnotatedStoryFn } from '@storybook/types';

export default {
  title: 'Components/TarotSpreadSelectionBox',
  component: TarotSpreadSelectionBox,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  }
} as Meta<typeof TarotSpreadSelectionBox>;

const Template: StoryFn<typeof TarotSpreadSelectionBox> = (
  args: TarotSpreadSelectionProps
) => <TarotSpreadSelectionBox {...args} />;

function createTarotSpreadSelectionBox(amountOfCards: number): StoryFn {
  const numbers: { [key: number]: string } = {
    1: 'One',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    7: 'Seven'
  };

  const tarotSpreadSelectionBox = Template.bind({});
  tarotSpreadSelectionBox.args = {
    amountOfCards: amountOfCards,
    title: `${numbers[amountOfCards]} Card Spread`,
    description: `A description for the spread. This spread has ${numbers[amountOfCards].toLowerCase()} cards.`
  };

  return tarotSpreadSelectionBox;
}

export const OneCardTarotSpreadSelectionBox: AnnotatedStoryFn =
  createTarotSpreadSelectionBox(1);
export const ThreeCardTarotSpreadSelectionBox: AnnotatedStoryFn =
  createTarotSpreadSelectionBox(3);
export const FourCardTarotSpreadSelectionBox: AnnotatedStoryFn =
  createTarotSpreadSelectionBox(4);
export const FiveCardTarotSpreadSelectionBox: AnnotatedStoryFn =
  createTarotSpreadSelectionBox(5);
export const SevenCardTarotSpreadSelectionBox: AnnotatedStoryFn =
  createTarotSpreadSelectionBox(7);
