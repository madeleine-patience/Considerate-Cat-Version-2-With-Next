import { Box, useMediaQuery, useTheme } from "@mui/material";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import HompeageHeader from "../components/header/Header";
import { LoadingPage } from "../components/loadingPage/LoadingPage";
import Purrlaroid from "../components/purrlaroid/Purrlaroid";
import useFetchCats from "../hooks/fetchCatData";

export default function CatDirectory() {
  const { cats, loading } = useFetchCats();
  const { palette } = useTheme();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (loading) return <LoadingPage />;

  const getCatPurrrlaroids = () => {
    return cats.map((cat, index) => (
      <Purrlaroid
        key={index}
        catName={cat.cat_name}
        width="300px"
        catImage={cat.cat_main_image}
        isAnimated={true}
      />
    ));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: palette.pinks.main,
      }}
    >
      <HompeageHeader />
      <Box
        sx={{
          maxWidth: "1500px",
          mx: "auto",
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            width: "100%",
            p: isSmallScreen ? 0 : 16,
          }}
        >
          {getCatPurrrlaroids()}
        </Box>
      </Box>

      <FlowerFooter />
    </Box>
  );
}
