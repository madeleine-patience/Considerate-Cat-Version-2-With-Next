import { Box } from '@mui/material';
import { ReactElement } from 'react';

interface PurrlaroidAction {
  onClick?: () => void;
}

interface PurrlaroidProps extends PurrlaroidAction {
  isAnimated?: boolean;
  catImage: string;
  altText?: string;
  children: ReactElement;
}

const PurrlaroidRoot = ({
  onClick,
  isAnimated,
  catImage,
  altText,
  children
}: PurrlaroidProps) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        textAlign: 'center',
        backgroundColor: 'lightYellow',
        transform: 'rotate(0deg)',
        transition: '1s transform ease',
        padding: 4,
        boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.27)',
        '&:hover': {
          transform: isAnimated ? 'rotate(3deg)' : 'rotate(0)'
        }
      }}
    >
      <Box
        component='img'
        sx={{
          width: 250,
          height: 250,
          objectFit: 'cover',
          transition: 'opacity .5s ease-in-out'
        }}
        onClick={onClick}
        src={catImage}
        alt={altText}
      />

      {children}
    </Box>
  );
};

export default PurrlaroidRoot;
