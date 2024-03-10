import { Box } from "@mui/material";
import FlowerFooter from "../components/flowerFooter/FlowerFooter";
import HompeageHeader from "../components/header/Header";
import useFetchCats from "../hooks/fetchCatData";
import Purrlaroid from "../components/purrlaroid/Purrlaroid";

export default function CatDirectory() {
  const { cats, loading } = useFetchCats();
  if (loading) return <p>Loading...</p>;

  const getCatPurrrlaroids = () => {
    return cats.map((cat) => (
      <Purrlaroid
        catName={cat.cat_name}
        width="300px"
        catImage={cat.cat_main_image}
        isAnimated={true}
      />
    ));
  };

  return (
    <>
      <HompeageHeader />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          mx="auto"
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              width: "100%",
              p: 16,
            }}
          >
            {getCatPurrrlaroids()}
          </Box>
        </Box>

        <FlowerFooter />
      </Box>
    </>
  );
}
