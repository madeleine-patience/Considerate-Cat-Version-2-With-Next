import { Box, Typography, useTheme } from "@mui/material";
import HeaderButton from "../headerButton/HeaderButton";
import Link from "next/link";

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
        alignItems: "center",
        backgroundColor: "#b1d9a7",
        height: isHomepage ? "450px" : "fitContent",
        p: 8,
        overflow: "hidden",
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
      <Box sx={{ display: "flex", position: "relative" }}>
        {isHomepage && (
          <Box
            component="img"
            src="https://bmxnsuildxczrsqnmyje.supabase.co/storage/v1/object/public/considerate%20cat%20assets/ElmerBasic.png?t=2024-03-09T01%3A07%3A03.957Z"
            sx={{
              width: "1000px",
              position: "absolute",
              right: "-100px",
              top: "25px",
            }}
          />
        )}

        <Box
          display="flex"
          flexDirection="column"
          sx={{ top: "75px", left: "125px" }}
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
