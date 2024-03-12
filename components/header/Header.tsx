import { Box, Typography, useTheme } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";
import Link from "next/link";
import MagicCatAnimation from "../magicCatAnimation/MagicCatAnimation";

interface GenericButtonAction {}

interface HeaderProps extends GenericButtonAction {
  isHomepage?: boolean;
}

const HompeageHeader = ({ isHomepage }: HeaderProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b1d9a7",
        p: 8,
      }}
    >
      <Box display="flex" sx={{ textDecoration: "capitalize" }}>
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
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isHomepage && <MagicCatAnimation />}

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            top: "75px",
            left: "125px",
            width: isHomepage ? "400px" : "auto",
          }}
        >
          <Typography
            variant="h1"
            fontWeight={600}
            color={palette.primary.dark}
            sx={{
              textShadow: " 5px 5px purple",
              fontStyle: "italic",
            }}
          >
            Considerate Cat
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HompeageHeader;
