import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header.Root
} as Meta<typeof Header.Root>;

type Story = StoryObj<typeof Header.Root>;

export const Default: Story = {
  render: () => (
    <Header.Root>
      <Header.Title> Considerate Cat</Header.Title>
      <Header.Animation />
      <Header.Navigation />
    </Header.Root>
  )
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'iphone12' }
  },
  render: () => (
    <Header.Root>
      <Header.Title> Considerate Cat</Header.Title>
      <Header.Animation />
      <Header.Navigation />
    </Header.Root>
  )
};
