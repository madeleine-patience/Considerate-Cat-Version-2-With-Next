import { Meta, StoryFn } from '@storybook/react';
import FlowerFooter from './FlowerFooter';

export default {
  title: 'Components/FlowerFooter',
  component: FlowerFooter,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '100vw' }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof FlowerFooter>;

const Template: StoryFn<typeof FlowerFooter> = () => <FlowerFooter />;

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
