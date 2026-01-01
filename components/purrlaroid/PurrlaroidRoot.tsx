import { Box } from '@mui/material';
import Image from 'next/image';
import { ReactElement } from 'react';
import { size } from './types';

interface PurrlaroidAction {
  onClick?: () => void;
}

interface PurrlaroidProps extends PurrlaroidAction {
  isAnimated?: boolean;
  catImage: string;
  altText?: string;
  children: ReactElement;
  size?: size;
}

const PurrlaroidRoot = ({
  onClick,
  isAnimated = false,
  catImage,
  altText,
  children,
  size = 'medium'
}: PurrlaroidProps) => {
  return (
    <Box
      component={onClick ? 'button' : 'img'}
      sx={{
        width: 'fit-content',
        textAlign: 'center',
        backgroundColor: 'lightYellow',
        transform: 'rotate(0deg)',
        transition: '1s transform ease',
        padding: size === 'medium' ? 4 : 1,
        boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.27)',
        border: '0px',
        '&:hover': {
          transform: isAnimated ? 'rotate(3deg)' : 'rotate(0)'
        }
      }}
    >
      <Box
        sx={{
          width: size === 'medium' ? 225 : 100,
          height: size === 'medium' ? 225 : 100,
          position: 'relative'
        }}
        onClick={onClick}
      >
        <Image
          src={catImage}
          alt={altText || ''}
          sizes='250px'
          height={size === 'medium' ? 225 : 100}
          width={size === 'medium' ? 225 : 100}
          style={{
            objectFit: 'cover',
            transition: 'opacity .5s ease-in-out',
            width: '100%'
          }}
        />
      </Box>

      {children}
    </Box>
  );
};

export default PurrlaroidRoot;
