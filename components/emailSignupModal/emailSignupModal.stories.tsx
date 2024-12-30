import { Meta, StoryFn } from '@storybook/react';
import EmailSignUpModal from './EmailSignupModal';
import { expect, fn, screen, userEvent } from '@storybook/test';

export default {
  title: 'Components/EmailSignUpModal',
  component: EmailSignUpModal,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '100vw' }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof EmailSignUpModal>;

const Template: StoryFn<typeof EmailSignUpModal> = () => (
  <EmailSignUpModal isOpen setIsOpen={fn()} />
);

export const Default = Template.bind({});

export const FormInputTest = Template.bind({});
FormInputTest.play = async () => {
  const nameInput = screen.getByRole('textbox', { name: 'Name' });
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  await userEvent.type(nameInput, 'Madz');
  await userEvent.type(emailInput, 'madz@madz.com');
  await userEvent.click(submitButton);
};

export const InvalidFieldTest = Template.bind({});
InvalidFieldTest.play = async () => {
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  await userEvent.type(emailInput, 'madz');

  await userEvent.click(submitButton);

  const invalidNameMessage = await screen.findByText('Name is required');
  const invalidEmailMessage = await screen.findByText('Invalid email');

  expect(invalidEmailMessage).toBeInTheDocument();
  expect(invalidNameMessage).toBeInTheDocument();
};
