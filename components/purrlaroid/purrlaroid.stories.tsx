import { Meta, StoryFn } from "@storybook/react";
import Purrlaroid from "./Purrlaroid";
const Eddie =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/Cat%20Images/Eddie.jpg";
export default {
  title: "Components/Purrlaroid",
  component: Purrlaroid,
  decorators: [(Story) => <Story />],
} as Meta<typeof Purrlaroid>;

const Template: StoryFn<typeof Purrlaroid> = () => (
  <Purrlaroid catImage={Eddie} catName="Eddie" width="200px" isAnimated />
);

export const Default = Template.bind({});
