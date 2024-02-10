import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette";
// {
//   interface TypeBackground {
//     default: string;
//     header: string;
//     paper: string;
//   }

//   interface PaletteOptions {
//     others: {
//       border: string;
//       borderDark: string;
//     };
//   }
// }

export const palette: PaletteOptions = {
  mode: "light",
  common: {
    black: "black",
    white: "white",
  },
  primary: {
    main: "#f598c5",
    light: "#f5c4dc",
    dark: "#c284a2",
  },
  //purples
  secondary: {
    main: "#ad7fc7",
    light: "#deacfa",
    dark: "#7c4e96",
  },
};
