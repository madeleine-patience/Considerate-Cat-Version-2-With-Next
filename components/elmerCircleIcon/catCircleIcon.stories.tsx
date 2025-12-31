import { Meta, StoryFn } from '@storybook/react';
import { CatCircleIcon } from './CatCircleIcon';
import { Table, TableCell, TableRow } from '@mui/material';

export default {
  title: 'Components/CatCircleIcon',
  component: CatCircleIcon
} as Meta<typeof CatCircleIcon>;

const states = [
  {
    name: 'Elmer',
    render: () => <CatCircleIcon catType='elmer' />
  },
  {
    name: 'Daniel',
    render: () => <CatCircleIcon catType='daniel' />
  },
  {
    name: 'Louie',
    render: () => <CatCircleIcon catType='louie' />
  },
  {
    name: 'Hubert',
    render: () => <CatCircleIcon catType='hubert' />
  }
];
const Template: StoryFn<typeof CatCircleIcon> = () => (
  <Table sx={{ th: { fontWeight: 700 } }}>
    {states.map(({ name, render }) => (
      <TableRow key={name}>
        <TableCell component='th' align='center'>
          {name}
        </TableCell>
        <TableCell align='center'>{render()}</TableCell>
      </TableRow>
    ))}
  </Table>
);

export const Default = {
  render: Template,
  args: {}
};
