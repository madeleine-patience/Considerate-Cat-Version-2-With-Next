import { Meta } from '@storybook/react';
import { screen, userEvent } from '@storybook/test';
import CatCardFlipper from './CatCardFlipper';

export default {
  title: 'Components/CatCardFlipper',
  component: CatCardFlipper
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
