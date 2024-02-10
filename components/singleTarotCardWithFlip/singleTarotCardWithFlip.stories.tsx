import { Meta, StoryFn } from "@storybook/react";
import TarotCardWithFlip from "./SingleTarotCardWithFlip";

const tarotImage =
  "https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/tarotcard/19.jpg";

export default {
  title: "Components/SingleTarotCardWithFlip",
  component: TarotCardWithFlip,
  decorators: [(Story) => <Story />],
} as Meta<typeof TarotCardWithFlip>;

const Template: StoryFn<typeof TarotCardWithFlip> = () => (
  <TarotCardWithFlip
    image={tarotImage}
    isCardFlipped={true}
    transitionDelay="test"
  />
);

export const Default = Template.bind({});
