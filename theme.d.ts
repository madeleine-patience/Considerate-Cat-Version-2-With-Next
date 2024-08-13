import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    pinks: PaletteColor;
  }

  interface PaletteOptions {
    pinks?: PaletteColorOptions;
  }
}
