import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [(Story) => <Story />],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Default = Template.bind({});
