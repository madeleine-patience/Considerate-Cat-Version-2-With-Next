import { Meta, StoryFn } from '@storybook/react';
import Purrlaroid from './index';
const Eddie = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Cat%20Images/Eddie.jpg`;

export default {
  title: 'Components/Purrlaroid',
  component: Purrlaroid
} as Meta<typeof Purrlaroid>;

const Template: StoryFn<typeof Purrlaroid> = () => (
  <Purrlaroid catImage={Eddie} catName='Eddie' />
);

export const Default = Template.bind({});
