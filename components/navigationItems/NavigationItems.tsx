import { Box, useTheme } from "@mui/material";
import { GlitterWordWrapper } from "./GlitterWordWrapper";

export const NavigationItems = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        p: 4,
        textDecoration: "capitalize",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <GlitterWordWrapper title="Home" link="./" />
      <GlitterWordWrapper title="Tarot Reading" link="./TarotReadPage" />
      <GlitterWordWrapper title="Card Directory" link="./CardDirectoryPage" />
      <GlitterWordWrapper title="Meet The Cats" link="./CatDirectory" />
      {/* <GlitterWordWrapper title="Shop" link="www.consideratecat.com" /> */}
    </Box>
  );
};
