'use client';

import { Box, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import FlowerFooter from '../flowerFooter/FlowerFooter';
import { Header } from '../header';

export default function PageContainer({ children }: PropsWithChildren) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        gap: 4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: palette.pinks.main
      }}
    >
      <Header.Root>
        <Header.Title> Considerate Cat</Header.Title>
        <Header.Animation />
        <Header.Navigation />
      </Header.Root>
      <Box sx={{ maxWidth: '1000px', margin: 'auto', p: 4 }}>{children}</Box>
      <FlowerFooter />
    </Box>
  );
}
