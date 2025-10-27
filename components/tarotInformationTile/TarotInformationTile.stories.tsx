import { Box } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import { tarotSpreadMocks } from '../../mocks/tarotSpreadData.mocks';
import TarotInformationTile from './TarotInformationTile';

const card = '/image/tarot-cards/25.webp';

export default {
  title: 'Components/TarotInformationTile',
  component: TarotInformationTile,
  decorators: [
    (Story) => (
      <Box sx={{ m: 10 }}>
        <Story />
      </Box>
    )
  ]
} as Meta<typeof TarotInformationTile>;

const Template: StoryFn<typeof TarotInformationTile> = () => (
  <TarotDeckContext.Provider value={tarotSpreadMocks.defaultSpread}>
    <TarotInformationTile
      name='Temperance'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      keywords={['Comfort', 'Peace', 'Acceptance']}
      image={card}
    />
  </TarotDeckContext.Provider>
);

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12'
  }
};
