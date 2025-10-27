import { Box, Typography } from '@mui/material';
import { Meta } from '@storybook/react';
import { screen, userEvent } from '@storybook/test';
import CatCardFlipper from './CatCardFlipper';

export default {
  title: 'Components/CatCardFlipper',
  component: CatCardFlipper,
  decorators: [
    (Story) => (
      <Box
        sx={{
          backgroundColor: 'pink',
          height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Story />
        <Typography variant='h2'> Click me for something cute !</Typography>
      </Box>
    )
  ]
} as Meta<typeof CatCardFlipper>;

export const Default = {};

export const ButtersClicked = {
  play: async () => {
    const Butters = screen.getByRole('button', {
      name: /Butters the cat, waiting to show you a tarot reading if you give pets/i
    });
    await userEvent.click(Butters);
  }
};
