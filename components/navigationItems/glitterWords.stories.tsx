import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { GlitterWordWrapper } from './GlitterWordWrapper';

export default {
  title: 'Components/GlitterWords',
  component: GlitterWordWrapper,
  decorators: [
    (Story) => (
      <Box sx={{ backgroundColor: 'pink', height: '200px' }}>
        <Story />
      </Box>
    )
  ]
} as Meta<typeof GlitterWordWrapper>;

type Story = StoryObj<typeof GlitterWordWrapper>;

// TODO : I don't want to delete this component, but its not perfect. It only accomdates a very specific size of words. Need to refactor, not currently being used at the moment.

export const Default: Story = {
  render: () => <GlitterWordWrapper> Cats Rule</GlitterWordWrapper>
};

export const LongerWords: Story = {
  render: () => <GlitterWordWrapper>Cats Rule Dogs Drool</GlitterWordWrapper>
};
