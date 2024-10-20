import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    pinks: PaletteColor;
    greens: PaletteColor;
    browns: PaletteColor;
    purples: PaletteColor;
    yellows: PaletteColor;
  }

  interface PaletteOptions {
    pinks?: PaletteColorOptions;
    greens?: PaletteColorOptions;
    browns: PaletteColorOptions;
    purples: PaletteColorOptions;
    yellows: PaletteColorOptions;
  }
}
