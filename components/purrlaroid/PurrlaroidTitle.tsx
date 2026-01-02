import { Typography } from '@mui/material';
import { PurrlaroidTitleProps } from './types';

export const PurrlaroidTitle = ({ catName }: PurrlaroidTitleProps) => (
  <Typography
    variant='h3'
    sx={{ fontWeight: 'bold', fontStyle: 'italic', color: '#7d7168' }}
  >
    {catName}
  </Typography>
);
