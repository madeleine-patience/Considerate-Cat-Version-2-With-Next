import { Meta, StoryFn } from '@storybook/react';
import TarotInformationModal from './TarotInformationModal';
import { tarotInformationModalMocks } from './TarotInformationModal.mocks';

export default {
  title: 'Components/TarotInformationModal',
  component: TarotInformationModal
} as Meta<typeof TarotInformationModal>;

const Template: StoryFn<typeof TarotInformationModal> = (args) => (
  <TarotInformationModal {...args} />
);

export const Default = Template.bind({});
Default.args = tarotInformationModalMocks.defaultTarotCard;

export const Mobile = Template.bind({});
Mobile.args = tarotInformationModalMocks.defaultTarotCard;
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
