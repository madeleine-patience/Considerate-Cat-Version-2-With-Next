import { Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import PageContainer from './PageContainer';

export default {
  title: 'Components/PageContainer',
  component: PageContainer
} as Meta<typeof PageContainer>;

const Template: StoryFn<typeof PageContainer> = () => (
  <PageContainer>
    <Typography variant='h1'>Fill me with whatever you like! </Typography>
  </PageContainer>
);

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
