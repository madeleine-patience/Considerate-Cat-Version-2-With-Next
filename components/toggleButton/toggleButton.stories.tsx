import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToggleButton } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  decorators: [(Story) => <Story />]
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = () => (
  <ToggleButton onChange={fn()} />
);
export const Default = Template.bind({});
