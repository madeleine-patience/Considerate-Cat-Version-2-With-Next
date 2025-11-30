/**
 * Server Component - runs on server only
 */
import PageContainer from '../../components/pageContainer/PageContainer';
import Purrlaroid from '../../components/purrlaroid';
import { supabase } from '../../supabase';
import { Grid } from '@mui/material';

export default async function CatDirectoryPage() {
  const { data, error } = await supabase.from('catData').select();

  if (error) {
    console.error('Error fetching cats:', error);
    return <PageContainer>Error loading cats</PageContainer>;
  }

  const cats = data || [];

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
