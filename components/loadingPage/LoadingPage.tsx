'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export const LoadingPage = () => {
  const theme = useTheme();
  const { palette } = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: palette.pinks.main,
        height: '100vh'
      }}
    >
      <Box
        sx={{ height: isSmallScreen ? '300px' : '800px' }}
        component='img'
        src='/image/kneadingTheDough.webp'
      />
      <Typography
        variant={isSmallScreen ? 'h4' : 'h1'}
        sx={{ color: palette.pinks.dark }}
      >
        Loading . . .
      </Typography>
    </Box>
  );
};
