import { Meta, StoryFn } from '@storybook/react';
import { catDataMocks } from './catData.mocks';
import { fn } from '@storybook/test';
import { CatInformationModal } from './CatInformationModal';
import { temperance, threeOfCups } from '../../mocks/tarotSpreadData.mocks';

export default {
  title: 'Components/CatInformationModal',
  component: CatInformationModal
} as Meta<typeof CatInformationModal>;

const Template: StoryFn<typeof CatInformationModal> = () => (
  <CatInformationModal
    selectedCat={catDataMocks.singleCat}
    allCatData={catDataMocks.manyCats}
    isOpen
    onClick={fn()}
    tarotDeck={[temperance, threeOfCups]}
  />
);

export const Default = Template.bind({});
