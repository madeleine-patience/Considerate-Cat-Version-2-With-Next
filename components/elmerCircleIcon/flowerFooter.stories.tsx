import { Meta, StoryFn } from "@storybook/react";
import ElmerCircleIcon from "./ElmerCircleIcon";

export default {
  title: "Components/ElmerCircleIcon",
  component: ElmerCircleIcon,
  decorators: [(Story) => <Story />],
} as Meta<typeof ElmerCircleIcon>;

const Template: StoryFn<typeof ElmerCircleIcon> = () => <ElmerCircleIcon />;

export const Default = Template.bind({});
