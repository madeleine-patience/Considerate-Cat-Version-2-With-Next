import { Box, styled, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ChubbyStar, CompactGlitter, Glitter } from '../../SVGs/GlitterSvg';

const BoxWithStarAnimation = styled(Box)({
  width: 'fit-content',
  position: 'relative',
  '&:hover .MuiSvgIcon-root': {
    '@keyframes starAnimation': {
      '0%': {
        opacity: 0
      },
      '50%': {
        opacity: 1,
        transform: 'rotate(30deg) scale(1.2) '
      },
      '100%': {
        opacity: 0,
        transform: 'rotate(60deg) scale(1.5) '
      }
    },
    animation: 'starAnimation 600ms linear  1 normal forwards '
  }
});

export const GlitterWordWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BoxWithStarAnimation>
      <ChubbyStar
        sx={{
          position: 'absolute',
          width: 20,
          opacity: 0,
          top: 5
        }}
      />
      <Glitter
        sx={{
          position: 'absolute',
          width: 20,
          opacity: 0,
          right: 10,
          top: 15,
          transform: 'rotate(20deg)'
        }}
      />
      <CompactGlitter
        sx={{
          position: 'absolute',
          width: 20,
          opacity: 0,
          bottom: 10
        }}
      />
      <ChubbyStar
        sx={{
          opacity: 0,
          position: 'absolute',
          width: 20,
          right: 1,
          top: -10
        }}
      />
      <Box
        display='flex'
        width='250px'
        justifyContent='center'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography
          variant='h5'
          sx={{
            width: '100%',
            textAlign: 'center',
            '&:hover': {
              color: 'white'
            }
          }}
        >
          {children}
        </Typography>
      </Box>
    </BoxWithStarAnimation>
  );
};
