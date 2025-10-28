import { Grid } from '@mui/material';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import PageContainer from '../components/pageContainer/PageContainer';
import Purrlaroid from '../components/purrlaroid';
import useFetchCats, { CatProps } from '../hooks/fetchCatData';

export default function CatDirectory() {
  const { cats, loading }: CatProps = useFetchCats();

  if (loading) return <LoadingPage />;

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
