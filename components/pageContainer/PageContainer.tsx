import { Box, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { TarotDeckContext } from '../../context/TarotDeckContext';
import useFetchTarotDeck from '../../hooks/fetchTarotDeck';
import { useTarotCard } from '../../hooks/useTarotCard';
import FlowerFooter from '../flowerFooter/FlowerFooter';
import { Header } from '../header';
import { MagicCatReload } from '../magicCatAnimation/magicCatReload/MagicCatReload';

export default function PageContainer({ children }: PropsWithChildren) {
  const { tarotDeck } = useFetchTarotDeck();
  const { tarotCardData } = useTarotCard(tarotDeck);
  const { palette } = useTheme();

  return (
    <TarotDeckContext.Provider value={tarotCardData}>
      <MagicCatReload />
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
    </TarotDeckContext.Provider>
  );
}
