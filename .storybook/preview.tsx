import { ThemeProvider } from '@mui/material';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import React from 'react';
import { defaultTheme } from '../theme/themeBuilder';
import './storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop'
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
