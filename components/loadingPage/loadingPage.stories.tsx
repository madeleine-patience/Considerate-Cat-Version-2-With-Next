import { Meta, StoryFn } from '@storybook/react';
import { LoadingPage } from './LoadingPage';

export default {
  title: 'Components/LoadingPage',
  component: LoadingPage
} as Meta<typeof LoadingPage>;

const Template: StoryFn<typeof LoadingPage> = () => <LoadingPage />;

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
