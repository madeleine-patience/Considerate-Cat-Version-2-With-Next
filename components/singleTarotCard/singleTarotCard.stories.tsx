import { Meta, StoryFn } from "@storybook/react";
import SingleTarotCard from "./SingleTarotCard";

const tarotImage = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tarotcard/19.jpg`;

export default {
  title: "Components/SingleTarotCard",
  component: SingleTarotCard,
  decorators: [(Story) => <Story />],
} as Meta<typeof SingleTarotCard>;

const Template: StoryFn<typeof SingleTarotCard> = () => (
  <SingleTarotCard image={tarotImage} />
);

export const Default = Template.bind({});
