import { Box } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import AnimatedHeaderCat from './HeaderAnimation';

export default {
  title: 'Components/header/AnimatedHeaderCat',
  component: AnimatedHeaderCat,
  decorators: [
    (Story) => (
      <Box sx={{ width: 'fit-content', backgroundColor: 'pink' }}>
        <Story />
      </Box>
    )
  ]
} as Meta<typeof AnimatedHeaderCat>;

const Template: StoryFn<typeof AnimatedHeaderCat> = () => <AnimatedHeaderCat />;

export const Default = Template.bind({});
