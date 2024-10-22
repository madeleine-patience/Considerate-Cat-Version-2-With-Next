import PurrlaroidRoot from './PurrlaroidRoot';
import PurrlaroidTitle from './PurrlaroidTitle';
import { StoryFn } from '@storybook/react';

const Purrlaroid: StoryFn = ({ catImage, catName, altText }) => (
  <PurrlaroidRoot catImage={catImage} altText={altText} isAnimated>
    <PurrlaroidTitle catName={catName} />
  </PurrlaroidRoot>
);

export default Purrlaroid;
