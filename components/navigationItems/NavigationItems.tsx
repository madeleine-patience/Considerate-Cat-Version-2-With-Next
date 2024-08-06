import { Box, Link, Typography, useTheme } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";

export const NavigationItems = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      sx={{
        textDecoration: "capitalize",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <Link href="./" style={{ textDecoration: "none", color: "black" }}>
        <HeaderButton label="Home" />
      </Link>
      <Link
        href="./CardDirectoryPage"
        style={{ textDecoration: "none", color: "black" }}
      >
        <HeaderButton label="Card Directory" />
      </Link>
      <Link
        href="./TarotReadPage"
        style={{ textDecoration: "none", color: "black" }}
      >
        <HeaderButton label="Tarot Readings" />
      </Link>
      <Link
        href="./CatDirectory"
        style={{ textDecoration: "none", color: "black" }}
      >
        <HeaderButton label="Meet The Cats" />
      </Link>
      <HeaderButton label="Shop" />
    </Box>
  );
};
