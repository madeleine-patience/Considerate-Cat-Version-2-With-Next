export type size = 'small' | 'medium';

export interface PurrlaroidRootProps {
  onClick?: () => void;
  isAnimated?: boolean;
  catImage: string;
  altText?: string;
  size?: size;
}

export interface PurrlaroidTitleProps {
  catName?: string;
}

export type PurrlaroidProps = PurrlaroidRootProps & PurrlaroidTitleProps;
