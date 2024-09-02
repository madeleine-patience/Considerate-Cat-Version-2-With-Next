import { Meta, StoryFn } from "@storybook/react";
import ThreeCardSpread from "./ThreeCardSpread";

const tarotImage = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tarotcard/19.jpg`;

export default {
  title: "Components/ThreeCardSpread",
  component: ThreeCardSpread,
  decorators: [(Story) => <Story />],
} as Meta<typeof ThreeCardSpread>;

const Template: StoryFn<typeof ThreeCardSpread> = () => (
  <ThreeCardSpread card1={tarotImage} card2={tarotImage} card3={tarotImage} />
);

export const Default = Template.bind({});
