import { Meta, StoryFn } from '@storybook/react';
import { expect, fn, screen, userEvent, waitFor } from '@storybook/test';
import { Toaster } from './Toaster';

export default {
  title: 'Components/Toaster',
  component: Toaster
} as Meta<typeof Toaster>;

const Template: StoryFn<typeof Toaster> = () => (
  <Toaster onClick={() => fn()} type='success' />
);

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};

export const Success = {
  args: { type: 'success', message: 'Success!' }
};

export const Error = {
  args: { type: 'error', message: 'Oh no :(' }
};

export const Custom = {
  args: {
    type: 'custom',
    message: 'Custom Message',
    image: '/image/ToasterImage.png'
  }
};

export const CloseToaster = {
  play: async () => {
    const toasterComponent = screen.getByText('Keep In Touch');
    expect(toasterComponent).toBeInTheDocument();
    const closeButton = screen.getByRole('button', {
      name: /X/i
    });
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(toasterComponent).not.toBeInTheDocument();
    });
  }
};
