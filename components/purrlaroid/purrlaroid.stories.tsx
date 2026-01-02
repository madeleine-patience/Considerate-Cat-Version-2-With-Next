import { Meta, StoryFn } from '@storybook/react';
import Purrlaroid from './index';
import { catDataMocks } from '../catInformationModal/catData.mocks';

export default {
  title: 'Components/Purrlaroid',
  component: Purrlaroid
} as Meta<typeof Purrlaroid>;

const catMock = catDataMocks.singleCat;

const Template: StoryFn<typeof Purrlaroid> = () => (
  <Purrlaroid catImage={catMock.cat_main_image} catName={catMock.cat_name} />
);

export const Default = Template.bind({});
