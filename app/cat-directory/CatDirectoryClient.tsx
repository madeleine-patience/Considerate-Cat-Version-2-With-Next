'use client';

import { Grid } from '@mui/material';
import PageContainer from '../../components/pageContainer/PageContainer';
import Purrlaroid from '../../components/purrlaroid';
import { useCatDirectory } from '../../hooks/useCatDirectory';
import { Cat } from '../../types/database';
import { CatInformationModal } from '../../components/catInformationModal/CatInformationModal';

/**
 * Revalidate this page cache every hour
 */

interface CatDirectoryClientProps {
  cats: Cat[];
}

export const revalidate = 3600;

export default function CatDirectoryClient({ cats }: CatDirectoryClientProps) {
  const {
    showCatInformationModal,
    catInformationProps,
    openCatInformationModal
  } = useCatDirectory();

  function handleCatClick(cats: Cat[], catId: number): void {
    const selectedCat = cats.find((e) => e.id === catId);
    if (selectedCat) {
      openCatInformationModal(selectedCat, cats);
    }
  }

  return (
    <PageContainer>
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
              onClick={() => handleCatClick(cats, cat.id)}
            />
          </Grid>
        ))}
        {showCatInformationModal && (
          <CatInformationModal {...catInformationProps} allCatData={cats} />
        )}
      </Grid>
    </PageContainer>
  );
}
