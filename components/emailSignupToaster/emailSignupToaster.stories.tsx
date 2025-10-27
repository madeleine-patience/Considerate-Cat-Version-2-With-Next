import { Meta, StoryFn } from '@storybook/react';
import EmailSignUpToaster from './EmailSignupToaster';
import { expect, screen, userEvent, waitFor } from '@storybook/test';

export default {
  title: 'Components/EmailSignUpToaster',
  component: EmailSignUpToaster,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '100vw' }}>
        <Story />
      </div>
    )
  ]
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
