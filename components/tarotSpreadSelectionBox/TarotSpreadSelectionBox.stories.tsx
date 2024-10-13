import { Meta, StoryFn } from '@storybook/react';
import TarotSpreadSelectionBox, {
  TarotSpreadSelectionProps
} from './TarotSpreadSelectionBox';

export default {
  title: 'Components/TarotSpreadSelectionBox',
  component: TarotSpreadSelectionBox,
  argTypes: {
    amountOfCards: {
      control: {
        type: 'select'
      },
      type: 'number',
      options: [1, 3, 5, 7]
    },
    title: { control: 'text' },
    description: { control: 'text' }
  }
} as Meta<typeof TarotSpreadSelectionBox>;

const Template: StoryFn<typeof TarotSpreadSelectionBox> = (
  args: TarotSpreadSelectionProps
) => <TarotSpreadSelectionBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  amountOfCards: 3,
  title: 'Amount Card Spread',
  description: 'A description for the the spread'
};
