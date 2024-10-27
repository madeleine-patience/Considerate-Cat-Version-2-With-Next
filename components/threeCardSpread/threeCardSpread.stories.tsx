import { Meta, StoryFn } from '@storybook/react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import { tarotSpreadMocks } from '../../mocks/tarotSpreadData.mocks';
import ThreeCardSpread from './ThreeCardSpread';

export default {
  title: 'Components/ThreeCardSpread',
  component: ThreeCardSpread,
  decorators: [(Story) => <Story />]
} as Meta<typeof ThreeCardSpread>;

const Template: StoryFn<typeof ThreeCardSpread> = () => (
  <TarotDeckContext.Provider value={tarotSpreadMocks.defaultSpread}>
    <ThreeCardSpread
      card1={tarotSpreadMocks.defaultSpread[0]}
      card2={tarotSpreadMocks.defaultSpread[1]}
      card3={tarotSpreadMocks.defaultSpread[2]}
    />
  </TarotDeckContext.Provider>
);

export const Default = Template.bind({});
