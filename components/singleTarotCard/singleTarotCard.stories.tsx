import { Meta, ReactRenderer, StoryFn } from '@storybook/react';
import SingleTarotCard from './SingleTarotCard';
import type { PartialStoryFn } from '@storybook/types';
import type { ReactElement } from 'react';

const tarotImage = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tarotcard/19.jpg`;

export default {
  title: 'Components/SingleTarotCard',
  component: SingleTarotCard,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>): ReactElement => <Story />
  ]
} as Meta<typeof SingleTarotCard>;

const Template: StoryFn<typeof SingleTarotCard> = (): ReactElement => (
  <SingleTarotCard image={tarotImage} />
);

// Unused @ts-expect-error
export const Default: ReactElement = Template.bind({});
