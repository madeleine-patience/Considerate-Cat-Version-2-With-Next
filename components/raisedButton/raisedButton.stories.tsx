import RaisedButton from "./RaisedButton";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/RaisedButton",
  component: RaisedButton,
  decorators: [(Story) => <Story />],
} as Meta<typeof RaisedButton>;

const Template: StoryFn<typeof RaisedButton> = () => (
  <RaisedButton buttonLabel="Test" onClick={() => console.log("madeleine")} />
);

export const Default = Template.bind({});
