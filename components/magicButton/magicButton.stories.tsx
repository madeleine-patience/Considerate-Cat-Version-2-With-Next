import { Meta, StoryFn } from "@storybook/react";
import { MagicButton, MagicButtonProps } from "./MagicButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default {
  title: "Components/MagicButton",
  component: MagicButton,
} as Meta<typeof MagicButton>;

const states = [
  {
    name: "Small",
    render: (props: MagicButtonProps) => (
      <MagicButton {...props} backgroundColor="pink" textColor="deepPink" />
    ),
  },
  {
    name: "Medium",
    render: (props: MagicButtonProps) => (
      <MagicButton {...props} backgroundColor="lightGreen" textColor="green" />
    ),
  },
  {
    name: "Large",
    render: (props: MagicButtonProps) => (
      <MagicButton
        {...props}
        backgroundColor="lightBlue"
        textColor="darkSlateBlue"
      />
    ),
  },
];
const Template: StoryFn<typeof MagicButton> = (props) => (
  <Table sx={{ th: { fontWeight: 700 } }}>
    <TableHead>
      <TableRow>
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {states.map(({ name, render }) => (
        <TableRow key={name}>
          <TableCell component="th" align="center">
            {name}
          </TableCell>
          <TableCell align="center">{render({ ...props })}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Default = {
  render: Template,
  args: { title: "Click Me" },
};
