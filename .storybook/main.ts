import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)' // Added line
  ],
  typescript: {
    reactDocgen: false
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } }
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public'] //👈 Configures the static asset folder in Storybook
};
export default config;
