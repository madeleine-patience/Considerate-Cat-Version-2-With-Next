import PurrlaroidRoot from './PurrlaroidRoot';
import { PurrlaroidTitle } from './PurrlaroidTitle';
import { PurrlaroidProps } from './types';

const Purrlaroid = ({
  catImage,
  altText,
  isAnimated,
  onClick,
  catName,
  size
}: PurrlaroidProps) => (
  <PurrlaroidRoot
    catImage={catImage}
    altText={altText}
    isAnimated={isAnimated}
    onClick={onClick}
    size={size}
  >
    <PurrlaroidTitle catName={catName} />
  </PurrlaroidRoot>
);

export default Purrlaroid;
