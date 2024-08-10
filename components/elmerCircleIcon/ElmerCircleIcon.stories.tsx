import { Meta, StoryFn } from "@storybook/react";
import ElmerCircleIcon from "./ElmerCircleIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default {
  title: "Components/ElmerCircleIcon",
  component: ElmerCircleIcon,
} as Meta<typeof ElmerCircleIcon>;

// const states = [
//   {
//     name: "Small",
//     render: () => <ElmerCircleIcon {...props} size="small" />,
//   },
//   {
//     name: "Medium",
//     render: (props: ElmerIconProps) => <ElmerCircleIcon {...props} />,
//   },
//   {
//     name: "Medium",
//     render: (props: ElmerIconProps) => (
//       <ElmerCircleIcon {...props} size="large" />
//     ),
//   },
// ];
// const Template: StoryFn<typeof ElmerCircleIcon> = (props) => (
//   <Table sx={{ th: { fontWeight: 700 } }}>
//     <TableHead>
//       <TableRow>
//         <TableCell />
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {states.map(({ name, render }) => (
//         <TableRow key={name}>
//           <TableCell component="th" align="center">
//             {name}
//           </TableCell>
//           <TableCell align="center">{render({ ...props })}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// );

export const Default = {
  args: {},
};
