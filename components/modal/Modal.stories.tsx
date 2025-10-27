import { Box, Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from '.';

export default {
  title: 'Components/Modal',
  component: Modal.Root
} as Meta<typeof Modal.Root>;

const Template: StoryFn<typeof Modal> = () => (
  <Modal.Root open setIsOpen={fn()}>
    <Modal.Title>Some Title Here</Modal.Title>
    <Typography>Fill me with your content</Typography>
    <Box component='img' src='/image/ButtersSample.jpg' />
  </Modal.Root>
);

export const Default = Template.bind({});
