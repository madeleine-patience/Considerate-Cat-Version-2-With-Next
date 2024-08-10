import { Box, Link, Typography, useTheme } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";
import { ChubbyStar } from "../../SVGs/GlitterSvg";

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
        <HeaderButton
          label="Home"
          sx={{
            "&:hover": { transform: "rotate(30deg)" },
          }}
        />
        <ChubbyStar />
      </Link>
    </Box>
  );
};
