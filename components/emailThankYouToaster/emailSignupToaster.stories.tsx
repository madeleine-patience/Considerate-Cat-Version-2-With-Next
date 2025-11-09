import { Meta, StoryFn } from '@storybook/react';
import { expect, screen, userEvent, waitFor } from '@storybook/test';
import EmailSignUpToaster from './EmailSignupToaster';

export default {
  title: 'Components/EmailSignUpToaster',
  component: EmailSignUpToaster
} as Meta<typeof EmailSignUpToaster>;

const Template: StoryFn<typeof EmailSignUpToaster> = () => (
  <EmailSignUpToaster />
);

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
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
