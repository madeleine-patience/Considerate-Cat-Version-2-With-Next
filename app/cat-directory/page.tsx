/**
 * Server Component - runs on server only
 */
import { getCats } from '../../lib/data';
import { Grid } from '@mui/material';
import PageContainer from '../../components/pageContainer/PageContainer';
import Purrlaroid from '../../components/purrlaroid';

/**
 * Revalidate this page cache every hour
 */
export const revalidate = 3600;

export default async function CatDirectoryPage() {
  const cats = await getCats();

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
              catImage={cat.cat_main_image}
              catName={cat.cat_name}
              altText={cat.alt_text}
            />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
