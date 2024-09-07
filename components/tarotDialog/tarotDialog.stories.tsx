import { Meta, StoryFn } from '@storybook/react';
import TarotDialog from './TarotDialog';
import { tarotDialogMocks } from './tarotDialog.mocks';

export default {
  title: 'Components/TarotDialog',
  component: TarotDialog
} as Meta<typeof TarotDialog>;

const Template: StoryFn<typeof TarotDialog> = (args) => (
  <TarotDialog {...args} />
);

export const Default = Template.bind({});
Default.args = tarotDialogMocks.defaultTarotCard;
