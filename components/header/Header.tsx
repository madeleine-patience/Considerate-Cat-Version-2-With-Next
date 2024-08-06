import { Box, Typography, useTheme } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";
import Link from "next/link";
import MagicCatAnimation from "../magicCatAnimation/magicCatAnimation/MagicCatAnimation";
import { NavigationItems } from "../navigationItems/NavigationItems";

interface GenericButtonAction {}

interface HeaderProps extends GenericButtonAction {
  isHomepage?: boolean;
}

const HompeageHeader = ({ isHomepage }: HeaderProps) => {
  const { palette } = useTheme();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 8,
      }}
    >
      {isHomepage && <MagicCatAnimation />}

      <Typography
        variant="h1"
        fontWeight={600}
        color={palette.primary.dark}
        sx={{
          textShadow: " 5px 5px white",
          fontStyle: "italic",
          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
        }}
      >
        Considerate Cat Tarot
      </Typography>
      <NavigationItems />
    </Box>
  );
};

export default HompeageHeader;
