import { Meta, StoryFn } from "@storybook/react";
import FlowerFooter from "./FlowerFooter";

export default {
  title: "Components/FlowerFooter",
  component: FlowerFooter,
  decorators: [(Story) => <Story />],
} as Meta<typeof FlowerFooter>;

const Template: StoryFn<typeof FlowerFooter> = () => <FlowerFooter sx={{}} />;

export const Default = Template.bind({});
