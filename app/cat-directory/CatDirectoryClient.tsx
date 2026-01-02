'use client';

import { Box, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/pageContainer/PageContainer';
import Purrlaroid from '../../components/purrlaroid';
import { useCatDirectory } from '../../hooks/useCatDirectory';
import { Cat, TarotCard } from '../../types/database';
import { CatInformationModal } from '../../components/catInformationModal/CatInformationModal';
import { CatCircleIcon } from '../../components/elmerCircleIcon';

/**
 * Revalidate this page cache every hour
 */

interface CatDirectoryClientProps {
  cats: Cat[];
  tarotDeck: TarotCard[];
}

export const revalidate = 3600;

export default function CatDirectoryClient({
  cats,
  tarotDeck
}: CatDirectoryClientProps) {
  const {
    showCatInformationModal,
    catInformationProps,
    openCatInformationModal
  } = useCatDirectory();

  function handleCatClick(
    cats: Cat[],
    catId: number,
    tarotDeck: TarotCard[]
  ): void {
    const selectedCat = cats.find((e) => e.id === catId);
    if (selectedCat) {
      openCatInformationModal(selectedCat, cats, tarotDeck);
    }
  }

  return (
    <PageContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          p: 8
        }}
      >
        <CatCircleIcon catType='daniel' />
        <Typography variant='body1' textAlign='center'>
          Considerate Cat would not exist if it weren&apos;t for the stories of
          so many cats that inspired me to make it. Below you can read about the
          incredible stories and adventures of each of the cat as well as where
          you can find them on the deck.
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          gap: 8
        }}
      >
        {cats.map((cat) => (
          <Grid item key={cat.id}>
            <Purrlaroid
              isAnimated
              catImage={cat.cat_main_image}
              catName={cat.cat_name}
              altText={cat.alt_text}
              onClick={() => handleCatClick(cats, cat.id, tarotDeck)}
            />
          </Grid>
        ))}
        {showCatInformationModal && (
          <CatInformationModal
            {...catInformationProps}
            allCatData={cats}
            tarotDeck={tarotDeck}
          />
        )}
      </Grid>
    </PageContainer>
  );
}
