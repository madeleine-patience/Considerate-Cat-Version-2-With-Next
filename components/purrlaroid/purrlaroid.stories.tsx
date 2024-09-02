import { Meta, StoryFn } from "@storybook/react";
import { Purrlaroid } from ".";
const Eddie = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Cat%20Images/Eddie.jpg`;
export default {
  title: "Components/Purrlaroid",
  component: Purrlaroid.Root,
  decorators: [(Story) => <Story />],
} as Meta<typeof Purrlaroid.Root>;

const Template: StoryFn<typeof Purrlaroid> = () => (
  <Purrlaroid.Root catImage={Eddie} isAnimated>
    <Purrlaroid.Title catName="Eddie" />
  </Purrlaroid.Root>
);

export const Default = Template.bind({});
