import GenericButton from "./GenericButton";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/GenericButton",
  component: GenericButton,
  decorators: [(Story) => <Story />],
} as Meta<typeof GenericButton>;

const Template: StoryFn<typeof GenericButton> = () => (
  <GenericButton buttonLabel="Test" onClick={() => console.log("madeleine")} />
);

export const Default = Template.bind({});
