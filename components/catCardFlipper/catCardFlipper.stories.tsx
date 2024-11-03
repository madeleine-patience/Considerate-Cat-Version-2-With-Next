import { Meta } from '@storybook/react';
import CatCardFlipper from './CatCardFlipper';

export default {
  title: 'Components/CatCardFlipper',
  component: CatCardFlipper
} as Meta<typeof CatCardFlipper>;

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
  args: {}
};
