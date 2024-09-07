import { Box } from '@mui/material';
import { Meta } from '@storybook/react';
import RaisedButton from './RaisedButton';

export default {
  title: 'Components/RaisedButton',
  component: RaisedButton,
  decorators: [(Story) => <Story />]
} as Meta<typeof RaisedButton>;

export const AllStates = () => {
  return (
    <Box>
      <Box>
        <RaisedButton buttonLabel='tiny' />
      </Box>
      <Box>
        <RaisedButton buttonLabel='medium' />
      </Box>
      <Box>
        <RaisedButton buttonLabel='large text' />
      </Box>
    </Box>
  );
};
