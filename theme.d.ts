import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    pinks: PaletteColor;
    greens: PaletteColor;
  }

  interface PaletteOptions {
    pinks?: PaletteColorOptions;
    greens?: PaletteColorOptions;
  }
}
