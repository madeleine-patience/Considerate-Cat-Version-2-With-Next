import { Meta, StoryFn } from '@storybook/react';
import AnimatedHeaderCat from './HeaderAnimation';

export default {
  title: 'Components/header/AnimatedHeaderCat',
  component: AnimatedHeaderCat
} as Meta<typeof AnimatedHeaderCat>;

const Template: StoryFn<typeof AnimatedHeaderCat> = () => <AnimatedHeaderCat />;

export const Default = Template.bind({});
