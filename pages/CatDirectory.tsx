import { Box, Grid, useTheme } from '@mui/material';
import FlowerFooter from '../components/flowerFooter/FlowerFooter';
import HompeageHeader from '../components/header/Header';
import { LoadingPage } from '../components/loadingPage/LoadingPage';
import Purrlaroid from '../components/purrlaroid';
import useFetchCats from '../hooks/fetchCatData';

export default function CatDirectory() {
  const { cats, loading } = useFetchCats();
  const { palette } = useTheme();

  if (loading) return <LoadingPage />;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: palette.pinks.main,
        alignItems: 'center'
      }}
    >
      <HompeageHeader />
      <Grid
        container
        sx={{
          gap: 8,
          maxWidth: 1500,
          justifyContent: 'center'
        }}
      >
        {cats.map((cat) => (
          <Grid item key={cat.id}>
            <Purrlaroid catImage={cat.cat_main_image} catName={cat.cat_name} />
          </Grid>
        ))}
      </Grid>

      <FlowerFooter />
    </Box>
  );
}
